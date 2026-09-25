'use client'

import { useTranslations, useLocale } from 'next-intl'
import { Trophy, ArrowRight, Award } from 'lucide-react'
import Link from 'next/link'

const results = [
  { name: 'Neel Bhong', exam: 'JEE Mains', score: '99.51 %tile', year: 2026 },
  { name: 'Siddhi Bosale', exam: 'JEE Mains', score: '99.31 %tile', year: 2026 },
  { name: 'Vaibhav Shinde', exam: 'JEE Mains', score: '99.04 %tile', year: 2026 },
  { name: 'Tushar Dagade', exam: 'JEE Mains', score: '98.32 %tile', year: 2026 },
  { name: 'Dhiraj Dagade', exam: 'JEE Mains', score: '97.68 %tile', year: 2026 },
  { name: 'Ruturaj Kabade', exam: 'JEE Mains', score: '97.37 %tile', year: 2026 },
  { name: 'Shravan Jadhav', exam: 'JEE Mains', score: '96.98 %tile', year: 2026 },
  { name: 'Samarth Jadhav', exam: 'JEE Mains', score: '95.61 %tile', year: 2026 },
]

export default function ResultsHighlight() {
  const t = useTranslations('results')
  const locale = useLocale()

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <Award size={13} />
            Hall of Fame
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-slate-600 mt-3 text-lg max-w-2xl mx-auto font-normal">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, i) => (
            <div
              key={i}
              className="bg-slate-50 border-2 border-slate-200/80 hover:border-amber-400 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-400/20 to-transparent rounded-bl-full pointer-events-none" />
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-amber-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Trophy className="text-amber-600" size={24} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-blue-950 transition">
                {result.name}
              </h3>
              <p className="inline-block bg-blue-50 text-blue-800 text-xs font-bold px-3 py-0.5 rounded-full mt-2 border border-blue-200/60">
                {result.exam}
              </p>
              <p className="text-2xl font-black text-blue-950 mt-3 tracking-tight">
                {result.score}
              </p>
              <p className="text-slate-400 text-xs mt-1 font-medium">Batch {result.year}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/${locale}/results`}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold px-8 py-3.5 rounded-xl text-base shadow-md hover:shadow-lg transition"
          >
            <span>View All Achievers &amp; Result Banners</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}