'use client'

import { useTranslations } from 'next-intl'

const sampleNotices = [
  'New batch for IIT JEE 2026 starting from March 1st',
  'NEET coaching admission open — limited seats',
  'Foundation batch for Std 6 starting April 2025',
  'Annual results declared — 95% students passed'
]

export default function NoticesTicker() {
  const t = useTranslations('notices')

  return (
    <div className="bg-yellow-50 border-y border-yellow-200 py-2 overflow-hidden">
      <div className="flex items-center gap-4">
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
    </div>
  )
}