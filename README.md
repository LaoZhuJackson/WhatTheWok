# 🍽️ 吃啥好 — 个人健康中枢

一个帮助执行 **BRO-Unlock 步行减脂协议** 的渐进式 Web 应用（PWA）。管理菜品与营养摄入，追踪运动消耗，AI 驱动个性化菜单推荐。

---

## ✨ 核心功能

| 模块 | 状态 | 说明 |
|------|------|------|
| 🧠 **AI 菜单推荐** | ✅ 已实现 | DeepSeek v4 单道/批量生成，支持 reasoning_effort 调节，token 用量显示 |
| 📝 **菜品管理** | ✅ 已实现 | 手动录入 + AI 批量生成，智能步骤解析，食材单位/备注 |
| 🏃 **运动上报** | ✅ 已实现 | 步数 + 训练打卡，引擎估算消耗（MET），SVG 趋势图 |
| 📊 **周报统计** | ✅ 已实现 | 能量平衡、体重/腰围趋势、步数柱状图（本地日期修正） |
| ⚙️ **设置管理** | ✅ 已实现 | 身体数据、API Key、思考强度、提醒开关，即时持久化 |
| 🔔 **微信推送** | ✅ 代码就绪 | WxPusher 集成，需配置 appToken+UID 后启用 |
| 💰 **价格追踪** | 🚧 引擎层完成 | 模型/DB/计算已就绪，缺少录入 UI 页面 |
| 📦 **批量操作** | 🚧 待实现 | 批量删除/导出/导入菜品数据 |
| 🔍 **营养查询** | ⏳ 等待审核 | Nutritionix API 代码就绪，等待开发者账号审核 |
| 🚀 **部署上线** | 📋 待配置 | GitHub Pages 部署，PWA manifest 配置 |
| 📱 **手机步数** | ❌ 不可行 | 浏览器无法访问 HealthKit/Health Connect，保持手动输入 |

### 可行性评估（2026-06-21）

| 功能 | 可行性 | 理由 |
|------|--------|------|
| 记录食材价格 | ✅ 可行 | 数据层和引擎层已完成，只需建 UI（1个页面/组件） |
| 批量删除/导出/导入 | ✅ 可行 | Dexie 原生支持 bulkDelete/bulkPut，JSON 序列化即可 |
| Nutritionix API | ⚠️ 阻塞 | 代码已完成，等待用户开发者账号审核通过 |
| GitHub Pages 部署 | ✅ 可行 | Vite 原生支持，配置 `base` + GitHub Actions 即可 |
| 手机步数自动获取 | ❌ 不可行 | 浏览器沙箱无系统健康数据权限；替代：手动输入（已有）或未来 Capacitor 原生包装 |

---

## 🛠️ 技术栈

| 层 | 选型 |
|---|------|
| 框架 | React 19 + TypeScript 6 |
| 构建 | Vite 8 |
| 样式 | Tailwind CSS v4（`@import "tailwindcss"`） |
| 本地数据库 | Dexie.js 4（IndexedDB 封装，7 张表） |
| 导航 | Tab 状态切换（无路由库，编辑器独占全屏） |
| AI | DeepSeek API v4（`deepseek-v4-pro`，支持 reasoning_effort） |
| 营养查询 | Nutritionix API（可选，代码已就绪，等待审核通过） |
| 推送 | WxPusher（微信推送，代码已就绪） |
| 部署 | GitHub Pages（待配置） |

---

## 🚀 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 打开 http://localhost:5173
```

---

## ⚙️ 配置 API

所有 API 均为**可选**，在 App 内"设置"页面运行时配置，数据保存在浏览器本地。

### AI 推荐（DeepSeek）

在 [DeepSeek API 平台](https://platform.deepseek.com/) 获取 API Key，填入设置页即可启用 AI 菜单推荐和 AI 推荐语。

### 营养查询（Nutritionix，可选）

在 [Nutritionix Developer](https://developer.nutritionix.com/) 注册免费账号，获取 `App ID` 和 `App Key`，用于自动查询食材热量。

### 微信推送（WxPusher，可选）

1. 打开 [WxPusher 管理后台](https://wxpusher.zjiecode.com/admin/)，微信扫码登录
2. 创建应用，获取 `appToken`
3. 关注 WxPusher 公众号，在后台获取你的 `UID`
4. 填入设置页，启用消息推送

---

## 📁 项目结构

```
health-hub/
├── src/
│   ├── models/              # TypeScript 类型定义
│   │   ├── meal.ts          # Meal, Ingredient, MealType
│   │   ├── log.ts           # DailySnapshot, WeeklyLog, ExerciseRecord
│   │   ├── user.ts          # UserProfile, BodyMeasurement
│   │   ├── settings.ts      # AppSettings (API keys, reminder toggles)
│   │   ├── shopping.ts      # PurchaseRecord (食材购买记录)
│   │   └── index.ts         # barrel export (export type)
│   ├── db/                  # Dexie 数据库 + CRUD
│   │   ├── database.ts      # HealthDatabase class (7 tables, schema v1)
│   │   ├── meals.ts         # 菜品 CRUD（含 bulkSave, getByType/Tag）
│   │   ├── logs.ts          # 周日志 CRUD（upsertDailySnapshot）
│   │   ├── exercises.ts     # 运动记录 CRUD
│   │   ├── user.ts          # 用户档案 CRUD (key='self')
│   │   ├── settings.ts      # 应用配置 CRUD (key='app')
│   │   ├── purchases.ts     # 购买记录 CRUD
│   │   └── index.ts         # 统一导出
│   ├── engine/              # 业务逻辑（纯函数，不依赖 DB）
│   │   ├── bmr.ts           # BMR/TDEE/热量缺口/宏量营养素计算
│   │   ├── exercise-calories.ts  # 步数/运动热量估算 (MET)
│   │   ├── recommender.ts   # 菜品推荐引擎（热量窗口+评分）
│   │   ├── cost.ts          # 价格分析、渠道比价、每餐成本
│   │   └── index.ts
│   ├── services/            # 外部 API 封装
│   │   ├── deepseek.ts      # DeepSeek AI（chat/completions）
│   │   ├── nutritionix.ts   # Nutritionix（natural/search/instant）
│   │   ├── wxpusher.ts      # WxPusher 微信推送
│   │   └── index.ts
│   ├── components/          # 可复用 UI 组件
│   │   ├── Layout.tsx       # Tab bar 布局
│   │   ├── MealCard.tsx     # 菜品卡片（食材+营养素+步骤）
│   │   └── CalorieBar.tsx   # 热量进度条
│   ├── pages/               # 页面组件
│   │   ├── HomePage.tsx     # 首页（AI 推荐+今日数据）
│   │   ├── MealsPage.tsx    # 菜品库（搜索/筛选/删除）
│   │   ├── MealEditor.tsx   # 菜品编辑器（手动+AI批量生成）
│   │   ├── HistoryPage.tsx  # 历史周报（步数/运动/体重图表）
│   │   └── SettingsPage.tsx # 设置（身体数据+API Key+提醒开关）
│   ├── App.tsx              # 顶级路由（tab + editor 切换）
│   ├── main.tsx             # React DOM 入口
│   └── index.css            # Tailwind v4 入口
├── public/                  # 静态资源 (PWA manifest 等)
├── index.html               # Vite 入口 HTML
├── vite.config.ts
├── package.json
├── tsconfig.json
├── .env.example
└── .gitignore
```

---

## 🏗️ 构建与部署

```bash
# 生产构建
npm run build

# 预览构建结果
npm run preview
```

部署到 GitHub Pages 时，修改 `vite.config.ts` 中的 `base` 为你的仓库名：

```ts
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

---

## 📄 许可

[MIT](LICENSE)
