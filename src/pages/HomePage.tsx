import { useState, useEffect } from "react";
import { db, getUserProfile, getAllMeals, upsertDailySnapshot } from '../db'
import { toLocalDate, getMonday } from '../utils/date'
import {
    calcBMR,
    calcTDEE,
    calcCuttingCalories,
    calcMacros,
    generateRecommendation,
    scoreRecommendation,
} from "../engine";
import type { DailyRecommendation } from '../engine'
import type { Meal, MealType } from '../models'
import MealCard from '../components/MealCard'
import CalorieBar from '../components/CalorieBar'

export default function HomePage() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [allMeals, setAllMeals] = useState<Meal[]>([])
    const [swapMealType, setSwapMealType] = useState<MealType | null>(null)
    const [recommendation, setRecommendation] = useState<DailyRecommendation | null>(null)
    const [score, setScore] = useState<{
        score: number; breakdown: {
            category: string; score: number; max: number;
            note: string
        }[]
    } | null>(null)

    useEffect(() => {
        loadAndRecommend()
    }, [])

    async function loadAndRecommend() {
        try {
            setLoading(true)
            setError('')

            // 1. 加载用户档案
            const profile = await getUserProfile()
            if (!profile) {
                setError('请先在「设置」中填写身体数据')
                setLoading(false)
                return
            }

            // 2. 加载菜品库
            const meals = await getAllMeals()
            setAllMeals(meals)
            if (meals.length === 0) {
                setError('菜品库还是空的，先在「菜品」中添加一些菜吧')
                setLoading(false)
                return
            }

            // 3. 计算热量目标
            const bmr = calcBMR(profile)
            const tdee = calcTDEE(bmr, 'sedentary')
            const cutting = calcCuttingCalories(tdee)
            const macros = calcMacros(cutting, profile.currentWeightKg, 'cut')

            // 4. 获取最近吃过的菜品（从本周日志中提取）
            const recentIds = await getRecentMealIds()

            // 5. 生成推荐
            const rec = generateRecommendation(meals, cutting, macros, profile.currentPhase, recentIds)
            setRecommendation(rec)

            // 6. 打分
            const s = scoreRecommendation(rec)
            setScore(s)
        } catch (e) {
            setError(`出错了：${e instanceof Error ? e.message : '未知错误'}`)
        } finally {
            setLoading(false)
        }
    }

    // 每次推荐变化 → 自动同步摄入量到记录页
    useEffect(() => {
        if(!recommendation) return
        const today = toLocalDate(new Date())
        const weekStart = getMonday(new Date())

        // 汇总三餐宏量营养素
        const mealRecs = Object.values(recommendation.meals)
        const totalProtein = mealRecs.reduce((s, r) => s + (r?.meal.protein ?? 0), 0)
        const totalCarbs = mealRecs.reduce((s, r) => s + (r?.meal.carbs ?? 0), 0)
        const totalFat = mealRecs.reduce((s, r) => s + (r?.meal.fat ?? 0), 0)

        db.weeklyLogs.get(weekStart).then(log => {
            const existing = log?.dailySnapshots.find(d => d.date === today)
            upsertDailySnapshot(weekStart, {
                date: today,
                steps: existing?.steps || 0,
                ateOnPlan: existing?.ateOnPlan ?? false,
                training: existing?.training || 'none',
                caloriesIn: recommendation.totalCalories,
                protein: totalProtein,
                carbs: totalCarbs,
                fat: totalFat,
            })
        })
    }, [recommendation])

    // ── 换一道逻辑 ──
    const swapCandidates = swapMealType
        ? allMeals
            .filter(m => m.mealType === swapMealType && m.id !== recommendation?.meals[swapMealType]?.meal.id)
            .sort((a, b) => Math.abs(a.calories - (recommendation?.meals[swapMealType]?.calorieTarget ?? 500)) - Math.abs(b.calories - (recommendation?.meals[swapMealType]?.calorieTarget ?? 500)))
            .slice(0, 12)
        : []

    function handleSwap(mealType: MealType, newMeal: Meal) {
        if (!recommendation) return
        const targetCal = recommendation.meals[mealType]?.calorieTarget ?? 500
        const updated: DailyRecommendation = {
            ...recommendation,
            meals: {
                ...recommendation.meals,
                [mealType]: {
                    meal: newMeal,
                    calorieTarget: targetCal,
                    delta: newMeal.calories - targetCal,
                },
            },
        }
        updated.totalCalories = Object.values(updated.meals)
            .reduce((sum, r) => sum + (r?.meal.calories ?? 0), 0)
        setRecommendation(updated)
        setScore(scoreRecommendation(updated))
        setSwapMealType(null)
    }

    const mealTypes: ('breakfast' | 'lunch' | 'dinner')[] = ['breakfast', 'lunch', 'dinner']

    // --- 加载中 ---
    if (loading) {
        return (
            <div className="p-4 flex items-center justify-center h-64">
                <p className="text-gray-400">正在生成今日推荐…</p>
            </div>
        )
    }

    // --- 菜谱库空或未设定数据 ---
    if (error) {
        return (
            <div className="p-4">
                <h1 className="text-xl font-bold text-gray-800 mb-4">🍽️ 吃啥好</h1>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
                    <p className="text-yellow-700 text-sm">{error}</p>
                </div>
            </div>
        )
    }

    // --- 正常推荐 ---
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold text-gray-800 mb-4">🍽️ 吃啥好</h1>

            {/* 热量条 */}
            {recommendation && (
                <CalorieBar
                    current={recommendation.totalCalories}
                    target={recommendation.targetCalories}
                />
            )}

            {/* 评分（简略） */}
            {score && (
                <div className="flex items-center gap-2 mb-4 text-sm">
                    <span className="text-gray-500">推荐评分</span>
                    <span className={`font-bold text-lg ${score.score >= 80 ? 'text-green-600' :
                            score.score >= 60 ? 'text-yellow-600' :
                                'text-red-500'
                        }`}>
                        {score.score}/100
                    </span>
                    {score.score < 80 && (
                        <span className="text-xs text-gray-400">
                            （菜品库还不够丰富，添加更多菜品提升匹配度）
                        </span>
                    )}
                </div>
            )}

            {/* 三餐推荐 */}
            {recommendation && mealTypes.map(mt => {
                const rec = recommendation.meals[mt]
                return rec ? (
                    <MealCard
                        key={mt}
                        meal={rec.meal}
                        calorieTarget={rec.calorieTarget}
                        mealType={mt}
                        isSwapping={swapMealType === mt}
                        candidates={swapCandidates}
                        onSwapClick={() => setSwapMealType(swapMealType === mt ? null : mt)}
                        onSwapSelect={(meal) => handleSwap(mt, meal)}
                    />
                ) : (
                    <div key={mt} className="bg-gray-50 rounded-xl border border-dashed border-gray-200 p-4 mb-3
  text-center">
                        <p className="text-gray-400 text-sm">
                            没有匹配的{mt === 'breakfast' ? '早' : mt === 'lunch' ? '午' : '晚'}餐菜品
                        </p>
                    </div>
                )
            })}

            {/* 刷新按钮 */}
            <button
                onClick={loadAndRecommend}
                className="w-full mt-2 py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 active:scale-[0.98] transition-all"
            >
                🔄 换一批推荐
            </button>
        </div>
    )
}

/**
 * 从最近周日志中提取吃过的菜品 ID
 */
async function getRecentMealIds(): Promise<string[]> {
    try {
        const logs = await db.weeklyLogs
            .orderBy('weekStart')
            .reverse()
            .limit(2)
            .toArray()
        const ids: string[] = []
        for (const log of logs) {
            for (const _snap of log.dailySnapshots) {
                // 从每日快照的 training 字段中无法获取菜品 ID
                // TODO: 暂时返回空数组 —— 后续在编辑器中手动记录后扩展
            }
        }
        return ids
    } catch {
        return []
    }
}