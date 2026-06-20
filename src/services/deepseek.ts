import { UserProfile, Meal, MealType } from "../models";
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
        model: 'deepseek-v4-flash',
        maxTokens: 2048,
        temperature: 0.7
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
export async function chat(
    config: DeepSeekConfig,
    messages: ChatMessage[]
): Promise<string> {
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
            max_tokens: config.maxTokens ?? 2048,
            temperature: config.temperature ?? 0.7,
        }),
    })

    if (!res.ok) {
        const body = await res.text()
        // 提取 DeepSeek 返回的错误信息
        let detail = body
        try {
            const json = JSON.parse(body)
            detail = json.error?.message || body
        } catch {/* 不是 JSON，用原始文本 */ }

        throw new Error(`DeepSeek API ${res.status}: ${detail}`)
    }
    const json = await res.json()
    return json.choices[0]?.message?.content ?? ''
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
    ingredients: { name: string; grams: number; note?: string }[]
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
    existingMealNames: string[] = []
): Promise<AIRecommendedMeal> {
    const mealTypeLabel = mealType === 'breakfast' ? '早餐' : mealType === 'lunch' ? '午餐' : '晚餐'
    const systemPrompt = `你是一位专业健身营养师，为中国用户设计家常减脂餐。
        要求：
    - 菜品必须是中餐家常菜（食材好买、做法简单）
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

    请用以下 JSON 格式回复（不要输出其他内容）：
    {
        "name": "菜品名",
        "mealType": "${mealType}",
        "calories": 数字,
        "protein": 数字,
        "carbs": 数字,
        "fat": 数字,
        "ingredients": [
        { "name": "食材名", "grams": 克数, "note": "处理说明（可选）" }
        ],
        "steps": "做法步骤，用换行分隔",
        "tags": ["标签1", "标签2"],
        "reason": "为什么推荐这道菜（1-2句话）"
    }`

    const content = await chat(config, [
        {role: 'system', content: systemPrompt},
        {role: 'user', content: userPrompt}
    ])
    // 解析 AI 返回的 JSON
    // 注意：AI 可能返回 ```json ... ``` 包裹的内容，需要先剥掉
    const jsonStr = content
        .replace(/```json\s*/g, '')
        .replace(/```\s*/g, '')
        .trim()
    
    try{
        return JSON.parse(jsonStr) as AIRecommendedMeal
    } catch{
        throw new Error(`AI 返回格式异常，无法解析为 JSON。原始内容：${content.slice(0, 200)}`)
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
): Promise<{meals: AIRecommendedMeal[]; total:{calories: number; protein: number; carbs: number; fat: number }}>{
    const mealTypes: MealType[] = ['breakfast', 'lunch', 'dinner']
    const meals: AIRecommendedMeal[] = []
    const existingNames: string[] = []

    for(const mealType of mealTypes){
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
        { calories: 0, protein: 0, carbs: 0, fat: 0}
    )

    return { meals, total}
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
            grams: ing.grams,
            note: ing.note,
        })),
        steps: ai.steps,
        tags: [...ai.tags, 'ai'],
        source: 'ai',
        createdAt: now,
        updatedAt: now,
    }
}