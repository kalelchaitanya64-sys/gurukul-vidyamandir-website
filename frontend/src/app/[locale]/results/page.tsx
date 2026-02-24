'use client'

import { useState, useEffect } from 'react'
import { client } from '@/lib/sanity'
import { resultsQuery } from '@/lib/sanityQueries'
import { Trophy, Star, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

interface Result {
  _id: string
  studentName: string
  exam: string
  score: string
  year: string
  stream: string
}

export default function ResultsPage() {
  const locale = useLocale()
  const [results, setResults] = useState<Result[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(resultsQuery).then((data) => {
      setResults(data)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }, [])

  const overallStats = [
    { number: '100+', label: 'Total Selections', icon: <Trophy className="text-yellow-500" size={32} /> },
    { number: '97.8%', label: 'Highest JEE Percentile', icon: <Star className="text-blue-500" size={32} /> },
    { number: '650', label: 'Highest NEET Score', icon: <Award className="text-red-500" size={32} /> },
    { number: '95%+', label: 'Board Pass Rate', icon: <TrendingUp className="text-green-600" size={32} /> },
  ]

  const streamColor: Record<string, string> = {
    Engineering: 'bg-blue-600',
    Medical: 'bg-red-600',
    General: 'bg-green-700',
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20 px-4 text-center">
        <div className="inline-block bg-yellow-400 text-green-900 font-bold text-sm px-4 py-1 rounded-full mb-4">
          🏆 Proven Track Record
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Results</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          Every year, Gurukul students prove that rural students can compete with the best.
        </p>
      </div>

      {/* Stats */}
      <div className="bg-yellow-400 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {overallStats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              {stat.icon}
              <div className="text-2xl md:text-3xl font-bold text-green-900 mt-2">{stat.number}</div>
              <div className="text-green-800 text-xs font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-4">Star Achievers</h2>
        <p className="text-gray-500 text-center mb-12">Students who cracked IIT JEE & NEET</p>

        {loading ? (
          <div className="text-center py-16">
            <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-400">Loading results...</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <Trophy size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg">Results coming soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result) => (
              <div key={result._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                <div className={`${streamColor[result.stream] || 'bg-green-700'} p-4 flex items-center gap-3`}>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{result.studentName?.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-white font-bold">{result.studentName}</div>
                    <div className="text-white/80 text-xs">{result.stream}</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-gray-800 font-bold text-lg mb-1">{result.score}</div>
                  <div className="text-gray-500 text-sm">{result.exam}</div>
                  <div className="mt-3 inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                    Batch of {result.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="bg-yellow-400 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Your Child Could Be Next! 🌟</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}/admission`}
            className="bg-green-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-800 transition text-lg">
            Apply for Admission
          </Link>
          <Link href={`/${locale}/coaching`}
            className="bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition text-lg border-2 border-green-700">
            View Programs
          </Link>
        </div>
      </div>

    </div>
  )
}