import type { Meal, MealType } from '../models'
import type { MacroTarget } from './bmr'

// ═══════════════════════════════════════
// 三餐热量分配
// ═══════════════════════════════════════

/**
 * 三餐热量占比
 *
 * 预留 5% 给加餐或计算误差（零食、酱料、拿铁等）
 * 所以实际分配比例总和是 95%
 */
const MEAL_RATIOS: Record<MealType, number> = {
    breakfast: 0.30,
    lunch: 0.35,
    dinner: 0.30
}

/**
* 按餐型计算目标热量
*
* 比如目标 1433 kcal：
*   早餐：1433 × 0.30 ≈ 430 kcal
*   午餐：1433 × 0.35 ≈ 502 kcal
*   晚餐：1433 × 0.30 ≈ 430 kcal
*   余量：1433 × 0.05 ≈ 72 kcal（加餐/浮动）
*/
export function getMealCalorieTargets(dailyCalories: number): Record<MealType, { target: number; min: number; max: number }> {
    const ranges: Record<string, { target: number; min: number; max: number }> = {}

    for (const [type, ratio] of Object.entries(MEAL_RATIOS)) {
        const target = Math.round(dailyCalories * ratio)
        ranges[type] = {
            target,
            min: Math.round(target * 0.8),
            max: Math.round(target * 1.2),
        }
    }

    return ranges as Record<MealType, { target: number; min: number; max: number }>
}

// ═══════════════════════════════════════
// 菜品筛选
// ═══════════════════════════════════════

/**
 * 按热量窗口筛选菜品
 *
 * 从指定餐型的菜品列表中筛出热量落在窗口内的
 */
export function filterMealsByCalorieWindow(
    meals: Meal[],
    minCal: number,
    maxCal: number
): Meal[] {
    return meals.filter(m => m.calories >= minCal && m.calories <= maxCal)
}

/**
 * 按阶段筛选
 */
export function filterMealsByPhase(meals: Meal[], phase: number): Meal[] {
    return meals.filter(m => m.phase.includes(phase))
}

/**
 * 排除最近吃过的菜（避免三餐全是鸡胸肉）
 *
 * recentIds: 最近 N 顿吃过的菜品 ID 列表
 * 排除后至少保留 1 个备选，避免全部被排除
 */
export function excludeRecentMeals(
    meals: Meal[],
    recentIds: string[],
    maxExclude: number = 2
): Meal[] {
    const excludeSet = new Set(recentIds.slice(0, maxExclude))
    const remaining = meals.filter(m => !excludeSet.has(m.id))
    // 全被排掉了 → 还是返回原列表，总比没得吃好
    return remaining.length > 0 ? remaining : meals
}

// ═══════════════════════════════════════
// 推荐主函数
// ═══════════════════════════════════════

export interface MealRecommendation {
    meal: Meal
    calorieTarget: number
    delta: number // 实际 - 目标，正数表示超出
}

export interface DailyRecommendation {
    meals: Record<MealType, MealRecommendation | null>
    totalCalories: number
    targetCalories: number
    macroTarget: MacroTarget
}

/**
 * 生成一日三餐推荐
 *
 * 流程：
 *   1. 算每餐热量目标
 *   2. 按餐型 + 阶段筛菜品
 *   3. 按热量窗口过滤
 *   4. 排除最近吃过的
 *   5. 每餐随机选一道
 *   6. 汇总返回
 *
 * 如果某餐没有匹配的菜品（菜品库太小时），返回 null，
 * 前端可以显示"暂无推荐，请添加更多菜品"
 *
 * @param meals       — 所有可用菜品
 * @param dailyCalories — 当日热量目标
 * @param macros      — 宏量营养素目标
 * @param phase       — 当前阶段 (1/2/3)
 * @param recentIds   — 最近吃过菜品的 ID（可选）
 */
export function generateRecommendation(
    meals: Meal[],
    dailyCalories: number,
    macros: MacroTarget,
    phase: number,
    recentIds: string[] = []
): DailyRecommendation {
    const targets = getMealCalorieTargets(dailyCalories)
    const recommendation: Record<string, MealRecommendation | null> = {}
    const mealTypes: MealType[] = ['breakfast', 'lunch', 'dinner']

    for (const mealType of mealTypes) {
        const range = targets[mealType]
        // 步骤 1：按餐型 + 阶段筛选
        let candidates = meals.filter(
            m => m.mealType === mealType && m.phase.includes(phase)
        )
        // 步骤 2：按热量窗口筛选（先精确匹配，如果太少就放宽）
        let windowed = filterMealsByCalorieWindow(candidates, range.min, range.max)

        if (windowed.length === 0) {
            // 放宽到 ±40%，尽量避免没菜可选
            windowed = filterMealsByCalorieWindow(
                candidates,
                Math.round(range.target * 0.6),
                Math.round(range.target * 1.4)
            )
        }
        // 步骤 3：排除最近吃过的
        windowed = excludeRecentMeals(windowed, recentIds, 1)
        // 步骤 4：随机选一道
        if (windowed.length > 0) {
            const picked = windowed[Math.floor(Math.random() * windowed.length)]
            recommendation[mealType] = {
                meal: picked,
                calorieTarget: range.target,
                delta: picked.calories - range.target,
            }
        } else {
            recommendation[mealType] = null
        }
    }

    // 计算实际总热量
    const mealRecs = Object.values(recommendation)
    const totalCalories = mealRecs.reduce(
        (sum, r) => sum + (r?.meal.calories ?? 0),
        0
    )
    return {
        meals: recommendation as Record<MealType, MealRecommendation | null>,
        totalCalories,
        targetCalories: dailyCalories,
        macroTarget: macros,
    }
}

// ═══════════════════════════════════════
// 评分
// ═══════════════════════════════════════

/**
 * 给推荐结果打分
 *
 * 满分 100：
 *   热量接近度 40 分（总热量越接近目标越好）
 *   蛋白充足度 30 分（蛋白达标保护肌肉）
 *   多样性   20 分（三餐不重样）
 *   完整度   10 分（三餐都有推荐）
 */
export function scoreRecommendation(rec: DailyRecommendation): {
    score: number
    breakdown: { category: string; score: number; max: number; note: string }[]
} {
    const mealRecs = Object.values(rec.meals)
    const totalCals = rec.totalCalories
    const targetCals = rec.targetCalories

    // 热量接近度（偏差越小分越高）
    const calDeviation = Math.abs(totalCals - targetCals) / targetCals
    const calScore = Math.round(Math.max(0, 40 - calDeviation * 80))

    // 蛋白充足度（简化为总热量中蛋白占比）
    const proteinRatio = (rec.macroTarget.protein * 4) / targetCals
    const proteinScore = proteinRatio >= 0.35 ? 30 : Math.round(30 * proteinRatio / 0.35)

    // 多样性（三餐菜品各不同）
    const ids = mealRecs.map(r => r?.meal.id).filter(Boolean)
    const uniqueCount = new Set(ids).size
    const diversityScore = uniqueCount >= 3 ? 20 : Math.round(20 * uniqueCount / 3)

    // 完整度（三餐都有值）
    const completeCount = mealRecs.filter(r => r !== null).length
    const completenessScore = Math.round(10 * completeCount / 3)

    return {
        score: calScore + proteinScore + diversityScore + completenessScore,
        breakdown: [
            { category: '热量接近度', score: calScore, max: 40, note: deviationNote(calDeviation) },
            {
                category: '蛋白充足度', score: proteinScore, max: 30, note: proteinRatio >= 0.35 ? '✓'
                    : '偏低'
            },
            {
                category: '多样性', score: diversityScore, max: 20, note: uniqueCount >= 3 ? '✓' :
                    `${uniqueCount}/3`
            },
            { category: '完整度', score: completenessScore, max: 10, note: `${completeCount}/3` },
        ],
    }
}

function deviationNote(deviation: number): string
{
    if (deviation < 0.05) return '非常接近目标'
    if (deviation < 0.10) return '接近目标'
    if (deviation < 0.20) return '偏离略大'
    return '偏离较大'
}