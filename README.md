# 🍽️ 吃啥好 — 个人健康中枢

一个帮助执行 **BRO-Unlock 步行减脂协议** 的渐进式 Web 应用（PWA）。管理菜品与营养摄入，追踪运动消耗，AI 驱动个性化菜单推荐。

---

## ✨ 核心功能

| 模块 | 说明 |
|------|------|
| 🧠 **AI 菜单推荐** | 读取你的阶段、体重、近期消耗，自动推荐三餐（热量+食材+做法） |
| 📝 **菜品管理** | 手动录入 / AI 生成 / Nutritionix 查询三种来源，自动计算营养素 |
| 🏃 **运动上报** | 步数 + 训练打卡 + 手表数据，引擎自动估算未记录的活动消耗 |
| 📊 **周报统计** | 能量平衡趋势、体重/腰围变化、阶段进度、步数达标率 |
| 🔔 **微信推送** | 饭后走路提醒、周末买菜提醒、运动不足告警（基于 WxPusher） |
| 📱 **PWA** | 添加手机主屏幕即用，接近原生 App 体验 |

---

## 🛠️ 技术栈

| 层 | 选型 |
|---|------|
| 框架 | React 18 + TypeScript |
| 构建 | Vite |
| 样式 | Tailwind CSS |
| 本地数据库 | Dexie.js（IndexedDB 封装） |
| 路由 | React Router |
| AI | DeepSeek API（chat + reasoner 双模） |
| 营养查询 | Nutritionix API（可选） |
| 推送 | WxPusher（微信） |
| 部署 | GitHub Pages + PWA |

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
│   ├── models/          # TypeScript 类型定义
│   │   ├── meal.ts      # 菜品/食材
│   │   ├── log.ts       # 日/周记录、运动消耗
│   │   ├── user.ts      # 用户档案、身体测量
│   │   └── settings.ts  # 应用配置
│   ├── db/              # Dexie 数据库定义 + CRUD
│   ├── engine/          # 业务逻辑（热量估算、推荐、AI上下文生成）
│   ├── services/        # 外部 API 封装（DeepSeek、Nutritionix、WxPusher）
│   ├── components/      # 可复用 React 组件
│   ├── pages/           # 页面级组件
│   ├── App.tsx
│   └── main.tsx
├── data/                # Git 追踪的结构化数据（示例文件）
├── scripts/             # 定时任务（GitHub Actions 用）
├── public/              # 静态资源 + PWA manifest
└── .github/workflows/   # CI/CD + 定时检查
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
