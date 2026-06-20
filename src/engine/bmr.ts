import type { UserProfile } from "../models";

/**
 * 活动系数
 *
 * 这些系数乘上 BMR 得到 TDEE（每日总消耗）
 */
export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive'

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
    sedentary:    1.2,   // 久坐不动，几乎不运动
    light:        1.375, // 每周轻量运动 1-3 天
    moderate:     1.55,  // 每周中等强度运动 3-5 天
    active:       1.725, // 每周高强度运动 6-7 天
    veryActive:   1.9,   // 高强度体力工作 + 每天训练
}

const ACTIVITY_LABELS: Record<ActivityLevel, string> = {
    sedentary:    '久坐（几乎不运动）',
    light:        '轻度活动（每周 1-3 天运动）',
    moderate:     '中度活动（每周 3-5 天运动）',
    active:       '高度活动（每周 6-7 天运动）',
    veryActive:   '极高活动（体力劳动 + 每天训练）'
}

// ═══════════════════════════════════════
// 核心计算
// ═══════════════════════════════════════

/**
 * 计算 BMR（基础代谢率）
 *
 * Mifflin-St Jeor 公式：
 *   男性：10 × 体重 + 6.25 × 身高 - 5 × 年龄 + 5
 *   女性：10 × 体重 + 6.25 × 身高 - 5 × 年龄 - 161
 *
 * 公式来源：Mifflin et al., 1990
 * 适用人群：正常体重到中度肥胖的成年人，误差约 ±10%
 *
 * @returns BMR（千卡/天），四舍五入到整数
 */
export function calcBMR(profile:Pick<UserProfile, 'gender' | 'currentWeightKg' | 'heightCm' | 'age'>):number{
    const base = 10 * profile.currentWeightKg + 6.26 * profile.heightCm - 5 * profile.age
    const bmr = profile.gender === 'male' ? base + 5 : base - 161
    return Math.round(bmr)
}

/**
 * 计算 TDEE（每日总消耗）
 *
 * TDEE = BMR × 活动系数
 * 这是你一天真正消耗的热量，包括基础代谢 + 日常活动 + 运动
 *
 * @returns TDEE（千卡/天）
 */
export function calcTDEE(bmr: number, activity: ActivityLevel): number{
    return Math.round(bmr * ACTIVITY_MULTIPLIERS[activity])
}

// ═══════════════════════════════════════
// 热量目标
// ═══════════════════════════════════════

/**
 * 计算减脂期热量目标
 *
 * 制造 300-500 kcal 的热量缺口：
 *   - 你目前 BMI≈21，属于正常体重范围
 *   - 目标是体脂 <15% + 出腹肌，属于 body recomposition
 *   - 缺口不宜太大（否则掉肌肉），建议 300-400 kcal
 *
 * 下限保护：不低于 BMR（否则代谢受损）
 */
export function calcCuttingCalories(tdee:number, deficit: number = 350): number{
    return Math.max(tdee - deficit, 0)
}

/**
 * 计算增肌期热量目标
 *
 * 轻度盈余 200-400 kcal，尽量让多余热量去合成肌肉而非储存脂肪
 */
export function calcBulkingCalories(tdee: number, surplus: number = 300):number{
    return tdee + surplus
}

/**
 * 计算维持期热量目标
 */
export function calcMaintenanceCalories(tdee: number): number{
    return tdee
}

// ═══════════════════════════════════════
// 宏量营养素分配
// ═══════════════════════════════════════
export interface MacroTarget {
    protein: number  // 克
    carbs: number    // 克
    fat: number      // 克
    calories: number // 总热量（验证用：protein×4 + carbs×4 + fat×9 应接近此值）
}

/**
 * 按目标和体重计算宏量营养素分配
 *
 * 减脂期逻辑（你当前的目标）：
 *   蛋白质：2.2g/kg — 保护肌肉不流失（减脂期蛋白需求比增肌期还高）
 *   脂肪：  0.8g/kg — 维持激素水平，不低于 0.6g/kg
 *   碳水：  剩余热量 ÷ 4
 *
 * 三大营养素热量密度：
 *   蛋白质：4 kcal/g
 *   碳水：  4 kcal/g
 *   脂肪：  9 kcal/g
 *
 * @param targetCalories — 目标热量
 * @param weightKg       — 当前体重
 * @param goal           — 'cut' | 'maintain' | 'bulk'
 */
export function calcMacros(
    targetCalories: number,
    weightKg: number,
    goal: 'cut' | 'maintain' | 'bulk'
): MacroTarget{
    let proteinPerKg:number
    let fatPerKg: number

    switch(goal){
        case 'cut':
            proteinPerKg = 2.2 // 减脂期高蛋白保护肌肉
            fatPerKg = 0.8 // 下限，维持激素
            break
        case 'maintain':
            proteinPerKg = 1.8
            fatPerKg = 1.0
            break
        case 'bulk':
            proteinPerKg = 1.8   // 增肌期蛋白需求比减脂期低
            fatPerKg = 1.0
            break
    }

    const protein = Math.round(weightKg * proteinPerKg)
    const fat = Math.round(weightKg * fatPerKg)
    const proteinCals = protein * 4
    const fatCals = fat * 9
    const carbCals = targetCalories - proteinCals - fatCals
    const carbs = Math.round(Math.max(carbCals/ 4, 0)) // 保底不超过0

    return {
        protein,
        carbs,
        fat,
        calories: protein * 4 + carbs * 4 + fat * 9,
    }
}

// ═══════════════════════════════════════
// 辅助
// ═══════════════════════════════════════

/**
 * 获取活动系数的可读标签
 */
export function getActivityLabel(level: ActivityLevel): string{
    return ACTIVITY_LABELS[level]
}

/**
 * 获取所有活动等级（给前端下拉框用）
 */
export function getActivityLevels():{value : ActivityLevel; label: string}[]{
    return (Object.keys(ACTIVITY_MULTIPLIERS) as ActivityLevel[]).map(key => ({
        value: key,
        label: ACTIVITY_LABELS[key],
    }))
}

/**
 * 开发调试用
 */
export function quickEstimate(): {
    bmr: number
    tdee: number
    cutting: number
    macros: MacroTarget
} {
    const profile = {
        gender: 'male' as const,
        age: 25,
        currentWeightKg: 57.5,
        heightCm: 165,
    }

    const bmr = calcBMR(profile)
    const tdee = calcTDEE(bmr, 'sedentary')
    const cutting = calcCuttingCalories(tdee, 350)
    const macros = calcMacros(cutting, profile.currentWeightKg, 'cut')

    return { bmr, tdee, cutting, macros }
}