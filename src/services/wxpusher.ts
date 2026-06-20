import { getSettings } from "../db";

// ═══════════════════════════════════════
// 配置
// ═══════════════════════════════════════
export interface WxPusherConfig {
    appToken: string
    uid: string
}

/**
 * 从 Settings 获取 WxPusher 配置
 */
export async function getWxPusherConfig(): Promise<WxPusherConfig | null> {
    const settings = await getSettings()
    if (!settings.wxpusherAppToken || !settings.wxpusherUid) return null
    return {
        appToken: settings.wxpusherAppToken,
        uid: settings.wxpusherUid,
    }
}

// ═══════════════════════════════════════
// 发送消息
// ═══════════════════════════════════════

const API_URL = 'https://wxpusher.zjiecode.com/api/send/message'

/**
 * 发送微信推送消息
 *
 * contentType:
 *   1 = 纯文本
 *   2 = HTML（支持基础的 HTML 标签）
 *   3 = Markdown（推荐，支持加粗/链接/列表）
 *
 * @returns 是否发送成功
 */
export async function sendMessage(
    config: WxPusherConfig,
    content: string,
    options?: {
        contentType?: 1 | 2 | 3
        summary?: string   // 消息摘要，最长 100 字符
        url?: string        // 点击消息跳转的链接
    }
): Promise<boolean> {
    const body: Record<string, unknown> = {
        appToken: config.appToken,
        content,
        contentType: options?.contentType ?? 3, // 默认 Markdown
        uids: [config.uid],
    }

    if (options?.summary) body.summary = options.summary.slice(0, 100)
    if (options?.url) body.url = options.url

    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })

        const json = await res.json()
        return json.code === 1000
    } catch (err) {
        console.error('WxPusher 发送失败:', err)
        return false
    }
}

// ═══════════════════════════════════════
// 预置提醒
// ═══════════════════════════════════════

/**
 * 周六买菜提醒
 *
 * 触发条件：周六上午 10:00
 * 内容：本周训练次数回顾 + 下周买菜清单提醒
 */
export async function sendShoppingReminder(
    config: WxPusherConfig,
    weekNote?: string
): Promise<boolean> {
    const content = `### 🛒 周六买菜提醒

    该去采购下周的口粮了！

    ${weekNote ? `> 本周笔记：${weekNote}` : ''}

    **采购原则：**
    - 蛋白质优先（鸡胸肉、鸡蛋、豆腐、虾仁）
    - 蔬菜多囤（西兰花、菠菜、黄瓜、番茄）
    - 主食选杂粮（糙米、荞麦面、红薯、燕麦）
    - 调味料补货（酱油、料酒、蒜、姜）

    [查看完整购物清单]`

    return sendMessage(config, content, {
        summary: '🛒 该去采购下周口粮了',
        contentType: 3,
    })
}

/**
 * 饭后走路提醒
 *
 * 触发条件：用户开启后，早/中/晚餐后推送
 *
 * 饭后走 10-15 分钟的好处：
 *   - 降低餐后血糖波动
 *   - 把部分碳水热量分流到肌肉（而非存成脂肪）
 *   - 增加全天 NEAT
 */
export async function sendPostMealReminder(
    config:WxPusherConfig,
    mealType: string
): Promise<boolean> {
    const emoji = mealType === '早餐' ? '🌅' : mealType === '午餐' ? '☀️' : '🌙'

    return sendMessage(config, [
        `### ${emoji} ${mealType}后的走路提醒`,
        ``,
        `现在起身走 **10-15 分钟**，随便去哪儿都行。`,
        ``,
        `> 每天 3 次饭后走 = 额外 30-45 分钟 NEAT`,
        `> 大约 **+150-200 kcal** 额外消耗`,
        ``,
        `走完回来继续搬砖 💪`,
    ].join('\n'), {
        summary: `${mealType}后，起来走走吧`,
        contentType: 3,
    })
}

/**
 * 运动不足提醒
 *
 * 触发条件：下午 17:00，当日步数 < 目标的 50%
 */
export async function sendActivityReminder(
    config: WxPusherConfig,
    currentSteps: number,
    goalSteps: number,
    remaining: number
): Promise<boolean> {
    const pct = Math.round(currentSteps / goalSteps * 100)

    return sendMessage(config, [
        `### ⚠️ 活动量不足`,
        ``,
        `当前步数：**${currentSteps.toLocaleString()}** / ${goalSteps.toLocaleString()}（${pct}%）`,
        `还差：**${remaining.toLocaleString()}** 步`,
        ``,
        `**建议：**`,
        `- 下班散步 20 分钟 → ~2000 步`,
        `- 绕小区走两圈 → ~1500 步`,
        `- 去远一点的餐厅吃饭 → ~1000 步`,
        ``,
        `晚上睡前凑够数，别让今天白费 🌙`,
    ].join('\n'), {
        summary: `还差 ${remaining.toLocaleString()} 步，起来走走`,
        contentType: 3,
    })
}

// ═══════════════════════════════════════
// 通用：检查是否可用
// ═══════════════════════════════════════

/**
 * 检查 WxPusher 是否已配置
 *
 * 前端可用来判断是否显示"开启微信推送"按钮
 */
export async function isWxPusherReady(): Promise<boolean>{
    const config = await getWxPusherConfig()
    return config !== null
}

/**
 * 测试推送是否正常
 *
 * 配置页可以放一个"测试推送"按钮，点一下看能不能收到消息
 */
export async function sendTestMessage(config: WxPusherConfig): Promise<boolean> {
    return sendMessage(config, [
        `### ✅ WxPusher 连接成功`,
        ``,
        `这是一条测试消息。`,
        `如果你收到这条消息，说明 appToken 和 UID 配置正确。`,
        ``,
        `> 今天吃啥好 🤖`,
    ].join('\n'), {
        summary: 'WxPusher 配置测试',
        contentType: 3,
    })
}