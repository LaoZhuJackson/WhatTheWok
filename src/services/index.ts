// ── DeepSeek AI ──
export {
    getDeepSeekConfig,
    chat,
    generateMealSuggestion,
    generateDailySuggestions,
    aiMealToMeal,
} from './deepseek'
export type { DeepSeekConfig, AIRecommendedMeal } from './deepseek'

// ── Nutritionix 营养查询 ──
export {
    getNutritionixConfig,
    scaleToGrams,
    searchNatural,
    searchInstant,
    getStandardNutrition,
    getMealNutrition,
} from './nutritionix'
export type { NutritionixConfig, NutritionInfo, NutritionSearchResult } from './nutritionix'

// ── WxPusher 微信推送 ──
export {
    getWxPusherConfig,
    sendMessage,
    sendShoppingReminder,
    sendPostMealReminder,
    sendActivityReminder,
    isWxPusherReady,
    sendTestMessage,
} from './wxpusher'
export type { WxPusherConfig } from './wxpusher'