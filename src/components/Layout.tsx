import type { ReactNode } from "react";

export type Tab = 'home' | 'meals' | 'history' | 'purchases' | 'settings'

interface LayoutProps {
    activeTab: Tab
    onTabChange: (tab: Tab) => void
    children: ReactNode
}

const TABS: { key: Tab; label: string; emoji: string }[] = [
    { key: 'home', label: '首页', emoji: '🏠' },
    { key: 'meals', label: '菜品', emoji: '🍳' },
    { key: 'history', label: '记录', emoji: '📋' },
    { key: 'purchases', label: '记账', emoji: '💰' },
    { key: 'settings', label: '设置', emoji: '⚙️' },
]

export default function Layout({ activeTab, onTabChange, children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* 页面内容区 */}
            <main className="flex-1 pb-16 overflow-auto">
                {children}
            </main>

            {/* 底部 Tab 栏 */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
                <div className="max-w-lg mx-auto flex justify-around">
                    {TABS.map(tab => (
                        <button
                            key={tab.key}
                            onClick={() => onTabChange(tab.key)}
                            className={`flex flex-col items-center py-2 px-4 text-xs transition-colors ${activeTab === tab.key
                                    ? 'text-green-600'
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            <span className="text-xl mb-0.5">{tab.emoji}</span>
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    )
}