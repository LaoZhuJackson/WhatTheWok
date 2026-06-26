import { useState, useEffect } from 'react'
import { useToast } from '../components/Toast'
import {
    getWeeklyLog,
    saveWeeklyLog,
    upsertDailySnapshot,
    getBodyMeasurements,
    getUserProfile,
    getExercisesByWeek,
    addExerciseRecord,
    updateExerciseRecord,
    deleteExerciseRecord,
} from '../db'
import { calcStepsCalories, calcBMR } from '../engine'
import { toLocalDate, parseLocalDate, getMonday, addDays } from '../utils/date'
import type { WeeklyLog, DailySnapshot, BodyMeasurement, ExerciseRecord, UserProfile } from '../models'

function formatRange(monday: string): string {
    const sun = addDays(monday, 6)
    return `${monday.slice(5)} ~ ${sun.slice(5)}`
}

function dayLabel(dateStr: string): string {
    const d = parseLocalDate(dateStr)
    return ['日', '一', '二', '三', '四', '五', '六'][d.getDay()]
}

function emptySnapshot(date: string): DailySnapshot {
    return { date, steps: 0, ateOnPlan: false, training: 'none' }
}

function ensureWeek(log: WeeklyLog | undefined, weekStart: string): WeeklyLog {
    const snapshots: DailySnapshot[] = []
    for (let i = 0; i < 7; i++) {
        const date = addDays(weekStart, i)
        const existing = log?.dailySnapshots.find(d => d.date === date)
        snapshots.push(existing || emptySnapshot(date))
    }
    return { weekStart, dailySnapshots: snapshots, weeklyNote: log?.weeklyNote }
}

// ═══════════════════════════════════════
// 运动类型选项
// ═══════════════════════════════════════

const EXERCISE_TYPES: { value: string; label: string }[] = [
    { value: '步行', label: '🚶 步行' },
    { value: '快走', label: '🏃 快走' },
    { value: '跑步', label: '🏃‍♂️ 跑步' },
    { value: '骑行', label: '🚲 骑行' },
    { value: '爬坡走', label: '⛰️ 爬坡' },
    { value: '爬楼', label: '🏢 爬楼' },
    { value: '跳绳', label: '🎽 跳绳' },
    { value: '力量训练', label: '🏋️ 力量' },
    { value: 'HIIT', label: '🔥 HIIT' },
    { value: '游泳', label: '🏊 游泳' },
    { value: '篮球', label: '🏀 篮球' },
    { value: '足球', label: '⚽ 足球' },
    { value: '羽毛球', label: '🏸 羽毛球' },
    { value: '跳舞', label: '💃 跳舞' },
    { value: '椭圆机', label: '🔄 椭圆机' },
    { value: '划船机', label: '🚣 划船' },
    { value: '瑜伽', label: '🧘 瑜伽' },
    { value: '其他', label: '📝 其他' },
]

const EXERCISE_SOURCES: { value: ExerciseRecord['source']; label: string }[] = [
    { value: 'manual', label: '✍️ 手动录入' },
    { value: 'estimated', label: '📊 自动估算' },
]

// MET 值映射（中文运动类型 → 代谢当量）
const MET_BY_TYPE: Record<string, number> = {
    '步行': 3.5,
    '快走': 5.0,
    '跑步': 8.3,
    '骑行': 6.0,
    '爬坡走': 8.0,
    '爬楼': 8.0,
    '跳绳': 10.0,
    '力量训练': 5.0,
    'HIIT': 8.0,
    '游泳': 7.0,
    '篮球': 6.0,
    '足球': 7.0,
    '羽毛球': 5.5,
    '跳舞': 5.0,
    '椭圆机': 5.0,
    '划船机': 6.0,
    '瑜伽': 2.5,
    '其他': 4.0,
}

// ═══════════════════════════════════════
// 主组件
// ═══════════════════════════════════════

export default function HistoryPage() {
    const [weekStart, setWeekStart] = useState(getMonday(new Date()))
    const [log, setLog] = useState<WeeklyLog | null>(null)
    const toast = useToast()
    const [dirty, setDirty] = useState(false)
    const [saving, setSaving] = useState(false)

    const [measurements, setMeasurements] = useState<BodyMeasurement[]>([])
    const [profile, setProfile] = useState<UserProfile | null>(null)
    const weightKg = profile?.currentWeightKg ?? 57.5
    const [stepGoal, setStepGoal] = useState(6000)
    const [note, setNote] = useState('')

    // 本周运动记录
    const [exercises, setExercises] = useState<ExerciseRecord[]>([])

    useEffect(() => {
        loadWeek(weekStart)
        loadMeasurements()
        loadProfile()
        loadExercises(weekStart)
    }, [weekStart])

    async function loadWeek(ws: string) {
        const data = await getWeeklyLog(ws)
        const filled = ensureWeek(data, ws)
        setLog(filled)
        setNote(filled.weeklyNote || '')
        setDirty(false)
    }

    async function loadMeasurements() {
        const m = await getBodyMeasurements()
        setMeasurements(m.slice(0, 12).reverse())
    }

    async function loadProfile() {
        const p = await getUserProfile()
        if (p) {
            setStepGoal(p.dailyStepsGoal || 6000)
            setProfile(p)
        }
    }

    async function loadExercises(ws: string) {
        const end = addDays(ws, 6)
        const records = await getExercisesByWeek(ws, end)
        setExercises(records)
    }

    // ── 更新某天快照（立即持久化到 DB）──
    function updateDay(idx: number, patch: Partial<DailySnapshot>) {
        setLog(prev => {
            if (!prev) return prev
            const merged = { ...prev.dailySnapshots[idx], ...patch }
            const next = { ...prev }
            next.dailySnapshots = [...prev.dailySnapshots]
            next.dailySnapshots[idx] = merged
            // 立即持久化到 DB（prev 保证是最新状态，杜绝 stale closure）
            upsertDailySnapshot(weekStart, merged)
            return next
        })
        toast.show('已自动保存', 'success', 1200)
    }

    // ── 运动记录操作 ──
    async function handleAddExercise(date: string) {
        const record: ExerciseRecord = {
            date,
            type: '力量训练',
            durationMinutes: 30,
            calories: 0,
            source: 'manual',
        }
        const id = await addExerciseRecord(record)
        setExercises(prev => [...prev, { ...record, id }])
    }

    async function handleDeleteExercise(id: number) {
        await deleteExerciseRecord(id)
        setExercises(prev => prev.filter(e => e.id !== id))
    }

    function updateExercise(id: number, patch: Partial<ExerciseRecord>) {
        setExercises(prev =>
            prev.map(e => (e.id === id ? { ...e, ...patch } : e))
        )
        // 立即持久化到 DB
        updateExerciseRecord(id, patch)
    }

    // ── 保存 ──
    async function handleSave() {
        if (!log) return
        setSaving(true)
        const toSave: WeeklyLog = { ...log, weeklyNote: note.trim() || undefined }
        await saveWeeklyLog(toSave)
        setDirty(false)
        setSaving(false)
        toast.show('已保存', 'success', 1500)
    }

    // ── 导航 ──
    function prevWeek() { setWeekStart(addDays(weekStart, -7)) }
    function nextWeek() { setWeekStart(addDays(weekStart, 7)) }

    // ── 统计 ──
    // 强制按日期排序，周一在前、周日在最后
    const days = [...(log?.dailySnapshots || [])].sort(
        (a, b) => a.date.localeCompare(b.date)
    )
    const avgSteps = Math.round(days.reduce((s, d) => s + d.steps, 0) / 7)
    const bmr = profile ? calcBMR(profile) : 1450
    const onPlanDays = days.filter(d => d.ateOnPlan).length
    const avgDeficit = Math.round(days.reduce((s, d) => {
        const stepCals = calcStepsCalories(weightKg, d.steps || 0)
        const dayExCals = exercises.filter(e => e.date === d.date).reduce((x, e) => x + e.calories, 0)
        const out = bmr + stepCals + dayExCals
        return s + out - (d.caloriesIn || 0)
    }, 0) / 7)
    const deficitSign = avgDeficit >= 0 ? '+' : ''
    const exerciseCals = exercises.reduce((s, e) => s + e.calories, 0)
    const totalCalFromSteps = days.reduce((s, d) => s + calcStepsCalories(weightKg, d.steps || 0), 0)
    const actualMax = Math.max(...days.map(d => d.steps || 0), 1)
    // 柱状图上限：取实际最大值和目标的较大者，但至少 3000 防止全 0 时图太空
    const chartMax = Math.max(actualMax, Math.min(stepGoal, actualMax * 2 || 3000))

    function getExercisesForDate(date: string): ExerciseRecord[] {
        return exercises.filter(e => e.date === date)
    }

    if (!log) {
        return <div className="p-4 text-center text-gray-400 text-sm py-20">加载中…</div>
    }

    return (
        <div className="p-4 space-y-4 max-w-lg mx-auto">
            <style>{`
                @keyframes spark-drift-1 {
                    0%   { transform: translate(0, 0) scale(1); opacity: 1; }
                    30%  { transform: translate(3px, -6px) scale(0.8); opacity: 0.8; }
                    60%  { transform: translate(-4px, -14px) scale(0.5); opacity: 0.4; }
                    100% { transform: translate(2px, -24px) scale(0); opacity: 0; }
                }
                @keyframes spark-drift-2 {
                    0%   { transform: translate(0, 0) scale(1); opacity: 0.9; }
                    40%  { transform: translate(-5px, -10px) scale(0.7); opacity: 0.6; }
                    70%  { transform: translate(3px, -20px) scale(0.3); opacity: 0.2; }
                    100% { transform: translate(-2px, -30px) scale(0); opacity: 0; }
                }
                @keyframes spark-drift-3 {
                    0%   { transform: translate(0, 0) scale(1); opacity: 1; }
                    25%  { transform: translate(-2px, -5px) scale(0.9); opacity: 0.9; }
                    55%  { transform: translate(6px, -16px) scale(0.4); opacity: 0.3; }
                    100% { transform: translate(-3px, -28px) scale(0); opacity: 0; }
                }
                @keyframes flame-flicker {
                    0%, 100% { filter: brightness(1); }
                    50%  { filter: brightness(1.15); }
                }
                .flame-bar {
                    animation: flame-flicker 1.5s ease-in-out infinite;
                    background: linear-gradient(to top, #dc2626, #f97316, #fbbf24) !important;
                    box-shadow: 0 0 6px rgba(239, 68, 68, 0.45);
                }
                .spark {
                    position: absolute;
                    border-radius: 50%;
                }
            `}</style>
            {/* ── 周选择器 ── */}
            <div className="flex items-center justify-between">
                <button onClick={prevWeek} className="text-gray-400 hover:text-gray-600 text-xl px-2">‹</button>
                <h1 className="text-base font-bold text-gray-800">📋 {formatRange(weekStart)}</h1>
                <button onClick={nextWeek} className="text-gray-400 hover:text-gray-600 text-xl px-2">›</button>
            </div>

            {/* ── 概览卡片 ── */}
            <div className="grid grid-cols-4 gap-2">
                <StatCard label="日均步数" value={avgSteps.toLocaleString()} unit="" />
                <StatCard label="饮食达标" value={`${onPlanDays}`} unit="/7天" highlight={onPlanDays >= 6} />
                <StatCard label="运动消耗" value={`${exerciseCals}`} unit="kcal" />
                <StatCard label="步数消耗" value={`${Math.round(totalCalFromSteps / 7)}`} unit="kcal/天" />
                <StatCard label="周均缺口" value={`${deficitSign}${avgDeficit}`} unit="kcal/天" highlight={avgDeficit >= 200} />
            </div>

            {/* ── 每日步数柱状图 ── */}
            <div className="bg-white rounded-xl border border-gray-100 p-4">
                <h3 className="text-xs text-gray-500 mb-3 font-medium">每日步数</h3>
                <div className="flex items-end gap-1 h-32">
                    {days.map(d => {
                        const stepPct = stepGoal > 0 ? (d.steps / stepGoal) * 100 : 0
                        const h = (d.steps / chartMax) * 100
                        const isToday = d.date === toLocalDate(new Date())

                        // 颜色分级
                        let barColor: string
                        let showFlame = false
                        if (stepPct >= 150) {
                            barColor = 'flame-bar'
                            showFlame = true
                        } else if (stepPct >= 100) {
                            barColor = isToday ? 'bg-green-500' : 'bg-green-400'
                        } else if (stepPct >= 50) {
                            barColor = isToday ? 'bg-yellow-500' : 'bg-yellow-400'
                        } else {
                            barColor = isToday ? 'bg-gray-400' : 'bg-gray-300'
                        }
                        return (
                            <div key={d.date} className="flex-1 flex flex-col items-center gap-1 h-full relative">
                                {/* 步数数值 */}
                                <span className="text-[10px] text-gray-400 font-mono leading-none">
                                    {d.steps > 0 ? Math.round(d.steps / 1000) + 'k' : ''}
                                </span>

                                {/* 柱子区域 */}
                                <div className="w-full flex-1 flex items-end justify-center relative">
                                    <div
                                        className={`w-5/6 rounded-t transition-all ${barColor}`}
                                        style={{
                                            height: `${Math.max(h, 1)}%`,
                                            minHeight: d.steps > 0 ? '4px' : '1px',
                                        }}
                                    >
                                        {/* 篝火火星 */}
                                        {showFlame && (
                                            <>
                                                <span className="spark" style={{
                                                    left: '15%', top:
                                                        '0px', width: '2px', height: '2px', background: '#fbbf24', animation: 'spark-drift-1 1.1s ease-out infinite', animationDelay: '0s'
                                                }} />
                                                <span className="spark" style={{
                                                    left: '40%', top:
                                                        '-2px', width: '3px', height: '3px', background: '#f97316', animation: 'spark-drift-2 1.4s ease-out infinite', animationDelay: '0.2s'
                                                }} />
                                                <span className="spark" style={{
                                                    left: '65%', top:
                                                        '-1px', width: '2px', height: '2px', background: '#fbbf24', animation: 'spark-drift-3 1.0s ease-out infinite', animationDelay: '0.35s'
                                                }} />
                                                <span className="spark" style={{
                                                    left: '30%', top:
                                                        '-4px', width: '2.5px', height: '2.5px', background: '#ef4444', animation: 'spark-drift-1 1.3s ease-out infinite', animationDelay: '0.5s'
                                                }} />
                                                <span className="spark" style={{
                                                    left: '55%', top:
                                                        '-3px', width: '2px', height: '2px', background: '#fbbf24', animation: 'spark-drift-2 0.95s ease-out infinite', animationDelay: '0.15s'
                                                }} />
                                                <span className="spark" style={{
                                                    left: '75%', top:
                                                        '-1px', width: '3px', height: '3px', background: '#f97316', animation: 'spark-drift-3 1.25s ease-out infinite', animationDelay: '0.6s'
                                                }} />
                                                <span className="spark" style={{
                                                    left: '22%', top:
                                                        '-5px', width: '1.5px', height: '1.5px', background: '#fbbf24', animation: 'spark-drift-1 1.15s ease-out infinite', animationDelay: '0.7s'
                                                }} />
                                                <span className="spark" style={{
                                                    left: '48%', top:
                                                        '-6px', width: '2px', height: '2px', background: '#ef4444', animation: 'spark-drift-2 1.05s ease-out infinite', animationDelay: '0.4s'
                                                }} />
                                            </>
                                        )}
                                    </div>
                                </div>

                                {/* 星期标签 */}
                                <span className={`text-[10px] leading-none ${isToday ? 'text-green-600 font-semibold' : 'text-gray-400'
                                    }`}>
                                    {dayLabel(d.date)}
                                </span>
                            </div>
                        )
                    })}
                </div>
                <div className="mt-1 flex justify-between text-[10px] text-gray-400">
                    <span>{chartMax.toLocaleString()}</span>
                    <span>目标 {stepGoal.toLocaleString()}</span>
                </div>
            </div>

            {/* ── 每日快照 ── */}
            <div className="space-y-2">
                <h3 className="text-xs text-gray-500 font-medium">每日快照</h3>
                {days.map((d, i) => (
                    <DayRow
                        key={d.date}
                        day={d}
                        stepGoal={stepGoal}
                        weightKg={weightKg}
                        bmr={bmr}
                        exercises={getExercisesForDate(d.date)}
                        onChange={(patch) => updateDay(i, patch)}
                        onAddExercise={() => handleAddExercise(d.date)}
                        onDeleteExercise={handleDeleteExercise}
                        onUpdateExercise={updateExercise}
                    />
                ))}
            </div>

            {/* ── 体重趋势 ── */}
            {measurements.length >= 2 && (
                <div className="bg-white rounded-xl border border-gray-100 p-4">
                    <h3 className="text-xs text-gray-500 mb-3 font-medium">体重趋势</h3>
                    <WeightTrend data={measurements} />
                </div>
            )}

            {/* ── 周笔记 ── */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 space-y-2">
                <h3 className="text-xs text-gray-500 font-medium">本周笔记</h3>
                <textarea
                    value={note}
                    onChange={e => { setNote(e.target.value); setDirty(true) }}
                    rows={2}
                    placeholder="这周有什么心得？饮食调整？训练感受？"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none"
                />
            </div>

            {/* ── 保存 ── */}
            {dirty && (
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="w-full py-3 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 active:scale-[0.98] transition-all text-sm"
                >
                    {saving ? '保存中…' : '💾 保存本周记录'}
                </button>
            )}

            <div className="h-4" />
        </div>
    )
}

// ═══════════════════════════════════════
// 统计卡片
// ═══════════════════════════════════════

function StatCard({ label, value, unit, highlight }: {
    label: string
    value: string
    unit: string
    highlight?: boolean
}) {
    return (
        <div className={`bg-white rounded-xl border px-2 py-3 text-center ${highlight ? 'border-green-300 bg-green-50' : 'border-gray-100'
            }`}>
            <div className="text-lg font-bold text-gray-800">{value}</div>
            <div className="text-[10px] text-gray-400">{unit}</div>
            <div className="text-[10px] text-gray-400 mt-0.5">{label}</div>
        </div>
    )
}

// ═══════════════════════════════════════
// 每日行（步数 + 饮食 + 运动子行）
// ═══════════════════════════════════════

function DayRow({ day, stepGoal, exercises, weightKg, bmr, onChange, onAddExercise, onDeleteExercise, onUpdateExercise }: {
    day: DailySnapshot
    stepGoal: number
    exercises: ExerciseRecord[]
    weightKg: number
    bmr: number
    onChange: (patch: Partial<DailySnapshot>) => void
    onAddExercise: () => void
    onDeleteExercise: (id: number) => void
    onUpdateExercise: (id: number, patch: Partial<ExerciseRecord>) => void
}) {
    const isToday = day.date === new Date().toISOString().slice(0, 10)
    const stepPct = stepGoal > 0 ? Math.min(day.steps / stepGoal * 100, 100) : 0

    // 热量缺口
    const stepCals = day.steps > 0 ? calcStepsCalories(weightKg, day.steps) : 0
    const exerciseCals = exercises.reduce((s, e) => s + e.calories, 0)
    const totalOut = bmr + stepCals + exerciseCals
    const totalIn = (day.caloriesIn || 0) + (day.extraCalories || 0)
    const deficit = totalIn ? totalOut - totalIn : 0
    const hasData = !!(day.caloriesIn || exercises.length > 0 || day.steps > 0)

    const [showExtra, setShowExtra] = useState(false)

    return (
        <div className={`bg-white rounded-xl border px-3 py-2.5 ${isToday ? 'border-green-300 shadow-sm' : 'border-gray-100'
            }`}>
            {/* ── 第一行：日期 + 步数 + 饮食 ── */}
            <div className="flex items-center gap-2">
                <div className="text-center min-w-[36px]">
                    <div className="text-[10px] text-gray-400">{dayLabel(day.date)}</div>
                    <div className={`text-xs font-bold ${isToday ? 'text-green-600' : 'text-gray-600'}`}>
                        {day.date.slice(8)}
                    </div>
                </div>

                <div className="flex-1 min-w-0 flex items-center gap-1">
                    <span className="text-[10px] text-gray-400 shrink-0">👟</span>
                    <input
                        type="number"
                        value={day.steps || ''}
                        onChange={e => onChange({ steps: +e.target.value })}
                        placeholder="步数"
                        className="w-16 text-xs border border-gray-200 rounded px-1.5 py-1"
                    />
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full transition-all ${stepPct >= 100 ? 'bg-green-400' : stepPct >= 50 ? 'bg-yellow-400' : 'bg-gray-300'
                                }`}
                            style={{ width: `${stepPct}%` }}
                        />
                    </div>
                </div>
                {/* 额外摄入 */}
                {(showExtra || (day.extraCalories || 0) > 0) ? (
                    <div className='flex items-center gap-0.5 shrink-0'>
                        <input
                            type='number'
                            value={day.extraCalories || ''}
                            onChange={e => onChange({extraCalories: +e.target.value})}
                            onBlur={() => setShowExtra(false)}
                            placeholder='0'
                            className="w-12 text-xs border border-red-200 rounded px-1 py-0.5 text-red-600 bg-red-50"
                            autoFocus
                        />
                        <span className='text-[9px] text-red-400'>kcal</span>
                    </div>
                ) : (
                    <button
                        onClick={() => setShowExtra(true)}
                        className='text-sm shrink-0 opacity-40 hover:opacity-100 transition-opacity'
                        title="记录额外摄入（零食/宵夜/加餐）"
                    >
                        🍩
                    </button>
                )}
                <button
                    onClick={() => onChange({ ateOnPlan: !day.ateOnPlan })}
                    className={`text-sm transition-all shrink-0 ${day.ateOnPlan ? 'hover:opacity-100' : 'opacity-30 hover:opacity-50'}`}
                    title="饮食达标"
                >
                    🥗
                </button>
            </div>

            {/* ── 运动记录子行 ── */}
            {exercises.length > 0 && (
                <div className="mt-2 ml-[36px] space-y-1.5">
                    {exercises.map(ex => (
                        <div key={ex.id} className="flex items-center gap-1 text-xs flex-wrap">
                            <select
                                value={ex.type}
                                onChange={e => {
                                    const newType = e.target.value
                                    const patch: Partial<ExerciseRecord> = { type: newType }
                                    if (ex.source === 'estimated') {
                                        const met = MET_BY_TYPE[newType]
                                        if (met && ex.durationMinutes > 0) {
                                            patch.calories = Math.round(met * weightKg * (ex.durationMinutes / 60))
                                        }
                                    }
                                    onUpdateExercise(ex.id!, patch)
                                }}
                                className="border border-gray-200 rounded px-1 py-0.5 bg-white text-xs"
                            >
                                {EXERCISE_TYPES.map(t => (
                                    <option key={t.value} value={t.value}>{t.label}</option>
                                ))}
                            </select>

                            <input
                                type="number"
                                value={ex.durationMinutes || ''}
                                onChange={e => {
                                    const mins = +e.target.value
                                    const patch: Partial<ExerciseRecord> = { durationMinutes: mins }
                                    if (ex.source === 'estimated') {
                                        const met = MET_BY_TYPE[ex.type]
                                        if (met && mins > 0) {
                                            patch.calories = Math.round(met * weightKg * (mins / 60))
                                        }
                                    }
                                    onUpdateExercise(ex.id!, patch)
                                }}
                                placeholder="min"
                                className="w-12 border border-gray-200 rounded px-1 py-0.5 text-xs"
                            />
                            <span className="text-[10px] text-gray-400">min</span>

                            <input
                                type="number"
                                value={ex.calories || ''}
                                onChange={e => onUpdateExercise(ex.id!, { calories: +e.target.value })}
                                placeholder="kcal"
                                className="w-14 border border-gray-200 rounded px-1 py-0.5 text-xs"
                            />
                            <span className="text-[10px] text-gray-400">kcal</span>

                            <select
                                value={ex.source}
                                onChange={e => {
                                    const newSource = e.target.value as ExerciseRecord['source']
                                    const patch: Partial<ExerciseRecord> = { source: newSource }
                                    if (newSource === 'estimated') {
                                        const met = MET_BY_TYPE[ex.type]
                                        if (met && ex.durationMinutes > 0) {
                                            patch.calories = Math.round(met * weightKg * (ex.durationMinutes / 60))
                                        }
                                    }
                                    onUpdateExercise(ex.id!, patch)
                                }}
                                className="border border-gray-200 rounded px-0.5 py-0.5 bg-white text-[10px]"
                            >
                                {EXERCISE_SOURCES.map(s => (
                                    <option key={s.value} value={s.value}>{s.label}</option>
                                ))}
                            </select>

                            <button
                                onClick={() => onDeleteExercise(ex.id!)}
                                className="text-red-400 hover:text-red-600 text-xs px-1 shrink-0"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* ── 热量缺口 ── */}
            {hasData && (
                <div className="mt-1.5 ml-[36px] flex items-center gap-1 text-[10px] flex-wrap">
                    <span className="text-gray-400">消耗 {Math.round(totalOut)}</span>
                    {day.caloriesIn ? (
                        <>
                            <span className="text-gray-300">−</span>
                            <span className="text-gray-400">摄入 {day.caloriesIn}</span>
                            {day.extraCalories ? (
                                <span className="text-red-400 text-[9px]">（含额外 +{day.extraCalories}）</span>
                            ) : null}
                            <span className="text-gray-300">=</span>
                            {deficit > 0 ? (
                                <span className="text-green-600 font-mono font-bold">🔥 -{Math.round(deficit)}</span>
                            ) : deficit < 0 ? (
                                <span className="text-red-500 font-mono font-bold">⚠️ +{Math.round(-deficit)}</span>
                            ) : (
                                <span className="text-gray-400 font-mono">0</span>
                            )}
                            <span className="text-gray-400">kcal</span>
                        </>
                    ) : (
                        <span className="text-gray-400">（未记录摄入）</span>
                    )}
                </div>
            )}

            {/* 添加运动按钮 */}
            <div className="mt-1.5 ml-[36px]">
                <button
                    onClick={onAddExercise}
                    className="text-[10px] text-green-500 hover:text-green-600 px-1.5 py-0.5 border border-green-200 rounded-lg"
                >
                    ＋ 运动
                </button>
            </div>
        </div>
    )
}

// ═══════════════════════════════════════
// 体重趋势图（SVG 折线）
// ═══════════════════════════════════════

function WeightTrend({ data }: { data: BodyMeasurement[] }) {
    if (data.length < 2) return null

    const min = Math.min(...data.map(d => d.weightKg))
    const max = Math.max(...data.map(d => d.weightKg))
    const range = max - min || 1
    const padding = range * 0.3
    const plotMin = +(min - padding).toFixed(1)
    const plotMax = +(max + padding).toFixed(1)
    const plotRange = plotMax - plotMin || 1

    return (
        <div className="relative h-24">
            <div className="absolute -left-1 top-0 text-[10px] text-gray-400">{plotMax}</div>
            <div className="absolute -left-1 bottom-0 text-[10px] text-gray-400">{plotMin}</div>

            <div className="ml-6 h-full relative">
                <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-200" />

                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                    <polyline
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                        points={data.map((d, i) => {
                            const x = data.length === 1 ? 50 : (i / (data.length - 1)) * 100
                            const y = 100 - ((d.weightKg - plotMin) / plotRange) * 100
                            return `${x},${y}`
                        }).join(' ')}
                    />
                </svg>

                {data.map((d, i) => {
                    const x = data.length === 1 ? 50 : (i / (data.length - 1)) * 100
                    const y = 100 - ((d.weightKg - plotMin) / plotRange) * 100
                    return (
                        <div
                            key={i}
                            className="absolute flex flex-col items-center"
                            style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                transform: 'translate(-50%, -120%)',
                            }}
                        >
                            <span className="text-[10px] text-gray-600 font-mono font-bold">{d.weightKg}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-0.5" />
                        </div>
                    )
                })}

                <div className="absolute left-0 right-0 -bottom-5 flex justify-between">
                    <span className="text-[9px] text-gray-400">{data[0].date.slice(5)}</span>
                    <span className="text-[9px] text-gray-400">{data[data.length - 1].date.slice(5)}</span>
                </div>
            </div>
        </div>
    )
}
