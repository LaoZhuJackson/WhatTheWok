import { useState, useEffect, useRef } from 'react'
import {
    getAllMeals,
    getMealByType,
    getMealCount,
    deleteMeal,
    bulkDeleteMeals,
    bulkSaveMeals,
} from '../db'
import type { Meal, MealType } from '../models'

export type Page = 'home' | 'meals' | 'history' | 'settings' | 'editor'

interface MealsPageProps {
    onEditMeal: (id: string | null) => void
}

const TYPE_LABEL: Record<MealType, string> = { breakfast: '早餐', lunch: '午餐', dinner: '晚餐' }
const TYPE_EMOJI: Record<MealType, string> = { breakfast: '🥣', lunch: '🍱', dinner: '🍲' }
const SOURCE_LABEL: Record<string, string> = { manual: '✍️', ai: '🤖', builtin: '📦', scrape: '🕷️' }

export default function MealsPage({ onEditMeal }: MealsPageProps) {
    const [meals, setMeals] = useState<Meal[]>([])
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(0)

    // 筛选
    const [filterType, setFilterType] = useState<MealType | 'all'>('all')
    const [searchText, setSearchText] = useState('')
    const [tagFilter, setTagFilter] = useState('')
    const [showTagSuggestions, setShowTagSuggestions] = useState(false)

    // 批量操作
    const [batchMode, setBatchMode] = useState(false)
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
    const fileInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        loadMeals()
    }, [filterType]) // 首次挂载执行 + 每次 filterType 变化时执行

    useEffect(() => {
        // 切换筛选/搜索时退出批量模式
        setBatchMode(false)
        setSelectedIds(new Set())
    }, [filterType])

    async function loadMeals() {
        setLoading(true)
        let data: Meal[]
        if (filterType === 'all') {
            data = await getAllMeals()
        } else {
            data = await getMealByType(filterType)
        }
        setMeals(data)
        setCount(await getMealCount())
        setLoading(false)
    }

    async function handleDelete(id: string, name: string) {
        if (!window.confirm(`删除「${name}」？`)) return
        await deleteMeal(id)
        await loadMeals()
    }

    // 批量操作
    function toggleSelect(id: string) {
        setSelectedIds(prev => {
            const next = new Set(prev)
            if (next.has(id)) next.delete(id)
            else next.add(id)
            return next
        })
    }

    function selectAll() {
        setSelectedIds(new Set(filtered.map(m => m.id)))
    }

    function deselectAll() {
        setSelectedIds(new Set())
    }

    async function handleBulkDelete() {
        const n = selectedIds.size
        if (n === 0) return
        if (!window.confirm(`确定删除选中的 ${n} 道菜品？此操作不可恢复。`)) return
        await bulkDeleteMeals([...selectedIds])
        setSelectedIds(new Set())
        setBatchMode(false)
        await loadMeals()
    }

    function handleExport(exportAll: boolean) {
        const data = exportAll ? meals : meals.filter(m => selectedIds.has(m.id))
        if (data.length === 0) return
        const json = JSON.stringify(data, null, 2)
        const blob = new Blob([json], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `吃啥好_菜品备份_${new Date().toISOString().slice(0, 10)}.json`
        a.click()
        URL.revokeObjectURL(url)
    }

    async function handleImport(file: File) {
        try {
            const text = await file.text()
            const data = JSON.parse(text)
            if (!Array.isArray(data)) throw new Error('文件格式错误：应为 JSON 数组')
            // 简单校验： 至少要有name字段
            const valid = data.filter((m: unknown) => {
                if (typeof m !== 'object' || m === null) return false;
                const item = m as Record<string, unknown>
                return item.name && typeof item.name === 'string'
            })
            if (valid.length === 0) throw new Error('文件中没有有效的菜品数据')
            // 为导入的菜品重新分配 id，避免覆盖已有数据
            const imported: Meal[] = valid.map(m => ({
                ...(m as Meal),
                id: crypto.randomUUID(),
            }))
            await bulkSaveMeals(imported)
            alert(`✅ 成功导入 ${imported.length} 道菜品`)
            await loadMeals()
        } catch (e) {
            alert(`❌ 导入失败：${e instanceof Error ? e.message : '未知错误'}`)
        }
    }

    const allTags = [...new Set(meals.flatMap(m => m.tags))].sort()
    // 根据输入过滤候选标签
    const tagSuggestions = tagFilter
        ? allTags.filter(t => t.toLowerCase().includes(tagFilter.toLowerCase()))
        : allTags
    // 前端筛：搜索 + 标签
    const filtered = meals.filter(m => {
        if (searchText) {
            const q = searchText.toLowerCase()
            if (!m.name.toLowerCase().includes(q)) {
                return false
            }
        }
        if (tagFilter) {
            if (!m.tags.some(t => t.toLowerCase().includes(tagFilter.toLowerCase()))) {
                return false
            }
        }
        return true
    })

    return (
        <div className='p-4'>
            {/* 顶部栏 */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold text-gray-800">
                    🍳 菜品库
                    <span className="text-sm text-gray-400 font-normal ml-2">{count} 道</span>
                </h1>
                <div className='flex items-center gap-2'>
                    {/* 导出全部（始终可见） */}
                    {meals.length > 0 && (
                        <button onClick={() => handleExport(true)}
                            className='px-3  py-2 text-xs text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50'>
                            📤 导出
                        </button>
                    )}
                    {/* 导入 */}
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className='px-3 py-2 text-xs text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50'>
                        📥 导入
                    </button>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".json"
                        className="hidden"
                        onChange={e => {
                            if (e.target.files?.[0]) handleImport(e.target.files[0])
                            e.target.value = ''
                        }}
                    />
                    {/* 批量模式切换 */}
                    {meals.length > 0 && (
                        <button onClick={() => {
                            setBatchMode(!batchMode)
                            setSelectedIds(new Set())
                        }}
                            className={`px-3 py-2 text-xs rounded-lg border ${batchMode ? 'bg-orange-500 text-white border-orange-500'
                                    : 'text-gray-500 border-gray-200 hover:bg-gray-50'}`}
                        >
                            {batchMode ? '✕ 退出多选' : '☐ 多选'}
                        </button>
                    )}
                    <button
                        onClick={() => onEditMeal(null)}
                        className="px-4 py-2 bg-green-500 text-white text-sm rounded-xl font-medium hover:bg-green-600 active:scale-95 transition-all"
                    >
                        ＋ 添加
                    </button>
                </div>
            </div>
            {/* 批量操作栏 */}
            {batchMode && (
                <div className='flex items-center gap-2 mb-3 p-2 bg-orange-50 rounded-lg border border-orange-200'>
                    <button onClick={selectAll} className='text-xs text-orange-600 hover:underline'>全选</button>
                    <button onClick={deselectAll} className='text-xs text-gray-400 hover:underline'>取消</button>
                    <span className='text-xs text-gray-500 ml-auto'>
                        已选 {selectedIds.size} 项
                    </span>
                    <button
                        onClick={() => handleExport(false)}
                        disabled = {selectedIds.size === 0}
                        className='px-3 py-1 text-xs bg-white border border-gray-200 rounded text-gray-600 disabled:opacity-30'>
                        📤 导出所选
                    </button>
                    <button
                        onClick={handleBulkDelete}
                        disabled = {selectedIds.size === 0}
                        className='px-3 py-1 text-xs bg-red-500 text-white rounded disabled:opacity-30'>
                        🗑 删除所选
                    </button>
                </div>
            )}
            {/* 搜索 + 标签筛选 */}
            <div className="flex gap-2 mb-3">
                <input
                    type="text"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    placeholder="搜索菜名"
                    className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white"
                />
                <div className='relative'>
                    <input
                        type='text'
                        value={tagFilter}
                        onChange={e => setTagFilter(e.target.value)}
                        onFocus={() => setShowTagSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowTagSuggestions(false), 150)}
                        placeholder='按标签筛'
                        className='w-28 border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white' />
                    {showTagSuggestions && tagSuggestions.length > 0 && (
                        <div className='absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto'>
                            {tagSuggestions.map(tag => (
                                <button key={tag} onMouseDown={() => { setTagFilter(tag); setShowTagSuggestions(false) }}
                                    className={`w-full text-left px-3 py-1.5 text-sm hover:bg-green-50 ${tag === tagFilter ? 'bg-green-100 text-green-700' : 'text-gray-600'}`}>
                                    #{tag}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {/* 餐型筛选 */}
            <div className="flex gap-2 mb-4 overflow-x-auto">
                {(['all', 'breakfast', 'lunch', 'dinner'] as const).map(t => (
                    <button
                        key={t}
                        onClick={() => setFilterType(t)}
                        className={`px-3 py-1.5 text-xs rounded-full whitespace-nowrap transition-colors ${filterType === t
                            ? 'bg-green-500 text-white'
                            : 'bg-white border border-gray-200 text-gray-600 hover:border-green-300'
                            }`}
                    >
                        {t === 'all' ? '全部' : `${TYPE_EMOJI[t]} ${TYPE_LABEL[t]}`}
                    </button>
                ))}
            </div>

            {/* 列表 */}
            {loading ? (
                <div className="text-center py-12 text-gray-400 text-sm">加载中…</div>
            ) : filtered.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-4xl mb-3">🍽️</p>
                    <p className="text-gray-400 text-sm">
                        {meals.length === 0 ? '菜品库还是空的' : '没有匹配的菜品'}
                    </p>
                    {meals.length === 0 && (
                        <button
                            onClick={() => onEditMeal(null)}
                            className="mt-3 px-4 py-2 bg-green-500 text-white text-sm rounded-xl hover:bg-green-600"
                        >
                            ＋ 添加第一道菜
                        </button>
                    )}
                </div>
            ) : (
                <div className="space-y-3">
                    {filtered.map(meal => (
                        <div
                            key={meal.id}
                            onClick={() => {
                                if (!batchMode) onEditMeal(meal.id)
                            }}
                            className={`bg-white rounded-xl shadow-sm border p-4 cursor-pointer transition-colors ${
                                batchMode && selectedIds.has(meal.id)
                                    ? 'border-orange-400 bg-orange-50'
                                    : 'border-gray-100 hover:border-green-300'
                            }`}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-2 flex-1 min-w-0">
                                    {batchMode && (
                                        <input
                                            type="checkbox"
                                            checked={selectedIds.has(meal.id)}
                                            onChange={() => toggleSelect(meal.id)}
                                            onClick={e => e.stopPropagation()}
                                            className="w-4 h-4 accent-orange-500 shrink-0"
                                        />
                                    )}
                                    <span className="text-xs">
                                        {TYPE_EMOJI[meal.mealType]}
                                    </span>
                                    <h3 className="font-semibold text-gray-900 truncate">
                                        {meal.name}
                                    </h3>
                                    <span className="text-[10px] text-gray-400">
                                        {SOURCE_LABEL[meal.source] || meal.source}
                                    </span>
                                </div>
                                {!batchMode && (
                                    <button
                                        onClick={e => {
                                            e.stopPropagation()
                                            handleDelete(meal.id, meal.name)
                                        }}
                                        className="text-red-400 hover:text-red-600 text-xs px-2 py-1 ml-2"
                                    >
                                        🗑️
                                    </button>
                                )}
                            </div>

                            {/* 热量 + 宏量 一行 */}
                            <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                                <span className="font-mono font-bold text-gray-700">
                                    {meal.calories} 千卡
                                </span>
                                <span>蛋白质：{meal.protein}g</span>
                                <span>碳水：{meal.carbs}g</span>
                                <span>脂肪：{meal.fat}g</span>
                                <span className="text-gray-300">|</span>
                                <span>阶段 {meal.phase.join(',')}</span>
                            </div>

                            {/* 食材简略 */}
                            <p className="text-xs text-gray-400 truncate">
                                {meal.ingredients.map(i => i.name).join('、')}
                            </p>

                            {/* 标签 */}
                            {meal.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {meal.tags.map(tag => (
                                        <span
                                            key={tag}
                                            onClick={e => {
                                                e.stopPropagation()
                                                if (!batchMode) setTagFilter(tag)
                                            }}
                                            className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded cursor-pointer hover:bg-green-100"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}