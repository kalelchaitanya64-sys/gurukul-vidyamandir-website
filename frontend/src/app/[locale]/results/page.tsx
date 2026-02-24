'use client'

import { useState, useEffect } from 'react'
import { client } from '@/lib/sanity'
import { resultsQuery, resultBannersQuery } from '@/lib/sanityQueries'
import { Trophy, Star, Award, TrendingUp, ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
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

interface BannerImage {
  url: string
  caption?: string
}

interface ResultBanner {
  _id: string
  year: string
  title: string
  bannerImages: BannerImage[]
}

export default function ResultsPage() {
  const locale = useLocale()
  const [results, setResults] = useState<Result[]>([])
  const [banners, setBanners] = useState<ResultBanner[]>([])
  const [loading, setLoading] = useState(true)
  const [lightbox, setLightbox] = useState<{ images: BannerImage[]; index: number } | null>(null)

  useEffect(() => {
    Promise.all([
      client.fetch(resultsQuery),
      client.fetch(resultBannersQuery),
    ]).then(([resultsData, bannersData]) => {
      setResults(resultsData)
      setBanners(bannersData)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }, [])

  // Group results by year
  const resultsByYear: Record<string, Result[]> = {}
  results.forEach((r) => {
    if (!resultsByYear[r.year]) resultsByYear[r.year] = []
    resultsByYear[r.year].push(r)
  })
  const years = Object.keys(resultsByYear).sort((a, b) => b.localeCompare(a))

  // Map banners by year for easy lookup
  const bannersByYear: Record<string, ResultBanner> = {}
  banners.forEach((b) => { bannersByYear[b.year] = b })

  const overallStats = [
    { number: '100+', label: 'Total Selections', icon: <Trophy className="text-yellow-500" size={32} /> },
    { number: '99.97%', label: 'Highest JEE Percentile', icon: <Star className="text-blue-500" size={32} /> },
    { number: '655', label: 'Highest NEET Score', icon: <Award className="text-red-500" size={32} /> },
    { number: '99%+', label: 'Board Pass Rate', icon: <TrendingUp className="text-green-600" size={32} /> },
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

      {/* Results by Year */}
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
          <div className="space-y-16">
            {years.map((year) => {
              const banner = bannersByYear[year]
              const yearResults = resultsByYear[year]

              return (
                <section key={year} id={`year-${year}`}>
                  {/* Year Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-green-700 text-white font-bold text-xl px-5 py-2 rounded-xl">
                      {year}
                    </div>
                    <div className="flex-1 h-px bg-green-200" />
                    <span className="text-sm text-gray-400">{yearResults.length} student{yearResults.length !== 1 ? 's' : ''}</span>
                  </div>

                  {/* Banner Images for this year */}
                  {banner && banner.bannerImages && banner.bannerImages.length > 0 && (
                    <div className="mb-8">
                      {banner.title && (
                        <h3 className="text-lg font-bold text-green-700 mb-3">📢 {banner.title}</h3>
                      )}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {banner.bannerImages.map((img, idx) => (
                          <div
                            key={idx}
                            className="relative rounded-2xl overflow-hidden border-2 border-green-100 shadow-sm cursor-pointer hover:shadow-lg transition"
                            onClick={() => setLightbox({ images: banner.bannerImages, index: idx })}
                          >
                            <Image
                              src={img.url}
                              alt={img.caption || `${year} Result Banner`}
                              width={800}
                              height={450}
                              className="w-full h-auto object-cover"
                            />
                            {img.caption && (
                              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm px-4 py-2">
                                {img.caption}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Student Results for this year */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {yearResults.map((result) => (
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
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        )}
      </div>

      {/* Lightbox for banner images */}
      {lightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white hover:text-yellow-400 transition">
            <X size={32} />
          </button>
          {lightbox.images.length > 1 && (
            <>
              <button
                className="absolute left-4 text-white hover:text-yellow-400 transition"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length })
                }}
              >
                <ChevronLeft size={40} />
              </button>
              <button
                className="absolute right-4 text-white hover:text-yellow-400 transition"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length })
                }}
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}
          <div className="max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.images[lightbox.index].url}
              alt={lightbox.images[lightbox.index].caption || 'Result Banner'}
              width={1200}
              height={675}
              className="rounded-xl object-contain max-h-[85vh] w-auto mx-auto"
            />
            {lightbox.images[lightbox.index].caption && (
              <p className="text-white text-center mt-3">{lightbox.images[lightbox.index].caption}</p>
            )}
          </div>
        </div>
      )}

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