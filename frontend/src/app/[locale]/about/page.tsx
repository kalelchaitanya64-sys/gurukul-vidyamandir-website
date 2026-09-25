'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { Users, BookOpen, Heart, Target, Star, CheckCircle, GraduationCap, Compass } from 'lucide-react'

export default function AboutPage() {
  const locale = useLocale()

  const values = [
    { icon: <Heart className="text-rose-500" size={28} />, title: 'Care & Dedication', desc: 'Every student is treated like family. We care deeply about each child\'s individual intellectual and emotional growth.' },
    { icon: <Target className="text-blue-600" size={28} />, title: 'Goal-Oriented', desc: 'We set clear academic targets, track milestones rigorously, and work tirelessly together to achieve top ranks.' },
    { icon: <BookOpen className="text-amber-600" size={28} />, title: 'Quality Education', desc: 'Comprehensive curriculum designed by seasoned IITian and doctor mentors with proven pedagogical methods.' },
    { icon: <Users className="text-indigo-600" size={28} />, title: 'Community First', desc: 'Democratizing quality education for rural Maharashtra — premium coaching made accessible for all families.' },
  ]

  const stats = [
    { number: '500+', label: 'Students Enrolled' },
    { number: '15+', label: 'Years of Excellence' },
    { number: '100+', label: 'IIT/NEET Selections' },
    { number: '20+', label: 'Expert Faculty' },
  ]

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-24 px-4 text-center border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-5 shadow-sm tracking-wider uppercase">
            <GraduationCap size={16} />
            Established in Gokhali, Maharashtra
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            About Gurukul Vidyamandir
          </h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            A beacon of quality education and competitive excellence in rural Maharashtra. Nurturing dreams, building careers, and empowering leaders of tomorrow.
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b border-slate-200 py-10 px-4 shadow-xs">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-black text-blue-950 tracking-tight">{stat.number}</div>
              <div className="text-slate-600 text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full inline-block mb-3">
              Our Heritage &amp; Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Our Story</h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Gurukul Vidyamandir was founded with a transformative vision: to provide world-class academic training and national competitive exam coaching to students in rural Maharashtra, matching the highest standards of premier city institutions.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Founded by <strong>Laxman Harnawal Sir</strong>, a dedicated visionary who believed that exceptional intellect and talent exist everywhere, but access and mentorship make the difference.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Today, Gurukul stands tall as concrete proof that rural students can compete with the best nationwide in IIT JEE, NEET, and Olympiads.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-md">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-blue-950 text-amber-300 rounded-2xl flex items-center justify-center mx-auto mb-4 font-black text-3xl shadow-sm">
                L
              </div>
              <h3 className="text-2xl font-black text-slate-900">Laxman Harnawal Sir</h3>
              <p className="text-amber-700 font-bold text-sm">Founder &amp; Director</p>
            </div>
            <div className="space-y-3">
              {['15+ years of dedicated teaching experience', 'Pioneer of rural competitive exam coaching', 'Direct personal mentor to 500+ students', 'Proven system of conceptual mastery'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-600 shrink-0" size={18} />
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <a href="https://www.instagram.com/laxman_harnawal" target="_blank" rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold py-3 rounded-xl transition text-sm shadow-xs">
                <span>Connect on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-20 px-4 border-y border-slate-800">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-400">
                <Target size={26} />
              </div>
              <h2 className="text-2xl font-extrabold text-amber-400">Our Mission</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-base">
              To provide affordable, rigorous, high-quality schooling and competitive coaching to students in rural areas — equipping them with fundamental understanding, discipline, and confidence to succeed in top national exams.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-400">
                <Compass size={26} />
              </div>
              <h2 className="text-2xl font-extrabold text-amber-400">Our Vision</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-base">
              An educational ecosystem where rural geography is never a barrier to genius. A platform that produces future doctors, IITians, researchers, and principled leaders from every village.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Principles that Guide Us
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 shadow-xs border-2 border-slate-200/80 hover:border-amber-400 transition-all duration-300 flex gap-5">
              <div className="bg-slate-50 p-3.5 rounded-2xl h-fit border border-slate-100">
                {value.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-950 border-t border-slate-800 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full inline-block mb-4">
            Admissions 2025-26
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Ready to Join Gurukul Vidyamandir?</h2>
          <p className="text-slate-300 mb-10 text-lg max-w-xl mx-auto font-light">
            Give your child the educational foundation and competitive advantage they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/admission`}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-amber-400/25 transition">
              Apply for Admission
            </Link>
            <Link href={`/${locale}/contact`}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg border-2 border-white/20 hover:border-amber-400 transition">
              Contact Campus
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}