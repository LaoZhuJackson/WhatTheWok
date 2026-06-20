/**
 * 用户身体档案
 * 静态数据，偶尔更新
 */
export interface UserProfile {
    name: string
    age: number
    gender: 'male' | 'female'
    heightCm: number
    currentWeightKg: number
    targetWeightKg: number
    targetBodyFatPercent: number
    currentPhase: number       // 1 | 2 | 3
    phaseStartDate: string     // 当前阶段开始日期
    dailyStepsGoal: number     // 当前每日步数目标
}

/**
 * 身体测量记录（每周一次）
 */
export interface BodyMeasurement {
    date: string
    weightKg: number
    waistCm?: number
    bodyFatPercent?: number
    note?: string
}