# 🍽️ 吃啥好 · WhatTheWok

个人健身饮食管理 Web App — AI 驱动的三餐推荐 + 身体塑形追踪。

**线上地址**: [laozhujackson.github.io/WhatTheWok](https://laozhujackson.github.io/WhatTheWok/)

---

## 功能

| 模块 | 说明 |
|------|------|
| 🏠 **首页** | AI 每日三餐推荐，支持换一道微调，自动同步摄入量到记录 |
| 🍳 **菜品库** | 搜索/标签筛选/批量删除，JSON 导入导出（PC↔手机） |
| 📋 **记录** | 周步数柱状图、运动记录（19种类型+MET自动估算）、每日热量缺口 |
| 💰 **记账** | 食材购买记录，按食材名自动关联所有菜品成本 |
| ⚙️ **设置** | 身体档案、DeepSeek API Key、微信推送 |

### 编辑器亮点
- 🤖 **AI 生成菜品**：单道/批量，队列式保存/跳过/一键存全部
- 📊 **AI 估算营养**：填食材+克重 → 自动算热量/蛋白/碳水/脂肪
- 🔍 **食材实时搜索**：输入时下拉候选（1457 种来自中国食物成分表第6版），选中自动填名+单位
- 🍚 **包装食品换算器**：商品每100g数值 → 实际吃的量
- 📤 **导入/导出**：复制粘贴模式，PC↔手机免找文件

### 记录页亮点
- 🔥 **热量缺口**：BMR + 步数 + 运动 − 摄入，日均缺口一目了然
- 💥 **火焰特效**：步数超过目标150%时柱子火星粒子动画
- 🍩 **额外摄入**：零食/宵夜点一下记录，自动计入缺口

---

## 技术栈

React 19 · TypeScript 6 · Vite 8 · Tailwind CSS v4 · Dexie.js 4 · DeepSeek API v4

纯前端，数据存浏览器 IndexedDB，无需服务器。GitHub Pages 部署。

---

## 开发

```bash
cd health-hub
npm install
npm run dev       # http://localhost:5173
npm run deploy    # tsc + vite build + push gh-pages
```

---

## 数据同步

PC 导出 JSON → 复制 → 微信发送 → 手机粘贴导入。免找文件路径。

---

## 待完成

- [x] AI 菜品推荐
- [x] 批量删除/导出/导入
- [x] GitHub Pages 部署
- [x] 运动 MET 自动估算
- [x] 食材营养本地库 (1457条)
- [x] Toast 全局通知
- [ ] 食材价格录入 UI (数据层已完成)
- [x] ~~Nutritionix API~~ (已放弃，改用 DeepSeek和本地食材库)
- [x] ~~手机步数~~ (不可行，浏览器无系统健康数据权限)

## 许可

[MIT](LICENSE)
