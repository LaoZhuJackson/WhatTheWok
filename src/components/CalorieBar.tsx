interface CalorieBarProps{
    current: number
    target: number
}

export default function CalorieBar({ current, target }: CalorieBarProps) {
    const pct = Math.min(Math.round(current / target * 100), 120)
    const remaining = target - current

    // 颜色：接近目标绿色，超了橙色
    const barColor =
        pct < 80 ? 'bg-blue-400' :
        pct <= 100 ? 'bg-green-400' :
        'bg-orange-400'

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-4">
            <div className="flex items-baseline justify-between mb-2">
                <span className="text-sm text-gray-500">今日热量</span>
                <span className="text-xs text-gray-400">
                    目标 {target} kcal
                </span>
            </div>

            <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-bold text-gray-900">{current}</span>
                <span className="text-sm text-gray-400">kcal</span>
                <span className={`ml-auto text-sm font-medium ${
                    remaining >= 0 ? 'text-green-600' : 'text-orange-500'
                }`}>
                    {remaining >= 0 ? `还可 ${remaining}` : `超出 ${Math.abs(remaining)}`}
                </span>
            </div>

            {/* 进度条 */}
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                    style={{ width: `${Math.min(pct, 100)}%` }}
                />
            </div>

            <div className="flex justify-between mt-1.5 text-xs text-gray-400">
                <span>0</span>
                <span>{target * 0.5}kcal</span>
                <span>{target}kcal</span>
            </div>
        </div>
    )
}