'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { X, Megaphone } from 'lucide-react'

const sampleNotices = [
  'Admissions open for Academic Year 2025-26 (School & Junior College of Science)',
  'Special IIT JEE & NEET Crash Course Batches starting soon at Gokhali & Pune centers',
]

export default function NoticesTicker() {
  const t = useTranslations('notices')
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="bg-amber-50/90 border-y border-amber-200/90 py-2.5 overflow-hidden relative shadow-xs">
      <div className="flex items-center gap-4 pr-12 max-w-7xl mx-auto px-4">
        <span className="inline-flex items-center gap-1.5 bg-amber-600 text-white text-xs font-black px-3 py-1 rounded-md shrink-0 shadow-xs tracking-wider uppercase">
          <Megaphone size={12} />
          {t('title')}
        </span>
        <div className="overflow-hidden whitespace-nowrap flex-1">
          <div className="inline-block animate-marquee">
            {sampleNotices.map((notice, i) => (
              <span key={i} className="text-sm font-medium text-slate-800 mx-8">
                ✨ {notice}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800 transition p-1.5 rounded-full hover:bg-amber-200/50"
        aria-label="Close notices"
      >
        <X size={15} />
      </button>
    </div>
  )
}