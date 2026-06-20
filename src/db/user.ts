import {db} from './database'
import type { UserProfile, BodyMeasurement } from '../models'

// ═══════════════════════════════════════
// 用户档案
// ═══════════════════════════════════════

/**
 * 获取用户档案
 *
 * 个人应用，只有一条用户记录，主键固定为 'self'
 */
export async function getUserProfile(): Promise<UserProfile | undefined>{
    return db.userProfile.get('self')
}

/**
 * 保存用户档案（新增或覆盖）
 *
 * put() 第二个参数显式指定主键为 'self'，
 * 保证始终只更新这一条，不会意外插入多条
 */
export async function saveUserProfile(profile:UserProfile): Promise<void> {
    await db.userProfile.put(profile, 'self')
}

// ═══════════════════════════════════════
// 身体测量
// ═══════════════════════════════════════

/**
 * 获取所有身体测量记录
 *
 * reverse() 按 date 倒序 —— 最新的测量在前面
 * 这样前端直接取第一项就是最近一次的测量
 */
export async function getBodyMeasurements(): Promise<BodyMeasurement[]>{
    return db.bodyMeasurements
        .orderBy('date')
        .reverse()
        .toArray()
}

/**
 * 添加一次身体测量
 *
 * 主键是 ++id（自增），用 add() 让 Dexie 自动分配
 */
export async function addBodyMeasurement(record: BodyMeasurement): Promise<number>{
    return db.bodyMeasurements.add(record)
}

/**
 * 获取最近一次身体测量
 *
 * first() 等价于 limit(1).toArray().then(arr => arr[0])
 * 返回 undefined 如果表为空（还没测过）
 */
export async function getLatestBodyMeasurement(): Promise<BodyMeasurement | undefined>{
    return db.bodyMeasurements
        .orderBy('date')
        .reverse()
        .first()
}