import {db} from './database'
import type { AppSettings } from '../models'

/**
 * 默认配置 —— 应用首次启动时使用
 *
 * 所有可选字段都不填，提醒也全部关闭，
 * 让用户按需开启（渐进式配置）
 */
export function getDefaultSettings(): AppSettings{
    return {
        enableShoppingReminder: false,
        enablePostMealReminder: false,
        enableActivityReminder: false,
    }
}

// ═══════════════════════════════════════
// 读 / 写
// ═══════════════════════════════════════

/**
 * 获取当前配置
 *
 * 如果用户还没配置过（首次启动），返回默认值。
 * settings 表只有一条记录，主键固定为 'app'。
 *
 * ?? 是空值合并运算符：
 *   undefined ?? getDefaultSettings()  → 取右边
 *   { ... }  ?? getDefaultSettings()  → 取左边
 * 和 || 的区别：|| 会把 0、''、false 也判为 falsy，
 * ?? 只看 null/undefined，更精确
 */
export async function getSettings(): Promise<AppSettings> {
    const stored = await db.settings.get('app')
    return stored ?? getDefaultSettings()
}

 /**
 * 更新配置（部分更新）
 *
 * 场景：用户在设置页只改了 DeepSeek API Key，
 * 其他配置项应该保持原样，不能覆盖成 undefined。
 *
 * 做法：先读出现有配置 → 用展开运算符合并 →
 *       ...existing 铺开旧的，...updates 覆盖新的同名 key，
 *       后写的覆盖先写的
 *
 * setItem() 是按主键写入单条，这里是覆盖整条配置记录
 */
export async function updateSettings(updates: Partial<AppSettings>): Promise<void> {
    const current = await getSettings()
    const merged: AppSettings = { ...current, ...updates}
    await db.settings.put(merged, 'app')
}

