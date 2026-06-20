/**
 * 应用配置
 * 所有 API key 均为可选 —— 用户不配就不启用对应功能
 *
 * 存储位置：IndexedDB（不是 .env 文件）
 * 原因：浏览器端运行的纯前端应用，环境变量只在构建时生效，
 *       用户的个人 key 需要运行时配置且持久化保存
 */
export interface AppSettings {
    // ---- AI ----
    deepseekApiKey?: string
    deepseekBaseUrl?: string  // 默认 "https://api.deepseek.com/v1"，如果用代理可以改

    // ---- 营养查询 ----
    nutritionixAppId?: string
    nutritionixAppKey?: string

    // ---- 微信推送 ----
    wxpusherAppToken?: string
    wxpusherUid?: string

    // ---- 提醒开关 ----
    enableShoppingReminder: boolean   // 周六买菜提醒
    enablePostMealReminder: boolean   // 饭后走路提醒
    enableActivityReminder: boolean   // 运动不足提醒
}