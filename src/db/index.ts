// ── 数据库实例 ──
export {db, HealthDatabase} from './database'

// ── 菜品 CRUD ──
export {
    getAllMeals,
    getMealByType,
    getMealsByTypeAndPhase,
    getMealById,
    getMealsBySource,
    getMealsByTag,
    saveMeal,
    bulkSaveMeals,
    deleteMeal,
    clearAllMeals,
    getMealCount,
    bulkDeleteMeals,
} from './meals'

// ── 周日志 CRUD ──
export {
    getWeeklyLog,
    getAllWeeklyLogs,
    getRecentWeeklyLogs,
    saveWeeklyLog,
    upsertDailySnapshot,
    deleteWeeklyLog,
} from './logs'

// ── 运动记录 CRUD ──
export {
    getExercisesByDate,
    getExerciseCaloriesByDateAndType,
    getExercisesByWeek,
    addExerciseRecord,
    updateExerciseRecord,
    deleteExerciseRecord,
} from './exercises'

// ── 配置 CRUD ──
export {
    getDefaultSettings,
    getSettings,
    updateSettings,
} from './settings'

// ── 用户档案 CRUD ──
export {
    getUserProfile,
    saveUserProfile,
    getBodyMeasurements,
    addBodyMeasurement,
    getLatestBodyMeasurement,
} from './user'

// ── 食材参考库 CRUD ──
export {
    seedFoodReferences,
} from './foodref'

// ── 购买记录 CRUD ──
export {
    getAllPurchases,
    getPurchasesByName,
    getPurchasesByChannel,
    getRecentPurchases,
    getPurchasesByDateRange,
    addPurchaseRecord,
    bulkAddPurchases,
    deletePurchaseRecord,
    clearAllPurchases,
} from './purchases'