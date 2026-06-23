import type { Meal } from "../models";

interface MealCardProps{
    meal: Meal
    calorieTarget: number
    mealType: 'breakfast' | 'lunch' | 'dinner'
    isSwapping: boolean
    candidates: Meal[]
    onSwapClick: () => void
    onSwapSelect: (meal: Meal) => void
}

const TYPE_LABEL: Record<string, string> = {
    breakfast: '🥣 早餐',
    lunch: '🍱 午餐',
    dinner: '🍲 晚餐',
}

export default function MealCard({meal, calorieTarget, mealType, isSwapping, candidates, onSwapClick, onSwapSelect}:MealCardProps){
    const delta = meal.calories - calorieTarget
    const deltaSign = delta >= 0 ? '+' : ''
    const deltaColor = Math.abs(delta) <= 50 ? 'text-green-600' : 'text-orange-500'

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-3">
            {/* 头部：餐型 + 换一道 + 热量差 */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-700">
                        {TYPE_LABEL[mealType]}
                    </span>
                    <button
                        onClick={(e) => { e.stopPropagation(); onSwapClick() }}
                        className={`text-xs rounded-lg px-2 py-0.5 border transition-colors ${
                            isSwapping
                                ? 'bg-green-500 text-white border-green-500'
                                : 'text-green-500 hover:text-green-700 border-green-200'
                        }`}
                    >
                        🔄 换一道
                    </button>
                </div>
                <span className={`text-xs font-mono ${deltaColor}`}>
                    {meal.calories} kcal ({deltaSign}{delta} vs 目标 {calorieTarget})
                </span>
            </div>

            {/* 菜名 */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">{meal.name}</h3>

            {/* 宏量营养素条 */}
            <div className="grid grid-cols-3 gap-2 mb-3">
                <MacroItem label="蛋白质" value={meal.protein} unit="g" color="bg-red-400" />
                <MacroItem label="碳水" value={meal.carbs} unit="g" color="bg-yellow-400" />
                <MacroItem label="脂肪" value={meal.fat} unit="g" color="bg-blue-400" />
            </div>

            {/* 食材标签 */}
            {meal.ingredients.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-3">
                    {meal.ingredients.map((ing, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                            {ing.name} {ing.grams}{ing.unit || 'g'}
                        </span>
                    ))}
                </div>
            )}

            {/* 候选替换列表 */}
            {isSwapping && candidates.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-100 max-h-48 overflow-y-auto">
                    <p className="text-xs text-gray-400 mb-2">选择替换菜品（按热量接近排序）</p>
                    {candidates.map(c => (
                        <button
                            key={c.id}
                            onClick={() => onSwapSelect(c)}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-green-50 flex items-center justify-between"
                        >
                            <span className="text-sm text-gray-700">{c.name}</span>
                            <span className="text-xs text-gray-400">{c.calories} kcal · 蛋白{c.protein}g</span>
                        </button>
                    ))}
                </div>
            )}

            {/* 做法 */}
            {meal.steps && (
                <details className="text-xs text-gray-500">
                    <summary className="cursor-pointer hover:text-gray-700">📝 做法</summary>
                    <p className="mt-1 whitespace-pre-line leading-relaxed">{meal.steps}</p>
                </details>
            )}

            {/* 标签 */}
            {meal.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                    {meal.tags.map(tag => (
                        <span key={tag} className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded">
                            #{tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}

function MacroItem({ label, value, unit, color}:{
    label:string
    value: number
    unit:string
    color:string
}){
    return(
        <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>{label}</span>
                <span>{value}{unit}</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full ${color}`}
                    style={{ width: `${Math.min(value / 2, 100)}%` }}
                />
            </div>
        </div>
    )
}