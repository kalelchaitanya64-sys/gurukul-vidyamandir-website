'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Phone, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react'

const classOptions = [
  'Std 1', 'Std 2', 'Std 3', 'Std 4', 'Std 5',
  'Std 6', 'Std 7', 'Std 8', 'Std 9', 'Std 10',
  'IIT JEE Mains & Advanced Coaching (Std 11-12)',
  'NEET UG Medical Coaching (Std 11-12)',
  'Foundation Program (Std 6-10)'
]

export default function AdmissionForm() {
  const t = useTranslations('admission')

  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    mobile: '',
    whatsappSame: true,
    whatsapp: '',
    classInterested: '',
    email: '',
    message: '',
    consent: false
  })

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target
    const value = target instanceof HTMLInputElement && target.type === 'checkbox'
      ? target.checked
      : target.value

    setFormData(prev => ({
      ...prev,
      [target.name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.consent) {
      alert('Please agree to receive updates via SMS and WhatsApp')
      return
    }

    setStatus('submitting')

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white border-2 border-emerald-400 rounded-3xl p-10 text-center shadow-xl">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={36} />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-2">
          Application Submitted Successfully!
        </h2>
        <p className="text-slate-600 mb-2">
          Thank you for choosing Gurukul Vidyamandir.
        </p>
        <p className="text-slate-800 font-semibold mb-6">
          Our academic coordinator will contact you on <strong>{formData.mobile}</strong> shortly.
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6 max-w-md mx-auto">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Need Immediate Assistance?
          </p>
          <a href="tel:+919673761468" className="text-blue-950 hover:text-amber-600 font-black text-xl flex items-center justify-center gap-2 transition">
            <Phone size={18} />
            +91 96737 61468
          </a>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="bg-slate-900 hover:bg-slate-800 text-amber-300 px-8 py-3.5 rounded-xl font-bold transition shadow-md"
        >
          Submit Another Application
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-xl border-2 border-slate-200/80 p-8 md:p-10 space-y-6"
    >
      {status === 'error' && (
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-center text-rose-700 font-semibold flex items-center justify-center gap-2">
          <AlertCircle size={18} />
          <span>Something went wrong. Please try again or call our office directly.</span>
        </div>
      )}

      {/* Student Name */}
      <div>
        <label className="block text-sm font-bold text-slate-800 mb-1.5">
          {t('student_name')} <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
          placeholder="Enter student's full name"
          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-900 transition bg-slate-50/50"
        />
      </div>

      {/* Parent Name */}
      <div>
        <label className="block text-sm font-bold text-slate-800 mb-1.5">
          {t('parent_name')} <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          required
          placeholder="Enter parent / guardian full name"
          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-900 transition bg-slate-50/50"
        />
      </div>

      {/* Mobile Number */}
      <div>
        <label className="block text-sm font-bold text-slate-800 mb-1.5">
          {t('mobile')} <span className="text-rose-500">*</span>
        </label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          placeholder="Enter 10-digit mobile number"
          maxLength={10}
          pattern="[0-9]{10}"
          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-900 transition bg-slate-50/50"
        />
      </div>

      {/* WhatsApp Same Checkbox */}
      <div className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
        <input
          type="checkbox"
          name="whatsappSame"
          id="whatsappSame"
          checked={formData.whatsappSame}
          onChange={handleChange}
          className="w-5 h-5 accent-blue-900 cursor-pointer rounded"
        />
        <label htmlFor="whatsappSame" className="text-sm font-semibold text-slate-700 cursor-pointer select-none">
          {t('whatsapp_same')}
        </label>
      </div>

      {/* WhatsApp Number - only show if not same */}
      {!formData.whatsappSame && (
        <div>
          <label className="block text-sm font-bold text-slate-800 mb-1.5">
            {t('whatsapp')}
          </label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="Enter WhatsApp mobile number"
            maxLength={10}
            className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-900 transition bg-slate-50/50"
          />
        </div>
      )}

      {/* Class Interested */}
      <div>
        <label className="block text-sm font-bold text-slate-800 mb-1.5">
          {t('class_interested')} <span className="text-rose-500">*</span>
        </label>
        <select
          name="classInterested"
          value={formData.classInterested}
          onChange={handleChange}
          required
          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 focus:outline-none focus:border-blue-900 transition bg-slate-50/50"
        >
          <option value="">{t('select_class')}</option>
          {classOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Email - Optional */}
      <div>
        <label className="block text-sm font-bold text-slate-800 mb-1.5">
          {t('email')} <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter parent or student email address"
          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-900 transition bg-slate-50/50"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-bold text-slate-800 mb-1.5">
          {t('message')} <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          placeholder="Any specific questions regarding hostel, transport, or syllabus..."
          className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-900 transition bg-slate-50/50 resize-none"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3 bg-blue-50/60 border border-blue-100 p-4 rounded-xl">
        <input
          type="checkbox"
          name="consent"
          id="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="w-5 h-5 accent-blue-900 mt-0.5 cursor-pointer rounded shrink-0"
        />
        <label htmlFor="consent" className="text-xs sm:text-sm text-slate-700 leading-relaxed cursor-pointer select-none">
          {t('consent')} <span className="text-rose-500 font-bold">*</span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-950 hover:from-blue-900 hover:to-indigo-900 disabled:opacity-60 text-amber-300 font-black py-4 rounded-xl text-lg transition shadow-lg flex items-center justify-center gap-2 border border-amber-400/20"
      >
        <span>{status === 'submitting' ? t('submitting') : t('submit')}</span>
        <ArrowRight size={20} />
      </button>

      {/* Direct Call Option */}
      <div className="text-center pt-2">
        <p className="text-slate-500 text-xs sm:text-sm mb-2 font-medium">या थेट कॉल करा / Or call admissions office directly:</p>
        <a href="tel:+919673761468" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3 rounded-xl shadow-xs transition text-sm">
          <Phone size={16} />
          <span>+91 96737 61468</span>
        </a>
      </div>
    </form>
  )
}