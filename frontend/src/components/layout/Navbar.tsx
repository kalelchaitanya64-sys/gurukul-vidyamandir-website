'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, Phone, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'mr' : 'en'
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/school', label: t('school') },
    { href: '/coaching', label: t('coaching') },
    { href: '/faculty', label: t('faculty') },
    { href: '/results', label: t('results') },
    { href: '/notices', label: t('notices') },
    { href: '/contact', label: t('contact') },
  ]

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-slate-950 text-slate-200 text-xs sm:text-sm py-1.5 px-4 md:px-8 flex justify-between items-center border-b border-slate-800">
        <span className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400">
            <Phone size={12} />
          </span>
          <a href="tel:+919673761468" className="font-semibold text-slate-100 hover:text-amber-400 transition tracking-wide">
            +91 96737 61468
          </a>
        </span>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline text-xs text-slate-400 font-medium">
            📍 Gokhali, Maharashtra
          </span>
          <button
            onClick={toggleLanguage}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-3 py-0.5 rounded-full text-xs shadow-sm transition"
          >
            {locale === 'en' ? 'मराठी' : 'English'}
          </button>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white/95 backdrop-blur-md px-4 md:px-8 py-3.5 flex justify-between items-center border-b border-slate-200">
        <Link href={`/${locale}`} className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="Gurukul Logo"
            width={46}
            height={46}
            className="rounded-full ring-2 ring-amber-400/40 group-hover:ring-amber-400 transition"
          />
          <div>
            <h1 className="text-xl font-extrabold text-blue-950 tracking-tight leading-tight group-hover:text-blue-800 transition">
              Gurukul Vidyamandir
            </h1>
            <p className="text-xs font-semibold text-amber-700 tracking-wide flex items-center gap-1">
              <GraduationCap size={13} className="inline" />
              School &amp; Junior College of Science
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => {
            const isActive = pathname === `/${locale}${link.href}` || (link.href === '/' && pathname === `/${locale}`)
            return (
              <li key={link.href}>
                <Link
                  href={`/${locale}${link.href}`}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? 'text-blue-900 font-bold'
                      : 'hover:text-blue-900 text-slate-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Admission Button */}
        <Link
          href={`/${locale}/admission`}
          className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 hover:from-blue-800 hover:to-indigo-900 text-amber-300 font-bold px-5 py-2.5 rounded-xl text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 border border-amber-400/30"
        >
          <span>{t('admission')}</span>
          <span className="text-amber-400">→</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-slate-800 p-1.5 rounded-lg hover:bg-slate-100 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-5 py-4 flex flex-col gap-3 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="text-slate-700 font-semibold py-1.5 hover:text-blue-900 transition border-b border-slate-100"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/admission`}
            className="bg-gradient-to-r from-blue-900 to-indigo-900 text-amber-300 px-4 py-3 rounded-xl text-sm font-bold text-center shadow-md transition mt-2"
            onClick={() => setIsOpen(false)}
          >
            {t('admission')}
          </Link>
        </div>
      )}
    </header>
  )
}