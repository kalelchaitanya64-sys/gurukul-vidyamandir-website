'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const t = useTranslations('contact')
  const locale = useLocale()

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-3">
            {t('heading')}
          </h1>
          <p className="text-gray-500 text-lg">
            {t('subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-green-100">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <Phone className="text-green-600" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{t('call_us')}</h3>
                  <p className="text-gray-500 text-sm">{t('timing')}</p>
                  <a href="tel:+919673761468" className="text-green-600 font-bold text-xl hover:text-green-700 transition">
                    +91 96737 61468
                  </a>
                </div>
              </div>
              <a href="tel:+919673761468" className="mt-4 w-full bg-green-600 text-white font-bold py-3 rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-2">
                <Phone size={18} />
                {t('call_now')}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-green-100">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <MessageCircle className="text-green-600" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">WhatsApp</h3>
                  <p className="text-green-600 font-bold text-xl">+91 96737 61468</p>
                </div>
              </div>
              <a href="https://wa.me/919673761468?text=Hello, I want to know more about Gurukul Vidyamandir Gokhali" target="_blank" rel="noopener noreferrer" className="mt-4 w-full bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition flex items-center justify-center gap-2">
                <MessageCircle size={18} />
                {t('whatsapp_us')}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-yellow-100">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 p-4 rounded-full">
                  <Mail className="text-yellow-600" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{t('email')}</h3>
                  <p className="text-gray-500 text-sm">{t('email_reply')}</p>
                  <a href="mailto:gurukulvmgokhali@gmail.com" className="text-yellow-600 font-bold hover:text-yellow-700 transition">
                    gurukulvmgokhali@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-yellow-100">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-100 p-4 rounded-full">
                  <MapPin className="text-yellow-600" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{t('address')}</h3>
                  <p className="text-gray-600">
                    Gurukul Vidyamandir,<br />
                    Gokhali, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-green-100">
              <h3 className="font-bold text-gray-800 text-lg mb-4">{t('follow_us')}</h3>
              <div className="space-y-3">
                <a href="https://t.me/GurukulGokhaliTelegramChannel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition">
                  <span className="text-blue-500 font-bold text-lg">✈</span>
                  <span className="font-medium text-gray-700">Telegram</span>
                </a>
                <a href="https://instagram.com/gurukul_gokhali" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-pink-50 rounded-xl hover:bg-pink-100 transition">
                  <span className="text-pink-500 font-bold text-lg">📷</span>
                  <span className="font-medium text-gray-700">Instagram</span>
                </a>
                <a href="https://facebook.com/GurukulVidyamandirGokhali" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition">
                  <span className="text-blue-700 font-bold text-lg">f</span>
                  <span className="font-medium text-gray-700">Facebook</span>
                </a>
                <a href="https://linkedin.com/in/gurukul-gokhali-3316471a6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition">
                  <span className="text-blue-600 font-bold text-lg">in</span>
                  <span className="font-medium text-gray-700">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="bg-green-700 text-white rounded-2xl p-6">
              <h3 className="font-bold text-yellow-400 text-lg mb-2">{t('founder')}</h3>
              <p className="text-xl font-bold mb-1">Laxman Harnawal Sir</p>
              <p className="text-green-200 text-sm mb-4">Founder, Gurukul Vidyamandir Gokhali</p>
              <a href="https://www.instagram.com/laxman_harnawal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-yellow-400 text-green-900 font-bold px-4 py-2 rounded-xl hover:bg-yellow-300 transition text-sm">
                📷 Instagram
              </a>
            </div>

            <div className="bg-yellow-400 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-green-900 text-xl mb-2">{t('ready')}</h3>
              <p className="text-green-800 text-sm mb-4">{t('ready_sub')}</p>
              <Link href={`/${locale}/admission`} className="inline-block bg-green-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-800 transition">
                {t('apply_now')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}