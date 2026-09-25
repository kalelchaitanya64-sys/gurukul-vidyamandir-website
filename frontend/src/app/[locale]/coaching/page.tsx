'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { CheckCircle, Clock, Users, BookOpen, Trophy, Star, Phone, MessageCircle, ArrowRight } from 'lucide-react'

export default function CoachingPage() {
  const locale = useLocale()

  const programs = [
    {
      id: 'jee',
      badge: '🔬 Engineering Divison',
      title: 'IIT JEE Mains & Advanced',
      color: 'blue',
      bgColor: 'bg-white',
      borderColor: 'border-slate-200 hover:border-indigo-500',
      badgeBg: 'bg-indigo-50 text-indigo-800 border border-indigo-200',
      btnColor: 'bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-amber-300',
      duration: '1-2 Years',
      eligibility: 'Std 11 & 12 (PCM)',
      batchSize: '30 Students',
      subjects: ['Physics', 'Chemistry', 'Mathematics'],
      features: [
        'Complete JEE Mains & Advanced syllabus coverage',
        'Daily Practice Problems (DPP) with video solutions',
        'Weekly computerized mock tests on NTA pattern',
        '15+ years previous question paper rigorous analysis',
        'Dedicated 1-on-1 daily doubt resolution sessions',
        'Comprehensive standard theory & question bank modules',
        'All India Test Series ranking & performance analytics',
        'Personal mentoring by experienced IITian faculties',
      ],
      highlight: '15+ IIT Selections & 99+ %tile Achievers',
    },
    {
      id: 'neet',
      badge: '🏥 Medical Division',
      title: 'NEET UG Medical Coaching',
      color: 'emerald',
      bgColor: 'bg-white',
      borderColor: 'border-slate-200 hover:border-emerald-500',
      badgeBg: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
      btnColor: 'bg-gradient-to-r from-emerald-800 to-teal-900 hover:from-emerald-700 hover:to-teal-800 text-white',
      duration: '1-2 Years',
      eligibility: 'Std 11 & 12 (PCB)',
      batchSize: '30 Students',
      subjects: ['Physics', 'Chemistry', 'Biology (Botany & Zoology)'],
      features: [
        'Complete NCERT-focused NEET curriculum mastery',
        'Line-by-line NCERT Biology decoding & speed drills',
        'Weekly full-syllabus timed tests & error analysis',
        'Comprehensive Physics numerical solving shortcuts',
        'Previous 15 years NEET & AIPMT solved papers',
        'Daily question practice (100+ MCQs/day)',
        'Personal performance tracking & counselling',
        'Dedicated hostel & revision study rooms',
      ],
      highlight: '25+ NEET Qualifiers every academic session',
    },
    {
      id: 'foundation',
      badge: '📚 School Foundation',
      title: 'Foundation Program (Std 6–10)',
      color: 'amber',
      bgColor: 'bg-white',
      borderColor: 'border-slate-200 hover:border-amber-500',
      badgeBg: 'bg-amber-50 text-amber-900 border border-amber-200',
      btnColor: 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black',
      duration: 'Annual Program',
      eligibility: 'Std 6 to Std 10',
      batchSize: '35 Students',
      subjects: ['Mathematics', 'Science', 'English', 'Social Science'],
      features: [
        'Rock-solid concept building for future IIT/NEET exams',
        'Early analytical thinking and Olympiad preparation',
        '100% SSC Board syllabus mastery with mock exams',
        'Scholarship and NTSE/MTSE exam guidance',
        'Regular chapter-wise unit tests and parent SMS reports',
        'Special remedial sessions for students needing extra help',
        'Interactive scientific experiments and mental math drills',
        'Holistic development, discipline, and study habit cultivation',
      ],
      highlight: '99%+ Board Pass Rate with Distinction',
    },
  ]

  const titleColors: Record<string, string> = {
    blue: 'text-indigo-950',
    emerald: 'text-emerald-950',
    amber: 'text-amber-950',
  }

  const iconColors: Record<string, string> = {
    blue: 'text-indigo-600',
    emerald: 'text-emerald-600',
    amber: 'text-amber-600',
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-24 px-4 text-center border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-5 shadow-sm uppercase tracking-wider">
            Expert Mentorship • Proven Rankers
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Our Coaching Programs</h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            From foundational school training to national IIT JEE &amp; NEET ranks — empowering rural Maharashtra students to compete and win at the highest level.
          </p>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-xs backdrop-blur-md bg-white/95">
        <div className="max-w-5xl mx-auto px-4 py-3 flex gap-3 overflow-x-auto">
          {programs.map(p => (
            <a key={p.id} href={`#${p.id}`}
              className="shrink-0 px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-xl text-xs sm:text-sm hover:bg-slate-900 hover:text-amber-300 transition">
              {p.title}
            </a>
          ))}
        </div>
      </div>

      {/* Programs */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-20 space-y-16">
        {programs.map((program) => (
          <div
            key={program.id}
            id={program.id}
            className={`rounded-3xl border-2 ${program.borderColor} ${program.bgColor} shadow-md overflow-hidden transition-all duration-300`}
          >
            {/* Program Header */}
            <div className="p-8 pb-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className={`inline-block text-xs font-black px-3 py-1 rounded-full mb-3 uppercase tracking-wider ${program.badgeBg}`}>
                    {program.badge}
                  </span>
                  <h2 className={`text-3xl md:text-4xl font-black ${titleColors[program.color]}`}>{program.title}</h2>
                </div>
                <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-black px-4 py-2 rounded-xl bg-amber-400 text-slate-950 shadow-sm shrink-0">
                  <Trophy size={16} />
                  <span>{program.highlight}</span>
                </div>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center">
                  <Clock className="mx-auto mb-2 text-slate-500" size={22} />
                  <div className="font-extrabold text-slate-900 text-base">{program.duration}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Duration</div>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center">
                  <BookOpen className="mx-auto mb-2 text-slate-500" size={22} />
                  <div className="font-extrabold text-slate-900 text-base">{program.eligibility}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Eligibility</div>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center col-span-2 md:col-span-1">
                  <Users className="mx-auto mb-2 text-slate-500" size={22} />
                  <div className="font-extrabold text-slate-900 text-base">{program.batchSize}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Batch Size</div>
                </div>
              </div>
            </div>

            {/* Subjects & Features */}
            <div className="px-8 pb-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-100 pt-8">
              <div>
                <h3 className="font-extrabold text-slate-900 mb-3 flex items-center gap-2 text-base">
                  <Star size={18} className={iconColors[program.color]} />
                  Subjects Covered
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {program.subjects.map((sub, j) => (
                    <span key={j} className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
                      {sub}
                    </span>
                  ))}
                </div>

                <h3 className="font-extrabold text-slate-900 mb-3 flex items-center gap-2 text-base">
                  <CheckCircle size={18} className={iconColors[program.color]} />
                  Key Highlights
                </h3>
                <div className="space-y-2.5">
                  {program.features.slice(0, 4).map((feat, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <CheckCircle className={`shrink-0 mt-0.5 ${iconColors[program.color]}`} size={16} />
                      <span className="text-slate-700 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900 mb-3 flex items-center gap-2 text-base">
                  <CheckCircle size={18} className={iconColors[program.color]} />
                  Methodology &amp; Support
                </h3>
                <div className="space-y-2.5 mb-8">
                  {program.features.slice(4).map((feat, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <CheckCircle className={`shrink-0 mt-0.5 ${iconColors[program.color]}`} size={16} />
                      <span className="text-slate-700 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link href={`/${locale}/admission`}
                    className={`w-full font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 ${program.btnColor}`}>
                    <span>Apply for {program.title.split(' ')[0]} {program.title.split(' ')[1]}</span>
                    <ArrowRight size={18} />
                  </Link>
                  <a href={`https://wa.me/919673761468?text=${encodeURIComponent(`Hello, I would like more information on the ${program.title} coaching program.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 rounded-xl transition flex items-center justify-center gap-2 text-sm border border-slate-200">
                    <MessageCircle size={18} className="text-emerald-600" />
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-950 text-white py-20 px-4 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full inline-block mb-4">
            Free Academic Consultation
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Not Sure Which Stream Fits Your Child?</h2>
          <p className="text-slate-300 mb-8 text-lg font-light">Speak with our senior mentors for a personalized stream evaluation and guidance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919673761468"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-lg">
              <Phone size={20} />
              <span>Call: +91 96737 61468</span>
            </a>
            <a href="https://wa.me/919673761468" target="_blank" rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition flex items-center justify-center gap-2 text-lg border-2 border-white/20 hover:border-amber-400">
              <MessageCircle size={20} className="text-emerald-400" />
              <span>WhatsApp Counselor</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}