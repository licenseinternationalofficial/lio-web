import { useState, createContext, useContext } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Requirements from './components/Requirements'
import ApplicationForm from './components/ApplicationForm'
import SearchLicense from './components/SearchLicense'
import AdminPanel from './components/AdminPanel'
import Footer from './components/Footer'
import { translations } from './data/translations'

export const LangContext = createContext()

export const useLang = () => useContext(LangContext)

function App() {
  const [lang, setLang] = useState('es')
  const t = translations[lang]
  const toggleLang = () => setLang(l => l === 'es' ? 'en' : 'es')

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      <div className="min-h-screen bg-bg-light">
        <Navbar />
        <main>
          <Hero />
          <Pricing />
          <Requirements />
          <ApplicationForm />
          <SearchLicense />
          <AdminPanel />
        </main>
        <Footer />
      </div>
    </LangContext.Provider>
  )
}

export default App
