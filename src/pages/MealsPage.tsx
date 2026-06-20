import { useState, useEffect } from 'react'
import {
    getAllMeals,
    getMealByType,
    getMealCount,
    deleteMeal,
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

    useEffect(() => {
        loadMeals()
    }, [filterType]) // 首次挂载执行 + 每次 filterType 变化时执行

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

    // 前端筛：搜索 + 标签
    const filtered = meals.filter(m => {
        if (searchText) {
            const q = searchText.toLowerCase()
            if (!m.name.toLowerCase().includes(q) && !m.tags.some(t => t.toLowerCase().includes(q))) {
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
        <div className='[-4'>
            {/* 顶部栏 */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-bold text-gray-800">
                    🍳 菜品库
                    <span className="text-sm text-gray-400 font-normal ml-2">{count} 道</span>
                </h1>
                <button
                    onClick={() => onEditMeal(null)}
                    className="px-4 py-2 bg-green-500 text-white text-sm rounded-xl font-medium hover:bg-green-600 active:scale-95 transition-all"
                >
                    ＋ 添加
                </button>
            </div>
            {/* 搜索 + 标签筛选 */}
            <div className="flex gap-2 mb-3">
                <input
                    type="text"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    placeholder="搜索菜名或标签…"
                    className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white"
                />
                <input
                    type="text"
                    value={tagFilter}
                    onChange={e => setTagFilter(e.target.value)}
                    placeholder="标签"
                    className="w-20 border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white"
                />
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
                            onClick={() => onEditMeal(meal.id)}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 cursor-pointer hover:border-green-300 transition-colors"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
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
                                </div>
                                <button
                                    onClick={e => {
                                        e.stopPropagation()
                                        handleDelete(meal.id, meal.name)
                                    }}
                                    className="text-red-400 hover:text-red-600 text-xs px-2 py-1 ml-2"
                                >
                                    🗑️
                                </button>
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
                                                setTagFilter(tag)
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