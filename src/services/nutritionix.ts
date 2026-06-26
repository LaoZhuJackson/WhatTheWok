import { getSettings } from "../db";

// ═══════════════════════════════════════
// 类型
// ═══════════════════════════════════════
export interface NutritionixConfig{
    appId: string,
    appKey: string
}

/**
 * 从 Settings 获取 Nutritionix 配置
 */
export async function getNutritionixConfig(): Promise<NutritionixConfig | null> {
    const settings = await getSettings()
    if(!settings.nutritionixAppId || !settings.nutritionixAppKey) return null
    return {
        appId: settings.nutritionixAppId,
        appKey: settings.nutritionixAppKey,
    }
}

// API 基础信息
const BASE_URL = 'https://trackapi.nutritionix.com/v2'

// ═══════════════════════════════════════
// 返回类型
// ═══════════════════════════════════════
export interface NutritionInfo{
    foodName: string       // 食物名称
    servingQty: number     // 份数
    servingUnit: string    // 单位（g / ml / cup）
    servingWeightGrams: number  // 份量对应的克重
    calories: number       // 热量 (kcal)
    protein: number        // 蛋白质 (g)
    carbs: number          // 碳水 (g)
    fat: number            // 脂肪 (g)
    photo?: string         // 食物图片 URL
}

export interface NutritionSearchResult{
    total: number
    items: NutritionInfo[]
}
// ═══════════════════════════════════════
// 按克重折算工具
// ═══════════════════════════════════════

/**
 * 把 API 返回的营养值折算到目标克重
 *
 * Nutritionix 返回的是标准份量的营养值（比如 1 cup = 225g），
 * 但你用的时候是按克算（比如"鸡胸肉 150g"），需要按比例折算。
 *
 * 公式：实际值 = 标准值 × 目标克重 / 标准克重
 *
 * 示例：API 返回 100g 鸡胸肉 = 165kcal，
 *       你需要 150g → 165 × 150 / 100 = 247.5 kcal
 */
export function scaleToGrams(info: NutritionInfo, targetGrams:number): NutritionInfo{
    const ratio = targetGrams / info.servingWeightGrams
    return {
        ...info,
        servingQty: targetGrams,
        servingUnit: 'g',
        servingWeightGrams: targetGrams,
        calories: + (info.calories * ratio).toFixed(1),
        protein: + (info.protein * ratio).toFixed(1),
        carbs: + (info.carbs * ratio).toFixed(1),
        fat: + (info.fat * ratio).toFixed(1),
    }
}

// ═══════════════════════════════════════
// API 调用
// ═══════════════════════════════════════

/**
 * 通用请求
 *
 * Nutritionix 认证方式：
 *   x-app-id  + x-app-key 放在 Header 里（不是 Bearer token）
 *   x-remote-user-id: 0  用于标识用户（免费计划固定填 0）
 */
async function request(
    config: NutritionixConfig,
    path: string,
    body: Record<string, unknown>
): Promise<unknown>{
    const url = `${BASE_URL}${path}`

    const res = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'x-app-id': config.appId,
            'x-app-key': config.appKey,
            'x-remote-user-id': '0',
        },
        body: JSON.stringify(body),
    })

    if(!res.ok){
        const text = await res.text()
        let detail = text
        try{
            detail = JSON.parse(text).message || text
        }catch{/* 原始文本 */}
        throw new Error(`Nutritionix API ${res.status}: ${detail}`)
    }

    return res.json()
}

// ═══════════════════════════════════════
// 自然语言搜索
// ═══════════════════════════════════════

/**
 * 用自然语言搜索食物
 *
 * Nutritionix 的 /natural/nutrients 接口支持自然语言输入，
 * 比如 "2 eggs"、"150g chicken breast"、"一碗米饭"
 * 自动解析份量和食物名，返回该份量的营养数据
 *
 * 这是 Nutritionix 最强大的功能 ——
 * 你不用自己分词，直接把用户输入扔给 API 就行
 *
 * @param query — 自然语言查询，如 "150g 鸡胸肉"
 */
export async function searchNatural(
    config: NutritionixConfig,
    query: string
): Promise<NutritionInfo[]> {
    const data = await request(config, '/natural/nutrients', {
        query,
        // 不限制时区，让 API 用默认值
    }) as { foods: RawFood[]}

    return data.foods.map(mapFood)
}

// ═══════════════════════════════════════
// 关键词搜索
// ═══════════════════════════════════════

/**
 * 按关键词搜索食物
 *
 * 和 searchNatural 的区别：
 *   /natural/nutrients  → 自然语言，"150g 鸡胸肉"，直接返回营养值
 *   /search/instant     → 关键词搜索，"鸡胸肉"，返回匹配列表供用户选
 *
 * 场景：用户输入食材名 → 展示搜索结果列表 → 用户选最匹配的那个
 * 然后再用 selected 的 servingWeightGrams + scaleToGrams 算目标克重
 */
export async function searchInstant(
    config:NutritionixConfig,
    keyword: string
): Promise<{common: NutritionInfo[]; branded: NutritionInfo[]}>{
    const data = await request(config, '/search/instant', {
        query: keyword,
        branded: false,        // 先不查包装食品，减少噪音
        common: true,          // 查通用食材（生鲜、肉类、蔬菜）
        self: false,           // 不查用户自定义食品
    }) as { common: RawFood[]; branded: RawFood[]}

    return {
        common: data.common.map(mapFood),
        branded: (data.branded || []).map(mapFood),
    }
}

// ═══════════════════════════════════════
// 获取标准份量营养
// ═══════════════════════════════════════

/**
 * 获取食物的标准份量营养值
 *
 * 场景：你知道食物名但不知道标准份量是多少，
 * 先调这个拿到 servingWeightGrams，再用 scaleToGrams 算自己的克重
 */
export async function getStandardNutrition(
    config: NutritionixConfig,
    foodName: string
):Promise<NutritionInfo | null>{
    const results = await searchNatural(config, foodName)
    return results.length > 0 ? results[0] : null
}

// ═══════════════════════════════════════
// 批量查询（做一顿饭的营养汇总）
// ═══════════════════════════════════════

/**
 * 批量查询一道菜的所有食材营养
 *
 * 场景：菜谱里有 5 种食材，每种不同克重，
 * 一次调 API 返回所有营养数据，再汇总得到整道菜的热量。
 *
 * @param ingredients — [{ name: "鸡胸肉", grams: 150 }, { name: "西兰花", grams: 200 }]
 */
export async function getMealNutrition(
    config: NutritionixConfig,
    ingredients: { name:string; amount:number}[]
): Promise<{
    items: NutritionInfo[]
    total: { calories: number; protein: number; carbs: number; fat: number }
}>{
    // 把食材拼成自然语言查询字符串
    const query = ingredients
        .map(ing => `${ing.amount}g ${ing.name}`)
        .join(', ')
    
    const items = await searchNatural(config, query)

    const total = items.reduce(
        (sum, item) => ({
            calories: +(sum.calories + item.calories).toFixed(1),
            protein: +(sum.protein + item.protein).toFixed(1),
            carbs: +(sum.carbs + item.carbs).toFixed(1),
            fat: +(sum.fat + item.fat).toFixed(1),
        }),
        {calories: 0, protein: 0, carbs: 0, fat: 0}
    )

    return { items, total }
}

// ═══════════════════════════════════════
// 内部：原始数据映射
// ═══════════════════════════════════════
interface RawFood{
    food_name: string
    serving_qty: number
    serving_unit: string
    serving_weight_grams: number
    nf_calories: number
    nf_protein: number
    nf_total_carbohydrate: number
    nf_total_fat: number
    photo?: { thumb: string }
}

function mapFood(raw: RawFood): NutritionInfo{
    return{
        foodName: raw.food_name,
        servingQty: raw.serving_qty,
        servingUnit: raw.serving_unit,
        servingWeightGrams: raw.serving_weight_grams,
        calories: raw.nf_calories ?? 0,
        protein: raw.nf_protein ?? 0,
        carbs: raw.nf_total_carbohydrate ?? 0,
        fat: raw.nf_total_fat ?? 0,
        photo: raw.photo?.thumb,
    }
}