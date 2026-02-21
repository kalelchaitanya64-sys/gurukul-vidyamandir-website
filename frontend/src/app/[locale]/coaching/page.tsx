'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { CheckCircle, Clock, Users, BookOpen, Trophy, Star, Phone, MessageCircle } from 'lucide-react'

export default function CoachingPage() {
  const locale = useLocale()

  const programs = [
    {
      id: 'jee',
      badge: '🔬 Engineering',
      title: 'IIT JEE Mains & Advanced',
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      badgeBg: 'bg-blue-100 text-blue-700',
      btnColor: 'bg-blue-600 hover:bg-blue-700',
      duration: '1-2 Years',
      eligibility: 'Std 11 & 12 (PCM)',
      batchSize: '30 Students',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      features: [
        'Complete JEE Mains & Advanced syllabus',
        'Daily practice problems (DPP)',
        'Weekly mock tests',
        'Previous year papers analysis',
        'Doubt clearing sessions daily',
        'Study material included',
        'Online test series access',
        'Personal mentoring by expert faculty',
      ],
      highlight: '15+ IIT Selections in last 3 years',
    },
    {
      id: 'neet',
      badge: '🏥 Medical',
      title: 'NEET UG Coaching',
      color: 'red',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      badgeBg: 'bg-red-100 text-red-700',
      btnColor: 'bg-red-600 hover:bg-red-700',
      duration: '1-2 Years',
      eligibility: 'Std 11 & 12 (PCB)',
      batchSize: '30 Students',
      subjects: ['Physics', 'Chemistry', 'Biology'],
      features: [
        'Complete NEET syllabus coverage',
        'NCERT-focused teaching approach',
        'Chapter-wise tests & analysis',
        'Biology diagrams & theory sessions',
        'Previous 10 years paper practice',
        'Doubt clearing sessions daily',
        'Full length mock tests weekly',
        'Personal mentoring & counselling',
      ],
      highlight: '25+ NEET Qualifiers every year',
    },
    {
      id: 'foundation',
      badge: '📚 Foundation',
      title: 'Foundation Program (Std 6–10)',
      color: 'green',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      badgeBg: 'bg-green-100 text-green-700',
      btnColor: 'bg-green-700 hover:bg-green-800',
      duration: 'Annual',
      eligibility: 'Std 6 to Std 10',
      batchSize: '35 Students',
      subjects: ['Mathematics', 'Science', 'English', 'Social Science'],
      features: [
        'Strong foundation for future competitive exams',
        'Concept clarity from basics',
        'Board exam focused preparation',
        'Olympiad & scholarship preparation',
        'Regular unit tests & parent reports',
        'Activity-based learning methods',
        'Special attention to weak students',
        'Annual exam preparation support',
      ],
      highlight: '95%+ Board Exam Pass Rate',
    },
  ]

  const colorMap: Record<string, string> = {
    blue: 'text-blue-600',
    red: 'text-red-600',
    green: 'text-green-700',
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20 px-4 text-center">
        <div className="inline-block bg-yellow-400 text-green-900 font-bold text-sm px-4 py-1 rounded-full mb-4">
          Expert Coaching • Proven Results
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Coaching Programs</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          From foundation to IIT JEE & NEET — we prepare rural students to compete and excel at the national level.
        </p>
      </div>

      {/* Quick Nav */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex gap-4 overflow-x-auto">
          {programs.map(p => (
            <a key={p.id} href={`#${p.id}`}
              className="shrink-0 px-4 py-2 bg-green-50 text-green-700 font-semibold rounded-full text-sm hover:bg-green-100 transition">
              {p.title.split(' ')[0]} {p.title.split(' ')[1]}
            </a>
          ))}
        </div>
      </div>

      {/* Programs */}
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
        {programs.map((program, i) => (
          <div key={program.id} id={program.id} className={`rounded-3xl border-2 ${program.bgColor} ${program.borderColor} overflow-hidden`}>

            {/* Program Header */}
            <div className="p-8 pb-0">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div>
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${program.badgeBg}`}>
                    {program.badge}
                  </span>
                  <h2 className={`text-3xl font-bold ${colorMap[program.color]}`}>{program.title}</h2>
                  <div className={`inline-block mt-2 text-sm font-bold px-3 py-1 rounded-full ${program.badgeBg}`}>
                    🏆 {program.highlight}
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <Clock className="mx-auto mb-2 text-gray-500" size={22} />
                  <div className="font-bold text-gray-800">{program.duration}</div>
                  <div className="text-xs text-gray-400">Duration</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                  <BookOpen className="mx-auto mb-2 text-gray-500" size={22} />
                  <div className="font-bold text-gray-800">{program.eligibility}</div>
                  <div className="text-xs text-gray-400">Eligibility</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow-sm col-span-2 md:col-span-1">
                  <Users className="mx-auto mb-2 text-gray-500" size={22} />
                  <div className="font-bold text-gray-800">{program.batchSize}</div>
                  <div className="text-xs text-gray-400">Batch Size</div>
                </div>
              </div>
            </div>

            {/* Subjects & Features */}
            <div className="px-8 pb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <Star size={18} className={colorMap[program.color]} />
                  Subjects Covered
                </h3>
                <div className="flex flex-wrap gap-2">
                  {program.subjects.map((sub, j) => (
                    <span key={j} className={`px-3 py-1 rounded-full text-sm font-semibold bg-white border-2 ${program.borderColor} ${colorMap[program.color]}`}>
                      {sub}
                    </span>
                  ))}
                </div>

                <h3 className="font-bold text-gray-700 mb-3 mt-6 flex items-center gap-2">
                  <Trophy size={18} className={colorMap[program.color]} />
                  What You Get
                </h3>
                <div className="space-y-2">
                  {program.features.slice(0, 4).map((feat, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle className={`shrink-0 mt-0.5 ${colorMap[program.color]}`} size={16} />
                      <span className="text-gray-600 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <CheckCircle size={18} className={colorMap[program.color]} />
                  More Features
                </h3>
                <div className="space-y-2">
                  {program.features.slice(4).map((feat, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle className={`shrink-0 mt-0.5 ${colorMap[program.color]}`} size={16} />
                      <span className="text-gray-600 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 space-y-3">
                  <Link href={`/${locale}/admission`}
                    className={`w-full text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 ${program.btnColor}`}>
                    Apply Now →
                  </Link>
                  <a href="https://wa.me/919673761468?text=Hello, I want to know more about the coaching programs"
                    target="_blank" rel="noopener noreferrer"
                    className="w-full bg-white border-2 border-green-600 text-green-700 font-bold py-3 rounded-xl hover:bg-green-50 transition flex items-center justify-center gap-2">
                    <MessageCircle size={18} />
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-green-800 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Not sure which program to choose?</h2>
        <p className="text-green-200 mb-8">Call us and we'll guide you to the right program for your child.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+919673761468"
            className="bg-yellow-400 text-green-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition flex items-center justify-center gap-2 text-lg">
            <Phone size={22} />
            Call: +91 96737 61468
          </a>
          <a href="https://wa.me/919673761468" target="_blank" rel="noopener noreferrer"
            className="bg-green-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-500 transition flex items-center justify-center gap-2 text-lg border-2 border-green-400">
            <MessageCircle size={22} />
            WhatsApp Us
          </a>
        </div>
      </div>

    </div>
  )
}