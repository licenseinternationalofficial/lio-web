import { Globe, MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import { useLang } from '../App'

const Footer = () => {
  const { t } = useLang()

  return (
    <footer className="bg-bg-dark text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold font-serif">LIO</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">{t.footer.desc}</p>
            <div className="flex gap-4">
              <a href="mailto:license.internationa.official@gmail.com" className="text-gray-400 hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="tel:+584244296940" className="text-gray-400 hover:text-primary transition-colors" aria-label="Phone">
                <Phone size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary">{t.footer.quickLinks}</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">{t.nav.inicio}</a>
              <a href="#precios" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">{t.nav.precios}</a>
              <a href="#requisitos" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">{t.nav.requisitos}</a>
              <a href="#verificar" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">{t.nav.verificar}</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary">{t.footer.support}</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">{t.footer.faq}</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">{t.footer.terms}</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">{t.footer.privacy}</a>
              <a href="#admin" className="text-sm text-gray-600 hover:text-white transition-colors font-medium">{t.footer.adminAccess}</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-primary">{t.footer.contact}</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:license.internationa.official@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail size={16} className="text-primary shrink-0" />
                <span>license.internationa.official@gmail.com</span>
              </a>
              <a href="tel:+584244296940" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone size={16} className="text-primary shrink-0" />
                <span>+58 4244296940</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>International Business Hub</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
