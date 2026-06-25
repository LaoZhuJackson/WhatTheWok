/** Date → "2026-06-25"（本地时间） */
export function toLocalDate(d: Date): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2,
        '0')}-${String(d.getDate()).padStart(2, '0')}`
}

/** "2026-06-25" → Date（本地时间） */
export function parseLocalDate(s: string): Date {
    const [y, m, d] = s.split('-').map(Number)
    return new Date(y, m - 1, d)
}

/** 获取给定日期所在周的周一 */
export function getMonday(d: Date): string {
    const date = new Date(d.getFullYear(), d.getMonth(), d.getDate())
    const day = date.getDay() || 7
    date.setDate(date.getDate() - day + 1)
    return toLocalDate(date)
}

/** 日期字符串 + n 天 */
export function addDays(dateStr: string, n: number): string {
    const d = parseLocalDate(dateStr)
    d.setDate(d.getDate() + n)
    return toLocalDate(d)
}