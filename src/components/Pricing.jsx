import { Check, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLang } from '../App'

const Pricing = () => {
  const { t } = useLang()

  return (
    <section id="precios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-secondary mb-4">{t.pricing.title}</h2>
          <p className="text-accent mx-auto" style={{ maxWidth: '600px' }}>{t.pricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {t.pricing.plans.map((plan, index) => {
            const isRecommended = index === 1
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-8 border-2 flex flex-col relative ${isRecommended ? 'border-primary shadow-xl shadow-primary/10 scale-105 z-10' : 'border-gray-100 shadow-sm hover:shadow-md'}`}
              >
                {isRecommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Star size={14} fill="white" /> {t.pricing.recommended}
                  </div>
                )}

                <h3 className="text-xl font-serif text-secondary mb-2">{plan.title}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-secondary">{plan.price}</span>
                  <span className="text-accent text-sm">USD</span>
                </div>
                <p className="text-sm text-accent mb-6">{plan.desc}</p>

                <div className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <Check size={18} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="#tramite" className={`block text-center py-3.5 rounded-xl font-semibold transition-all ${
                  isRecommended
                    ? 'bg-primary text-white hover:bg-primary-hover shadow-md shadow-primary/30'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}>
                  {t.pricing.select}
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing
