import { ArrowRight, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLang } from '../App'
import unLogo from '../assets/images/un-logo.svg'
import fiaLogo from '../assets/images/fia-logo.svg'

const flags = [
  { code: 'mx', name: 'México' }, { code: 'br', name: 'Brasil' },
  { code: 'ar', name: 'Argentina' }, { code: 'co', name: 'Colombia' },
  { code: 've', name: 'Venezuela' }, { code: 'pe', name: 'Perú' },
  { code: 'cl', name: 'Chile' }, { code: 'ec', name: 'Ecuador' },
  { code: 'uy', name: 'Uruguay' }, { code: 'py', name: 'Paraguay' },
  { code: 'bo', name: 'Bolivia' }, { code: 'cr', name: 'Costa Rica' },
  { code: 'gt', name: 'Guatemala' }, { code: 'pa', name: 'Panamá' },
  { code: 'do', name: 'Rep. Dominicana' }, { code: 'hn', name: 'Honduras' },
  { code: 'sv', name: 'El Salvador' }, { code: 'ni', name: 'Nicaragua' },
  { code: 'cu', name: 'Cuba' }, { code: 'pr', name: 'Puerto Rico' },
  { code: 'us', name: 'USA' }, { code: 'ca', name: 'Canadá' },
  { code: 'es', name: 'España' }, { code: 'gb', name: 'Reino Unido' },
]

const Hero = () => {
  const { t, lang } = useLang()

  return (
    <section className="relative overflow-hidden bg-primary min-h-screen flex items-center" style={{ paddingTop: '80px' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary/95" />
        <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20">
                <ShieldCheck className="text-accent" size={24} />
              </div>
              <span className="text-accent text-xs uppercase tracking-[0.25em] font-semibold">{t.hero.badge}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-white mb-4 leading-tight font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              {t.hero.title}<br />
              <span className="text-accent">{t.hero.titleAccent}</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-base text-gray-300 mb-3 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="flex items-center gap-2 mb-6 text-accent text-xs font-semibold">
              <ShieldCheck size={13} />
              <span>{t.hero.urgeText}</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href="#tramite" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-dark transition-all shadow-lg shadow-accent/25 hover:-translate-y-0.5" style={{ fontSize: '0.95rem' }}>
                {t.hero.cta} <ArrowRight size={20} />
              </a>
              <a href="#verificar" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all hover:-translate-y-0.5" style={{ fontSize: '0.95rem' }}>
                {t.hero.verify}
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  { icon: ShieldCheck, label: `150+ ${t.hero.stats.paises}` },
                  { icon: ShieldCheck, label: `24h ${t.hero.stats.respuesta}` },
                  { icon: ShieldCheck, label: `100% ${t.hero.stats.legal}` },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                    <s.icon size={14} className="text-accent" />
                    <span className="text-white font-semibold text-xs whitespace-nowrap">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {t.hero.trustBadges.map((b, i) => (
                  <span key={i} className="bg-white/10 text-white text-[10px] font-semibold px-2.5 py-1 rounded border border-white/10">{b}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden card-hover">
              <div className="p-6">
                <div className="text-center mb-5">
                  <h3 className="text-white text-base font-bold mb-1">{lang === 'es' ? 'Reconocido Internacionalmente' : 'Internationally Recognized'}</h3>
                  <div className="w-12 h-0.5 bg-accent mx-auto rounded-full" />
                </div>

                <div className="flex justify-center gap-6 mb-5">
                  <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 rounded-xl p-3 text-center border border-white/10 flex-1">
                    <img src={unLogo} alt="UN" className="h-10 mx-auto mb-2" />
                    <p className="text-white text-[10px] font-semibold">United Nations</p>
                    <p className="text-gray-500 text-[8px]">Ginebra 1949</p>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="bg-white/5 rounded-xl p-3 text-center border border-white/10 flex-1">
                    <img src={fiaLogo} alt="FIA" className="h-10 mx-auto mb-2" />
                    <p className="text-white text-[10px] font-semibold">FIA</p>
                    <p className="text-gray-500 text-[8px]">Fédération Internationale</p>
                  </motion.div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-gray-400 text-[10px] text-center mb-3 uppercase tracking-wider font-semibold">
                    {lang === 'es' ? 'Latinoamérica y más de 150 países' : 'Latin America & 150+ countries'}
                  </p>
                  <div className="grid grid-cols-6 gap-2">
                    {flags.map(f => (
                      <div key={f.code} className="flex flex-col items-center gap-0.5">
                        <img src={`https://flagcdn.com/24x18/${f.code}.png`} alt={f.name} className="rounded shadow-sm" loading="lazy" />
                        <span className="text-gray-400 text-[7px] font-medium truncate w-full text-center">{f.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-center">
                  <p className="text-gray-500 text-[8px] italic">
                    {lang === 'es' ? 'Convención de Ginebra 1949 · Convención de Viena 1968' : 'Geneva Convention 1949 · Vienna Convention 1968'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
