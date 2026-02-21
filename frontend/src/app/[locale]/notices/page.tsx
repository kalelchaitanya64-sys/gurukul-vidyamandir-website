'use client'

import { useState } from 'react'
import { Bell, Calendar, BookOpen, Trophy, AlertCircle, Info, Download } from 'lucide-react'

export default function NoticesPage() {

  const [activeFilter, setActiveFilter] = useState('all')

  const notices = [
    {
      id: 1,
      category: 'admission',
      title: 'Admission Open for 2025-26',
      date: '15 Jan 2025',
      desc: 'Admissions are now open for all programs including IIT JEE, NEET coaching, and Foundation classes (Std 6-10). Limited seats available. Apply early to secure your spot.',
      important: true,
      icon: <BookOpen size={20} />,
      color: 'bg-green-100 text-green-700 border-green-200',
      badgeColor: 'bg-green-600',
    },
    {
      id: 2,
      category: 'exam',
      title: 'JEE Mains 2025 - Mock Test Schedule',
      date: '10 Jan 2025',
      desc: 'Mock test series for JEE Mains 2025 begins on 20th January. All JEE batch students must register. Tests will be held every Sunday from 9 AM to 12 PM.',
      important: true,
      icon: <Calendar size={20} />,
      color: 'bg-blue-100 text-blue-700 border-blue-200',
      badgeColor: 'bg-blue-600',
    },
    {
      id: 3,
      category: 'result',
      title: 'Congratulations! 2024 Results Announced',
      date: '5 Jan 2025',
      desc: '20 students selected in IIT JEE & NEET 2024. This is our best result ever! Proud of all our students. Special felicitation ceremony on 25th January.',
      important: false,
      icon: <Trophy size={20} />,
      color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      badgeColor: 'bg-yellow-500',
    },
    {
      id: 4,
      category: 'holiday',
      title: 'Holiday Notice - Republic Day',
      date: '20 Jan 2025',
      desc: 'School and coaching classes will remain closed on 26th January 2025 on account of Republic Day. Classes will resume on 27th January as usual.',
      important: false,
      icon: <AlertCircle size={20} />,
      color: 'bg-red-100 text-red-700 border-red-200',
      badgeColor: 'bg-red-500',
    },
    {
      id: 5,
      category: 'exam',
      title: 'NEET Mock Test - January Series',
      date: '18 Jan 2025',
      desc: 'NEET full-length mock tests begin 22nd January. All NEET batch students to report by 8:45 AM. Bring HB pencil, eraser, and admit card. Duration: 3 hours 20 minutes.',
      important: true,
      icon: <Calendar size={20} />,
      color: 'bg-red-100 text-red-700 border-red-200',
      badgeColor: 'bg-red-600',
    },
    {
      id: 6,
      category: 'general',
      title: 'New Study Material Available',
      date: '12 Jan 2025',
      desc: 'Updated study material for Physics and Chemistry (JEE batch) is now available. Students can collect from the office between 10 AM - 1 PM on weekdays.',
      important: false,
      icon: <Info size={20} />,
      color: 'bg-purple-100 text-purple-700 border-purple-200',
      badgeColor: 'bg-purple-600',
    },
    {
      id: 7,
      category: 'admission',
      title: 'Scholarship Test for New Admissions',
      date: '8 Jan 2025',
      desc: 'Scholarship test for new admissions will be held on 2nd February 2025. Students scoring above 80% will receive 25-50% fee concession. Registration open now.',
      important: true,
      icon: <Trophy size={20} />,
      color: 'bg-green-100 text-green-700 border-green-200',
      badgeColor: 'bg-green-700',
    },
    {
      id: 8,
      category: 'general',
      title: 'Parent-Teacher Meeting - February',
      date: '5 Jan 2025',
      desc: 'Parent-Teacher Meeting scheduled for 15th February 2025. All parents are requested to attend. Meeting timings: 10 AM - 1 PM. Progress cards will be distributed.',
      important: false,
      icon: <Users size={20} />,
      color: 'bg-teal-100 text-teal-700 border-teal-200',
      badgeColor: 'bg-teal-600',
    },
  ]

  const filters = [
    { id: 'all', label: 'All Notices' },
    { id: 'admission', label: '📋 Admission' },
    { id: 'exam', label: '📝 Exams' },
    { id: 'result', label: '🏆 Results' },
    { id: 'holiday', label: '🗓 Holidays' },
    { id: 'general', label: '📢 General' },
  ]

  const filtered = activeFilter === 'all' ? notices : notices.filter(n => n.category === activeFilter)
  const important = notices.filter(n => n.important)

  function Users(props: any) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 20} height={props.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20 px-4 text-center">
        <div className="inline-block bg-yellow-400 text-green-900 font-bold text-sm px-4 py-1 rounded-full mb-4">
          📢 Stay Updated
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Notices & Announcements</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          Stay informed about admissions, exams, results, holidays, and all important school updates.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Important Notices Banner */}
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Bell className="text-red-500" size={22} />
            <h2 className="font-bold text-red-700 text-lg">Important Notices</h2>
          </div>
          <div className="space-y-2">
            {important.slice(0, 3).map(notice => (
              <div key={notice.id} className="flex items-center gap-2 text-sm text-red-600">
                <span className="w-2 h-2 bg-red-500 rounded-full shrink-0 animate-pulse" />
                <span className="font-medium">{notice.title}</span>
                <span className="text-red-400 ml-auto shrink-0">{notice.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeFilter === filter.id
                  ? 'bg-green-700 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {filtered.map(notice => (
            <div key={notice.id} className={`bg-white rounded-2xl border-2 ${notice.color} p-6 relative`}>
              {notice.important && (
                <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  IMPORTANT
                </span>
              )}
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-xl ${notice.color}`}>
                  {notice.icon}
                </div>
                <div className="flex-1 pr-16">
                  <h3 className="font-bold text-gray-800 text-lg mb-1">{notice.title}</h3>
                  <p className="text-gray-400 text-xs mb-3 flex items-center gap-1">
                    <Calendar size={12} />
                    {notice.date}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{notice.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <Bell size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg">No notices in this category</p>
          </div>
        )}

        {/* Telegram CTA */}
        <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
          <h3 className="font-bold text-blue-800 text-xl mb-2">Get Instant Updates! 📲</h3>
          <p className="text-blue-600 mb-4 text-sm">Join our Telegram channel to receive notices instantly on your phone.</p>
          <a href="https://t.me/GurukulGokhaliTelegramChannel" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            ✈ Join Telegram Channel
          </a>
        </div>

      </div>
    </div>
  )
}