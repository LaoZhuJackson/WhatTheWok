import { db } from './database'
import type { PurchaseRecord } from '../models'

// ═══════════════════════════════════════
// 查询
// ═══════════════════════════════════════

/**
 * 获取所有购买记录（按日期倒序）
 */
export async function getAllPurchases(): Promise<PurchaseRecord[]>{
    return db.purchaseRecords
        .orderBy('date')
        .reverse()
        .toArray()
}

/**
 * 获取某个食材的历史购买记录
 *
 * 场景：想知道"鸡胸肉买过几次、每次什么价格"
 * 按 unitPrice 升序排列 —— 最便宜的排前面
 */
export async function getPurchasesByName(name: string): Promise<PurchaseRecord[]>{
    return db.purchaseRecords
        .where('name').equals(name)
        .sortBy('unitPrice')
}

/**
 * 获取某个渠道的所有购买记录
 *
 * 场景：想回顾"在美团优选上买过哪些东西"
 */
export async function getPurchasesByChannel(channel: string): Promise<PurchaseRecord[]>{
    return db.purchaseRecords
        .where('date').equals(channel)
        .toArray()
}

/**
 * 获取最近 N 条购买记录
 *
 * 场景：首页展示"最近买了什么"
 */
export async function getRecentPurchases(n: number = 10): Promise<PurchaseRecord[]>{
    return db.purchaseRecords
        .orderBy('date')
        .reverse()
        .limit(n)
        .toArray()
}

/**
 * 按日期范围查询
 *
 * 场景："这个月买菜花了多少钱"
 */
export async function getPurchasesByDateRange(
    start: string,
    end: string
): Promise<PurchaseRecord[]>{
    return db.purchaseRecords
        .where('date')
        .between(start, end, true, true)
        .toArray()
}
// ═══════════════════════════════════════
// 增 / 删
// ═══════════════════════════════════════

/**
 * 添加一条购买记录
 *
 * unitPrice 按标准单位自动计算，调用方传进来
 * 返回自增 id
 */
export async function addPurchaseRecord(record:PurchaseRecord): Promise<number>{
    return db.purchaseRecords.add(record)
}

/**
 * 批量导入购买记录
 *
 * 场景：把前几周的买菜记录一次性补录进来
 */
export async function bulkAddPurchases(records: PurchaseRecord[]): Promise<number>{
    return db.purchaseRecords.bulkAdd(records)
}
/**
 * 删除一条购买记录
 */
export async function deletePurchaseRecord(id: number): Promise<void> {
    await db.purchaseRecords.delete(id)
}

/**
 * 清空所有购买记录
 */
export async function clearAllPurchases(): Promise<void> {
    await db.purchaseRecords.clear()
}