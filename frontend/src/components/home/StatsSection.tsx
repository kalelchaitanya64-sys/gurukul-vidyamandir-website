'use client'

import { useTranslations } from 'next-intl'

const stats = [
  { value: '1200+', key: 'students' },
  { value: '150+', key: 'selections' },
  { value: '15+', key: 'experience' },
  { value: '25+', key: 'faculty' },
]

export default function StatsSection() {
  const t = useTranslations('stats')

  return (
    <section className="bg-green-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.key}>
            <p className="text-4xl font-bold text-yellow-400">{stat.value}</p>
            <p className="text-green-100 mt-1 text-sm">{t(stat.key as any)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}