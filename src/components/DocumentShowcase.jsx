import { motion } from 'framer-motion'
import { useLang } from '../App'
import { FileText, QrCode, Globe, Shield } from 'lucide-react'

const DocumentShowcase = () => {
  const { t, lang } = useLang()

  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-[0.2em]">Document</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            {lang === 'es' ? 'Tu Permiso' : 'Your Permit'}{' '}
            <span className="text-accent">{lang === 'es' ? 'Internacional' : 'Document'}</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-text-muted max-w-xl mx-auto mt-4">
            {lang === 'es'
              ? 'Recibirás un carnet físico con código QR y un folleto de traducción en 9 idiomas.'
              : 'You receive a physical card with QR code and a translation booklet in 9 languages.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="bg-primary rounded-2xl p-6 sm:p-8 shadow-xl border border-primary-medium relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-accent font-bold text-lg">LIO</p>
                    <p className="text-gray-500 text-[9px] uppercase tracking-widest">License International Official</p>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg px-3 py-1.5 text-center">
                    <p className="text-accent text-[10px] font-bold uppercase">Valid</p>
                    <p className="text-gray-500 text-[8px]">International</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 mb-4">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {[
                      { label: lang === 'es' ? 'Nombre' : 'Name', value: '_____' },
                      { label: lang === 'es' ? 'Nacionalidad' : 'Nationality', value: '_____' },
                      { label: lang === 'es' ? 'Válido Hasta' : 'Valid Until', value: '_____' },
                      { label: lang === 'es' ? 'Categoría' : 'Category', value: '_____' },
                    ].map((f, i) => (
                      <div key={i}>
                        <p className="text-gray-500 text-[9px] uppercase tracking-wider">{f.label}</p>
                        <p className="text-white text-sm font-semibold">{f.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <QrCode size={24} className="text-accent" />
                    <div>
                      <p className="text-white text-[9px] font-bold uppercase tracking-wider">{lang === 'es' ? 'Código QR' : 'QR Code'}</p>
                      <p className="text-gray-500 text-[8px]">{lang === 'es' ? 'Verificación' : 'Verification'}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                    <span className="text-white font-bold text-[10px]">UN</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary-light rounded-2xl -z-10" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
            {[
              { icon: FileText, title: lang === 'es' ? 'Carnet Físico' : 'Physical Card', desc: lang === 'es' ? 'Documento plastificado con tus datos y código QR de verificación.' : 'Laminated document with your data and QR verification code.' },
              { icon: Globe, title: lang === 'es' ? 'Traducción 9 Idiomas' : '9 Language Translation', desc: lang === 'es' ? 'Folleto de traducción oficial para que las autoridades verifiquen tus datos sin importar el idioma.' : 'Official translation booklet so authorities verify your data regardless of language.' },
              { icon: QrCode, title: lang === 'es' ? 'Verificación Electrónica' : 'Electronic Verification', desc: lang === 'es' ? 'Código QR que permite a las autoridades escanear y verificar tu licencia al instante.' : 'QR code allowing authorities to scan and instantly verify your license.' },
              { icon: Shield, title: lang === 'es' ? 'Respaldo Internacional' : 'International Backing', desc: lang === 'es' ? 'Avalado por la Convención de Ginebra 1949 y la Convención de Viena 1968.' : 'Endorsed by the Geneva Convention 1949 and Vienna Convention 1968.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-3 p-3 rounded-lg border border-primary-light bg-bg-section"
              >
                <div className="p-2 bg-accent-subtle rounded-lg shrink-0">
                  <item.icon size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm">{item.title}</h4>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DocumentShowcase
