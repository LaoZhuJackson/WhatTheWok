import { useState, useEffect } from 'react'
import {
    getAllMeals,
    getAllPurchases,
    addPurchaseRecord,
    deletePurchaseRecord,
} from '../db'
import { calcTotalSpend } from '../engine'
import type { PurchaseRecord } from '../models'

// 去重函数
function uniqueSorted(arr: string[]): string[] {
    return [...new Set(arr)].sort()
}

export default function PurchasesPage() {
    const [purchases, setPurchases] = useState<PurchaseRecord[]>([])
    const [ingredientNames, setIngredientNames] = useState<string[]>([])
    const [loading, setLoading] = useState(true)

    // 表单
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(500)
    const [unit, setUnit] = useState('g')
    const [totalPrice, setTotalPrice] = useState('')
    const [channel, setChannel] = useState('')
    const [channelType, setChannelType] = useState<'online' | 'offline'>('online')
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

    // 展开的食材名
    const [expanded, setExpanded] = useState<string | null>(null)

    // 食材名候选
    const [showSuggestions, setShowSuggestions] = useState(false)
    const nameSuggestions = name
        ? ingredientNames.filter(n => n.includes(name))
        : ingredientNames
    useEffect(() => {
        loadData()
    }, [])

    async function loadData() {
        setLoading(true)
        const [p, meals] = await Promise.all([getAllPurchases(), getAllMeals()])
        setPurchases(p)
        // 从所有菜品中提取食材名
        const names = uniqueSorted(meals.flatMap(m => m.ingredients.map(i => i.name)))
        setIngredientNames(names)
        setLoading(false)
    }

    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault()
        if (!name.trim() || !totalPrice || amount <= 0) return

        const record: PurchaseRecord = {
            name: name.trim(),
            amount,
            unit,
            totalPrice: +totalPrice,
            unitPrice: +(+totalPrice / amount).toFixed(2),
            channel: channel.trim() || '未知',
            channelType,
            date,
        }
        await addPurchaseRecord(record)
        // 重置表单
        setName('')
        setTotalPrice('')
        setChannel('')
        await loadData()
    }
    async function handleDelete(id: number) {
        await deletePurchaseRecord(id)
        await loadData()
    }

    // 按食材分组
    const grouped = new Map<string, PurchaseRecord[]>()
    for (const p of purchases) {
        const list = grouped.get(p.name) || []
        list.push(p)
        grouped.set(p.name, list)
    }
    const groups = [...grouped.entries()]

    // 本月总支出
    const now = new Date()
    const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
    const thisMonthPurchases = purchases.filter(p => p.date.startsWith(thisMonth))
    const monthTotal = calcTotalSpend(thisMonthPurchases)

    if (loading) {
        return <div className="p-4 text-center text-gray-400 text-sm py-20">加载中…</div>
    }

    return (
        <div className="p-4 space-y-4 max-w-lg mx-auto">
            <h1 className="text-xl font-bold text-gray-800">💰 记账</h1>

            {/* ── 快速记价表单 ── */}
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 p-4 space-y-3">
                {/* 食材名 */}
                <div className="relative">
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                        placeholder="食材名（如：鸡胸肉）"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                    {showSuggestions && nameSuggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                            {nameSuggestions.map(n => (
                                <button
                                    key={n}
                                    type="button"
                                    onMouseDown={() => { setName(n); setShowSuggestions(false) }}
                                    className={`w-full text-left px-3 py-1.5 text-sm hover:bg-green-50 ${n === name ? 'bg-green-100 text-green-700' : 'text-gray-600'}`}
                                >
                                    {n}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* 数量 + 单位 + 价格 */}
                <div className="flex gap-2">
                    <input
                        type="number"
                        value={amount}
                        onChange={e => setAmount(+e.target.value)}
                        className="w-20 border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                    <select
                        value={unit}
                        onChange={e => setUnit(e.target.value)}
                        className="border border-gray-200 rounded-lg px-2 py-2 text-sm bg-white"
                    >
                        <option value="g">g</option>
                        <option value="kg">kg</option>
                        <option value="斤">斤</option>
                        <option value="个">个</option>
                    </select>
                    <input
                        type="number"
                        value={totalPrice}
                        onChange={e => setTotalPrice(e.target.value)}
                        placeholder="实付 ¥"
                        className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                </div>

                {/* 渠道 + 类型 + 日期 */}
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={channel}
                        onChange={e => setChannel(e.target.value)}
                        placeholder="渠道（盒马/美团/菜市场）"
                        className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm"
                    />
                    <select
                        value={channelType}
                        onChange={e => setChannelType(e.target.value as 'online' | 'offline')}
                        className="border border-gray-200 rounded-lg px-2 py-2 text-sm bg-white"
                    >
                        <option value="online">🌐 线上</option>
                        <option value="offline">🏪 线下</option>
                    </select>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        className="border border-gray-200 rounded-lg px-2 py-2 text-sm"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-green-500 text-white text-sm rounded-xl font-medium hover:bg-green-600 active:scale-[0.98] transition-all"
                >
                    💾 记一笔
                </button>
            </form>

            {/* ── 本月总支出 ── */}
            {purchases.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">本月支出</span>
                    <span className="text-lg font-bold text-gray-800">¥{monthTotal.toFixed(1)}</span>
                </div>
            )}

            {/* ── 购买历史 ── */}
            {purchases.length === 0 ? (
                <div className="text-center py-12 text-gray-400 text-sm">
                    <p className="text-4xl mb-3">🧾</p>
                    <p>还没有购买记录</p>
                </div>
            ) : (
                <div className="space-y-2">
                    <h3 className="text-xs text-gray-500 font-medium">购买历史</h3>
                    {groups.map(([ingName, records]) => {
                        const latest = records[0]
                        const avgPrice = +(records.reduce((s, r) => s + r.unitPrice, 0) /
                            records.length).toFixed(2)
                        const isOpen = expanded === ingName

                        return (
                            <div key={ingName} className="bg-white rounded-xl border border-gray-100">
                                <button
                                    onClick={() => setExpanded(isOpen ? null : ingName)}
                                    className="w-full text-left p-4 flex items-center justify-between">
                                    <div>
                                        <span className="text-sm font-medium text-gray-800">{ingName}</span>
                                        <span className="text-xs text-gray-400 ml-2">
                                            均价 ¥{avgPrice}/{records[0].unit} · {records.length}次
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-400">
                                        最近 ¥{latest.totalPrice}
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="border-t border-gray-100 px-4 py-2 space-y-1">
                                        {records.map(r => (
                                            <div key={r.id} className="flex items-center justify-between text-xs text-gray-500 py-1">
                                                <span>
                                                    {r.date} · {r.amount}{r.unit} ¥{r.totalPrice} ·
                                                    {r.channel}
                                                </span>
                                                <button
                                                    onClick={() => handleDelete(r.id!)}
                                                    className="text-red-400 hover:text-red-600 ml-2"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}

            <div className="h-4" />
        </div>
    )
}