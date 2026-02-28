'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
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

// ─── Banner Slider Component ───────────────────────────────────────────────────
function BannerSlider({
  images,
  onImageClick,
}: {
  images: BannerImage[]
  onImageClick: (index: number) => void
}) {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length)
  }, [images.length])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length)
  }, [images.length])

  // Auto-play: advance every 4 seconds, pause on hover
  useEffect(() => {
    if (images.length <= 1) return
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(next, 4000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered, next, images.length])

  if (images.length === 0) return null

  // Single image: just render it without slider chrome
  if (images.length === 1) {
    return (
      <div
        className="relative rounded-2xl overflow-hidden border-2 border-green-100 shadow-md cursor-pointer"
        onClick={() => onImageClick(0)}
      >
        <Image
          src={images[0].url}
          alt={images[0].caption || 'Result Banner'}
          width={1200}
          height={500}
          className="w-full object-cover"
          style={{ maxHeight: '480px' }}
        />
        {images[0].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm px-5 py-3">
            {images[0].caption}
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className="relative rounded-2xl overflow-hidden border-2 border-green-100 shadow-md select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: '280px' }}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            onClick={() => onImageClick(idx)}
            style={{ cursor: 'pointer' }}
          >
            <Image
              src={img.url}
              alt={img.caption || `Slide ${idx + 1}`}
              width={1200}
              height={500}
              className="w-full object-cover"
              style={{ maxHeight: '480px', width: '100%' }}
              priority={idx === 0}
            />
            {/* Caption overlay */}
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm px-5 py-3">
                {img.caption}
              </div>
            )}
          </div>
        ))}

        {/* Invisible spacer image to set container height */}
        <Image
          src={images[0].url}
          alt=""
          width={1200}
          height={500}
          className="w-full invisible"
          style={{ maxHeight: '480px' }}
          aria-hidden
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); prev() }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrent(idx) }}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? 'bg-white w-6 h-2.5'
                : 'bg-white/50 hover:bg-white/80 w-2.5 h-2.5'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide counter (top-right) */}
      <div className="absolute top-3 right-3 z-20 bg-black/40 text-white text-xs font-medium px-2.5 py-1 rounded-full">
        {current + 1} / {images.length}
      </div>
    </div>
  )
}
// ──────────────────────────────────────────────────────────────────────────────

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
        <p className="text-gray-500 text-center mb-12">Students who cracked IIT JEE &amp; NEET</p>

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

                  {/* Banner Image Slider for this year */}
                  <div className="mb-8">
                    {banner && banner.title && (
                      <h3 className="text-lg font-bold text-green-700 mb-3">📢 {banner.title}</h3>
                    )}
                    {banner && banner.bannerImages && banner.bannerImages.length > 0 ? (
                      <BannerSlider
                        images={banner.bannerImages}
                        onImageClick={(idx) => setLightbox({ images: banner.bannerImages, index: idx })}
                      />
                    ) : (
                      <div className="w-full rounded-2xl border-2 border-dashed border-green-200 bg-green-50 flex flex-col items-center justify-center gap-3 text-green-400" style={{ minHeight: '280px' }}>
                        <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <circle cx="8.5" cy="10.5" r="1.5" />
                          <path d="M21 15l-5-5L5 19" />
                        </svg>
                        <span className="text-sm font-medium">Result photos coming soon</span>
                      </div>
                    )}
                  </div>

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
