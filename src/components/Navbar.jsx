import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import { useLang } from '../App'

const Navbar = () => {
  const { t, toggleLang, lang } = useLang()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: t.nav.inicio, href: '#' },
    { name: t.nav.precios, href: '#precios' },
    { name: t.nav.requisitos, href: '#requisitos' },
    { name: t.nav.verificar, href: '#verificar' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-sm py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="text-2xl font-bold font-serif text-secondary">LIO</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-medium text-secondary hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <button onClick={toggleLang} className="flex items-center gap-1 text-sm font-medium text-secondary hover:text-primary transition-colors" aria-label="Toggle language">
            <Globe size={16} />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a href="#tramite" className="bg-primary text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-primary-hover transition-all hover:-translate-y-0.5 shadow-md shadow-primary/30">
            {t.nav.tramite}
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleLang} className="flex items-center gap-1 text-sm font-medium text-secondary" aria-label="Toggle language">
            <Globe size={16} />
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-secondary" aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full py-5 flex flex-col items-center gap-4 border-t border-gray-200 animate-fadeIn">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium text-secondary" onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="#tramite" className="bg-primary text-white px-6 py-3 rounded-xl font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
            {t.nav.tramite}
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
