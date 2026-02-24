'use client'

import { useState, useEffect } from 'react'
import { client } from '@/lib/sanity'
import { facultyQuery } from '@/lib/sanityQueries'
import { Award, BookOpen, Users, Instagram } from 'lucide-react'
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

  const colors = ['bg-green-700', 'bg-blue-600', 'bg-purple-600', 'bg-red-600', 'bg-yellow-600', 'bg-teal-600']

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20 px-4 text-center">
        <div className="inline-block bg-yellow-400 text-green-900 font-bold text-sm px-4 py-1 rounded-full mb-4">
          Experienced • Dedicated • Expert
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Faculty</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          Mentors who have dedicated their lives to shaping the future of rural students.
        </p>
      </div>

      {/* Stats */}
      <div className="bg-yellow-400 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Users className="text-green-900" size={28} />
            <div className="text-2xl font-bold text-green-900 mt-2">20+</div>
            <div className="text-green-800 text-xs font-medium">Expert Faculty</div>
          </div>
          <div className="flex flex-col items-center">
            <Award className="text-green-900" size={28} />
            <div className="text-2xl font-bold text-green-900 mt-2">100+</div>
            <div className="text-green-800 text-xs font-medium">Years Combined Experience</div>
          </div>
          <div className="flex flex-col items-center">
            <BookOpen className="text-green-900" size={28} />
            <div className="text-2xl font-bold text-green-900 mt-2">500+</div>
            <div className="text-green-800 text-xs font-medium">Students Mentored</div>
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Teaching Team</h2>

        {loading ? (
          <div className="text-center py-16">
            <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-400">Loading faculty...</p>
          </div>
        ) : faculty.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <Users size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg">Faculty profiles coming soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((member, i) => (
              <div key={member._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
                <div className={`${colors[i % colors.length]} p-6 text-white text-center`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold">{member.name?.charAt(0)}</span>
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-white/80 text-sm">{member.role}</p>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.subjects?.map((sub, j) => (
                      <span key={j} className="px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-200">
                        {sub}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award size={14} className="text-yellow-500" />
                      <span>{member.experience} Experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <BookOpen size={14} className="text-blue-500" />
                      <span>{member.qualification}</span>
                    </div>
                  </div>
                  {member.instagram && (
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-pink-50 text-pink-600 font-semibold py-2 rounded-xl hover:bg-pink-100 transition text-sm border border-pink-200">
                      <Instagram size={16} />
                      Follow on Instagram
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Join CTA */}
      <div className="bg-green-800 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
        <p className="text-green-200 mb-8">We are looking for passionate teachers to make a difference.</p>
        <Link href={`/${locale}/contact`}
          className="bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition text-lg">
          Contact Us to Apply
        </Link>
      </div>

    </div>
  )
}