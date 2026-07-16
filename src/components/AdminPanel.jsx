import { useState } from 'react'
import { Lock, LayoutDashboard, UserPlus, FileUp, LogOut } from 'lucide-react'
import { useLang } from '../App'

const API_URL = import.meta.env.VITE_API_URL || '/.netlify/functions'

const AdminPanel = () => {
  const { t } = useLang()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    docId: '', nombre: '', vencimiento: '', categoria: '', file: null
  })
  const [uploading, setUploading] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    const adminPwd = import.meta.env.VITE_ADMIN_PASSWORD || 'LIO-ADMIN-2024'
    if (password === adminPwd) {
      setIsLoggedIn(true)
      setError('')
    } else {
      setError(t.admin.wrongPwd)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleFile = (e) => {
    if (e.target.files[0]) setForm(prev => ({ ...prev, file: e.target.files[0] }))
  }

  const handlePublish = async () => {
    if (!form.docId || !form.nombre || !form.vencimiento) {
      alert(t.admin.error)
      return
    }
    setUploading(true)
    try {
      const res = await fetch(`${API_URL}/add-license`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        alert(t.admin.success)
        setForm({ docId: '', nombre: '', vencimiento: '', categoria: '', file: null })
        document.getElementById('admin-file-input') && (document.getElementById('admin-file-input').value = '')
      } else {
        throw new Error()
      }
    } catch {
      alert(t.admin.error)
    }
    setUploading(false)
  }

  if (!isLoggedIn) {
    return (
      <section id="admin" className="py-24 bg-bg-light" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="max-w-sm mx-auto px-4 w-full">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-bg-light rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="text-secondary" size={28} />
            </div>
            <h2 className="text-xl font-serif text-secondary mb-6">{t.admin.title}</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <input type="password" placeholder={t.admin.password} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-center" />
              {error && <p className="text-red-500 text-xs">{error}</p>}
              <button type="submit" className="w-full bg-secondary text-white py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-all">{t.admin.enter}</button>
            </form>
            <p className="text-[10px] text-accent mt-8 uppercase tracking-widest font-medium">{t.admin.unauthorized}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-bg-light" style={{ minHeight: '100vh' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <LayoutDashboard size={28} className="text-primary" />
            <div>
              <h1 className="text-2xl font-serif text-secondary">{t.admin.dashboard}</h1>
              <p className="text-xs text-accent">{t.admin.dashboardSub}</p>
            </div>
          </div>
          <button onClick={() => setIsLoggedIn(false)} className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-gray-200 text-secondary font-semibold hover:bg-gray-100 transition-all">
            <LogOut size={18} /> {t.admin.logout}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl"><UserPlus size={24} /></div>
            <div>
              <span className="text-2xl font-bold text-secondary">-</span>
              <p className="text-xs text-accent">{t.admin.pending}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-xl"><FileUp size={24} /></div>
            <div>
              <span className="text-2xl font-bold text-secondary">-</span>
              <p className="text-xs text-accent">{t.admin.issued}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-amber-100 text-amber-600 rounded-xl"><Lock size={24} /></div>
            <div>
              <span className="text-2xl font-bold text-secondary">99.9%</span>
              <p className="text-xs text-accent">{t.admin.uptime}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-serif text-secondary mb-2">{t.admin.newLicense}</h3>
          <p className="text-sm text-accent mb-6">{t.admin.newLicenseDesc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-secondary mb-1.5">{t.admin.docNumLabel}</label>
              <input type="text" name="docId" value={form.docId} onChange={handleChange} placeholder={t.admin.docNumPlaceholder} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-1.5">{t.admin.nameLabel}</label>
              <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder={t.admin.namePlaceholder} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-1.5">{t.admin.expiryLabel}</label>
              <input type="date" name="vencimiento" value={form.vencimiento} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-1.5">{t.admin.categoryLabel}</label>
              <select name="categoria" value={form.categoria} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all">
                <option value="">--</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="A-B">A-B</option>
                <option value="B-C">B-C</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-secondary mb-1.5">{t.admin.fileLabel}</label>
              <input id="admin-file-input" type="file" onChange={handleFile} className="w-full px-4 py-3 rounded-xl border border-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-primary file:text-white file:font-medium file:text-sm hover:file:bg-primary-hover cursor-pointer" />
            </div>
            <div className="md:col-span-2">
              <button onClick={handlePublish} disabled={uploading} className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold hover:bg-primary-hover transition-all shadow-md shadow-primary/30 disabled:opacity-50">
                {uploading ? '...' : t.admin.publish}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminPanel
