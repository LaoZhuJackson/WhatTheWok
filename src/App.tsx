import { useState, useEffect } from 'react'
import Layout, { type Tab } from './components/Layout'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'
import MealsPage from './pages/MealsPage'
import MealEditor from './pages/MealEditor'
import HistoryPage from './pages/HistoryPage'
import PurchasesPage from './pages/PurchasesPage'
import { ToastProvider } from './components/Toast'
import { seedFoodReferences } from './db'
import type { Page } from './pages/MealsPage'

function App() {
  const [tab, setTab] = useState<Tab>('home')

  useEffect(() => {
    seedFoodReferences()
  }, [])
  const [page, setPage] = useState<Page>('home')
  const [editingMealId, setEditingMealId] = useState<string | null>(null)

  function handleEditMeal(id: string | null){
    setEditingMealId(id)
    setPage('editor')
  }

  function handleCloseEditor(){
    setEditingMealId(null)
    setPage('home')
  }

  // 编辑器独占全屏
  if(page === 'editor'){
    return (
      <ToastProvider>
        <MealEditor mealId={editingMealId} onClose={handleCloseEditor}/>
      </ToastProvider>
    )
  }

  const renderPage = () => {
    switch (tab) {
      case 'home': return <HomePage />
      case 'meals': return <MealsPage onEditMeal={handleEditMeal}/>
      case 'history': return <HistoryPage />
      case 'purchases': return <PurchasesPage />
      case 'settings': return <SettingsPage />
    }
  }

  return (
    <ToastProvider>
      <Layout activeTab={tab} onTabChange={setTab}>
        {renderPage()}
      </Layout>
    </ToastProvider>
  )
}

export default App