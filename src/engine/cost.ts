import type { PurchaseRecord } from "../models";

/**
 * 计算一段时间内的总花费
 *
 * reduce 累加 totalPrice，初始值 0
 * 花销数据来自购买记录，所以单位是"实际支出（元）"
 */
export function calcTotalSpend(records: PurchaseRecord[]): number{
    return records.reduce((sum, r) => sum + r.totalPrice, 0)
}

/**
 * 计算平均单价 — 同一食材在不同渠道的均价
 *
 * 场景："鸡胸肉在美团买划算还是盒马划算？"
 * 不同渠道包装不同（500g vs 1kg），所以用 unitPrice 比而不是 totalPrice
 *
 * toFixed(2) 返回字符串，用 + 转回数字（一元加操作符）
 */
export function calcAvgUnitPrice(records: PurchaseRecord[]): number{
    if(records.length === 0) return 0
    const total = records.reduce((sum, r) => sum+r.unitPrice, 0)
    return +(total / records.length).toFixed(2)
}

/**
 * 找到某个食材的最低价渠道
 *
 * 按 unitPrice 排序后取第一条
 * sort 会改变原数组，所以先展开 [...records] 做浅拷贝
 *
 * 返回 { channel, unitPrice } 或 null（没记录时）
 */
export function findCheapestChannel(
    records:PurchaseRecord[]
):{channel:string; unitPrice:number} | null {
    if(records.length === 0) return null
    const sorted = [...records].sort((a,b) => a.unitPrice - b.unitPrice)
    return {channel: sorted[0].channel, unitPrice: sorted[0].unitPrice}
}

/**
 * 按月汇总花费
 *
 * 返回结构：
 * {
 *   "2026-06": 352.5,
 *   "2026-07": 280.0,
 * }
 *
 * date.slice(0, 7) 取 ISO 日期前 7 个字符，
 * "2026-06-18" → "2026-06"
 */
export function groupByMonth(
    records: PurchaseRecord[]
): Record<string, number>{
    const result: Record<string, number> = {}

    for(const r of records){
        const month = r.date.slice(0, 7)
        result[month] = (result[month] || 0) + r.totalPrice
    }

    return result
}

/**
 * 估算每餐成本
 *
 * 场景：一顿饭用了 200g 鸡胸肉 + 300g 西兰花，
 * 根据历史购买记录推算这顿大概花了多少钱
 *
 * 做法：
 *   1. 按食材名查购买记录
 *   2. 取均价 unitPrice（元/标准单位）
 *   3. 按用量换算：实际成本 = 单价 × 用量 / 标准单位
 *
 * 注意：这个函数在 DB 层之外，接收的数据由调用方从 DB 查好传进来。
 *      函数本身是纯计算，不依赖数据库。
 */
export function estimateMealCost(
    ingredients: {name: string; grams: number}[],
    priceMap: Map<string, PurchaseRecord[]>
): {total: number; details: {name: string; cost: number}[]}{
    const details:{name:string; cost:number}[] = []
    for(const ing of ingredients){
        const records = priceMap.get(ing.name)
        if(!records || records.length === 0){
            // 没历史记录 → 标记为 0，前端可以显示"暂无数据"
            details.push({name:ing.name, cost: 0 })
            continue
        }

        const avgPrice = calcAvgUnitPrice(records)
        // 按克重折算：假如 unitPrice 是 每500g/8元，用了200g → 8 × 200/500 = 3.2
        const cost = +(avgPrice * ing.grams / getStandardGrams(records[0].unit)).toFixed(2)

        details.push({name:ing.name, cost})
    }

    const total = +details.reduce((sum, d) => sum + d.cost, 0).toFixed(2)

    return {total, details}
}

/**
 * 从单位字符串提取标准克重
 *
 * 这是一个辅助函数。因为购买记录的 unit 可能是
 * "500g"、"1kg"、"斤"、"个" 等各种形式，
 * 需要尽量折算成克来做统一计算。
 *
 * 无法识别时返回 500（保守估计）
 */
function getStandardGrams(unit:string):number{
    // "500g" / "500克"
    const gMatch = unit.match(/(\d+)\s*g/)
    if(gMatch) return Number(gMatch[1])
    // "1kg" / "1千克"
    const kgMatch = unit.match(/(\d+)\s*kg/i)
    if(kgMatch) return Number(kgMatch[1]) * 1000
    // "斤"
    if(unit.includes('斤')) return 500
    // 兜底
    return 500
}