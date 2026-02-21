'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="Gurukul School"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-white">
        <span className="inline-block bg-yellow-400 text-green-900 text-sm font-bold px-4 py-1 rounded-full mb-6">
          {t('badge')}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/${locale}/admission`}
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition text-center"
          >
            {t('cta_admission')}
          </Link>
          <a
            href="tel:+919999999999"
            className="flex items-center justify-center gap-2 bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 transition"
          >
            <Phone size={22} />
            {t('cta_call')}
          </a>
        </div>
      </div>
    </section>
  )
}