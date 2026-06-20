/**
 * 食材
 * name   — 食材名（如"鸡胸肉"）
 * grams  — 克重
 * note   — 处理说明（如"切片""一瓷勺"）
 */
export interface Ingredient {
    name: string
    grams: number
    unit?: string   // 如 "g", "ml", "片", "勺", "个"
    note?: string   // 处理说明（如"切片""焯水"）
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