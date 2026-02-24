'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { X } from 'lucide-react'

const sampleNotices = [
  'Admissions opens at new branch in pune',
]

export default function NoticesTicker() {
  const t = useTranslations('notices')
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="bg-yellow-50 border-y border-yellow-200 py-2 overflow-hidden relative">
      <div className="flex items-center gap-4 pr-10">
        <span className="bg-orange-600 text-white text-xs font-bold px-3 py-1 shrink-0 ml-4">
          {t('title')}
        </span>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            {sampleNotices.map((notice, i) => (
              <span key={i} className="text-sm text-gray-700 mx-8">
                📢 {notice}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-600 transition p-1 rounded-full hover:bg-yellow-100"
        aria-label="Close notices"
      >
        <X size={16} />
      </button>
    </div>
  )
}