import { ShieldCheck, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLang } from '../App'
import unLogo from '../assets/images/un-logo.svg'
import fiaLogo from '../assets/images/fia-logo.svg'

const Hero = () => {
  const { t, lang } = useLang()

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-blue-50 text-primary rounded-full border border-blue-200 shadow-sm">
              <ShieldCheck size={18} />
              <span className="font-semibold tracking-wider text-xs uppercase">{t.hero.badge}</span>
            </div>

            <h1 className="font-serif text-secondary mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              {t.hero.title}<br />
              <span className="text-primary">{t.hero.titleAccent}</span>
            </h1>

            <p className="text-lg text-accent mb-10 leading-relaxed mx-auto" style={{ maxWidth: '650px' }}>
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <a href="#tramite" className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-hover transition-all hover:-translate-y-1 shadow-lg shadow-primary/30 inline-flex items-center gap-2">
                {t.hero.cta} <ArrowRight size={22} />
              </a>
              <a href="#verificar" className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all inline-flex items-center gap-2">
                {t.hero.verify}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-100">
                <h4 className="text-secondary font-bold text-2xl">+150</h4>
                <p className="text-xs text-accent uppercase tracking-widest font-medium">{t.hero.stats.paises}</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-100">
                <h4 className="text-secondary font-bold text-2xl">24h</h4>
                <p className="text-xs text-accent uppercase tracking-widest font-medium">{t.hero.stats.respuesta}</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-gray-100">
                <h4 className="text-secondary font-bold text-2xl">100%</h4>
                <p className="text-xs text-accent uppercase tracking-widest font-medium">{t.hero.stats.legal}</p>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60">
              <span className="text-xs text-accent uppercase tracking-widest font-medium">{lang === 'es' ? 'Reconocido por:' : 'Recognized by:'}</span>
              <img src={unLogo} alt="United Nations" className="h-10" />
              <img src={fiaLogo} alt="FIA" className="h-10" />
              <span className="text-xs text-accent font-medium">Convención de Ginebra 1949</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
