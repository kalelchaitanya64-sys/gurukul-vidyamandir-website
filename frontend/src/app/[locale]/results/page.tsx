'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { client } from '@/lib/sanity'
import { resultsQuery, resultBannersQuery } from '@/lib/sanityQueries'
import { Trophy, Star, Award, TrendingUp, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react'
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
        className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-md cursor-pointer group"
        onClick={() => onImageClick(0)}
      >
        <Image
          src={images[0].url}
          alt={images[0].caption || 'Result Banner'}
          width={1200}
          height={500}
          className="w-full object-cover group-hover:scale-101 transition-transform duration-300"
          style={{ maxHeight: '480px' }}
        />
        {images[0].caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-slate-950/80 backdrop-blur-xs text-white text-sm px-6 py-3 border-t border-white/10">
            {images[0].caption}
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className="relative rounded-3xl overflow-hidden border-2 border-slate-200 shadow-md select-none group"
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
              <div className="absolute bottom-0 left-0 right-0 bg-slate-950/80 backdrop-blur-xs text-white text-sm px-6 py-3 border-t border-white/10">
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
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-slate-950/60 hover:bg-slate-950 text-white rounded-full p-2.5 transition backdrop-blur-xs"
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={(e) => { e.stopPropagation(); next() }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-slate-950/60 hover:bg-slate-950 text-white rounded-full p-2.5 transition backdrop-blur-xs"
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrent(idx) }}
            className={`rounded-full transition-all duration-300 ${
              idx === current
                ? 'bg-amber-400 w-7 h-2.5'
                : 'bg-white/60 hover:bg-white w-2.5 h-2.5'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide counter (top-right) */}
      <div className="absolute top-3 right-3 z-20 bg-slate-950/70 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
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
    { number: '100+', label: 'Total Selections', icon: <Trophy className="text-amber-500" size={30} /> },
    { number: '99.51%', label: 'Top JEE Percentile', icon: <Star className="text-indigo-600" size={30} /> },
    { number: '655/720', label: 'Top NEET Score', icon: <Award className="text-emerald-600" size={30} /> },
    { number: '99%+', label: 'Board Pass Rate', icon: <TrendingUp className="text-amber-600" size={30} /> },
  ]

  const streamHeaderGradient: Record<string, string> = {
    Engineering: 'bg-gradient-to-r from-blue-900 to-indigo-950',
    Medical: 'bg-gradient-to-r from-emerald-800 to-teal-950',
    General: 'bg-gradient-to-r from-slate-900 to-blue-950',
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-24 px-4 text-center border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-5 shadow-sm uppercase tracking-wider">
            <Sparkles size={16} />
            Academic Legacy &amp; Rankers
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Our Results &amp; Achievers</h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Every academic session, Gurukul students prove that dedication, discipline, and expert guidance create national toppers from rural Maharashtra.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-slate-200 py-10 px-4 shadow-xs">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {overallStats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-2 shadow-xs">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{stat.number}</div>
              <div className="text-slate-600 text-xs font-semibold uppercase tracking-wider mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Results by Year */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Star Achievers
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3">Students Who Cracked IIT JEE &amp; NEET</h2>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="w-10 h-10 border-4 border-blue-900 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-400">Loading result data...</p>
          </div>
        ) : results.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <Trophy size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg">Results coming soon!</p>
          </div>
        ) : (
          <div className="space-y-20">
            {years.map((year) => {
              const banner = bannersByYear[year]
              const yearResults = resultsByYear[year]

              return (
                <section key={year} id={`year-${year}`}>
                  {/* Year Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-slate-900 text-amber-300 font-black text-xl px-6 py-2.5 rounded-2xl shadow-sm border border-slate-800">
                      Batch {year}
                    </div>
                    <div className="flex-1 h-px bg-slate-200" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{yearResults.length} Achiever{yearResults.length !== 1 ? 's' : ''}</span>
                  </div>

                  {/* Banner Image Slider for this year */}
                  <div className="mb-10">
                    {banner && banner.title && (
                      <h3 className="text-xl font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                        <Award className="text-amber-500" size={22} />
                        <span>{banner.title}</span>
                      </h3>
                    )}
                    {banner && banner.bannerImages && banner.bannerImages.length > 0 ? (
                      <BannerSlider
                        images={banner.bannerImages}
                        onImageClick={(idx) => setLightbox({ images: banner.bannerImages, index: idx })}
                      />
                    ) : (
                      <div className="w-full rounded-3xl border-2 border-dashed border-slate-200 bg-white flex flex-col items-center justify-center gap-3 text-slate-400 shadow-xs" style={{ minHeight: '280px' }}>
                        <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <circle cx="8.5" cy="10.5" r="1.5" />
                          <path d="M21 15l-5-5L5 19" />
                        </svg>
                        <span className="text-sm font-medium">Result gallery updating for Batch {year}</span>
                      </div>
                    )}
                  </div>

                  {/* Student Results for this year */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {yearResults.map((result) => (
                      <div key={result._id} className="bg-white rounded-2xl shadow-xs border-2 border-slate-200/80 overflow-hidden hover:border-amber-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className={`${streamHeaderGradient[result.stream] || 'bg-slate-900'} p-5 flex items-center gap-3.5 text-white border-b border-slate-800`}>
                          <div className="w-10 h-10 bg-white/10 ring-1 ring-amber-400/40 rounded-xl flex items-center justify-center shrink-0">
                            <span className="text-amber-300 font-black">{result.studentName?.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="font-extrabold text-base text-white">{result.studentName}</div>
                            <div className="text-amber-300 text-xs font-semibold uppercase tracking-wider">{result.stream}</div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="text-slate-900 font-black text-2xl mb-1 tracking-tight">{result.score}</div>
                          <div className="text-slate-600 font-semibold text-sm flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                            {result.exam}
                          </div>
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
        <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-5 right-5 text-white hover:text-amber-400 transition" aria-label="Close">
            <X size={32} />
          </button>
          {lightbox.images.length > 1 && (
            <>
              <button
                className="absolute left-4 text-white hover:text-amber-400 transition bg-white/10 p-2.5 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length })
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                className="absolute right-4 text-white hover:text-amber-400 transition bg-white/10 p-2.5 rounded-full"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length })
                }}
                aria-label="Next image"
              >
                <ChevronRight size={36} />
              </button>
            </>
          )}
          <div className="max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.images[lightbox.index].url}
              alt={lightbox.images[lightbox.index].caption || 'Result Banner'}
              width={1200}
              height={675}
              className="rounded-2xl object-contain max-h-[85vh] w-auto mx-auto shadow-2xl"
            />
            {lightbox.images[lightbox.index].caption && (
              <p className="text-white text-center mt-4 font-medium text-sm">{lightbox.images[lightbox.index].caption}</p>
            )}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-slate-950 text-white py-20 px-4 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full inline-block mb-4">
            Your Success Story
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Your Child Could Be Our Next Star Achiever! 🌟</h2>
          <p className="text-slate-300 mb-8 text-lg font-light">Join the proven coaching ecosystem that produces consistent top percentile scores.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/admission`}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-xl text-lg shadow-lg transition">
              Apply for Admission
            </Link>
            <Link href={`/${locale}/coaching`}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg border-2 border-white/20 hover:border-amber-400 transition">
              View All Programs
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

