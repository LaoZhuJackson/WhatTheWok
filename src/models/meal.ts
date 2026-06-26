/**
 * 食材营养参考（每100g 基础数据）
 *
 * 数据来源：中国食物成分表标准版第6版
 * 用于食材营养快速查询，未命中时回退到 AI 估算
 */
export interface FoodReference {
    name: string           // 食材名 PK
    kcalPer100: number     // 每100g/100ml 千卡
    proteinPer100: number  // 每100g/100ml 蛋白 g
    carbsPer100: number    // 每100g/100ml 碳水 g
    fatPer100: number      // 每100g/100ml 脂肪 g
    unitWeight?: number    // 非g单位换算基准，如鸡蛋1个≈50g
    unitName?: string      // 如 "个"、"根"、"盒"
    aliases?: string[]  // 别名，如 ["番茄", "西红柿"]
}

/**
 * 食材
 * name   — 食材名（如"鸡胸肉"）
 * amount — 数量
 * note   — 处理说明（如"切片""一瓷勺"）
 */
export interface Ingredient {
    name: string
    amount: number
    unit: string      // "g" | "ml" | "片" | "勺" | "个"
    note?: string     // 处理说明（如"切片""焯水"）
}

/**
 * 餐型
 * TypeScript 的"字面量联合类型"：MealType 只能是这三个字符串之一
 * 如果代码里写了 "diner"（拼错了），编辑器立刻标红
 */
export type MealType = 'breakfast' | 'lunch' | 'dinner'

/**
 * 菜品
 * id   — 唯一标识，如 "lu-01"
 * phase — 适用阶段，如 [1, 2] 表示仅 Phase 1 和 2 可用
 * source — 数据来源：manual(手动录入) | ai(AI推荐) | scrape(爬取) | builtin(内置)
 */
export interface Meal {
    id: string
    name: string
    mealType: MealType
    phase: number[]
    calories: number
    protein: number
    carbs: number
    fat: number
    ingredients: Ingredient[]
    steps: string
    tags: string[]
    source: 'manual' | 'ai' | 'scrape' | 'builtin'
    createdAt: string  // ISO 日期字符串，如 "2026-06-17T10:00:00.000Z"
    updatedAt: string
}