import {db} from './database'
import type {Meal} from '../models'

// ═══════════════════════════════════════
// 查询
// ═══════════════════════════════════════

/**
 * 获取所有菜品
 *
 * toArray() 把查询结果转成普通 JS 数组。
 * 在 Dexie 里，所有数据库操作都返回 Promise，所以必须 await。
 */
export async function getAllMeals(): Promise<Meal[]> {
return db.meals.toArray()
}

 /**
 * 批量删除菜品
 *
 * bulkDelete() 是 Dexie 内置方法，一条事务完成，比循环 delete 快
 */
export async function bulkDeleteMeals(ids:string[]): Promise<void>{
    await db.meals.bulkDelete(ids)
}

/**
 * 按餐型获取菜品
 *
 * where('mealType').equals('lunch')
 *   → 等价于 SQL: SELECT * FROM meals WHERE mealType = 'lunch'
 *   → Dexie 的索引查询语法，mealType 必须在 stores() 里声明过
 */
export async function getMealByType(mealType:Meal['mealType']): Promise<Meal[]>{
    return db.meals.where('mealType').equals(mealType).toArray()
}

/**
 * 按餐型 + 阶段获取菜品
 *
 * and() 是 Dexie 的链式过滤器，在索引过滤之后再筛一次。
 * 它和 filter() 的区别：
 *   filter() 是 JS 的数组过滤（内存中，先把所有数据取出来再筛）
 *   and()   是 Dexie 的内置过滤，在数据库层面做，比 filter 快
 */
export async function getMealsByTypeAndPhase(
    mealType: Meal['mealType'],
    phase: number
): Promise<Meal[]>{
    return db.meals
        .where('mealType').equals(mealType)
        .and(m => m.phase.includes(phase))
        .toArray()
}

/**
 * 按 ID 获取单个菜品
 *
 * get() 是按主键查询，O(1) 查找，比 where 快。
 * 返回值可能是 undefined（找不到时），所以类型是 Meal | undefined。
 */
export async function getMealById(id: string): Promise<Meal | undefined>{
    return db.meals.get(id)
}

/**
 * 按来源获取菜品（manual / ai / builtin）
 */
export async function getMealsBySource(source: Meal['source']): Promise<Meal[]> {
    return db.meals.where('source').equals(source).toArray()
}

/**
 * 按标签搜索菜品
 *
 * *tags 是多条目索引 —— 因为 tags 是数组，
 * 用 equals() 可以查到所有包含该 tag 的菜品。
 * 比如查 "高蛋白" 会返回所有 tags 包含 "高蛋白" 的菜。
 */
export async function getMealsByTag(tag: string): Promise<Meal[]> {
    return db.meals.where('tags').equals(tag).toArray()
}

// ═══════════════════════════════════════
// 增 / 改
// ═══════════════════════════════════════

/**
 * 保存菜品（新增或更新）
 *
 * put() 是 Dexie 的"upsert"操作：
 *   如果 id 已存在 → 更新整条记录
 *   如果 id 不存在 → 插入新记录
 * 和 add() 的区别：add() 在 id 重复时会抛异常，put() 不会
 */
export async function saveMeal(meal: Meal): Promise<string>{
    await db.meals.put(meal)
    return meal.id
}

/**
 * 批量保存菜品
 *
 * bulkPut() 比循环调用 put() 快很多 —— Dexie 会把多条操作合并成一个事务。
 * 事务 (Transaction)：要么全部成功，要么全部回滚，保证数据一致性。
 */

export async function bulkSaveMeals(meals: Meal[]): Promise<void> {
    await db.meals.bulkPut(meals)
}

// ═══════════════════════════════════════
// 删
// ═══════════════════════════════════════

/**
 * 删除单个菜品
 *
 * delete() 按主键删除。如果 id 不存在也不会报错，静默返回。
 */
export async function deleteMeal(id:string): Promise<void>{
    await db.meals.delete(id)
}

/**
 * 清空所有菜品
 *
 * clear() 删除表中所有行，不像 SQL 的 TRUNCATE ——
 * 它是逐个删除并触发 IndexedDB 事件，数据量大时用 bulkDelete 更合适。
 * 这里菜品数量一般不超过几百，clear() 足够。
 */
export async function clearAllMeals(): Promise<void>{
    await db.meals.clear()
}

// ═══════════════════════════════════════
// 计数
// ═══════════════════════════════════════

/**
 * 获取菜品总数
 *
 * count() 比 toArray().length 高效得多 ——
 * 它直接在索引上计数，不会把整张表的数据读到内存里。
 */
export async function getMealCount(): Promise<number>{
    return db.meals.count()
}