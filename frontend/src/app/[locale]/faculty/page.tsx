'use client'

import { useState, useEffect } from 'react'
import { client } from '@/lib/sanity'
import { facultyQuery } from '@/lib/sanityQueries'
import { Award, BookOpen, Users, Instagram, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

interface Faculty {
  _id: string
  name: string
  role: string
  subjects: string[]
  experience: string
  qualification: string
  specialization: string
  instagram?: string
}

export default function FacultyPage() {
  const locale = useLocale()
  const [faculty, setFaculty] = useState<Faculty[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client.fetch(facultyQuery).then((data) => {
      setFaculty(data)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }, [])

  const headerGradients = [
    'bg-gradient-to-r from-slate-900 to-blue-950',
    'bg-gradient-to-r from-blue-950 to-indigo-950',
    'bg-gradient-to-r from-indigo-950 to-slate-900',
    'bg-gradient-to-r from-slate-900 to-emerald-950',
    'bg-gradient-to-r from-blue-950 to-teal-950',
    'bg-gradient-to-r from-slate-950 to-blue-900',
  ]

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-24 px-4 text-center border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-5 shadow-sm uppercase tracking-wider">
            Academic Mentors • Subject Masters
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Meet Our Faculty</h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Seasoned educators and exam specialists dedicated to nurturing intellect and building future national rankers in rural Maharashtra.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b border-slate-200 py-10 px-4 shadow-xs">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-2">
              <Users size={24} />
            </div>
            <div className="text-2xl md:text-3xl font-black text-slate-900">20+</div>
            <div className="text-slate-600 text-xs font-semibold uppercase tracking-wider mt-0.5">Faculty Members</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-2">
              <Award size={24} />
            </div>
            <div className="text-2xl md:text-3xl font-black text-slate-900">100+</div>
            <div className="text-slate-600 text-xs font-semibold uppercase tracking-wider mt-0.5">Years Experience</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2">
              <GraduationCap size={24} />
            </div>
            <div className="text-2xl md:text-3xl font-black text-slate-900">500+</div>
            <div className="text-slate-600 text-xs font-semibold uppercase tracking-wider mt-0.5">Rankers Mentored</div>
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Faculty Directory
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3">Our Distinguished Teaching Faculty</h2>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="w-10 h-10 border-4 border-blue-900 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-400">Loading faculty profiles...</p>
          </div>
        ) : faculty.length === 0 ? (
          <div className="text-center py-16 text-slate-400">
            <Users size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg">Faculty profiles are updated regularly. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((member, i) => (
              <div key={member._id} className="bg-white rounded-3xl shadow-xs border-2 border-slate-200/80 overflow-hidden hover:border-amber-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`${headerGradients[i % headerGradients.length]} p-7 text-white text-center border-b border-slate-800`}>
                  <div className="w-16 h-16 bg-white/10 ring-2 ring-amber-400/40 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                    <span className="text-2xl font-black text-amber-300">{member.name?.charAt(0)}</span>
                  </div>
                  <h3 className="font-black text-lg tracking-tight text-white">{member.name}</h3>
                  <p className="text-amber-300 text-xs font-bold uppercase tracking-wider mt-1">{member.role}</p>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {member.subjects?.map((sub, j) => (
                      <span key={j} className="px-2.5 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-lg border border-slate-200">
                        {sub}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2.5 mb-6 text-sm text-slate-700">
                    <div className="flex items-center gap-2.5">
                      <Award size={16} className="text-amber-600 shrink-0" />
                      <span className="font-medium">{member.experience} Experience</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <BookOpen size={16} className="text-blue-600 shrink-0" />
                      <span className="font-medium">{member.qualification}</span>
                    </div>
                  </div>
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold py-2.5 rounded-xl transition text-xs border border-slate-200">
                      <Instagram size={15} className="text-pink-600" />
                      <span>Follow on Instagram</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Join CTA */}
      <div className="bg-slate-950 text-white py-20 px-4 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full inline-block mb-4">
            Join Our Mission
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Passionate About Teaching?</h2>
          <p className="text-slate-300 mb-8 text-lg font-light">We are always eager to welcome dedicated educators and ranker mentors.</p>
          <Link href={`/${locale}/contact`}
            className="inline-block bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-xl text-lg shadow-lg transition">
            Apply as Faculty
          </Link>
        </div>
      </div>

    </div>
  )
}