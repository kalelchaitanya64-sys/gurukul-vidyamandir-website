'use client'

import { useTranslations } from 'next-intl'
import { Trophy } from 'lucide-react'

const results = [
  { name: 'Neel Bhong', exam: 'JEE Mains', score: '99.51 % tile', year: 2026 },
  { name: 'Siddhi Bosale', exam: 'JEE Mains', score: '99.31 % tile', year: 2026 },
  { name: 'Vaibhav Shinde', exam: 'JEE Mains', score: '99.04 % tile', year: 2026 },
  { name: 'Tushar Dagade', exam: 'JEE Mains', score: '98.32 % tile', year: 2026 },
  { name: 'Dhiraj Dagade', exam: 'JEE Mains', score: '97.68 % tile', year: 2026 },
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