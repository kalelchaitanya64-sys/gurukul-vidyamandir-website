'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Phone, ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section className="relative min-h-[65vh] md:min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.jpeg"
          alt="Gurukul School"
          fill
          sizes="100vw"
          className="object-cover object-center scale-105"
          priority
        />
        {/* Academic Deep Navy/Slate Overlay with warm vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/85 to-slate-900/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20 text-white">
        <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full mb-6 shadow-md tracking-wider uppercase">
          <Sparkles size={15} className="text-amber-900" />
          <span>{t('badge')}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-6 max-w-4xl tracking-tight text-white drop-shadow-sm">
          {t('title')}
        </h1>

        <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-3xl leading-relaxed font-light">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
          <Link
            href={`/${locale}/admission`}
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 text-center"
          >
            <span>{t('cta_admission')}</span>
            <ArrowRight size={20} />
          </Link>
          <a
            href="tel:+919673761468"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/30 hover:border-amber-400/80 font-bold px-8 py-4 rounded-xl text-lg transition-all text-center"
          >
            <Phone size={20} className="text-amber-400" />
            <span>{t('cta_call')}</span>
          </a>
        </div>
      </div>
    </section>
  )
}