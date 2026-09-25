'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Phone, Mail, MapPin, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const t = useTranslations()
  const locale = useLocale()

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* School Info */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm">
              <GraduationCap size={18} />
            </div>
            <h2 className="text-xl font-black text-white tracking-tight">Gurukul Vidyamandir</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            Gokhali, Maharashtra. Empowering students with foundational discipline and national-level competitive exam coaching.
          </p>
          {/* Social Media Links */}
          <div className="flex gap-2.5 mt-4">
            <a
              href="https://t.me/GurukulGokhaliTelegramChannel"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white p-2.5 rounded-xl border border-slate-800 transition"
              title="Telegram"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.667l-2.95-.924c-.64-.204-.657-.64.136-.953l11.57-4.461c.537-.194 1.006.131.836.919z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/gurukul_gokhali"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white p-2.5 rounded-xl border border-slate-800 transition"
              title="Instagram"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com/GurukulVidyamandirGokhali"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white p-2.5 rounded-xl border border-slate-800 transition"
              title="Facebook"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/gurukul-gokhali-3316471a6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 hover:bg-blue-500 text-slate-300 hover:text-white p-2.5 rounded-xl border border-slate-800 transition"
              title="LinkedIn"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-amber-400">Programs &amp; Academics</h3>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li><Link href={`/${locale}/coaching#jee`} className="hover:text-amber-300 transition">IIT JEE Advanced Coaching</Link></li>
            <li><Link href={`/${locale}/coaching#neet`} className="hover:text-amber-300 transition">NEET UG Medical Coaching</Link></li>
            <li><Link href={`/${locale}/coaching#foundation`} className="hover:text-amber-300 transition">Foundation Program (Std 6–10)</Link></li>
            <li><Link href={`/${locale}/school`} className="hover:text-amber-300 transition">School Facilities</Link></li>
            <li><Link href={`/${locale}/results`} className="hover:text-amber-300 transition">Results &amp; Achievers</Link></li>
            <li><Link href={`/${locale}/admission`} className="hover:text-amber-300 transition">Online Admission 2025-26</Link></li>
          </ul>
        </div>

        {/* Faculty Links */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-amber-400">Expert Faculty</h3>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>
              <a href="https://www.linkedin.com/in/pravin-negi-479a6b272/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition">
                Pravin Negi Sir
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/munna-kumar-087054a7/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition">
                Munna Sir
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/akmishra78" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition">
                Atulya Mishra Sir
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vishwas-hulge-b8a108357/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition">
                Vishwas Hulge Sir
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/bharat-harnaval-295a67356/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition">
                Bharat Harnawal Sir
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-amber-400">{t('contact.title')}</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-amber-400 mt-0.5 shrink-0" />
              <a href="https://maps.app.goo.gl/kZ6Jr5TytcuzP57b7" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition leading-snug">
                Gurukul Vidyamandir, Gokhali, Maharashtra
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-amber-400 shrink-0" />
              <a href="tel:+919673761468" className="hover:text-amber-300 transition font-medium">
                +91 96737 61468
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-amber-400 shrink-0" />
              <a href="mailto:gurukulvmgokhali@gmail.com" className="hover:text-amber-300 transition font-medium">
                gurukulvmgokhali@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-12 pt-6 border-t border-slate-900 text-center text-xs text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} Gurukul Vidyamandir, Gokhali. All Rights Reserved.</p>
        <p className="text-slate-400">Dedicated to Quality Education &amp; Rural Empowerment</p>
      </div>
    </footer>
  )
}