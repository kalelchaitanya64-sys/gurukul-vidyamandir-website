'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import { Award, Users, BookOpen, Heart, Target, Star, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const locale = useLocale()

  const milestones = [
    { year: '2010', title: 'School Founded', desc: 'Gurukul Vidyamandir established in Gokhali by Laxman Harnawal Sir' },
    { year: '2013', title: 'Coaching Started', desc: 'IIT JEE & NEET coaching division launched' },
    { year: '2016', title: 'First IIT Selection', desc: 'First student selected in IIT from rural Gokhali' },
    { year: '2018', title: 'Foundation Classes', desc: 'Foundation program launched for Std 6 to 10' },
    { year: '2021', title: '100+ Selections', desc: 'Over 100 students selected in top medical & engineering colleges' },
    { year: '2024', title: 'Digital Campus', desc: 'Smart classrooms and digital learning introduced' },
  ]

  const values = [
    { icon: <Heart className="text-red-500" size={28} />, title: 'Care & Dedication', desc: 'Every student is treated like family. We care deeply about each child\'s growth.' },
    { icon: <Target className="text-green-600" size={28} />, title: 'Goal-Oriented', desc: 'We set clear academic targets and work tirelessly to achieve them together.' },
    { icon: <BookOpen className="text-yellow-600" size={28} />, title: 'Quality Education', desc: 'Curriculum designed by experienced faculty with proven teaching methods.' },
    { icon: <Users className="text-blue-500" size={28} />, title: 'Community First', desc: 'Bringing quality education to rural Maharashtra — affordable for all families.' },
  ]

  const stats = [
    { number: '500+', label: 'Students Enrolled' },
    { number: '15+', label: 'Years of Excellence' },
    { number: '100+', label: 'IIT/NEET Selections' },
    { number: '20+', label: 'Expert Faculty' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-yellow-400 text-green-900 font-bold text-sm px-4 py-1 rounded-full mb-4">
            Established in Gokhali, Maharashtra
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Gurukul Vidyamandir
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            A beacon of quality education in rural Maharashtra. Nurturing dreams, building futures — one student at a time.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-yellow-400 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-green-900">{stat.number}</div>
              <div className="text-green-800 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Gurukul Vidyamandir was founded with a simple but powerful vision — to provide world-class education to students in rural Maharashtra who deserve the same opportunities as city students.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded by <strong>Laxman Harnawal Sir</strong>, a passionate educator who believed that talent is everywhere but opportunity is not. He left behind city comforts to serve the children of Gokhali and surrounding villages.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Gurukul Vidyamandir stands as proof that rural students can compete with and beat students from top city schools — in IIT JEE, NEET, and beyond.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8 border-2 border-green-100">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl font-bold">L</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Laxman Harnawal Sir</h3>
              <p className="text-green-600 font-medium">Founder & Director</p>
            </div>
            <div className="space-y-3">
              {['15+ years teaching experience', 'Dedicated to rural education', 'Mentor to 500+ students', 'Pioneer of affordable coaching'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-600 shrink-0" size={18} />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a href="https://www.instagram.com/laxman_harnawal" target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center bg-green-700 text-white font-bold py-2 rounded-xl hover:bg-green-800 transition text-sm">
                📷 Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-green-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-yellow-400" size={32} />
              <h2 className="text-2xl font-bold text-yellow-400">Our Mission</h2>
            </div>
            <p className="text-green-100 leading-relaxed">
              To provide affordable, high-quality education and competitive exam coaching to students in rural Maharashtra — empowering them to achieve their dreams of becoming doctors, engineers, and leaders of tomorrow.
            </p>
          </div>
          <div className="bg-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Star className="text-yellow-400" size={32} />
              <h2 className="text-2xl font-bold text-yellow-400">Our Vision</h2>
            </div>
            <p className="text-green-100 leading-relaxed">
              A Maharashtra where every talented rural child has equal access to quality education. Where a student from Gokhali competes confidently with students from Mumbai, Pune, and beyond — and wins.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4">
              <div className="bg-gray-50 p-3 rounded-xl h-fit">
                {value.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Journey / Milestones */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div key={i} className={`flex flex-col md:flex-row gap-4 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                      <div className="text-green-600 font-bold text-sm mb-1">{milestone.year}</div>
                      <h3 className="font-bold text-gray-800 text-lg">{milestone.title}</h3>
                      <p className="text-gray-500 text-sm mt-1">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-10 h-10 bg-green-700 rounded-full items-center justify-center shrink-0 z-10">
                    <Award className="text-white" size={18} />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-400 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Ready to Join Gurukul Vidyamandir?</h2>
        <p className="text-green-800 mb-8 text-lg">Give your child the education they deserve.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}/admission`}
            className="bg-green-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-800 transition text-lg">
            Apply for Admission
          </Link>
          <Link href={`/${locale}/contact`}
            className="bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition text-lg border-2 border-green-700">
            Contact Us
          </Link>
        </div>
      </div>

    </div>
  )
}