'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

const classOptions = [
  'Std 1', 'Std 2', 'Std 3', 'Std 4', 'Std 5',
  'Std 6', 'Std 7', 'Std 8', 'Std 9', 'Std 10',
  'IIT JEE Coaching',
  'NEET Coaching',
  'Foundation (Std 6-10)'
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
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
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
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-10 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          Application Submitted!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you! We will contact you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition"
        >
          Submit Another Application
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-md p-8 space-y-6"
    >
      {/* Student Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          {t('student_name')} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
          placeholder="Enter student full name"
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-green-500 transition"
        />
      </div>

      {/* Parent Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          {t('parent_name')} <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="parentName"
          value={formData.parentName}
          onChange={handleChange}
          required
          placeholder="Enter parent full name"
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-green-500 transition"
        />
      </div>

      {/* Mobile Number */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          {t('mobile')} <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          placeholder="Enter 10 digit mobile number"
          maxLength={10}
          pattern="[0-9]{10}"
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-green-500 transition"
        />
      </div>

      {/* WhatsApp Same Checkbox */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="whatsappSame"
          id="whatsappSame"
          checked={formData.whatsappSame}
          onChange={handleChange}
          className="w-5 h-5 accent-green-600"
        />
        <label htmlFor="whatsappSame" className="text-sm text-gray-700">
          {t('whatsapp_same')}
        </label>
      </div>

      {/* WhatsApp Number - only show if not same */}
      {!formData.whatsappSame && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            {t('whatsapp')}
          </label>
          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="Enter WhatsApp number"
            maxLength={10}
            className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-green-500 transition"
          />
        </div>
      )}

      {/* Class Interested */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          {t('class_interested')} <span className="text-red-500">*</span>
        </label>
        <select
          name="classInterested"
          value={formData.classInterested}
          onChange={handleChange}
          required
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-green-500 transition"
        >
          <option value="">{t('select_class')}</option>
          {classOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      {/* Email - Optional */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          {t('email')}
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email address (optional)"
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-green-500 transition"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          {t('message')}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          placeholder="Any questions or special requirements..."
          className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-green-500 transition resize-none"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3 bg-green-50 p-4 rounded-xl">
        <input
          type="checkbox"
          name="consent"
          id="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="w-5 h-5 accent-green-600 mt-0.5"
        />
        <label htmlFor="consent" className="text-sm text-gray-700">
          {t('consent')} <span className="text-red-500">*</span>
        </label>
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
          Something went wrong. Please try again or call us at +91 96737 61468
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-4 rounded-xl text-lg transition"
      >
        {status === 'submitting' ? t('submitting') : t('submit')}
      </button>

      {/* Direct Call Option */}
      <div className="text-center pt-2">
        <p className="text-gray-500 text-sm mb-2">या थेट कॉल करा / Or call directly</p>
        <a
          href="tel:+919673761468"
          className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition"
        >
          📞 +91 96737 61468
        </a>
      </div>
    </form>
  )
}