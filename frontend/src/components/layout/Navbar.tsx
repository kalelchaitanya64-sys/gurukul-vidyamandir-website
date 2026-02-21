'use client'

import { useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
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
      <div className="bg-green-700 text-white text-sm py-1 px-4 flex justify-between items-center">
        <span className="flex items-center gap-1">
          <Phone size={14} />
          <a href="tel:+919673761468" className="font-bold tracking-wide">
            +91 96737 61468
          </a>
        </span>
        <button
          onClick={toggleLanguage}
          className="bg-yellow-400 text-green-900 font-bold px-3 py-0.5 rounded-full text-xs hover:bg-yellow-300 transition"
        >
          {locale === 'en' ? 'मराठी' : 'English'}
        </button>
      </div>

      {/* Main navbar */}
      <nav className="bg-white px-4 py-3 flex justify-between items-center border-b-2 border-yellow-400">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Gurukul Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <h1 className="text-lg font-bold text-green-700 leading-tight">
              Gurukul
            </h1>
            <p className="text-xs text-gray-500">School & Coaching</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={`/${locale}${link.href}`}
                className="hover:text-green-700 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Admission Button */}
        <Link
          href={`/${locale}/admission`}
          className="hidden lg:block bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-green-800 transition"
        >
          {t('admission')}
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="text-gray-700 font-medium py-1 hover:text-green-700 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`/${locale}/admission`}
            className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-bold text-center hover:bg-green-800 transition"
            onClick={() => setIsOpen(false)}
          >
            {t('admission')}
          </Link>
        </div>
      )}
    </header>
  )
}