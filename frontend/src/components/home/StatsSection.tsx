'use client'

import { useTranslations } from 'next-intl'
import { GraduationCap, Award, BookOpen, Users } from 'lucide-react'

const stats = [
  { value: '1,200+', key: 'students', icon: <Users size={24} className="text-amber-400" /> },
  { value: '150+', key: 'selections', icon: <Award size={24} className="text-amber-400" /> },
  { value: '15+', key: 'experience', icon: <GraduationCap size={24} className="text-amber-400" /> },
  { value: '25+', key: 'faculty', icon: <BookOpen size={24} className="text-amber-400" /> },
]

export default function StatsSection() {
  const t = useTranslations('stats')

  return (
    <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-16 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.key} className="flex flex-col items-center group">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:bg-amber-400/20 group-hover:border-amber-400/50 transition">
              {stat.icon}
            </div>
            <p className="text-3xl md:text-5xl font-black text-amber-400 tracking-tight">{stat.value}</p>
            <p className="text-slate-300 font-medium mt-1 text-sm tracking-wide">{t(stat.key as any)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}