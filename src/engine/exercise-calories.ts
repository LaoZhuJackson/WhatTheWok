import type { UserProfile } from "../models";

/**
 * 运动类型及其 MET 值
 *
 * MET (Metabolic Equivalent of Task)：
 *   1 MET = 静坐，约 1 kcal/kg/h
 *   3 MET = 慢走，消耗是静坐的 3 倍
 *
 * 数据来源：Ainsworth et al., 2011 Compendium of Physical Activities
 * 这是运动科学界的标准参考
 */
export type ExerciseType =
    | 'walking'          // 平地步行 ~5km/h
    | 'briskWalking'     // 快走 ~6.4km/h
    | 'inclineWalking'   // 爬坡走（跑步机 12-15% 坡度，~5km/h）
    | 'stairClimbing'    // 爬楼梯
    | 'running'          // 跑步 ~8km/h
    | 'cycling'          // 骑行 ~16-19km/h
    | 'strength'         // 力量训练
    | 'stretching'       // 拉伸/瑜伽

const MET_VALUES: Record<ExerciseType, number> = {
    walking:        3.5,
    briskWalking:   5.0,
    inclineWalking: 8.0,   // 高坡度 + 慢速，燃烧效率接近跑步但对膝盖友好
    stairClimbing:  8.0,
    running:        8.3,
    cycling:        6.0,
    strength:       5.0,
    stretching:     2.5,
}

const EXERCISE_LABELS: Record<ExerciseType, string> = {
    walking:        '步行',
    briskWalking:   '快走',
    inclineWalking: '爬坡走',
    stairClimbing:  '爬楼梯',
    running:        '跑步',
    cycling:        '骑行',
    strength:       '力量训练',
    stretching:     '拉伸/瑜伽',
}

// ═══════════════════════════════════════
// 核心计算
// ═══════════════════════════════════════

/**
 * 按运动类型和时长计算消耗热量
 *
 * 公式：MET × 体重(kg) × 时长(小时) = 千卡
 *
 * 示例：你 57.5kg 爬坡走 30 分钟
 *   8.0 × 57.5 × 0.5 = 230 kcal
 *
 * @param weightKg  — 当前体重
 * @param type      — 运动类型
 * @param minutes   — 运动时长（分钟）
 */
export function calcExerciseCalories(
    weightKg: number,
    type: ExerciseType,
    minutes: number
): number{
    const met = MET_VALUES[type]
    const hours = minutes / 60
    return Math.round(met * weightKg * hours)
}

// ═══════════════════════════════════════
// 步数估算
// ═══════════════════════════════════════

/**
 * 步数 → 走路热量
 *
 * 两步半经验公式：
 *   1. 步数 × 步幅 = 距离(m)
 *   2. 距离 ÷ 配速 = 时长(min)
 *   3. MET × 体重 × 时长(h) = 千卡
 *
 * 默认参数（普通人）：
 *   步幅 0.7m（身高×0.43，你 1.65m → ≈0.71m）
 *   配速 5km/h（12min/km，悠闲走路）
 *   MET 3.5（平地步行）
 *
 * 你的估算：8000步 → 5.6km → 67min → 3.5×57.5×1.12 ≈ 225 kcal
 *
 * @param weightKg — 体重
 * @param steps    — 步数
 * @param stride   — 步幅（米），默认 0.7
 * @param speedKmh — 走路速度（km/h），默认 5
 */
export function calcStepsCalories(
    weightKg: number,
    steps: number,
    stride: number = 0.7,
    speedKmh: number = 5
): number {
    const distanceKm = (steps * stride) / 1000
    const hours = distanceKm / speedKmh
    const met = speedKmh >= 6 ? 5.0 : 3.5
    return Math.round(met * weightKg * hours)
}

/**
 * 步数 → 距离（公里）
 *
 * 你的步幅 ≈ 0.7m，
 * 10000步 ≈ 7km
 */
export function stepsToKm(steps: number, stride: number = 0.7): number{
    return +((steps * stride) / 1000).toFixed(2)
}

// ═══════════════════════════════════════
// 每日步行目标热量
// ═══════════════════════════════════════

/**
 * 计算每日步行目标的预估消耗
 *
 * 你的 12 周计划：
 *   Phase 1 (W1-4):  4000-8000 步
 *   Phase 2 (W5-8):  8000-10000 步
 *   Phase 3 (W9-12): 10000-12000 步
 *
 * 这让你直观看到步数增加带来的热量差异
 */

export function calcDailyWalkTarget(
    weightKg: number,
    targetSteps: number
): { distanceKm: number; calories: number; minutes: number}{
    const distanceKm = stepsToKm(targetSteps)
    const calories = calcStepsCalories(weightKg, targetSteps)
    const minutes = Math.round((distanceKm / 5) * 60) // 按 5km/h 算

    return { distanceKm, calories, minutes}
}

// ═══════════════════════════════════════
// 多种运动合并计算
// ═══════════════════════════════════════

export interface ExerciseEntry {
    type: ExerciseType
    minutes: number
}

/**
 * 一次计算多种运动的总消耗
 *
 * 场景：某天你做了 力量训练 40min + 爬坡走 20min
 *   calcTotalExerciseCalories(57.5, [
 *     { type: 'strength', minutes: 40 },
 *     { type: 'inclineWalking', minutes: 20 },
 *   ])
 *   → 5.0×57.5×0.67 + 8.0×57.5×0.33 = 192 + 153 = 345 kcal
 */
export function calcTotalExerciseCalories(
    weightKg: number,
    entries: ExerciseEntry[]
): { total: number; breakdown: { type: ExerciseType; label: string; calories: number }[] } {
    const breakdown = entries.map(e => ({
        type: e.type,
        label: EXERCISE_LABELS[e.type],
        calories: calcExerciseCalories(weightKg, e.type, e.minutes),
    }))

    const total = breakdown.reduce((sum, b) => sum + b.calories, 0)

    return { total, breakdown }
}

// ═══════════════════════════════════════
// 辅助
// ═══════════════════════════════════════

/**
 * 获取所有运动类型的下拉选项（给前端用）
 */
export function getExerciseOptions(): { value: ExerciseType; label: string; met: number }[] {
    return (Object.keys(MET_VALUES) as ExerciseType[]).map(key => ({
        value: key,
        label: EXERCISE_LABELS[key],
        met: MET_VALUES[key],
    }))
}
/**
 * 根据 MET 估算运动强度描述
 */
export function getIntensityLabel(met: number): string {
    if (met < 3) return '低强度'
    if (met < 6) return '中等强度'
    if (met < 9) return '高强度'
    return '极高强度'
}