# health-hub CLAUDE.md

吃啥好 — 个人健身饮食管理 Web App。AI 驱动的菜品推荐 + 身体塑形追踪。

## 技术栈

- Vite 8 + React 19 + TypeScript 6
- Tailwind CSS v4 (`@import "tailwindcss"` syntax)
- Dexie.js 4 (IndexedDB wrapper)
- DeepSeek API v4 (`deepseek-v4-pro` / `deepseek-v4-flash`)
- No router — tab-based state switching, editor takes full screen
- GitHub Pages 部署 (`gh-pages`)

## TypeScript 约束

- `verbatimModuleSyntax: true` → `import type` for type-only imports
- `Ingredient.amount` (不是 `grams`) — 已全局重命名
- `Ingredient.unit` 必填 (不是 optional)

## 项目结构

```
src/
├── models/      # TypeScript interfaces
│   ├── meal.ts       # Meal, MealType, Ingredient, FoodReference
│   ├── log.ts        # DailySnapshot (含 caloriesIn, extraCalories), WeeklyLog
│   ├── user.ts       # UserProfile, BodyMeasurement
│   ├── settings.ts   # AppSettings
│   └── shopping.ts   # PurchaseRecord
├── db/          # Dexie schema (v2) + per-table CRUD
│   ├── database.ts   # HealthDatabase class, 8 tables
│   ├── meals.ts      # CRUD + bulkDelete + bulkSave
│   ├── logs.ts       # upsertDailySnapshot
│   ├── exercises.ts  # CRUD + updateExerciseRecord
│   ├── foodref.ts    # 1457条食物营养数据 + seedFoodReferences()
│   ├── purchases.ts  # CRUD + bulkAdd
│   ├── user.ts       # 用户档案 + 身体测量
│   └── settings.ts   # 应用配置
├── engine/      # Pure functions
│   ├── bmr.ts             # calcBMR, calcTDEE, calcCuttingCalories, calcMacros
│   ├── exercise-calories.ts # calcExerciseCalories, calcStepsCalories, MET table
│   ├── recommender.ts     # generateRecommendation, scoreRecommendation
│   └── cost.ts            # calcTotalSpend, estimateMealCost
├── services/    # External API
│   ├── deepseek.ts  # chat(), generateMealSuggestion, generateBatchMeals,
│   │                # estimateIngredientsNutrition (AI 补算)
│   └── wxpusher.ts  # 微信推送
├── components/  # Reusable UI
│   ├── Layout.tsx    # Bottom tab bar (🏠🍳📋💰⚙️)
│   ├── CalorieBar.tsx
│   ├── MealCard.tsx  # 换一道按钮 + 候选下拉
│   └── Toast.tsx     # ToastProvider + useToast() hook
├── pages/
│   ├── HomePage.tsx      # 每日推荐 + 换一道 + 自动同步摄入量
│   ├── MealsPage.tsx     # 菜品库(搜索/标签/导入导出/批量删除)
│   ├── HistoryPage.tsx   # 周记录(步数/运动/热量缺口/火焰特效)
│   ├── MealEditor.tsx    # 编辑器(食材实时搜索/AI生成/本地库估算)
│   ├── SettingsPage.tsx  # 用户档案 + API配置 + 身体测量
│   └── PurchasesPage.tsx # 记账页(购买记录/本月支出)
├── utils/
│   └── date.ts      # toLocalDate, parseLocalDate, getMonday, addDays
├── App.tsx          # Tab router + ToastProvider + seedFoodReferences
└── main.tsx         # Entry point
```

## 数据库

- **Dexie `HealthDatabase` class** — 8 tables, schema version 2
- Tables:
  - `meals` `&id` — 菜品
  - `weeklyLogs` `&weekStart` — 周记录
  - `exerciseRecords` `++id` — 运动记录
  - `userProfile` `&id` (PK = `'self'`)
  - `bodyMeasurements` `++id`
  - `settings` `&id` (PK = `'app'`)
  - `purchaseRecords` `++id` — 购买记录
  - `foodReferences` `&name` — 食材营养库 (v2 新增)
- Schema upgrade: `this.version(1).stores({...})` + `this.version(2).stores({foodReferences: '&name'})`

## 关键实现细节

### 食材营养估算
- 本地库 1457 条 (中国食物成分表第6版) → `FoodReference`
- 估算流程: 精确匹配 → 别名匹配 → 未知食材发 AI 补算 → 结果累加
- AI 函数: `estimateIngredientsNutrition()` — 仅接收未命中的食材
- 单位换算: `FoodReference.unitWeight` (如鸡蛋 1个=50g, 香蕉 1根=120g)
- 实时候选: `searchFoods()` + `matchScore()` — 字符重叠度评分, 精确→别名→前缀→模糊
- 数据生成: `scripts/extract-food-data.mjs` — 从 china-food-composition-data 提取, 括号清洗, 别名解析

### AI 生成 (`deepseek.ts`)
- `generateMealSuggestion()` — 单道生成
- `generateBatchMeals()` — 批量生成 (maxTokens: 128000, temperature: 0.3)
- `estimateIngredientsNutrition()` — 营养估算 (仅对未知食材)
- JSON cleaning: strip ```json fences, fallback array-finding

### 记录页 (HistoryPage)
- 日期工具提取到 `src/utils/date.ts` 共享
- `ensureWeek()` — 始终补齐7天, 防旧数据污染
- 热量缺口: BMR + 步数消耗 + 运动消耗 − 摄入 (从首页自动同步)
- 火焰特效: 步数超目标150%时柱子显示火星粒子动画

### 编辑器 (MealEditor)
- AI 批量生成: 队列式保存 (保存并下一道 / 跳过 / 全部保存)
- 食材实时搜索: textarea onChange → `searchFoods()` → 候选下拉 → 点选填入 (含单位)
- Auto-grow textareas: `data-autogrow` + `overflow-hidden`
- `splitSteps()`: 多格式步骤解析

### Toast 通知
- `ToastProvider` 包裹 App, `useToast()` hook 全局使用
- 替换所有 `setMsg` + `setTimeout` 和 `alert()` 模式
- 底部居中, 支持多消息叠加, 自动消失

## 运行

```bash
cd health-hub
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc + vite build → dist/
npm run deploy   # build + push to gh-pages
```

## 部署

- GitHub Pages: `https://laozhujackson.github.io/WhatTheWok/`
- `vite.config.ts` 需设置 `base: '/WhatTheWok/'`
- 每次发布: `git push origin main && npm run deploy`

## 待完成

1. 食材价格录入 UI — 数据层已完成, 缺 UI
2. ~~批量删除/导出/导入~~ ✅ 已完成
3. Nutritionix 审核通过后集成 — 已放弃, 改用 DeepSeek
4. ~~GitHub Pages 部署~~ ✅ 已完成
