import { FileText, ShieldCheck } from 'lucide-react'
import { useLang } from '../App'
import { icons } from 'lucide-react'

const IconRenderer = ({ name, size = 24 }) => {
  const LucideIcon = icons[name]
  if (!LucideIcon) return null
  return <LucideIcon size={size} className="text-primary shrink-0" />
}

const Requirements = () => {
  const { t } = useLang()

  return (
    <section id="requisitos" className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif text-secondary mb-6">
              {t.requirements.title}<span className="text-primary">{t.requirements.titleAccent}</span>
            </h2>
            <p className="text-accent mb-10 leading-relaxed">{t.requirements.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.requirements.items.map((req, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                  <div className="p-2.5 bg-blue-50 rounded-lg">
                    <IconRenderer name={req.icon} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-1">{req.title}</h4>
                    <p className="text-xs text-accent leading-relaxed">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-dashed border-primary/40">
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary text-white rounded-full mb-6 shadow-lg shadow-primary/30">
                  <FileText size={32} />
                </div>
                <h3 className="text-2xl font-serif text-secondary mb-4">{t.requirements.sidebar.title}</h3>
                <p className="text-sm text-accent mb-8">{t.requirements.sidebar.desc}</p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 p-3 bg-bg-light rounded-xl">
                    <ShieldCheck size={18} className="text-green-500" />
                    <span className="text-sm font-medium text-secondary">{t.requirements.sidebar.feature1}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-bg-light rounded-xl">
                    <ShieldCheck size={18} className="text-green-500" />
                    <span className="text-sm font-medium text-secondary">{t.requirements.sidebar.feature2}</span>
                  </div>
                </div>
                <a href="#tramite" className="block w-full bg-primary text-white py-3.5 rounded-xl font-semibold hover:bg-primary-hover transition-all text-center">
                  {t.requirements.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Requirements
