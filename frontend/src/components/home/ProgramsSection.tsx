'use client'

import { useTranslations, useLocale } from 'next-intl'
import { BookOpen, FlaskConical, Microscope, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export default function ProgramsSection() {
  const t = useTranslations('programs')
  const locale = useLocale()

  const programs = [
    {
      key: 'school',
      icon: <BookOpen size={36} className="text-green-600" />,
      href: `/${locale}/school`,
      color: 'border-green-200 hover:border-green-400'
    },
    {
      key: 'jee',
      icon: <FlaskConical size={36} className="text-yellow-600" />,
      href: `/${locale}/coaching/jee`,
      color: 'border-yellow-200 hover:border-yellow-400'
    },
    {
      key: 'neet',
      icon: <Microscope size={36} className="text-green-600" />,
      href: `/${locale}/coaching/neet`,
      color: 'border-green-200 hover:border-green-400'
    },
    {
      key: 'foundation',
      icon: <GraduationCap size={36} className="text-yellow-600" />,
      href: `/${locale}/coaching/foundation`,
      color: 'border-yellow-200 hover:border-yellow-400'
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            {t('title')}
          </h2>
          <p className="text-gray-500 mt-3 text-lg">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Link
              key={program.key}
              href={program.href}
              className={`bg-white rounded-2xl p-6 border-2 ${program.color} hover:shadow-lg transition group`}
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-green-700 transition">
                {t(`${program.key}.title` as any)}
              </h3>
              <p className="text-gray-500 text-sm">
                {t(`${program.key}.desc` as any)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}