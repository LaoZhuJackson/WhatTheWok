import Dexie, { type Table } from 'dexie'
import type { Meal, WeeklyLog, ExerciseRecord, UserProfile, BodyMeasurement, AppSettings, PurchaseRecord} from '../models'

/**
 * 数据库类：继承 Dexie，定义所有表结构
 *
 * Dexie 的 schema 语法（定义在构造函数里）：
 *   "++id"           → id 是自增主键（数字）
 *   "&id"            → id 是唯一主键（字符串，类似 SQL 的 UNIQUE）
 *   "date, mealType" → 在 date 和 mealType 上建复合索引，可以按日期+餐型查
 *   "*tags"          → 在 tags 数组上建"多条目索引"，可以查某个 tag 属于哪些菜
 *
 * "&" 和 "++" 的区别：
 *   &  是自己提供 id（如 "bf-01"），插入重复 id 会报错
 *   ++ 是 Dexie 自动生成递增数字 id，你不用手动给
 */
export class HealthDatabase extends Dexie{
    meals!: Table<Meal, string>
    weeklyLogs!: Table<WeeklyLog, string>
    exerciseRecords!: Table<ExerciseRecord, number> //number主键，自增
    userProfile!: Table<UserProfile, string>
    bodyMeasurements!: Table<BodyMeasurement, number>
    settings!: Table<AppSettings, string>
    purchaseRecords!: Table<PurchaseRecord,number>

    constructor(){
        super('BROHealthHub')  // 数据库名称，在浏览器 DevTools → Application → IndexedDB 里能看到
        // 定义表结构 —— 每个版本用一个数字标记，方便以后迁移
        this.version(1).stores({
            meals: 
                '&id, mealType, calories, source, *phase, *tags',
            weeklyLogs: 
                '&weekStart',
            exerciseRecords:
                '++id, date, type, source',
            userProfile:
                '&name', //name做唯一键，毕竟是个人用户软件
            bodyMeasurements:
                '++id, date',
            settings:
                '&id',
            purchaseRecords:
                '++id, date, name, channelType, unitPrice',
        })
        // TODO:this.version(2) 以后加字段时在这里追加
    }
}

/**
 * 创建数据库单例
 * 全局只用一个实例，避免多次连接
 */
export const db = new HealthDatabase()