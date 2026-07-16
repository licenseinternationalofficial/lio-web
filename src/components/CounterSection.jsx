import { useState, useEffect, useRef } from 'react'
import { Clock, TrendingUp, ShieldCheck, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLang } from '../App'

function CountUp({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasRun.current) {
        hasRun.current = true
        const start = performance.now()
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          setCount(Math.floor(progress * end))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const CounterSection = () => {
  const { t } = useLang()

  return (
    <section className="py-14 sm:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{t.counter.title}</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">{t.counter.subtitle}</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Award, end: 5200, suffix: '+', label: t.counter.licenses },
            { icon: TrendingUp, end: 150, suffix: '+', label: t.counter.countries },
            { icon: Clock, end: 5, suffix: '+', label: t.counter.years },
            { icon: ShieldCheck, end: 98, suffix: '%', label: t.counter.satisfaction },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-3 border border-white/10">
                <item.icon size={22} className="text-accent" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                <CountUp end={item.end} suffix={item.suffix} />
              </p>
              <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CounterSection
