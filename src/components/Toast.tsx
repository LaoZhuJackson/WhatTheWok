import { useState, useCallback, createContext, useContext } from 'react'
import type { ReactNode } from 'react'

type ToastType = 'success' | 'error' | 'warn'

interface ToastItem {
    id: number
    text: string
    type: ToastType
}

interface ToastCtx {
    show: (text: string, type?: ToastType, ms?: number) => void
}

const ToastContext = createContext<ToastCtx>({ show: () => {} })

let _nextId = 0

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<ToastItem[]>([])

    const show = useCallback((text: string, type: ToastType = 'success', ms: number = 2500) => {
        const id = ++_nextId
        setToasts(prev => [...prev, { id, text, type }])
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), ms)
    }, [])

    const remove = useCallback((id: number) => {
        setToasts(prev => prev.filter(t => t.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ show }}>
            {children}
            {/* Toast 容器：固定在底部，居中 */}
            <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none">
                {toasts.map(t => (
                    <div
                        key={t.id}
                        onClick={() => remove(t.id)}
                        className={`pointer-events-auto px-4 py-2.5 rounded-xl shadow-lg text-sm font-medium cursor-pointer animate-[bounce-in_0.3s_ease-out] ${
                            t.type === 'success' ? 'bg-green-500 text-white' :
                            t.type === 'error' ? 'bg-red-500 text-white' :
                            'bg-yellow-500 text-white'
                        }`}
                    >
                        {t.type === 'success' ? '✅ ' : t.type === 'error' ? '❌ ' : '⚠️ '}
                        {t.text}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    )
}

export function useToast(): ToastCtx {
    return useContext(ToastContext)
}
