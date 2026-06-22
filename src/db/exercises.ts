import {db} from './database'
import type { ExerciseRecord } from '../models'

// ═══════════════════════════════════════
// 查询
// ═══════════════════════════════════════

/**
 * 获取某天的所有运动记录
 *
 * where('date').equals(date) 走索引查询
 * Dexie 里 date 字段声明过索引（见 database.ts），所以这个查询很快
 */
export async function getExercisesByDate(date: string): Promise<ExerciseRecord[]>{
    return db.exerciseRecords.where('date').equals(date).toArray()
}

/**
 * 获取某天某类运动的消耗热量汇总
 *
 * 场景：想知道"今天走路消耗了多少卡"
 *
 * toArray() 拿到 JS 数组后用 reduce 求和 ——
 * 因为运动记录按条存（比如上午走路 20 分钟、下午走路 30 分钟），
 * 你需要把它们加起来
 */
export async function getExerciseCaloriesByDateAndType(
    date: string,
    type: string
): Promise<number>{
    const records = await db.exerciseRecords
        .where('date').equals(date)
        .and(r => r.type === type)
        .toArray()
    
    return records.reduce((sum, r) => sum + r.calories, 0)
}

export async function getExercisesByWeek(
    weekStart: string,
    weekEnd: string
): Promise<ExerciseRecord[]>{
    return db.exerciseRecords
        .where('date')
        .between(weekStart, weekEnd, true, true)
        .toArray()
}

// ═══════════════════════════════════════
// 增 / 删
// ═══════════════════════════════════════

/**
 * 添加一条运动记录
 *
 * add() vs put() 的区别在这里很重要：
 *   ExerciseRecord 的主键是 ++id（自增），用 add() 让 Dexie 自动分配 id
 *   如果用 put() 且不传 id，Dexie 行为不一致，所以自增主键统一用 add()
 *
 * 返回值是 Dexie 自动生成的 id（number）
 */
export async function addExerciseRecord(record:ExerciseRecord):Promise<number>{
    return db.exerciseRecords.add(record)
}

/**
 * 更新某条运动记录（部分字段）
 *
 * Dexie 的 update() 只修改传入的字段，不会覆盖整条记录
 * 场景：修改运动类型、时长、热量、来源等
 */
export async function updateExerciseRecord(
    id: number,
    patch: Partial<ExerciseRecord>
): Promise<void> {
    await db.exerciseRecords.update(id, patch)
}

/**
 * 删除某条运动记录
 *
 * 因为主键是自增数字（number），删除时传 id 数字
 */
export async function deleteExerciseRecord(id: number): Promise<void>{
    await db.exerciseRecords.delete(id)
}