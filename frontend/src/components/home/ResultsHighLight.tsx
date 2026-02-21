'use client'

import { useTranslations } from 'next-intl'
import { Trophy } from 'lucide-react'

const results = [
  { name: 'Rahul Sharma', exam: 'JEE Mains', score: '98.5 percentile', year: 2024 },
  { name: 'Priya Patil', exam: 'NEET', score: '650/720', year: 2024 },
  { name: 'Amit Desai', exam: 'JEE Mains', score: '97.2 percentile', year: 2024 },
  { name: 'Sneha More', exam: 'NEET', score: '630/720', year: 2024 },
]

export default function ResultsHighlight() {
  const t = useTranslations('results')

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            {t('title')}
          </h2>
          <p className="text-gray-500 mt-3 text-lg">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, i) => (
            <div
              key={i}
              className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center hover:shadow-lg transition"
            >
              <Trophy className="text-yellow-500 mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-800 text-lg">{result.name}</h3>
              <p className="text-green-600 font-semibold text-sm mt-1">{result.exam}</p>
              <p className="text-2xl font-bold text-green-800 mt-2">{result.score}</p>
              <p className="text-gray-400 text-xs mt-1">{result.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}