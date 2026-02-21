'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { Instagram, Award, BookOpen, Users } from 'lucide-react'

export default function FacultyPage() {
  const locale = useLocale()

  const faculty = [
    {
      name: 'Laxman Harnawal Sir',
      role: 'Founder & Director',
      subjects: ['Mathematics', 'Physics'],
      experience: '9+ Years',
      specialization: 'IIT JEE Advanced Mathematics',
      achievements: ['IIT JEE topper mentor', 'B.Sc Mathematics', 'Founded Gurukul in 2016'],
      instagram: 'https://www.instagram.com/laxman_harnawal',
      initial: 'L',
      color: 'bg-green-700',
    },
    {
      name: 'Physics Faculty',
      role: 'Senior Physics Teacher',
      subjects: ['Physics'],
      experience: '10+ Years',
      specialization: 'JEE & NEET Physics',
      achievements: ['Expert in Mechanics & Optics', 'M.Sc Physics', 'Trained 200+ students'],
      instagram: null,
      initial: 'P',
      color: 'bg-blue-600',
    },
    {
      name: 'Chemistry Faculty',
      role: 'Senior Chemistry Teacher',
      subjects: ['Chemistry'],
      experience: '8+ Years',
      specialization: 'Organic & Physical Chemistry',
      achievements: ['NEET Chemistry specialist', 'M.Sc Chemistry', 'Unique teaching methodology'],
      instagram: null,
      initial: 'C',
      color: 'bg-purple-600',
    },
    {
      name: 'Biology Faculty',
      role: 'NEET Biology Expert',
      subjects: ['Biology', 'Zoology', 'Botany'],
      experience: '10+ Years',
      specialization: 'NEET Biology & NCERT',
      achievements: ['NEET Biology expert', 'M.Sc Zoology', '95%+ NEET success rate'],
      instagram: null,
      initial: 'B',
      color: 'bg-red-600',
    },
    {
      name: 'Mathematics Faculty',
      role: 'Mathematics Teacher',
      subjects: ['Mathematics'],
      experience: '7+ Years',
      specialization: 'Foundation & JEE Mathematics',
      achievements: ['Std 6-10 Foundation expert', 'B.Ed Mathematics', 'Board exam specialist'],
      instagram: null,
      initial: 'M',
      color: 'bg-yellow-600',
    },
    {
      name: 'English Faculty',
      role: 'English & Communication',
      subjects: ['English', 'Communication Skills'],
      experience: '6+ Years',
      specialization: 'English Grammar & Writing',
      achievements: ['Communication skills trainer', 'M.A. English', 'Personality development coach'],
      instagram: null,
      initial: 'E',
      color: 'bg-teal-600',
    },
  ]

  const stats = [
    { icon: <Users className="text-green-600" size={28} />, number: '20+', label: 'Expert Faculty Members' },
    { icon: <Award className="text-yellow-600" size={28} />, number: '100+', label: 'Years Combined Experience' },
    { icon: <BookOpen className="text-blue-600" size={28} />, number: '500+', label: 'Students Mentored' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20 px-4 text-center">
        <div className="inline-block bg-yellow-400 text-green-900 font-bold text-sm px-4 py-1 rounded-full mb-4">
          Experienced • Dedicated • Expert
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Faculty</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          Our teachers are not just educators — they are mentors who have dedicated their lives to shaping the future of rural students.
        </p>
      </div>

      {/* Stats */}
      <div className="bg-yellow-400 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              {stat.icon}
              <div className="text-2xl font-bold text-green-900 mt-2">{stat.number}</div>
              <div className="text-green-800 text-xs font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-4">Our Teaching Team</h2>
        <p className="text-gray-500 text-center mb-12">Each faculty member brings deep subject expertise and a passion for student success.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">

              {/* Card Header */}
              <div className={`${member.color} p-6 text-white text-center`}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-white">{member.initial}</span>
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-white/80 text-sm">{member.role}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.subjects.map((sub, j) => (
                    <span key={j} className="px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-200">
                      {sub}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Award size={14} className="text-yellow-500 shrink-0" />
                    <span>{member.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen size={14} className="text-blue-500 shrink-0" />
                    <span>{member.specialization}</span>
                  </div>
                </div>

                <div className="space-y-1 mb-4">
                  {member.achievements.map((ach, j) => (
                    <div key={j} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span>{ach}</span>
                    </div>
                  ))}
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
      </div>

      {/* Join as Faculty */}
      <div className="bg-green-800 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
        <p className="text-green-200 mb-8 max-w-xl mx-auto">
          We are always looking for passionate, dedicated teachers who want to make a real difference in rural students' lives.
        </p>
        <Link href={`/${locale}/contact`}
          className="bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition text-lg">
          Contact Us to Apply
        </Link>
      </div>

    </div>
  )
}