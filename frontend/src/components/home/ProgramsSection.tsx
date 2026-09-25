'use client'

import { useTranslations, useLocale } from 'next-intl'
import { BookOpen, FlaskConical, Microscope, GraduationCap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ProgramsSection() {
  const t = useTranslations('programs')
  const locale = useLocale()

  const programs = [
    {
      key: 'school',
      icon: <BookOpen size={30} className="text-blue-700" />,
      href: `/${locale}/school`,
      borderColor: 'border-slate-200 hover:border-blue-600',
      iconBg: 'bg-blue-50 text-blue-700 border border-blue-100',
      badge: 'Std 6 to 10',
      badgeStyle: 'bg-blue-50 text-blue-800 border-blue-200',
    },
    {
      key: 'jee',
      icon: <FlaskConical size={30} className="text-indigo-600" />,
      href: `/${locale}/coaching#jee`,
      borderColor: 'border-slate-200 hover:border-indigo-600',
      iconBg: 'bg-indigo-50 text-indigo-700 border border-indigo-100',
      badge: 'Engineering',
      badgeStyle: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    },
    {
      key: 'neet',
      icon: <Microscope size={30} className="text-emerald-600" />,
      href: `/${locale}/coaching#neet`,
      borderColor: 'border-slate-200 hover:border-emerald-600',
      iconBg: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
      badge: 'Medical',
      badgeStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    },
    {
      key: 'foundation',
      icon: <GraduationCap size={30} className="text-amber-600" />,
      href: `/${locale}/coaching#foundation`,
      borderColor: 'border-slate-200 hover:border-amber-600',
      iconBg: 'bg-amber-50 text-amber-700 border border-amber-100',
      badge: 'Foundation',
      badgeStyle: 'bg-amber-50 text-amber-800 border-amber-200',
    },
  ]

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Academic Excellence
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-slate-600 mt-3 text-lg max-w-2xl mx-auto font-normal">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Link
              key={program.key}
              href={program.href}
              className={`bg-white rounded-2xl p-6 border-2 ${program.borderColor} shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${program.iconBg} shadow-xs group-hover:scale-110 transition-transform`}>
                    {program.icon}
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${program.badgeStyle}`}>
                    {program.badge}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-900 transition">
                  {t(`${program.key}.title` as any)}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {t(`${program.key}.desc` as any)}
                </p>
              </div>

              <div className="flex items-center gap-1 text-sm font-bold text-blue-950 group-hover:text-amber-600 transition pt-3 border-t border-slate-100">
                <span>Explore Program</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}