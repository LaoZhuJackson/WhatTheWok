// ── 基础代谢 ──
export {
    calcBMR,
    calcTDEE,
    calcCuttingCalories,
    calcBulkingCalories,
    calcMaintenanceCalories,
    calcMacros,
    getActivityLabel,
    getActivityLevels,
    quickEstimate,
} from './bmr'
export type { ActivityLevel, MacroTarget } from './bmr'

// ── 成本计算 ──
export {
    calcTotalSpend,
    calcAvgUnitPrice,
    findCheapestChannel,
    groupByMonth,
    estimateMealCost,
} from './cost'

// ── 运动热量估算 ──
export {
    calcExerciseCalories,
    calcStepsCalories,
    stepsToKm,
    calcDailyWalkTarget,
    calcTotalExerciseCalories,
    getExerciseOptions,
    getIntensityLabel,
} from './exercise-calories'
export type { ExerciseType, ExerciseEntry } from './exercise-calories'

// ── 推荐引擎 ──
export {
    getMealCalorieTargets,
    filterMealsByCalorieWindow,
    filterMealsByPhase,
    excludeRecentMeals,
    generateRecommendation,
    scoreRecommendation,
} from './recommender'
export type { MealRecommendation, DailyRecommendation } from './recommender'
