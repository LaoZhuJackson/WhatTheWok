import { useState, useEffect } from 'react'
import {
    getUserProfile,
    saveUserProfile,
    getSettings,
    updateSettings,
    getBodyMeasurements,
    addBodyMeasurement,
    getLatestBodyMeasurement,
} from '../db'
import type { UserProfile, BodyMeasurement, AppSettings } from '../models'
import { isWxPusherReady, sendTestMessage, getWxPusherConfig, sendMessage } from '../services'

export default function SettingsPage() {
    // ── 用户档案 ──
    const [profile, setProfile] = useState<UserProfile | null>(null)
    const [latestMeasurement, setLatestMeasurement] = useState<BodyMeasurement | null>(null)
    const [profileMsg, setProfileMsg] = useState('')

    // ── 身体测量 ──
    const [weightInput, setWeightInput] = useState('')
    const [waistInput, setWaistInput] = useState('')
    const [bfInput, setBfInput] = useState('')
    const [measureMsg, setMeasureMsg] = useState('')

    // ── API 配置 ──
    const [settings, setSettings] = useState<AppSettings | null>(null)
    const [deepseekKey, setDeepseekKey] = useState('')
    const [deepseekReasoning, setDeepseekReasoning] = useState<'low' | 'medium' | 'high' | 'xhigh' | 'max'>('low')
    const [wxpusherToken, setWxpusherToken] = useState('')
    const [wxpusherUid, setWxpusherUid] = useState('')
    const [wxpusherReady, setWxpusherReady] = useState(false)
    const [testMsg, setTestMsg] = useState('')
    const [settingsMsg, setSettingsMsg] = useState('')

    // ── 档案表单 ──
    const [form, setForm] = useState({
        name: 'laozhu',
        age: 25,
        gender: 'male' as 'male' | 'female',
        heightCm: 165,
        currentWeightKg: 60,
        targetWeightKg: 55,
        targetBodyFatPercent: 14,
        currentPhase: 1,
        phaseStartDate: new Date().toISOString().slice(0, 10),
        dailyStepsGoal: 6000,
    })

    useEffect(() => {
        loadData()
    }, [])

    async function loadData() {
        // 用户档案
        const p = await getUserProfile()
        if (p) {
            setProfile(p)
            setForm({
                name: p.name,
                age: p.age,
                gender: p.gender,
                heightCm: p.heightCm,
                currentWeightKg: p.currentWeightKg,
                targetWeightKg: p.targetWeightKg,
                targetBodyFatPercent: p.targetBodyFatPercent,
                currentPhase: p.currentPhase,
                phaseStartDate: p.phaseStartDate,
                dailyStepsGoal: p.dailyStepsGoal,
            })
        }

        // 最近一次测量
        const m = await getLatestBodyMeasurement()
        if (m) setLatestMeasurement(m)

        // 应用配置
        const s = await getSettings()
        setSettings(s)
        setDeepseekKey(s.deepseekApiKey || '')
        setDeepseekReasoning(s.deepseekReasoningEffort || 'low')
        setWxpusherToken(s.wxpusherAppToken || '')
        setWxpusherUid(s.wxpusherUid || '')

        // WxPusher 状态
        const ready = await isWxPusherReady()
        setWxpusherReady(ready)
    }

    // ── 保存档案 ──
    async function handleSaveProfile(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault()

        // 必填校验：性别、身高、当前体重、年龄
        if (!form.gender || !form.heightCm || !form.currentWeightKg || !form.age) {
            setProfileMsg('❌ 请填写所有必填字段（性别、身高、体重、年龄）')
            setTimeout(() => setProfileMsg(''), 2500)
            return
        }
        // 数值合法性
        if (form.heightCm < 100 || form.heightCm > 250) {
            setProfileMsg('❌ 身高范围异常')
            setTimeout(() => setProfileMsg(''), 2000)
            return
        }
        if (form.currentWeightKg < 30 || form.currentWeightKg > 200) {
            setProfileMsg('❌ 体重范围异常')
            setTimeout(() => setProfileMsg(''), 2000)
            return
        }
        if (form.age < 10 || form.age > 100) {
            setProfileMsg('❌ 年龄范围异常')
            setTimeout(() => setProfileMsg(''), 2000)
            return
        }

        try {
            await saveUserProfile({ ...form })
            setProfile({ ...form })
            setProfileMsg('✅ 已保存')
            setTimeout(() => setProfileMsg(''), 2000)
        } catch {
            setProfileMsg('❌ 保存失败')
        }
    }

    // ── 记录测量 ──
    async function handleAddMeasurement(e: React.SyntheticEvent<HTMLFormElement>) {
        if (!weightInput) {
            setMeasureMsg('❌ 体重为必填项')
            setTimeout(() => setMeasureMsg(''), 2000)
            return
        }

        const weight = parseFloat(weightInput)
        if (isNaN(weight) || weight < 30 || weight > 200) {
            setMeasureMsg('❌ 体重数值异常')
            setTimeout(() => setMeasureMsg(''), 2000)
            return
        }

        const record: BodyMeasurement = {
            date: new Date().toISOString().slice(0, 10),
            weightKg: weight,
            waistCm: waistInput ? parseFloat(waistInput) : undefined,
            bodyFatPercent: bfInput ? parseFloat(bfInput) : undefined,
        }

        await addBodyMeasurement(record)
        setLatestMeasurement(record)
        setWeightInput('')
        setWaistInput('')
        setBfInput('')
        setMeasureMsg('✅ 已记录')
        setTimeout(() => setMeasureMsg(''), 2000)
    }

    // ── 保存 API 配置 ──
    async function handleSaveSettings() {
        if (!deepseekKey.trim() && !wxpusherToken.trim() && !wxpusherUid.trim()) {
            setSettingsMsg('❌ 至少填写一项')
            setTimeout(() => setSettingsMsg(''), 2000)
            return
        }

        // WxPusher 要么全填，要么全不填
        if ((wxpusherToken.trim() && !wxpusherUid.trim()) || (!wxpusherToken.trim() && wxpusherUid.trim())) {
            setSettingsMsg('❌ WxPusher 需要 AppToken 和 UID 同时填写')
            setTimeout(() => setSettingsMsg(''), 2000)
            return
        }

        try {
            await updateSettings({
                deepseekApiKey: deepseekKey.trim() || undefined,
                deepseekReasoningEffort: deepseekReasoning,
                wxpusherAppToken: wxpusherToken.trim() || undefined,
                wxpusherUid: wxpusherUid.trim() || undefined,
                enableShoppingReminder: settings?.enableShoppingReminder ?? false,
                enablePostMealReminder: settings?.enablePostMealReminder ?? false,
                enableActivityReminder: settings?.enableActivityReminder ?? false,
            })
            const ready = wxpusherToken.trim() !== '' && wxpusherUid.trim() !== ''
            setWxpusherReady(ready)
            setSettingsMsg('✅ 已保存')
            setTimeout(() => setSettingsMsg(''), 2000)
        } catch (e) {
            setSettingsMsg('❌ 保存失败：' + (e instanceof Error ? e.message : '未知错误'))
            setTimeout(() => setSettingsMsg(''), 3000)
        }
    }

    // ── 测试推送 ──
    async function handleTestPush() {
        if (!wxpusherToken || !wxpusherUid) {
            setTestMsg('❌ 请先填写 AppToken 和 UID')
            setTimeout(() => setTestMsg(''), 3000)
            return
        }

        const ok = await sendMessage(
            { appToken: wxpusherToken.trim(), uid: wxpusherUid.trim() },
            [
                '### ✅ WxPusher 连接成功',
                '',
                '如果你收到这条消息，说明配置正确。',
                '',
                '> 你想好吃啥了吗 🤖',
            ].join('\n'),
            { summary: 'WxPusher 配置测试', contentType: 3 }
        )

        if (ok) {
            setTestMsg('✅ 测试成功，点下方保存即可')
            setWxpusherReady(true)
        } else {
            setTestMsg('❌ 发送失败，检查 token 和 UID')
        }
        setTimeout(() => setTestMsg(''), 4000)
    }

    // ── 表单通用更新 ──
    function update<K extends keyof typeof form>(field: K, value: typeof form[K]) {
        setForm(prev => ({ ...prev, [field]: value }))
    }

    return (
        <div className="p-4 space-y-6">
            <h1 className="text-xl font-bold text-gray-800">⚙️ 设置</h1>
            {/* 身体数据 */}
            <section>
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    👤 身体数据
                </h2>
                <form onSubmit={handleSaveProfile} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-3">
                    {/* 名字 */}
                    <Field label="名字">
                        <input
                            type="text"
                            value={form.name}
                            onChange={e => update('name', e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                            placeholder="你的名字"
                        />
                    </Field>

                    {/* 年龄 + 性别 */}
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="年龄" required>
                            <input
                                type="number"
                                value={form.age}
                                onChange={e => update('age', +e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                            />
                        </Field>
                        <Field label="性别" required>
                            <select
                                value={form.gender}
                                onChange={e => update('gender', e.target.value as 'male' | 'female')}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white"
                            >
                                <option value="male">男</option>
                                <option value="female">女</option>
                            </select>
                        </Field>
                    </div>

                    {/* 身高 + 体重 */}
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="身高 (cm)" required>
                            <input
                                type="number"
                                value={form.heightCm}
                                onChange={e => update('heightCm', +e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                            />
                        </Field>
                        <Field label="当前体重 (kg)" required>
                            <input
                                type="number"
                                step="0.1"
                                value={form.currentWeightKg}
                                onChange={e => update('currentWeightKg', +e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                            />
                        </Field>
                    </div>

                    {/* 目标体重 + 目标体脂 */}
                    <div className="grid grid-cols-2 gap-3">
                        <Field label="目标体重 (kg)">
                            <input
                                type="number"
                                step="0.1"
                                value={form.targetWeightKg}
                                onChange={e => update('targetWeightKg', +e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                            />
                        </Field>
                        <Field label="目标体脂 (%)">
                            <input
                                type="number"
                                value={form.targetBodyFatPercent}
                                onChange={e => update('targetBodyFatPercent', +e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                            />
                        </Field>
                    </div>

                    {/* 步数目标 */}
                    <Field label="每日步数目标">
                        <input
                            type="number"
                            value={form.dailyStepsGoal}
                            onChange={e => update('dailyStepsGoal', +e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                        />
                    </Field>

                    {/* 当前阶段 */}
                    <Field label="当前阶段">
                        <select
                            value={form.currentPhase}
                            onChange={e => update('currentPhase', +e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white"
                        >
                            <option value={1}>适应期(W1-4)</option>
                            <option value={2}>强化期(W5-8)</option>
                            <option value={3}>冲刺期(W9-12)</option>
                        </select>
                    </Field>

                    <button
                        type="submit"
                        className="w-full py-2.5 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 active:scale-[0.98] transition-all text-sm"
                    >
                        💾 保存身体数据
                    </button>
                </form>
            </section>

            {/* ═══ 每周测一次 ═══ */}
            <section>
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    📏 每周测量
                </h2>
                <form onSubmit={handleAddMeasurement} className='bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-3'>
                    {latestMeasurement && (
                        <p className="text-xs text-gray-400">
                            最近一次：{latestMeasurement.date} — {latestMeasurement.weightKg}kg
                            {latestMeasurement.waistCm && ` / 腰围 ${latestMeasurement.waistCm}cm`}
                            {latestMeasurement.bodyFatPercent && ` / 体脂 ${latestMeasurement.bodyFatPercent}%`}
                        </p>
                    )}

                    <div className='grid grid-col=3 gap-3'>
                        <Field label="体重 (kg)" required>
                            <input
                                type="number"
                                step="0.1"
                                value={weightInput}
                                onChange={e => setWeightInput(e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                                placeholder="如：57.5"
                            />
                        </Field>
                        <Field label="腰围 (cm)">
                            <input
                                type="number"
                                step="0.1"
                                value={waistInput}
                                onChange={e => setWaistInput(e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                                placeholder="如：75"
                            />
                        </Field>
                        <Field label="体脂 (%)">
                            <input
                                type="number"
                                step="0.1"
                                value={bfInput}
                                onChange={e => setBfInput(e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                                placeholder="如：20"
                            />
                        </Field>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2.5 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 active:scale-[0.98] transition-all text-sm"
                    >
                        📝 记录本次测量
                    </button>
                    {measureMsg && <p className="text-xs text-center text-green-600">{measureMsg}</p>}
                </form>
            </section>

            {/* ═══ API 配置 ═══ */}
            <section>
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    🔑 API 配置
                </h2>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-3">
                    {/* DeepSeek */}
                    <Field label="DeepSeek API Key">
                        <input
                            type="password"
                            value={deepseekKey}
                            onChange={e => setDeepseekKey(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                            placeholder="sk-xxxxxxxx"
                        />
                    </Field>

                    <Field label="思考强度">
                        <select
                            value={deepseekReasoning}
                            onChange={e => setDeepseekReasoning(e.target.value as typeof deepseekReasoning)}
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white"
                        >
                            <option value="low">低 — 轻度推理，省 token</option>
                            <option value="medium">中 — 适中思考</option>
                            <option value="high">高 — 深入推理</option>
                            <option value="xhigh">极高 — 复杂推理</option>
                            <option value="max">最大 — 穷尽思考，费 token</option>
                        </select>
                    </Field>
                    <p className="text-[11px] text-gray-400 -mt-1">
                        更高的思考强度会让 AI 在菜品搭配、热量计算上更准确，但消耗更多 token。
                    </p>

                    <p className="text-[11px] text-gray-400 -mt-1">
                        用于 AI 生成菜品推荐。去{' '}
                        <a href="https://platform.deepseek.com" target="_blank" rel="noopener noreferrer"
                            className="text-blue-500 underline">platform.deepseek.com</a>{' '}
                        注册，新用户送 500 万 token。
                    </p>
                    {/* WxPusher */}
                    <div className="border-t border-gray-100 pt-3">
                        <Field label="WxPusher AppToken">
                            <input
                                type="password"
                                value={wxpusherToken}
                                onChange={e => setWxpusherToken(e.target.value)}
                                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                                placeholder="AT_xxxxxxxx"
                            />
                        </Field>

                        <div className="mt-2">
                            <Field label="WxPusher UID">
                                <input
                                    type="text"
                                    value={wxpusherUid}
                                    onChange={e => setWxpusherUid(e.target.value)}
                                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                                    placeholder="UID_xxxxxxxx"
                                />
                            </Field>
                        </div>
                    </div>
                    <p className="text-[11px] text-gray-400 -mt-1">
                        微信推送提醒（饭后走路、运动不足、买菜提醒）。去{' '}
                        <a href="https://wxpusher.zjiecode.com/admin/" target="_blank" rel="noopener noreferrer"
                            className="text-blue-500 underline">wxpusher.zjiecode.com</a>{' '}
                        创建应用获取 token。
                    </p>

                    {/* 状态 + 测试 */}
                    <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-gray-400">
                            {wxpusherReady ? '🟢 已配置' : '⚪ 未配置'}
                        </span>
                        <button
                            type="button"
                            onClick={handleTestPush}
                            className="text-xs text-blue-500 hover:text-blue-600 px-3 py-1.5 border border-blue-200 rounded-lg
  disabled:opacity-30 disabled:cursor-not-allowed"
                            disabled={!wxpusherToken || !wxpusherUid}
                        >
                            测试推送
                        </button>
                    </div>
                    {testMsg && (
                        <p className={`text-xs text-center ${testMsg.startsWith('✅') ? 'text-green-600' : 'text-red-500'
                            }`}>{testMsg}</p>
                    )}

                    <button
                        type="button"
                        onClick={handleSaveSettings}
                        className="w-full py-2.5 bg-gray-800 text-white rounded-xl font-medium hover:bg-gray-900
  active:scale-[0.98] transition-all text-sm"
                    >
                        💾 保存 API 配置
                    </button>
                    {settingsMsg && (
                        <p className={`text-xs text-center ${settingsMsg.startsWith('✅') ? 'text-green-600' : 'text-red-500'
                            }`}>{settingsMsg}</p>
                    )}
                </div>
            </section>

            {/* ═══ 提醒开关 ═══ */}
            <section>
                <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    🔔 提醒设置
                </h2>
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-3">
                    <ToggleRow
                        label="🛒 周六买菜提醒"
                        desc="每周六上午推送，提醒采购下周口粮"
                        checked={settings?.enableShoppingReminder ?? false}
                        onChange={v => {
                            setSettings(prev => prev ? { ...prev, enableShoppingReminder: v } : null)
                            updateSettings({ enableShoppingReminder: v })
                        }}
                    />
                    <ToggleRow
                        label="🚶 饭后走路提醒"
                        desc="早/午/晚餐后推送，提醒起身走10分钟"
                        checked={settings?.enablePostMealReminder ?? false}
                        onChange={v => {
                            setSettings(prev => prev ? { ...prev, enablePostMealReminder: v } : null)
                            updateSettings({ enablePostMealReminder: v })
                        }}
                    />
                    <ToggleRow
                        label="⚠️ 运动不足提醒"
                        desc="下午5点步数不达标时推送"
                        checked={settings?.enableActivityReminder ?? false}
                        onChange={v => {
                            setSettings(prev => prev ? { ...prev, enableActivityReminder: v } : null)
                            updateSettings({ enableActivityReminder: v })
                        }}
                    />
                    <p className="text-[10px] text-gray-400">
                        开启前请确保微信推送已配置并测试通过。
                    </p>
                </div>
            </section>
        </div>
    )
}

/** 表单字段包装 */
function Field({ label, required, children }: {
    label: string
    required?: boolean
    children: React.ReactNode
}) {
    return (
        <label className="block">
            <span className="text-xs text-gray-500 mb-1 block">
                {label}
                {required && <span className="text-red-400 ml-0.5">*</span>}
                {!required && <span className="text-gray-300 text-[10px] ml-1">选填</span>}
            </span>
            {children}
        </label>
    )
}

function ToggleRow({ label, desc, checked, onChange }: {
    label: string
    desc: string
    checked: boolean
    onChange: (v: boolean) => void
}) {
    return (
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm text-gray-700">{label}</p>
                <p className="text-[10px] text-gray-400">{desc}</p>
            </div>
            <button
                type="button"
                onClick={() => onChange(!checked)}
                className={`relative w-10 h-6 rounded-full transition-colors ${checked ? 'bg-green-500' : 'bg-gray-300'
                    }`}
            >
                <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow
  transition-transform ${checked ? 'translate-x-4' : ''
                    }`} />
            </button>
        </div>
    )
}
