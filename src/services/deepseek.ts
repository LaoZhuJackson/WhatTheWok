import type { UserProfile, Meal, MealType } from "../models";
import type { MacroTarget } from "../engine";
import { getSettings } from "../db";

// ═══════════════════════════════════════
// 类型
// ═══════════════════════════════════════

export interface DeepSeekConfig {
    apiKey: string
    baseUrl: string // 默认 "https://api.deepseek.com"
    model: string // "deepseek-v4-flash" 或 "deepseek-v4-pro"
    maxTokens?: number
    temperature?: number
    reasoningEffort?: 'low' | 'medium' | 'high' | 'xhigh' | 'max'
}

export interface NutritionEstimate {
    calories: number
    protein: number
    carbs: number
    fat: number
}

/**
 * 用 Settings 里存的配置构造 DeepSeek 调用参数
 *
 * 如果用户没配 API Key，返回 null，前端提示"请先配置 DeepSeek API Key"
 */
export async function getDeepSeekConfig(): Promise<DeepSeekConfig | null> {
    const settings = await getSettings()
    if (!settings.deepseekApiKey) return null
    return {
        apiKey: settings.deepseekApiKey,
        baseUrl: settings.deepseekBaseUrl || 'https://api.deepseek.com',
        model: 'deepseek-v4-pro',
        maxTokens: 20480,
        temperature: 0.7,
        reasoningEffort: settings.deepseekReasoningEffort || 'low',
    }
}

// ═══════════════════════════════════════
// 通用请求
// ═══════════════════════════════════════
interface ChatMessage {
    role: 'system' | 'user' | 'assistant'
    content: string
}

/**
 * 发送 Chat Completion 请求
 *
 * DeepSeek 兼容 OpenAI 的 chat/completions 协议
 * 用原生 fetch，零依赖
 *
 * 错误处理：
 *   401 → API Key 无效
 *   402 → 余额不足
 *   429 → 请求太快
 *   5xx → DeepSeek 服务端问题
 */
export interface ChatResult {
    content: string
    usage?: { prompt_tokens: number; completion_tokens: number; total_tokens: number }
}

export async function chat(
    config: DeepSeekConfig,
    messages: ChatMessage[]
): Promise<ChatResult> {
    const url = `${config.baseUrl}/chat/completions`
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.apiKey}`,
        },
        body: JSON.stringify({
            model: config.model,
            messages,
            max_tokens: config.maxTokens ?? 20480,
            temperature: config.temperature ?? 0.7,
            reasoning_effort: config.reasoningEffort || 'low',
        }),
    })

    if (!res.ok) {
        const body = await res.text()
        let detail = body
        try {
            const json = JSON.parse(body)
            detail = json.error?.message || body
        } catch {/* 不是 JSON，用原始文本 */ }

        throw new Error(`DeepSeek API ${res.status}: ${detail}`)
    }
    const json = await res.json()
    const content = json.choices[0]?.message?.content ?? ''
    const finishReason = json.choices[0]?.finish_reason
    const usage = json.usage

    if (!content || finishReason === 'length') {
        console.warn('DeepSeek 响应异常:', { finishReason, usage, contentPreview: content?.slice(0, 200) })
    }

    return { content, usage }
}

// ═══════════════════════════════════════
// AI 菜品生成
// ═══════════════════════════════════════
export interface AIRecommendedMeal {
    name: string
    mealType: MealType
    calories: number
    protein: number
    carbs: number
    fat: number
    ingredients: { name: string; amount: number; unit: string; note?: string }[]
    steps: string
    tags: string[]
    reason: string  // AI 给的推荐理由，展示给用户看
}

/**
 * 让 AI 生成一顿餐的推荐
 *
 * Prompt 设计要点：
 *   1. 给 AI 明确的角色（健身营养师）
 *   2. 提供用户数据（热量目标、macro、禁忌）
 *   3. 要求输出 JSON（方便解析）
 *   4. 指定输出格式（字段和单位）
 *   5. 结合中餐实际（家常菜，好买好做）
 *
 * @param profile       — 用户档案
 * @param macros        — 当日宏量营养素目标
 * @param mealType      — 要推荐哪一餐
 * @param calorieTarget — 该餐热量目标
 * @param phase         — 当前阶段
 * @param existingMealNames — 已有菜品名列表（让 AI 避免重复推荐）
 */
export async function generateMealSuggestion(
    config: DeepSeekConfig,
    profile: UserProfile,
    macros: MacroTarget,
    mealType: MealType,
    calorieTarget: number,
    phase: number,
    existingMealNames: string[] = [],
    userNote?: string
): Promise<AIRecommendedMeal> {
    const mealTypeLabel = mealType === 'breakfast' ? '早餐' : mealType === 'lunch' ? '午餐' : '晚餐'
    const systemPrompt = `你是一位专业健身营养师，为中国用户设计家常减脂餐。
        要求：
    - 菜品的食材最好比较好购买
    - 用户偏向中餐，但是不拒绝其他菜品
    - 推荐的菜品必须要真实存在，且搭配合理无毒
    - 热量控制在目标 ±10% 以内
    - 高蛋白、适量碳水、低脂
    - 步骤简洁明确，新手友好
    - 只输出 JSON，不要解释`

    const userPrompt = `用户情况：
    - 性别：${profile.gender === 'male' ? '男' : '女'}，年龄：${profile.age}岁
    - 身高：${profile.heightCm}cm，体重：${profile.currentWeightKg}kg
    - 当前阶段：Phase ${phase}

    今日营养目标（整日）：
    - 总热量：${macros.calories} kcal
    - 蛋白质：${macros.protein}g，碳水：${macros.carbs}g，脂肪：${macros.fat}g

    请为【${mealTypeLabel}】推荐一道菜：
    - 该餐目标热量：${calorieTarget} kcal
    ${existingMealNames.length > 0 ? `- 已有菜品请避免重复：${existingMealNames.join('、')}` : ''}
    ${userNote ? `\n用户额外要求：${userNote}` : ''}

    请用以下 JSON 格式回复（不要输出其他内容）：
    {
        "name": "菜品名",
        "mealType": "${mealType}",
        "calories": 数字,
        "protein": 数字,
        "carbs": 数字,
        "fat": 数字,
        "ingredients": [
        { "name": "食材名", "amount": 数量, "unit": "g/ml/片/勺/个", "note": "处理说明" }
        ],
        "steps": "1. 第一步做什么\\n2. 第二步做什么\\n3. 第三步做什么（每步一个数字序号，用\\n换行分隔）",
        "tags": ["标签1", "标签2"],
        "reason": "为什么推荐这道菜（1-2句话）"
    }`

    const result = await chat(config, [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
    ])
    const content = result.content
    const jsonStr = content
        .replace(/```json\s*/g, '')
        .replace(/```\s*/g, '')
        .trim()

    try {
        const meal = JSON.parse(jsonStr) as AIRecommendedMeal
            ; (meal as any)._usage = result.usage
        return meal
    } catch {
        console.error('AI 单道生成原始返回:', content)
        throw new Error(`AI 返回格式异常，无法解析。请按 F12 查看控制台完整返回内容。（前100字：${content.slice(0, 100)}…）`)
    }
}

/**
 * 生成一整天三餐的推荐
 *
 * 顺序调用 generateMealSuggestion 三次（早→午→晚），
 * 后面的调用会把前面推荐过的菜名传给 AI 避免重复
 */
export async function generateDailySuggestions(
    config: DeepSeekConfig,
    profile: UserProfile,
    macros: MacroTarget,
    calorieTargets: Record<MealType, number>
): Promise<{ meals: AIRecommendedMeal[]; total: { calories: number; protein: number; carbs: number; fat: number } }> {
    const mealTypes: MealType[] = ['breakfast', 'lunch', 'dinner']
    const meals: AIRecommendedMeal[] = []
    const existingNames: string[] = []

    for (const mealType of mealTypes) {
        const meal = await generateMealSuggestion(
            config,
            profile,
            macros,
            mealType,
            calorieTargets[mealType],
            profile.currentPhase,
            existingNames
        )
        meals.push(meal)
        existingNames.push(meal.name)
    }

    // 汇总三餐营养
    const total = meals.reduce(
        (sum, m) => ({
            calories: sum.calories + m.calories,
            protein: sum.protein + m.protein,
            carbs: sum.carbs + m.carbs,
            fat: sum.fat + m.fat,
        }),
        { calories: 0, protein: 0, carbs: 0, fat: 0 }
    )

    return { meals, total }
}

/**
 * 批量生成同一餐型的多道菜
 *
 * 一次 API 调用返回 N 道菜，比循环调 N 次快很多。
 * max_tokens 按每道菜 600 token 估算，乘以数量。
 *
 * @param count — 要生成几道菜（2-5）
 */
export async function generateBatchMeals(
    config: DeepSeekConfig,
    profile: UserProfile,
    macros: MacroTarget,
    mealType: MealType,
    calorieTarget: number,
    phase: number,
    existingMealNames: string[],
    count: number,
    userNote?: string
): Promise<AIRecommendedMeal[]> {
    const mealTypeLabel = mealType === 'breakfast' ? '早餐' : mealType === 'lunch' ? '午餐' : '晚餐'

    const systemPrompt = `你是一位专业健身营养师，为中国用户设计家常减脂餐。

要求：
- 菜品必须是中餐家常菜（食材好买、做法简单）
- 热量控制在目标 ±10% 以内
- 高蛋白、适量碳水、低脂
- ${count} 道菜之间做法和主食材有明显差异（不要全是鸡胸肉）
- 每道菜步骤简洁（3-5步），新手友好
- 只输出 JSON 数组，不要解释`

    const userPrompt = `用户情况：
- 性别：${profile.gender === 'male' ? '男' : '女'}，年龄：${profile.age}岁
- 身高：${profile.heightCm}cm，体重：${profile.currentWeightKg}kg
- 当前阶段：Phase ${phase}

今日营养目标（整日）：
- 总热量：${macros.calories} kcal
- 蛋白质：${macros.protein}g，碳水：${macros.carbs}g，脂肪：${macros.fat}g

请为【${mealTypeLabel}】推荐 ${count} 道不同的菜：
- 每道菜目标热量：${calorieTarget} kcal
${existingMealNames.length > 0 ? `- 已有菜品请避免重复：${existingMealNames.join('、')}` : ''}
${userNote ? `\n用户额外要求：${userNote}` : ''}

请用以下 JSON 数组格式回复（不要输出其他内容）：
[
  {
    "name": "菜品名",
    "mealType": "${mealType}",
    "calories": 数字,
    "protein": 数字,
    "carbs": 数字,
    "fat": 数字,
    "ingredients": [{ "name": "食材名", "amount": 数量, "unit": "g/ml/片/勺/个", "note": "处理说明" }],
    "steps": "1. 第一步做什么\\n2. 第二步做什么\\n3. 第三步做什么（每步一个数字序号，用\\n换行分隔）",
    "tags": ["标签1", "标签2"],
    "reason": "推荐理由（1-2句话）"
  },
  ...
]`

    // 批量模式：关闭思考，token 拉到上限（128K，留一点余量）
    const batchConfig: DeepSeekConfig = {
        ...config,
        maxTokens: 128000,
        temperature: 0.3,  // 低温 = 输出更稳定，JSON 格式一致性更高
    }

    const result = await chat(batchConfig, [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
    ])
    const content = result.content

    if (!content || !content.trim()) {
        console.error('AI 返回了空内容！', result.usage)
        throw new Error('AI 返回空内容，可能是 token 不足（已用 ' + batchConfig.maxTokens + '），请减少数量重试')
    }

    const jsonStr = content
        .replace(/```json\s*/g, '')
        .replace(/```\s*/g, '')
        .trim()

    try {
        const parsed = JSON.parse(jsonStr)
        let meals: AIRecommendedMeal[] = []
        if (Array.isArray(parsed)) {
            meals = parsed.slice(0, count) as AIRecommendedMeal[]
        } else if (parsed.meals && Array.isArray(parsed.meals)) {
            meals = parsed.meals.slice(0, count) as AIRecommendedMeal[]
        } else {
            const arrKey = Object.keys(parsed).find(k => Array.isArray(parsed[k]))
            if (arrKey) {
                meals = (parsed[arrKey] as unknown[]).slice(0, count) as AIRecommendedMeal[]
            }
        }
        if (meals.length > 0) {
            ; (meals as any)._usage = result.usage
            return meals
        }
        console.error('AI 批量返回无法提取数组:', JSON.stringify(parsed, null, 2))
        throw new Error('AI 返回格式无法识别，请按 F12 查看控制台')
    } catch (e) {
        if (e instanceof Error && e.message.startsWith('AI 返回')) throw e
        console.error('AI 批量解析失败，原始内容:', content)
        throw new Error(`JSON 解析失败。请按 F12 查看控制台。（前100字：${content.slice(0, 100)}…）`)
    }
}

/**
 * 把 AI 推荐的菜品转为 Meal 格式（准备存库）
 *
 * AI 返回的数据还差 Meal 必需的 id、source、createdAt 等管理字段，
 * 这个函数补全它们，方便直接存入 IndexedDB。
 */
export function aiMealToMeal(
    ai: AIRecommendedMeal,
    phase: number
): Meal {
    const now = new Date().toISOString()
    const id = `ai-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`

    return {
        id,
        name: ai.name,
        mealType: ai.mealType,
        phase: [phase],
        calories: ai.calories,
        protein: ai.protein,
        carbs: ai.carbs,
        fat: ai.fat,
        ingredients: ai.ingredients.map(ing => ({
            name: ing.name,
            amount: ing.amount,
            note: ing.note,
        })),
        steps: ai.steps,
        tags: [...ai.tags, 'ai'],
        source: 'ai',
        createdAt: now,
        updatedAt: now,
    }
}

/**
 * 根据食材清单估算总营养数据
 *
 * 场景：用户手动录菜品，填了食材名和重量但不清楚营养数据，
 * 调 AI 根据常见食物成分表估算整道菜的热量和宏量营养素。
 */
export async function estimateIngredientsNutrition(
    config: DeepSeekConfig,
    ingredients: { name: string; amount: number; unit: string }[]
): Promise<NutritionEstimate> {
    const ingredientList = ingredients
        .filter(i => i.name.trim() && i.amount > 0)
        .map(i => {
            return `- ${i.name} ${i.amount}${i.unit}`
        })
        .join('\n')

    const systemPrompt =
        `你是一位专业的营养分析师。根据用户提供的食材名称和克重，估算整道菜的总营养数据（一人份）。
    要求：
    - 基于常见食物成分表和中国居民膳食指南估算
    - 考虑烹调油（炒菜默认加 5-8g 油，约 45-70 kcal）
    - 只输出 JSON，不要解释`

    const userPrompt = `请估算以下食材组合的总营养数据：
    ${ingredientList}

    请用以下 JSON 格式回复（不要输出其他内容）：
    {
        "calories": 数字,
        "protein": 数字,
        "carbs": 数字,
        "fat": 数字
    }`

    const result = await chat(config, [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
    ])

    const jsonStr = result.content
        .replace(/```json\s*/g, '')
        .replace(/```\s*/g, '')
        .trim()

    try {
        const data = JSON.parse(jsonStr) as NutritionEstimate
            ; (data as any)._usage = result.usage
        return data
    } catch {
        console.error('AI 营养估算原始返回:', result.content)
        throw new Error(`AI 返回格式异常（前100字：${result.content.slice(0, 100)}…）`)
    }
}