'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { MapPin, Clock, Phone, CheckCircle, BookOpen, Users, Monitor, Beaker, ShieldCheck, Bus, Award } from 'lucide-react'

export default function SchoolPage() {
  const locale = useLocale()

  const facilities = [
    { icon: <Monitor className="text-blue-600" size={28} />, title: 'Smart Classrooms', desc: 'Digital boards and interactive projectors for visual concept mastery.' },
    { icon: <Beaker className="text-indigo-600" size={28} />, title: 'Science Labs', desc: 'State-of-the-art Physics, Chemistry, and Biology laboratories for practical inquiry.' },
    { icon: <BookOpen className="text-amber-600" size={28} />, title: 'Rich Library', desc: 'Extensive repository of NCERT, standard reference books, JEE & NEET modules.' },
    { icon: <Users className="text-emerald-600" size={28} />, title: 'Small Batch Size', desc: 'Strict limit of 30-35 students per class ensuring 1-on-1 personalized mentorship.' },
    { icon: <Award className="text-rose-600" size={28} />, title: 'Sports & Fitness', desc: 'Open grounds for physical endurance, athletic activities, and team discipline.' },
    { icon: <ShieldCheck className="text-teal-600" size={28} />, title: 'Hostel Facility', desc: 'Secure, hygienic, and disciplined hostel accommodation for outstation students.' },
    { icon: <Bus className="text-amber-600" size={28} />, title: 'School Transport', desc: 'Dedicated bus routes connecting Gokhali with nearby villages for safe commute.' },
    { icon: <Monitor className="text-purple-600" size={28} />, title: 'Computer Lab', desc: 'High-speed internet lab for computer literacy, online practice tests, and research.' },
  ]

  const timings = [
    { day: 'Monday - Saturday (School)', time: '7:00 AM - 3:00 PM' },
    { day: 'Foundation Batches (Std 6-10)', time: '7:00 AM - 3:00 PM' },
    { day: 'IIT JEE / NEET Coaching', time: '3:00 PM - 7:30 PM' },
    { day: 'Sunday', time: 'Mock Tests & Doubt Clearance' },
  ]

  const classes = [
    { name: 'Standard 6', type: 'Foundation', students: '35', desc: 'Strengthening mathematical foundations & basic science curiosity' },
    { name: 'Standard 7', type: 'Foundation', students: '35', desc: 'Advancing core conceptual models and problem-solving habits' },
    { name: 'Standard 8', type: 'Foundation', students: '35', desc: 'Analytical thinking and competitive aptitude training' },
    { name: 'Standard 9', type: 'Foundation', students: '30', desc: 'SSC Board syllabus integrated with advanced foundation modules' },
    { name: 'Standard 10', type: 'Board Exam', students: '30', desc: 'Rigorous 10th Board preparation with mock tests & revision rounds' },
    { name: 'JEE Mains & Advanced', type: 'Coaching', students: '30', desc: '2-Year integrated program for Std 11 & 12 (Physics, Chem, Math)' },
    { name: 'NEET UG Medical', type: 'Coaching', students: '30', desc: 'Targeted preparation for Medical Entrance (Physics, Chem, Bio)' },
  ]

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-24 px-4 text-center border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-5 shadow-sm uppercase tracking-wider">
            📍 Established 15 Jan 2016 • Gokhali, Maharashtra
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Our School &amp; Campus</h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            A comprehensive academic ecosystem uniting foundational schooling with premier competitive exam coaching — all under one inspiring roof.
          </p>
        </div>
      </div>

      {/* Quick Info */}
      <div className="bg-white border-b border-slate-200 py-6 px-4 shadow-xs">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center gap-3 justify-center">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <MapPin size={20} />
            </div>
            <span className="font-bold text-slate-800 text-sm">Gokhali, Dist. Satara / Maharashtra</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Clock size={20} />
            </div>
            <span className="font-bold text-slate-800 text-sm">Mon-Sat: 7:00 AM - 7:30 PM</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Phone size={20} />
            </div>
            <a href="tel:+919673761468" className="font-bold text-slate-800 text-sm hover:text-blue-900 transition">+91 96737 61468</a>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Modern Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3">Campus Facilities</h2>
          <p className="text-slate-600 mt-2 text-base">State-of-the-art facilities designed for total student well-being and academic focus</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-xs border-2 border-slate-200/80 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 text-center group">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-xs">
                {facility.icon}
              </div>
              <h3 className="font-extrabold text-slate-900 mb-2 text-lg group-hover:text-blue-900 transition">{facility.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{facility.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Classes Offered */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-20 px-4 md:px-8 border-y border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full">
              Comprehensive Curriculum
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 tracking-tight">Academic Classes &amp; Batches</h2>
            <p className="text-slate-300 mt-2 text-base font-light">From Standard 6 fundamentals to national competitive rank preparation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {classes.map((cls, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-amber-400/50 transition">
                <div className="bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full shrink-0 mt-1 uppercase tracking-wider">
                  {cls.type}
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-lg">{cls.name}</h3>
                  <p className="text-slate-300 text-sm mb-2">{cls.desc}</p>
                  <p className="text-amber-400 text-xs font-semibold">Max {cls.students} students / batch</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timings */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Daily Routine
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3">School &amp; Coaching Timings</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {timings.map((timing, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-xs border-2 border-slate-200/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-base">{timing.day}</div>
                <div className="text-amber-700 font-bold text-sm mt-0.5">{timing.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white border-y border-slate-200 py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              The Gurukul Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mt-3">Why Parents Choose Gurukul Vidyamandir</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              'Experienced faculty team with average 10–15 years coaching tenure',
              'Small batches (30-35 students) guaranteeing direct 1-on-1 doubt clearing',
              'Affordable, non-commercial fee model making premium education accessible',
              'Proven track record with 99+ percentile scorers in JEE Mains & NEET every year',
              'Consistent 99%+ board pass record with merit distinctions',
              'Safe residential hostel and reliable transport facilities for outstation students',
              'Weekly test analytics and transparent parent-teacher progress tracking',
              'Regular motivation camps, mental health support, and career counseling',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 shadow-xs">
                <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={20} />
                <span className="text-slate-800 text-sm font-medium leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map & CTA */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-20">
        <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-10 text-center shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
            <MapPin size={32} />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">Visit Our Gokhali Campus</h3>
          <p className="text-slate-700 font-semibold mb-1">Gurukul Vidyamandir &amp; Science Junior College</p>
          <p className="text-slate-500 text-sm mb-6">Gokhali, Maharashtra, India</p>
          <a href="https://maps.app.goo.gl/kZ6Jr5TytcuzP57b7" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold px-8 py-3.5 rounded-xl shadow-md transition text-base">
            <span>Open in Google Maps</span>
            <span>📍</span>
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-slate-950 text-white py-20 px-4 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full inline-block mb-4">
            Seats Filling Fast
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Ready to Enroll in Our School?</h2>
          <p className="text-slate-300 mb-8 text-lg font-light">Limited batch size. Reserve your child's seat for 2025-26 academic year.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/admission`}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-xl text-lg shadow-lg transition">
              Apply for Admission
            </Link>
            <Link href={`/${locale}/contact`}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg border-2 border-white/20 hover:border-amber-400 transition">
              Contact School Office
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}