# health-hub CLAUDE.md

吃啥好 — 个人健身饮食管理 Web App。AI 驱动的菜品推荐 + 身体塑形追踪。

## 技术栈

- Vite 8 + React 19 + TypeScript 6
- Tailwind CSS v4 (`@import "tailwindcss"` syntax)
- Dexie.js 4 (IndexedDB wrapper)
- DeepSeek API v4 (`deepseek-v4-pro` / `deepseek-v4-flash`)
- No router — tab-based state switching, editor takes full screen

## TypeScript 约束

- `verbatimModuleSyntax: true` → `import type` for type-only imports, `export type` for type re-exports
- barrel exports in `models/index.ts` must use `export type { ... } from './...'`
- `FormEvent` is deprecated in React 19 → use native `SubmitEvent`

## 项目结构

```
src/
├── models/     # TypeScript interfaces (meal, log, user, settings, shopping)
├── db/         # Dexie schema (database.ts) + per-table CRUD
├── engine/     # Pure functions — BMR, exercise calories, recommender, cost
├── services/   # API wrappers — DeepSeek, Nutritionix, WxPusher
├── components/ # Layout, CalorieBar, MealCard
├── pages/      # Home, Settings, Meals, MealEditor, History
├── App.tsx     # Tab router + editor overlay toggle
└── main.tsx    # Entry point
```

## 数据库

- **Dexie `HealthDatabase` class** — 7 tables, schema version 1
- Table keys: meals `&id`, weeklyLogs `&weekStart`, exerciseRecords `++id`, userProfile `&id`, bodyMeasurements `++id`, settings `&id`, purchaseRecords `++id`
- `userProfile` uses `id: 'self'` as PK — always pass `{ ...profile, id: 'self' }` on save
- `settings` uses `id: 'app'` as PK
- `saveXxx(obj, key?)` pattern: if using `put()`, PK must be in the object

## 关键实现细节

### AI 生成 (`deepseek.ts`)
- Endpoint: `POST https://api.deepseek.com/chat/completions` with Bearer token
- `chat()` returns `ChatResult { content, usage }`
- `generateBatchMeals()`: `maxTokens: 128000`, `temperature: 0.3`, no thinking (`reasoning_effort: 'low'`)
- JSON cleaning: strip ```json fences, try `JSON.parse`, fallback to array-finding
- Batch returns `AIRecommendedMeal[]` with `_usage` attached

### 日期处理 (HistoryPage)
- `toISOString()` returns UTC — don't use with `getDay()` / `setDate()` which use local time
- Created `toLocalDate()` and `parseLocalDate()` helpers for correct date ordering
- Use function-form `setState(prev => ...)` in loops to prevent stale closures

### 编辑器 (MealEditor)
- AI result overlay: dual-state (`aiLoading` + local `success` var), manual close only
- Queue-based batch save: `aiQueue[]` + `aiQueueIndex` + `handleSaveAndNext()`
- Auto-grow textareas: `autoGrow()` + `overflow-hidden` + `useEffect` recalibration
- `splitSteps()`: handles numbered/Chinese/dot-delimited step formats
- Food packaging converter: kJ→kcal, macros per-100g → actual grams

### 状态管理
- All persistence via Dexie (IndexedDB), no server
- API keys stored in settings table, runtime configurable
- `useState` with function updaters to avoid stale closures

## 运行

```bash
cd health-hub
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc + vite build → dist/
npm run preview  # preview production build
```

## 待完成

1. 食材价格录入 UI
2. 批量删除/导出/导入
3. Nutritionix 审核通过后集成
4. GitHub Pages 部署
5. ~~手机步数自动获取~~ — 不可行（浏览器无系统健康数据权限）
