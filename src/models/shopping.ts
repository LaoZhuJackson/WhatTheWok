/**
 * 购买记录
 *
 * 场景：你去买菜/叫外卖/网购食材时记一笔，
 * 后续算出"今天这顿花了多少钱" + "哪个渠道买鸡胸肉最便宜"
 *
 * unit        — 购买单位，如 "500g包装"、"1kg散装"、"个"
 * unitPrice   — 单价（元），方便跨渠道比价
 * channel     — 购买渠道
 * channelType — online(盒马/美团/拼多多) | offline(菜市场/超市/路边摊)
 */
export interface PurchaseRecord {
    id?: number          // 自增主键（Dexie 自动分配）
    name: string         // 食材名，如 "鸡胸肉"
    totalPrice: number   // 实付金额（元）
    amount: number       // 数量
    unit: string         // 单位，如 "500g"、"1kg"、"斤"
    unitPrice: number    // 单价（元），按统一单位折算
    channel: string      // 渠道名，如 "盒马"、"美团优选"、"楼下菜市场"
    channelType: 'online' | 'offline'
    date: string         // 购买日期 "2026-06-18"
    tags?: string[]      // 备注标签，如 "特价"、"踩雷"、"复购"
}