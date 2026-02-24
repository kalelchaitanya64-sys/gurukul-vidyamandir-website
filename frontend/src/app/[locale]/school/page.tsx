'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { MapPin, Clock, Phone, CheckCircle, BookOpen, Users, Monitor, Beaker } from 'lucide-react'

export default function SchoolPage() {
  const locale = useLocale()

  const facilities = [
    { icon: <Monitor className="text-blue-600" size={28} />, title: 'Smart Classrooms', desc: 'Digital boards and projectors for interactive learning in every classroom.' },
    { icon: <Beaker className="text-purple-600" size={28} />, title: 'Science Labs', desc: 'Fully equipped Physics, Chemistry and Biology laboratories for practical sessions.' },
    { icon: <BookOpen className="text-green-600" size={28} />, title: 'Library', desc: 'Extensive collection of NCERT, reference books, JEE & NEET study material.' },
    { icon: <Users className="text-yellow-600" size={28} />, title: 'Small Batch Size', desc: 'Maximum 30-35 students per batch ensuring personal attention to every student.' },
    { icon: '🏃', title: 'Sports Ground', desc: 'Open playground for physical fitness and outdoor activities for students.' },
    { icon: '🍱', title: 'Hostel Facility', desc: 'Safe and comfortable hostel accommodation available for outstation students.' },
    { icon: '🚌', title: 'Transport', desc: 'School bus facility available for students from nearby villages.' },
    { icon: '💻', title: 'Computer Lab', desc: 'Modern computer lab with internet access for digital learning and practice.' },
  ]

  const timings = [
    { day: 'Monday - Saturday', time: '7:00 AM - 6:00 PM' },
    { day: 'School (Std 6-10)', time: '7:00 AM - 1:00 PM' },
    { day: 'JEE / NEET Coaching', time: '2:00 PM - 6:00 PM' },
    { day: 'Sunday', time: 'Mock Tests Only' },
  ]

  const classes = [
    { name: 'Standard 6', type: 'Foundation', students: '35', desc: 'Building strong basics in Maths & Science' },
    { name: 'Standard 7', type: 'Foundation', students: '35', desc: 'Advancing concepts with activity-based learning' },
    { name: 'Standard 8', type: 'Foundation', students: '35', desc: 'Exam skills and analytical thinking development' },
    { name: 'Standard 9', type: 'Foundation + Board', students: '30', desc: 'Board preparation with competitive foundation' },
    { name: 'Standard 10', type: 'Board Exam', students: '30', desc: 'Intensive SSC board examination preparation' },
    { name: 'JEE Mains & Advanced', type: 'Coaching', students: '30', desc: 'IIT entrance exam preparation (Std 11-12)' },
    { name: 'NEET UG', type: 'Coaching', students: '30', desc: 'Medical entrance exam preparation (Std 11-12)' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20 px-4 text-center">
        <div className="inline-block bg-yellow-400 text-green-900 font-bold text-sm px-4 py-1 rounded-full mb-4">
          📍 Established 15 Jan 2016 • Gokhali, Maharashtra
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our School</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          A complete educational institution — from foundation classes to competitive exam coaching — all under one roof in rural Maharashtra.
        </p>
      </div>

      {/* Quick Info */}
      <div className="bg-yellow-400 py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 justify-center">
            <MapPin className="text-green-900" size={22} />
            <span className="font-bold text-green-900">Gokhali, Maharashtra</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Clock className="text-green-900" size={22} />
            <span className="font-bold text-green-900">Mon-Sat: 7AM - 6PM</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Phone className="text-green-900" size={22} />
            <a href="tel:+919673761468" className="font-bold text-green-900 hover:underline">+91 96737 61468</a>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-4">Our Facilities</h2>
        <p className="text-gray-500 text-center mb-12">World-class infrastructure for students in rural Maharashtra</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {facilities.map((facility, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition text-center">
              <div className="text-4xl mb-3 flex justify-center">
                {typeof facility.icon === 'string' ? facility.icon : facility.icon}
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{facility.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{facility.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Classes Offered */}
      <div className="bg-green-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-yellow-400">Classes We Offer</h2>
          <p className="text-green-200 text-center mb-12">Complete education from Std 6 to competitive exams</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {classes.map((cls, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-5 flex items-start gap-4">
                <div className="bg-yellow-400 text-green-900 font-bold text-sm px-3 py-1 rounded-full shrink-0 mt-1">
                  {cls.type}
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{cls.name}</h3>
                  <p className="text-green-200 text-sm mb-1">{cls.desc}</p>
                  <p className="text-yellow-400 text-xs">Max {cls.students} students per batch</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timings */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-12">School Timings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {timings.map((timing, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <Clock className="text-green-600" size={22} />
              </div>
              <div>
                <div className="font-bold text-gray-800">{timing.day}</div>
                <div className="text-green-600 font-semibold">{timing.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Why Choose Gurukul Vidyamandir?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Experienced faculty with 10-15 years average experience',
              'Small batches — maximum personal attention',
              'Affordable fees — quality education for all',
              'Proven results in IIT JEE & NEET every year',
              'Strong board exam record — 95%+ pass rate',
              'Hostel & transport facility for outstation students',
              'Regular parent-teacher meetings & progress reports',
              'Motivational sessions & career counselling',
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Placeholder & CTA */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 text-center">
          <MapPin className="text-green-600 mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold text-green-800 mb-2">Visit Us</h3>
          <p className="text-gray-600 mb-2">Gurukul Vidyamandir</p>
          <p className="text-gray-500 mb-6">Gokhali, Maharashtra, India</p>
          <a href="https://maps.app.goo.gl/kZ6Jr5TytcuzP57b7" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-green-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-800 transition">
            📍 Open in Google Maps
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-yellow-400 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Ready to Join Our School?</h2>
        <p className="text-green-800 mb-8">Limited seats available. Apply now for 2025-26 admissions.</p>
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