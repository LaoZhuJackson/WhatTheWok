import { useState, useEffect } from 'react'
import { getMealById, saveMeal, getAllMeals, getUserProfile, bulkSaveMeals } from '../db'
import type { Meal, MealType, Ingredient } from '../models'
import { getDeepSeekConfig, generateMealSuggestion, generateBatchMeals, aiMealToMeal } from '../services'
import type { AIRecommendedMeal } from '../services'
import { calcBMR, calcTDEE, calcCuttingCalories, calcMacros } from '../engine'

interface MealEditorProps {
    mealId: string | null   // null = 新增
    onClose: () => void
}

const EMPTY_MEAL: Omit<Meal, 'id' | 'createdAt' | 'updatedAt'> = {
    name: '',
    mealType: 'lunch',
    phase: [1],
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    ingredients: [],
    steps: '',
    tags: [],
    source: 'manual',
}

export default function MealEditor({ mealId, onClose }: MealEditorProps) {
    const isNew = mealId === null
    const [loading, setLoading] = useState(!isNew)
    const [saving, setSaving] = useState(false)
    const [aiLoading, setAiLoading] = useState(false)
    const [aiShowResult, setAiShowResult] = useState(false)  // 生成完成后展示结果遮罩
    const [aiQueue, setAiQueue] = useState<AIRecommendedMeal[]>([])
    const [aiQueueIndex, setAiQueueIndex] = useState(0)
    const [aiUsage, setAiUsage] = useState<{ prompt: number; completion: number; total: number } | null>(null)
    const [msg, setMsg] = useState('')

    // AI 弹窗
    const [showAIDialog, setShowAIDialog] = useState(false)
    const [dialogCount, setDialogCount] = useState(1)
    const [dialogMealType, setDialogMealType] = useState<MealType>('lunch')
    const [dialogPhase, setDialogPhase] = useState(1)
    const [dialogNote, setDialogNote] = useState('')

    const [name, setName] = useState('')
    const [mealType, setMealType] = useState<MealType>('lunch')
    const [phase, setPhase] = useState<number[]>([1])
    const [calories, setCalories] = useState(0)
    const [protein, setProtein] = useState(0)
    const [carbs, setCarbs] = useState(0)
    const [fat, setFat] = useState(0)
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [stepList, setStepList] = useState<string[]>([])

    // ── 100g 换算器 ──
    const [per100Kcal, setPer100Kcal] = useState(0)
    const [per100Protein, setPer100Protein] = useState(0)
    const [per100Carbs, setPer100Carbs] = useState(0)
    const [per100Fat, setPer100Fat] = useState(0)
    const [eatGrams, setEatGrams] = useState(100)
    const [per100Kj, setPer100Kj] = useState(0)

    // ── 标签管理 ──
    const [allTags, setAllTags] = useState<string[]>([])      // 历史所有标签
    const [selectedTags, setSelectedTags] = useState<string[]>([]) // 当前菜用的标签
    const [newTagInput, setNewTagInput] = useState('')

    useEffect(() => {
        if (mealId) {
            loadMeal(mealId)
        } else {
            // 新菜品也加载历史标签
            loadAllTags()
        }
    }, [mealId])

    async function loadMeal(id: string) {
        const meal = await getMealById(id)
        if (!meal) {
            setMsg('菜品不存在')
            setLoading(false)
            return
        }
        setName(meal.name)
        setMealType(meal.mealType)
        setPhase(meal.phase)
        setCalories(meal.calories)
        setProtein(meal.protein)
        setCarbs(meal.carbs)
        setFat(meal.fat)
        setIngredients(meal.ingredients)
        setStepList(meal.steps ? meal.steps.split('\n').filter(Boolean) : [])
        setSelectedTags(meal.tags)

        setLoading(false)
    }

    // ── 食材列表操作 ──
    function addIngredient() {
        setIngredients([...ingredients, { name: '', grams: 0, unit: 'g' }])
    }

    function updateIngredient(idx: number, field: keyof Ingredient, value: string | number) {
        const next = [...ingredients]
        next[idx] = { ...next[idx], [field]: value } //[]计算属性名（动态键名）
        setIngredients(next)
    }
    function removeIngredient(idx: number) {
        setIngredients(ingredients.filter((_, i) => i !== idx))
    }

    // ── Phase 切换 ──
    function togglePhase(p: number) {
        setPhase(prev =>
            prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p].sort()
        )
    }

    // ── 校验 ──
    function validate(): string | null {
        if (!name.trim()) return '请输入菜品名称'
        if (calories <= 0) return '请填写热量'
        if (protein < 0 || carbs < 0 || fat < 0) return '宏量营养素不能为负数'
        if (phase.length === 0) return '至少选一个阶段'
        return null
    }

    // ── AI 生成 ──
    async function handleAIGenerate(count: number, genMealType: MealType, genPhase: number, userNote?: string) {
        setShowAIDialog(false)
        setAiLoading(true)
        setAiUsage(null)
        setMsg('')
        setAiQueue([])
        setAiQueueIndex(0)
        let success = false

        try {
            // 1. 检查 DeepSeek 配置
            const config = await getDeepSeekConfig()
            if (!config) {
                setMsg('❌ 请先在「设置」中配置 DeepSeek API Key')
                setTimeout(() => setMsg(''), 3000)
                return
            }

            // 2. 获取用户档案
            const profile = await getUserProfile()
            if (!profile) {
                setMsg('❌ 请先在「设置」中填写身体数据')
                setTimeout(() => setMsg(''), 3000)
                return
            }

            // 3. 计算热量目标
            const bmr = calcBMR(profile)
            const tdee = calcTDEE(bmr, 'sedentary')
            const cutting = calcCuttingCalories(tdee)
            const macros = calcMacros(cutting, profile.currentWeightKg, 'cut')
            const mealTargets: Record<MealType, number> = {
                breakfast: Math.round(cutting * 0.30),
                lunch: Math.round(cutting * 0.35),
                dinner: Math.round(cutting * 0.30),
            }

            // 4. 获取已有菜品名
            const allMeals = await getAllMeals()
            const existingNames = allMeals.map(m => m.name)

            if (count === 1) {
                // ── 单道生成 ──
                const ai = await generateMealSuggestion(
                    config, profile, macros, genMealType,
                    mealTargets[genMealType], genPhase, existingNames, userNote || undefined
                )
                fillFormFromAI(ai)
                setSelectedTags([...ai.tags, 'ai'])
                const u1 = (ai as any)._usage
                if (u1) setAiUsage({ prompt: u1.prompt_tokens, completion: u1.completion_tokens, total: u1.total_tokens })
                setMsg(`✅ AI 已生成「${ai.name}」— ${ai.reason}${u1 ? `（${u1.total_tokens} tokens）` : ''}`)
                success = true
            } else {
                // ── 批量生成 ──
                const meals = await generateBatchMeals(
                    config, profile, macros, genMealType,
                    mealTargets[genMealType], genPhase,
                    existingNames, count, userNote || undefined
                )

                // 提取 token 用量
                const u2 = (meals as any)._usage
                if (u2) setAiUsage({ prompt: u2.prompt_tokens, completion: u2.completion_tokens, total: u2.total_tokens })

                console.log('AI 批量返回:', JSON.stringify(meals, null, 2))

                setAiQueue(meals)
                setAiQueueIndex(0)
                fillFormFromAI(meals[0])
                setSelectedTags([...meals[0].tags, 'ai'])
                setMsg(`✅ 已生成 ${meals.length} 道菜，当前第 1/${meals.length} 道 — 请审核后保存`)
                success = true

                // 补标签库
                for (const ai of meals) {
                    for (const t of ai.tags) {
                        setAllTags(prev => prev.includes(t) ? prev : [...prev, t].sort())
                    }
                }
            }
        } catch (e) {
            console.error('AI 生成失败:', e)
            setMsg('❌ ' + (e instanceof Error ? e.message : 'AI 生成失败（按 F12 控制台查详情）'))
            setAiUsage(null)
        } finally {
            setAiLoading(false)
            if (success) setAiShowResult(true)
        }
    }

    function closeAiResult() {
        setAiShowResult(false)
        setAiUsage(null)
    }

    // ── 保存当前并切到队列下一道 ──
    async function handleSaveAndNext() {
        const err = validate()
        if (err) { setMsg('❌ ' + err); setTimeout(() => setMsg(''), 2000); return }

        setSaving(true)
        const now = new Date().toISOString()
        const id = 'ai-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 6)

        const meal: Meal = {
            id, name: name.trim(), mealType, phase,
            calories, protein, carbs, fat,
            ingredients: ingredients.filter(i => i.name.trim()),
            steps: stepList.filter(s => s.trim()).join('\n'),
            tags: selectedTags, source: 'ai',
            createdAt: now, updatedAt: now,
        }

        await saveMeal(meal)
        setSaving(false)

        const nextIdx = aiQueueIndex + 1
        if (nextIdx < aiQueue.length) {
            setAiQueueIndex(nextIdx)
            fillFormFromAI(aiQueue[nextIdx])
            setSelectedTags([...aiQueue[nextIdx].tags, 'ai'])
            setMsg(`✅ 已保存！当前第 ${nextIdx + 1}/${aiQueue.length} 道 — ${aiQueue[nextIdx].name}`)
        } else {
            setAiQueue([])
            setMsg('✅ 全部保存完毕！')
            setTimeout(() => onClose(), 800)
        }
    }

    // ── 跳过当前道 ──
    function handleSkipCurrent() {
        const nextIdx = aiQueueIndex + 1
        if (nextIdx < aiQueue.length) {
            setAiQueueIndex(nextIdx)
            fillFormFromAI(aiQueue[nextIdx])
            setSelectedTags([...aiQueue[nextIdx].tags, 'ai'])
            setMsg(`⏭️ 已跳过，当前第 ${nextIdx + 1}/${aiQueue.length} 道 — ${aiQueue[nextIdx].name}`)
        } else {
            setAiQueue([])
            setMsg('队列已清空')
        }
    }

    // ── 一键保存剩余全部 ──
    async function handleSaveAllRemaining() {
        if (aiQueue.length === 0) return
        setSaving(true)
        const remaining = aiQueue.slice(aiQueueIndex)
        const now = new Date().toISOString()
        const toSave: Meal[] = remaining.map(ai => ({
            id: 'ai-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 6),
            name: ai.name, mealType: ai.mealType, phase: [dialogPhase],
            calories: ai.calories, protein: ai.protein, carbs: ai.carbs, fat: ai.fat,
            ingredients: ai.ingredients.map(i => ({ name: i.name, grams: i.grams, note: i.note })),
            steps: ai.steps, tags: [...ai.tags, 'ai'], source: 'ai' as const,
            createdAt: now, updatedAt: now,
        }))
        await bulkSaveMeals(toSave)
        setAiQueue([])
        setSaving(false)
        setMsg(`✅ 已将剩余 ${toSave.length} 道全部保存`)
        setTimeout(() => onClose(), 800)
    }

    /** textarea 自动撑高（用户输入时） */
    function autoGrow(e: React.FormEvent<HTMLTextAreaElement>) {
        const el = e.currentTarget
        el.style.height = 'auto'
        el.style.height = el.scrollHeight + 'px'
    }

    /** 批量校准所有 textarea 高度（数据加载后） */
    useEffect(() => {
        // 等 DOM 渲染完再校准
        const timer = setTimeout(() => {
            document.querySelectorAll<HTMLTextAreaElement>('textarea[data-autogrow]').forEach(el => {
                el.style.height = 'auto'
                el.style.height = el.scrollHeight + 'px'
            })
        }, 50)
        return () => clearTimeout(timer)
    }, [stepList, ingredients])

    /** 把 AI 返回数据填入编辑表单 */
    function fillFormFromAI(ai: { name: string; calories: number; protein: number; carbs: number; fat: number; ingredients: { name: string; grams: number; unit?: string; note?: string }[]; steps: string; tags: string[]; reason?: string }) {
        setName(ai.name)
        setCalories(ai.calories)
        setProtein(ai.protein)
        setCarbs(ai.carbs)
        setFat(ai.fat)
        setIngredients(ai.ingredients.map(i => ({
            name: i.name,
            grams: i.grams,
            unit: i.unit,
            note: i.note,
        })))
        setStepList(splitSteps(ai.steps))
        setSelectedTags([...ai.tags, 'ai'])
    }

    /**
     * 智能切分步骤文本 → 数组
     * 支持：
     *   "1. xxx\n2. xxx\n3. xxx"   (AI 标准格式)
     *   "第一步：xxx\n第二步：xxx"    (中文序号)
     *   "1. xxx 2. xxx 3. xxx"     (无换行的连续文本)
     *   "xxx。xxx。xxx。"            (句号分隔)
     */
    function splitSteps(raw: string): string[] {
        if (!raw) return []

        // 先按换行切
        let lines = raw.split('\n').map(s => s.trim()).filter(Boolean)

        // 如果只切出 1 行，尝试按数字序号切分 "1. xxx 2. xxx 3. xxx"
        if (lines.length <= 1) {
            const numbered = lines[0]?.split(/(?=\d+\.\s)/).filter(s => s.trim())
            if (numbered && numbered.length > 1) {
                lines = numbered.map(s => s.trim())
            }
        }

        // 如果还是只有 1 行，尝试按中文序号切 "第一步：第二步：第三步："
        if (lines.length <= 1) {
            const chinese = lines[0]?.split(/(?=第[一二三四五六七八九十]+步[：:])/).filter(s => s.trim())
            if (chinese && chinese.length > 1) {
                lines = chinese.map(s => s.trim())
            }
        }

        // 还是 1 行 → 按句号切
        if (lines.length <= 1 && lines[0]?.includes('。')) {
            lines = lines[0].split('。').map(s => s.trim()).filter(Boolean)
        }

        // 去掉开头的数字序号 "1. " "第一步：" 等，保持整洁
        return lines.map(s => s.replace(/^\d+[\.\、\)）]\s*/, '').replace(/^第[一二三四五六七八九十]+步[：:\s]*/, ''))
    }

    // ── 保存 ──
    async function handleSave() {
        const err = validate()
        if (err) {
            setMsg('❌ ' + err)
            return
        }

        setSaving(true)
        const now = new Date().toISOString()
        const id = isNew
            ? 'man-' + Date.now().toString(36)
            : mealId!

        const meal: Meal = {
            id,
            name: name.trim(),
            mealType,
            phase,
            calories,
            protein,
            carbs,
            fat,
            ingredients: ingredients.filter(ing => ing.name.trim()),
            steps: stepList.filter(s => s.trim()).join('\n'),
            tags: selectedTags,
            source: 'manual',
            createdAt: isNew ? now : undefined!,
            updatedAt: now,
        }

        if (!isNew) {
            // 编辑模式保留原来的 createdAt
            const existing = await getMealById(mealId!)
            meal.createdAt = existing?.createdAt ?? now
        }

        await saveMeal(meal)
        setMsg('✅ 已保存')
        setTimeout(() => onClose(), 500)
    }
    // 获取所有标签
    async function loadAllTags() {
        const all = await getAllMeals()
        const tagSet = new Set<string>()
        for (const m of all) {
            for (const t of m.tags) tagSet.add(t)
        }
        setAllTags([...tagSet].sort())
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <p className="text-gray-400">加载中…</p>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-gray-50 flex flex-col'>
            {/* 顶部栏 */}
            <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 text-sm"
                >
                    ✕ 取消
                </button>
                <h1 className="font-bold text-gray-800 text-sm">
                    {isNew ? '＋ 添加菜品' : '✏️ 编辑'}
                </h1>
                <div className="flex items-center gap-2">
                    {isNew && aiQueue.length === 0 && (
                        <button
                            type="button"
                            onClick={() => {
                                setDialogMealType(mealType)
                                setDialogPhase(phase[0] || 1)
                                setDialogCount(1)
                                setDialogNote('')
                                setShowAIDialog(true)
                            }}
                            disabled={aiLoading}
                            className="px-3 py-1.5 bg-purple-500 text-white text-xs rounded-lg font-medium hover:bg-purple-600 disabled:opacity-50"
                        >
                            🤖 AI生成菜品
                        </button>
                    )}
                    {aiQueue.length > 0 ? (
                        <>
                            <span className="text-[10px] text-purple-600 font-medium">
                                {aiQueueIndex + 1}/{aiQueue.length}
                            </span>
                            <button
                                onClick={handleSkipCurrent}
                                className="px-2 py-1.5 text-xs text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50"
                            >
                                跳过
                            </button>
                            {aiQueue.length > 2 && (
                                <button
                                    onClick={handleSaveAllRemaining}
                                    disabled={saving}
                                    className="px-2 py-1.5 text-xs text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50"
                                >
                                    全部保存
                                </button>
                            )}
                            <button
                                onClick={handleSaveAndNext}
                                disabled={saving}
                                className="px-3 py-1.5 bg-green-500 text-white text-xs rounded-lg font-medium hover:bg-green-600 disabled:opacity-50"
                            >
                                {saving ? '保存中…' : aiQueueIndex + 1 === aiQueue.length ? '保存并完成' : '保存并下一道'}
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={handleSave}
                            disabled={saving || aiLoading}
                            className="px-4 py-1.5 bg-green-500 text-white text-sm rounded-lg font-medium hover:bg-green-600 disabled:opacity-50"
                        >
                            {saving ? '保存中…' : '保存'}
                        </button>
                    )}
                </div>
            </header>

            {/* ── AI 遮罩（加载中 / 结果展示）── */}
            {(aiLoading || aiShowResult) && (
                <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/30" onClick={closeAiResult}>
                    <div className="bg-white rounded-2xl shadow-xl px-8 py-6 text-center space-y-3 min-w-[220px]" onClick={e => e.stopPropagation()}>
                        {aiLoading ? (
                            <>
                                <div className="w-10 h-10 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin mx-auto" />
                                <p className="text-sm text-gray-600 font-medium">AI 正在生成菜品…</p>
                                <p className="text-xs text-gray-400">请稍候，不要关闭页面</p>
                            </>
                        ) : (
                            <>
                                <div className="text-3xl">✅</div>
                                <p className="text-sm text-gray-700 font-medium">生成完成</p>
                                {aiUsage && (
                                    <div className="text-[10px] text-gray-400 space-y-0.5 pt-1 border-t border-gray-100">
                                        <div className="flex justify-between gap-6">
                                            <span>输入</span><span className="font-mono">{aiUsage.prompt.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between gap-6">
                                            <span>输出</span><span className="font-mono">{aiUsage.completion.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between gap-6 font-semibold text-gray-500">
                                            <span>合计</span><span className="font-mono">{aiUsage.total.toLocaleString()} tokens</span>
                                        </div>
                                    </div>
                                )}
                                {aiUsage && (
                                    <p className="text-[10px] text-gray-400">
                                        约 ¥{(aiUsage.total / 1000000 * 1).toFixed(4)}（deepseek-v4-pro 输入 ¥1/100万tokens，输出 ¥2/100万tokens）
                                    </p>
                                )}
                                <button
                                    onClick={closeAiResult}
                                    className="px-6 py-2 bg-purple-500 text-white text-sm rounded-lg font-medium hover:bg-purple-600 transition-colors"
                                >
                                    关闭
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* 表单 */}
            <div className="flex-1 p-4 space-y-5 max-w-lg mx-auto w-full">
                {msg && (
                    <div className={`text-sm py-2 px-3 rounded-lg flex items-start justify-between gap-2 ${
                        msg.startsWith('✅') ? 'bg-green-50 text-green-700' :
                        msg.startsWith('⏭️') ? 'bg-gray-50 text-gray-600' :
                        'bg-red-50 text-red-600'
                    }`}>
                        <span className="flex-1">{msg}</span>
                        <button
                            onClick={() => setMsg('')}
                            className="text-gray-400 hover:text-gray-600 text-base leading-none shrink-0"
                        >
                            ✕
                        </button>
                    </div>
                )}
                {aiQueue.length > 0 && (
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-xs space-y-1">
                        <p className="text-purple-600 font-medium">
                            🤖 AI 生成队列（{aiQueue.length} 道待处理）
                        </p>
                        {aiQueue.map((m, i) => (
                            <p key={i} className={`${i === aiQueueIndex ? 'text-purple-700 font-semibold' : i < aiQueueIndex ? 'text-purple-300 line-through' : 'text-purple-400'}`}>
                                {i + 1}. {m.name}
                                {i === aiQueueIndex && ' ← 当前'}
                                {i < aiQueueIndex && ' ✓'}
                            </p>
                        ))}
                        <p className="text-[10px] text-purple-400 mt-1">
                            审核当前菜品 → 点「保存并下一道」继续 → 最后一节点「保存并完成」
                        </p>
                    </div>
                )}

                {/* ── 基本信息 ── */}
                <section className="bg-white rounded-xl border border-gray-100 p-4 space-y-3">
                    <h2 className="text-sm font-semibold text-gray-500">基本信息</h2>

                    <Field label="菜品名称" required>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                            placeholder="如：番茄炒蛋盖饭"
                        />
                    </Field>

                    <div className="grid grid-cols-2 gap-3">
                        <Field label="餐型">
                            <select
                                value={mealType}
                                onChange={e => setMealType(e.target.value as MealType)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white"
                            >
                                <option value="breakfast">🥣 早餐</option>
                                <option value="lunch">🍱 午餐</option>
                                <option value="dinner">🍲 晚餐</option>
                            </select>
                        </Field>
                        <Field label="适用阶段">
                            <div className="flex gap-1">
                                {[1, 2, 3].map(p => (
                                    <button
                                        key={p}
                                        type="button"
                                        onClick={() => togglePhase(p)}
                                        className={`flex-1 py-2 text-xs rounded-lg border transition-colors ${phase.includes(p)
                                            ? 'bg-green-500 text-white border-green-500'
                                            : 'bg-white text-gray-500 border-gray-200'
                                            }`}
                                    >
                                        P{p}
                                    </button>
                                ))}
                            </div>
                        </Field>
                    </div>
                </section>

                {/* ── 营养数据 ── */}
                <section className="bg-white rounded-xl border border-gray-100 p-4 space-y-3">
                    <h2 className="text-sm font-semibold text-gray-500">
                        营养数据
                        <span className="text-xs text-gray-400 font-normal ml-2">
                            （一人份实际吃的量，非每 100g）
                        </span>
                    </h2>

                    <div className="grid grid-cols-4 gap-2">
                        <Field label="热量 (kcal)" required>
                            <input
                                type="number"
                                value={calories || ''}
                                onChange={e => setCalories(+e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-2 py-2 text-sm"
                            />
                        </Field>
                        <Field label="蛋白 (g)">
                            <input
                                type="number"
                                step="0.1"
                                value={protein || ''}
                                onChange={e => setProtein(+e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-2 py-2 text-sm"
                            />
                        </Field>
                        <Field label="脂肪 (g)">
                            <input
                                type="number"
                                step="0.1"
                                value={fat || ''}
                                onChange={e => setFat(+e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-2 py-2 text-sm"
                            />
                        </Field>
                        <Field label="碳水 (g)">
                            <input
                                type="number"
                                step="0.1"
                                value={carbs || ''}
                                onChange={e => setCarbs(+e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-2 py-2 text-sm"
                            />
                        </Field>
                    </div>

                    {/* ── 包装食品换算器（100g → 实际份量）── */}
                    <details className="bg-gray-50 rounded-lg p-3">
                        <summary className="text-xs text-gray-500 cursor-pointer font-medium select-none">
                            🍚 包装食品换算器（包装每 100g → 你实际吃的量）
                        </summary>
                        <div className="mt-3 space-y-2">
                            {/* 第一行：千焦 → 千卡 */}
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-gray-400 w-12 shrink-0">热量</span>
                                <input
                                    type="number"
                                    value={per100Kj || ''}
                                    onChange={e => {
                                        const kj = +e.target.value
                                        setPer100Kj(kj)
                                        if (kj > 0) setPer100Kcal(Math.round(kj / 4.184))
                                    }}
                                    placeholder="kJ"
                                    className="w-20 border border-gray-200 rounded px-2 py-1.5 text-xs bg-white"
                                />
                                <span className="text-xs text-gray-300">→</span>
                                <input
                                    type="number"
                                    value={per100Kcal || ''}
                                    onChange={e => setPer100Kcal(+e.target.value)}
                                    placeholder="kcal"
                                    className="flex-1 min-w-0 border border-gray-200 rounded px-2 py-1.5 text-xs bg-white"
                                />
                            </div>

                            {/* 第二行：蛋白 + 碳水 */}
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-gray-400 w-12 shrink-0">宏量</span>
                                <input
                                    type="number"
                                    step="0.1"
                                    value={per100Protein || ''}
                                    onChange={e => setPer100Protein(+e.target.value)}
                                    placeholder="蛋白g"
                                    className="flex-1 min-w-0 border border-gray-200 rounded px-2 py-1.5 text-xs bg-white"
                                />
                                <input
                                    type="number"
                                    step="0.1"
                                    value={per100Fat || ''}
                                    onChange={e => setPer100Fat(+e.target.value)}
                                    placeholder="脂肪g"
                                    className="flex-1 min-w-0 border border-gray-200 rounded px-2 py-1.5 text-xs bg-white"
                                />
                                <input
                                    type="number"
                                    step="0.1"
                                    value={per100Carbs || ''}
                                    onChange={e => setPer100Carbs(+e.target.value)}
                                    placeholder="碳水g"
                                    className="flex-1 min-w-0 border border-gray-200 rounded px-2 py-1.5 text-xs bg-white"
                                />
                            </div>

                            {/* 第三行：吃的克数 + 换算按钮 */}
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] text-gray-400 w-12 shrink-0">吃多少</span>
                                <input
                                    type="number"
                                    value={eatGrams}
                                    onChange={e => setEatGrams(+e.target.value)}
                                    placeholder="g"
                                    className="flex-1 min-w-0 border border-gray-200 rounded px-2 py-1.5 text-xs bg-white"
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        const ratio = eatGrams / 100
                                        if (per100Kcal > 0) setCalories(Math.round(per100Kcal * ratio))
                                        if (per100Protein > 0) setProtein(+(per100Protein * ratio).toFixed(1))
                                        if (per100Carbs > 0) setCarbs(+(per100Carbs * ratio).toFixed(1))
                                        if (per100Fat > 0) setFat(+(per100Fat * ratio).toFixed(1))
                                    }}
                                    className="px-4 py-1.5 bg-blue-500 text-white text-xs rounded-lg font-medium hover:bg-blue-600active:scale-95 transition-all shrink-0"
                                >
                                    换算 →
                                </button>
                            </div>
                            <p className="text-[10px] text-gray-400">
                                填包装上每 100g 的数值和实际吃的克数，点换算自动填入上方营养数据。
                            </p>
                        </div>
                    </details>
                </section>

                {/* ── 食材列表 ── */}
                <section className="bg-white rounded-xl border border-gray-100 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold text-gray-500">食材</h2>
                        <button
                            type="button"
                            onClick={addIngredient}
                            className="text-xs text-green-500 hover:text-green-600 px-2 py-1 border border-green-200 rounded-lg"
                        >
                            ＋ 加食材
                        </button>
                    </div>

                    {ingredients.length === 0 && (
                        <p className="text-xs text-gray-400 text-center py-4">
                            还没有食材，点上方按钮添加
                        </p>
                    )}

                    {ingredients.map((ing, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-2 space-y-1.5">
                            {/* 第一行：食材名 + 量 + 单位 + 删除 */}
                            <div className="flex items-start gap-1.5">
                                <textarea
                                    value={ing.name}
                                    onChange={e => {
                                        const next = [...ingredients]
                                        next[idx] = { ...next[idx], name: e.target.value }
                                        setIngredients(next)
                                    }}
                                    placeholder="食材名"
                                    rows={1}
                                    className="flex-1 min-w-0 border border-gray-200 rounded-lg px-2 py-1.5 text-sm resize-none overflow-hidden bg-white break-words"
                                    data-autogrow
                                    onInput={autoGrow}
                                />
                                <input
                                    type="number"
                                    value={ing.grams || ''}
                                    onChange={e => updateIngredient(idx, 'grams', +e.target.value)}
                                    placeholder="量"
                                    className="w-14 border border-gray-200 rounded px-1.5 py-1.5 text-sm bg-white shrink-0"
                                />
                                <input
                                    type="text"
                                    value={ing.unit || ''}
                                    onChange={e => updateIngredient(idx, 'unit', e.target.value)}
                                    placeholder="g"
                                    className="w-12 border border-gray-200 rounded px-1 py-1.5 text-sm text-center bg-white shrink-0"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeIngredient(idx)}
                                    className="text-red-400 hover:text-red-600 text-sm px-0.5 shrink-0 mt-0.5"
                                >
                                    ✕
                                </button>
                            </div>
                            {/* 第二行：备注（独立一行） */}
                            <textarea
                                value={ing.note || ''}
                                onChange={e => {
                                    const next = [...ingredients]
                                    next[idx] = { ...next[idx], note: e.target.value }
                                    setIngredients(next)
                                }}
                                placeholder="备注（如：切片后用料酒腌10分钟）"
                                rows={1}
                                className="w-full border border-gray-200 rounded px-2 py-1.5 text-sm resize-none overflow-hidden bg-white break-words"
                                data-autogrow
                                onInput={autoGrow}
                            />
                        </div>
                    ))}
                </section>

                {/* ── 做法步骤 ── */}
                <section className="bg-white rounded-xl border border-gray-100 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold text-gray-500">做法步骤</h2>
                        <button
                            type="button"
                            onClick={() => setStepList([...stepList, ''])}
                            className="text-xs text-green-500 hover:text-green-600 px-2 py-1 border border-green-200 rounded-lg"
                        >
                            ＋ 加步骤
                        </button>
                    </div>

                    {stepList.length === 0 && (
                        <p className="text-xs text-gray-400 text-center py-4">
                            还没有步骤，点上方按钮添加
                        </p>
                    )}

                    {stepList.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                            <span className="text-xs text-gray-400 mt-2.5 min-w-[20px] text-right shrink-0">
                                {idx + 1}.
                            </span>
                            <textarea
                                value={step}
                                onChange={e => {
                                    const next = [...stepList]
                                    next[idx] = e.target.value
                                    setStepList(next)
                                }}
                                placeholder={`第 ${idx + 1} 步做什么…`}
                                rows={1}
                                className="flex-1 min-w-0 border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none overflow-hidden break-words"
                                data-autogrow
                                onInput={autoGrow}
                            />
                            <button
                                type="button"
                                onClick={() => setStepList(stepList.filter((_, i) => i !== idx))
                                }
                                className="text-red-400 hover:text-red-600 text-sm px-1 mt-2"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </section>

                {/* ── 标签 ── */}
                <section className="bg-white rounded-xl border border-gray-100 p-4 space-y-3">
                    <h2 className="text-sm font-semibold text-gray-500">标签</h2>

                    {/* 已选标签 */}
                    {selectedTags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                            {selectedTags.map(tag => (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => setSelectedTags(selectedTags.filter(t => t !== tag))}
                                    className="text-xs bg-green-500 text-white px-2.5 py-1 rounded-full hover:bg-green-600 transition-colors"
                                >
                                    #{tag} ✕
                                </button>
                            ))}
                        </div>
                    )}

                    {/* 输入新标签 */}
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={newTagInput}
                            onChange={e => setNewTagInput(e.target.value)}
                            onKeyDown={e => {
                                if (e.key === 'Enter' && newTagInput.trim()) {
                                    e.preventDefault()
                                    const tag = newTagInput.trim()
                                    if (!selectedTags.includes(tag)) {
                                        setSelectedTags([...selectedTags, tag])
                                    }
                                    if (!allTags.includes(tag)) {
                                        setAllTags([...allTags, tag].sort())
                                    }
                                    setNewTagInput('')
                                }
                            }}
                            placeholder="输入标签，回车添加"
                            className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm"
                        />
                        <button
                            type="button"
                            onClick={() => {
                                const tag = newTagInput.trim()
                                if (!tag) return
                                if (!selectedTags.includes(tag)) {
                                    setSelectedTags([...selectedTags, tag])
                                }
                                if (!allTags.includes(tag)) {
                                    setAllTags([...allTags, tag].sort())
                                }
                                setNewTagInput('')
                            }}
                            className="px-3 py-2 text-xs text-green-500 border border-green-200 rounded-lg hover:bg-green-50"
                        >
                            ＋ 添加
                        </button>
                    </div>

                    {/* 历史标签库 */}
                    {allTags.length > 0 && (
                        <div>
                            <p className="text-[10px] text-gray-400 mb-1.5">
                                历史标签（点击选用）
                            </p>
                            <div className="flex flex-wrap gap-1">
                                {allTags
                                    .filter(t => !selectedTags.includes(t))
                                    .map(tag => (
                                        <button
                                            key={tag}
                                            type="button"
                                            onClick={() => setSelectedTags([...selectedTags, tag])}
                                            className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full hover:bg-green-100 hover:text-green-600 transition-colors"
                                        >
                                            #{tag}
                                        </button>
                                    ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* 底部间距 */}
                <div className="h-4" />
            </div>

            {/* ── AI 生成弹窗 ── */}
            {showAIDialog && (
                <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/40" onClick={() => setShowAIDialog(false)}>
                    <div className="bg-white rounded-2xl shadow-xl mx-4 w-full max-w-sm p-6 space-y-4" onClick={e => e.stopPropagation()}>
                        <h2 className="text-lg font-bold text-gray-800">🤖 AI 生成菜品</h2>

                        {/* 餐型 */}
                        <div>
                            <label className="text-xs text-gray-500 mb-1 block">餐型</label>
                            <div className="flex gap-2">
                                {(['breakfast', 'lunch', 'dinner'] as MealType[]).map(t => (
                                    <button
                                        key={t}
                                        type="button"
                                        onClick={() => setDialogMealType(t)}
                                        className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${
                                            dialogMealType === t
                                                ? 'bg-purple-500 text-white border-purple-500'
                                                : 'bg-white text-gray-600 border-gray-200 hover:border-purple-300'
                                        }`}
                                    >
                                        {{breakfast: '🥣 早餐', lunch: '🍱 午餐', dinner: '🍲 晚餐'}[t]}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 阶段 */}
                        <div>
                            <label className="text-xs text-gray-500 mb-1 block">适用阶段</label>
                            <div className="flex gap-2">
                                {[1, 2, 3].map(p => (
                                    <button
                                        key={p}
                                        type="button"
                                        onClick={() => setDialogPhase(p)}
                                        className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${
                                            dialogPhase === p
                                                ? 'bg-purple-500 text-white border-purple-500'
                                                : 'bg-white text-gray-600 border-gray-200 hover:border-purple-300'
                                        }`}
                                    >
                                        Phase {p}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 数量 */}
                        <div>
                            <label className="text-xs text-gray-500 mb-1 block">生成数量</label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map(n => (
                                    <button
                                        key={n}
                                        type="button"
                                        onClick={() => setDialogCount(n)}
                                        className={`flex-1 py-2 text-sm rounded-lg border transition-colors ${
                                            dialogCount === n
                                                ? 'bg-purple-500 text-white border-purple-500'
                                                : 'bg-white text-gray-600 border-gray-200 hover:border-purple-300'
                                        }`}
                                    >
                                        {n}道
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 自定义备注 */}
                        <div>
                            <label className="text-xs text-gray-500 mb-1 block">
                                自定义备注（可选）
                            </label>
                            <textarea
                                value={dialogNote}
                                onChange={e => setDialogNote(e.target.value)}
                                rows={2}
                                placeholder="如：冰箱有葱、想要平价食材、不要辣…"
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none"
                            />
                        </div>

                        {/* 按钮 */}
                        <div className="flex gap-2 pt-2">
                            <button
                                type="button"
                                onClick={() => { setShowAIDialog(false); setDialogNote('') }}
                                className="flex-1 py-2.5 text-sm text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50"
                            >
                                取消
                            </button>
                            <button
                                type="button"
                                onClick={() => handleAIGenerate(dialogCount, dialogMealType, dialogPhase, dialogNote.trim() || undefined)}
                                disabled={aiLoading}
                                className="flex-1 py-2.5 text-sm bg-purple-500 text-white rounded-xl font-medium hover:bg-purple-600 disabled:opacity-50"
                            >
                                {aiLoading ? '生成中…' : '开始生成'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

function Field({ label, required, children }: {
    label: string
    required?: boolean
    children: React.ReactNode
}) {
    return (
        <label className="block">
            <span className="text-xs text-gray-500 mb-1 block">
                {label}
                {required && <span className="text-red-400 ml-0.5">*</span>}
            </span>
            {children}
        </label>
    )
}