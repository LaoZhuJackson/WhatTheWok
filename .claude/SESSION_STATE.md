# 会话暂停状态 — 2026-06-17

## 当前进度

项目开始搭建，架构和配置层确认完毕，正在写 DB 层代码。

## 已完成

- [x] 项目脚手架：Vite + React + TypeScript + Tailwind CSS + Dexie.js 跑通
- [x] 类型定义层：`src/models/` 全部建好
  - `meal.ts` — Meal, Ingredient, MealType
  - `log.ts` — DailySnapshot, WeeklyLog, ExerciseRecord
  - `user.ts` — UserProfile, BodyMeasurement
  - `settings.ts` — AppSettings
  - `index.ts` — barrel export
- [x] 数据库连接定义：`src/db/database.ts`（Dexie schema, version(1), 6张表）
- [x] `.gitignore` — 完整版
- [x] `README.md` — 项目 README
- [x] `.env.example` — 环境变量示例

## 正在做：DB 层 CRUD

代码已给出但用户还没敲完：
- `src/db/meals.ts` — 菜品 CRUD（getAllMeals, getMealsByType, getMealsByTypeAndPhase, getMealById, getMealsBySource, getMealsByTag, saveMeal, bulkSaveMeals, deleteMeal, clearAllMeals, getMealCount）
- `src/db/logs.ts` — 周日志 CRUD（getWeeklyLog, saveWeeklyLog, getAllWeeklyLogs, getRecentWeeklyLogs, upsertDailySnapshot, deleteWeeklyLog）
- `src/db/exercises.ts` — 运动记录 CRUD（getExercisesByDate, getExerciseCaloriesByDateAndType, addExerciseRecord, deleteExerciseRecord, getExercisesByWeek）
- `src/db/settings.ts` — 配置 CRUD（getDefaultSettings, getSettings, updateSettings）
- `src/db/user.ts` — 用户档案 CRUD（getUserProfile, saveUserProfile, getBodyMeasurements, addBodyMeasurement, getLatestBodyMeasurement）
- `src/db/index.ts` — 统一导出所有 CRUD 函数

以上代码在对话中已完整展示，用户需要逐个敲到对应文件里。

## 待决策：价格追踪功能

用户提出了记录食材购买价格和渠道的需求，已给出设计方案但**未决定现在加还是后面加**：
- 新增 `src/models/shopping.ts` — PurchaseRecord 接口
- 数据库加 `purchaseRecords` 表
- 新增 `src/engine/cost.ts` — 成本计算
- 新建 `src/db/purchases.ts` — 购买记录 CRUD

决策点：先做引擎核心（BMR/热量估算），还是现在就加价格模块。

## 下一步（按顺序）

1. 用户敲完 `src/db/` 下所有 CRUD 文件
2. 决定价格模块是否现在就加入
3. 开始引擎层：`src/engine/` — BMR 计算、热量消耗估算、推荐逻辑
4. 开始服务层：`src/services/` — DeepSeek API、Nutritionix API、WxPusher

## 重要上下文

- 用户是 25 岁男性，165cm，57.5kg，体脂目标 <15%
- 项目名称在 README 中改为 **"吃啥好"**
- 用户使用 DeepSeek 官方 API（deepseek-chat + deepseek-reasoner）
- 微信推送用 WxPusher（已调研确定）
- Claude 在此项目中扮演双重角色：健身教练 + 资深开发者
- 用户要求代码只展示不写入文件（自己敲），且需要讲解技术点
- 用户正在学习 React/TypeScript/Vite/Tailwind/Dexie.js 技术栈
