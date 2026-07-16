import { ArrowRight, ShieldCheck, Award, ChevronDown } from 'lucide-react'
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

const PHONE = '584244296940'

const Hero = () => {
  const { t, lang } = useLang()
  const whatsappMsg = encodeURIComponent(t.whatsapp.text)

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
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">
              <Award className="text-accent" size={14} />
              <span className="text-accent text-[10px] uppercase tracking-[0.15em] font-bold">{t.hero.badge}</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-white mb-4 leading-tight font-bold" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              {t.hero.title}<br />
              <span className="text-accent">{t.hero.titleAccent}</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-base text-gray-300 mb-4 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-6 inline-block">
              <p className="text-accent text-xs font-bold uppercase tracking-wider text-center">{t.hero.badgeUN}</p>
              <p className="text-gray-400 text-[10px] text-center">{t.hero.badgeUNSub}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 mb-6">
              <a href={`https://wa.me/${PHONE}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all shadow-lg shadow-green-600/25 hover:-translate-y-0.5 text-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 2.01.592 3.88 1.607 5.446L2.25 21.75l4.304-1.357A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.614 0-3.126-.489-4.384-1.325l-3.157 1.003 1.003-3.157A7.943 7.943 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg>
                {t.hero.cta}
              </a>
              <a href="#tramite" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all hover:-translate-y-0.5 text-sm">
                {lang === 'es' ? 'Formulario Web' : 'Web Form'}
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <div className="flex flex-wrap gap-3 mb-4">
                {[
                  { icon: ShieldCheck, label: `160+ ${t.hero.stats.paises}` },
                  { icon: ShieldCheck, label: `24-48h ${t.hero.stats.respuesta}` },
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
                    {lang === 'es' ? 'Latinoamérica y más de 160 países' : 'Latin America & 160+ countries'}
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

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex justify-center mt-8 md:hidden">
          <ChevronDown className="text-gray-400 animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
