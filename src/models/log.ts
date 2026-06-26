/**
 * 每日快照
 * 对应你每天填的那4个字段
 */
export interface DailySnapshot {
    date: string       // "2026-06-17"
    steps: number      // 当日步数
    ateOnPlan: boolean // 饮食是否按计划
    training: string   // 训练内容描述，如 "A" / "B" / "步行" / "爬坡" / "none"
    caloriesIn?: number // 从首页食谱同步过来的摄入量
    extraCalories?: number // 额外摄入（零食、奶茶、宵夜等计划外）
}

/**
 * 周记录
 * weekStart — 该周周一的日期
 * dailySnapshots — 该周每天的记录（最多7条）
 * weeklyNote — 可选，周末写的总结
 */
export interface WeeklyLog {
    weekStart: string
    dailySnapshots: DailySnapshot[]
    weeklyNote?: string
}

/**
 * 运动消耗记录
 * source — 'watch'(手表精确数据) | 'manual'(手动上报) | 'estimated'(引擎估算)
 */
export interface ExerciseRecord {
    id?: number          // Dexie 自增主键
    date: string
    type: string        // "步行" | "骑行" | "爬楼" | "力量训练" | "跑步" | ...
    durationMinutes: number
    calories: number    // 消耗热量
    source: 'watch' | 'manual' | 'estimated'
    note?: string
}