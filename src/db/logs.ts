import {db} from './database'
import type { WeeklyLog, DailySnapshot } from '../models'

// ═══════════════════════════════════════
// 查询
// ═══════════════════════════════════════

/**
 * 获取某一周的日志
 *
 * weekStart 是主键（格式 "2026-06-15"，必须是周一），
 * get() 按主键 O(1) 查找，找不到返回 undefined
 */
export async function getWeeklyLog(weekStart: string): Promise<WeeklyLog | undefined>{
    return db.weeklyLogs.get(weekStart)
}
/**
 * 获取所有周日志
 */
export async function getAllWeeklyLogs(): Promise<WeeklyLog[]>{
    return db.weeklyLogs.toArray()
}
/**
 * 获取最近 N 周的日志
 *
 * reverse().limit(n) 的流程：
 *   1. reverse() — 倒序排列（按主键 weekStart 倒序，最新的周在前面）
 *   2. limit(n)  — 只取前 n 条
 *   3. toArray()  — 转成数组
 *
 * 注意：Dexie 的链式调用顺序很重要 ——
 *   reverse() 必须在 limit() 之前，否则会在错误的方向上截断
 */
export async function getRecentWeeklyLogs(n: number = 4):Promise<WeeklyLog[]>{
    return db.weeklyLogs
        .orderBy('weekStart')
        .reverse()
        .limit(n)
        .toArray()
}

// ═══════════════════════════════════════
// 增 / 改
// ═══════════════════════════════════════

/**
 * 保存整周日志（新增或覆盖）
 *
 * 和 meals 的 saveMeal 一样，put() = upsert
 */
export async function saveWeeklyLog(log: WeeklyLog): Promise<string>{
    await db.weeklyLogs.put(log)
    return log.weekStart
}

/**
 * 更新或插入某一天的快照
 *
 * 这个函数做的事：
 *   1. 查出该周的 WeeklyLog
 *   2. 如果周记录不存在，新建一个空的
 *   3. 找到该日期的快照索引
 *   4. 如果已有 → 替换；如果没有 → 追加
 *   5. 保存回数据库
 *
 * findIndex / splice 是 JS 数组基础操作：
 *   findIndex(cb) — 找到第一个满足条件的元素下标，找不到返回 -1
 *   splice(idx, 1, newItem) — 在下标 idx 处删除 1 个元素，插入 newItem
 */
export async function upsertDailySnapshot(
    weekStart: string,
    snapshot: DailySnapshot
): Promise<void>{
    let log = await db.weeklyLogs.get(weekStart)
    if(!log){
        log = {
            weekStart,
            dailySnapshots: [],
        }
    }
    const idx = log.dailySnapshots.findIndex(d => d.date === snapshot.date)

    if(idx >= 0){
        // 已有这一天 → 替换
        log.dailySnapshots[idx] = snapshot
    }else{
        // 新的一天 → 追加
        log.dailySnapshots.push(snapshot)
    }

    await db.weeklyLogs.put(log)
}

// ═══════════════════════════════════════
// 删
// ═══════════════════════════════════════

/**
 * 删除某一整周的日志
 */
export async function deleteWeeklyLog(weekStart: string): Promise<void>{
    await db.weeklyLogs.delete(weekStart)
}