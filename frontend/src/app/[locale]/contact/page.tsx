'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const t = useTranslations('contact')
  const locale = useLocale()

  return (
    <div className="min-h-screen bg-slate-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">
            {t('heading')}
          </h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mt-2 font-light">
            {t('subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-7 shadow-xs border-2 border-slate-200/80">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-50 text-blue-900 p-4 rounded-2xl">
                  <Phone size={26} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">{t('call_us')}</h3>
                  <p className="text-slate-500 text-xs font-semibold uppercase">{t('timing')}</p>
                  <a href="tel:+919673761468" className="text-blue-950 hover:text-amber-600 font-black text-xl transition">
                    +91 96737 61468
                  </a>
                </div>
              </div>
              <a href="tel:+919673761468" className="w-full bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-xs text-sm">
                <Phone size={16} />
                {t('call_now')}
              </a>
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-xs border-2 border-slate-200/80">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-50 text-emerald-700 p-4 rounded-2xl">
                  <MessageCircle size={26} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">WhatsApp Admissions</h3>
                  <p className="text-emerald-700 font-bold text-lg">+91 96737 61468</p>
                </div>
              </div>
              <a href="https://wa.me/919673761468?text=Hello, I want to know more about Gurukul Vidyamandir Gokhali" target="_blank" rel="noopener noreferrer" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 shadow-xs text-sm">
                <MessageCircle size={16} />
                {t('whatsapp_us')}
              </a>
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-xs border-2 border-slate-200/80">
              <div className="flex items-center gap-4">
                <div className="bg-amber-50 text-amber-700 p-4 rounded-2xl">
                  <Mail size={26} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">{t('email')}</h3>
                  <p className="text-slate-500 text-xs font-semibold">{t('email_reply')}</p>
                  <a href="mailto:gurukulvmgokhali@gmail.com" className="text-slate-800 font-bold hover:text-blue-900 transition text-sm">
                    gurukulvmgokhali@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-xs border-2 border-slate-200/80">
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 text-slate-800 p-4 rounded-2xl">
                  <MapPin size={26} />
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-lg">{t('address')}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Gurukul Vidyamandir &amp; Junior College of Science,<br />
                    Gokhali, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-7 shadow-xs border-2 border-slate-200/80">
              <h3 className="font-black text-slate-900 text-lg mb-4">{t('follow_us')}</h3>
              <div className="space-y-3">
                <a href="https://t.me/GurukulGokhaliTelegramChannel" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl hover:bg-slate-100 transition">
                  <span className="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <span className="text-sky-500 font-bold">✈</span> Telegram Channel
                  </span>
                  <span className="text-xs font-semibold text-slate-500">Join →</span>
                </a>
                <a href="https://instagram.com/gurukul_gokhali" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl hover:bg-slate-100 transition">
                  <span className="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <span className="text-pink-500 font-bold">📷</span> Instagram Official
                  </span>
                  <span className="text-xs font-semibold text-slate-500">Follow →</span>
                </a>
                <a href="https://facebook.com/GurukulVidyamandirGokhali" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl hover:bg-slate-100 transition">
                  <span className="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <span className="text-blue-600 font-bold">f</span> Facebook Page
                  </span>
                  <span className="text-xs font-semibold text-slate-500">View →</span>
                </a>
                <a href="https://linkedin.com/in/gurukul-gokhali-3316471a6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-200/80 rounded-2xl hover:bg-slate-100 transition">
                  <span className="font-bold text-slate-800 text-sm flex items-center gap-2">
                    <span className="text-blue-700 font-bold">in</span> LinkedIn Network
                  </span>
                  <span className="text-xs font-semibold text-slate-500">Connect →</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-7 border border-slate-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full inline-block mb-3">
                {t('founder')}
              </span>
              <p className="text-2xl font-black mb-1">Laxman Harnawal Sir</p>
              <p className="text-slate-300 text-sm mb-4">Founder, Gurukul Vidyamandir Gokhali</p>
              <a href="https://www.instagram.com/laxman_harnawal" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2.5 rounded-xl transition text-xs border border-white/20">
                <span>Connect with Founder on Instagram</span>
              </a>
            </div>

            <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 rounded-3xl p-7 text-center text-white border border-slate-800 shadow-md">
              <h3 className="font-black text-2xl mb-2">{t('ready')}</h3>
              <p className="text-slate-300 text-sm mb-5 font-light">{t('ready_sub')}</p>
              <Link href={`/${locale}/admission`} className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-3.5 rounded-xl shadow-md transition text-sm">
                {t('apply_now')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}