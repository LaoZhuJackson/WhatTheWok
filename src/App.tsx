import { useState } from 'react'
import Layout, { type Tab } from './components/Layout'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'
import MealsPage from './pages/MealsPage'
import MealEditor from './pages/MealEditor'
import HistoryPage from './pages/HistoryPage'
import PurchasesPage from './pages/PurchasesPage'
import type { Page } from './pages/MealsPage'

function App() {
  const [tab, setTab] = useState<Tab>('home')
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
    return <MealEditor mealId={editingMealId} onClose={handleCloseEditor}/>
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
    <Layout activeTab={tab} onTabChange={setTab}>
      {renderPage()}
    </Layout>
  )
}

export default App