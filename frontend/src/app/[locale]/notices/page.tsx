'use client'

import { useState, useEffect } from 'react'
import { client } from '@/lib/sanity'
import { noticesQuery } from '@/lib/sanityQueries'
import { Bell, Calendar, Megaphone } from 'lucide-react'

interface Notice {
  _id: string
  title: string
  category: string
  description: string
  date: string
  important: boolean
}

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    client.fetch(noticesQuery).then((data) => {
      setNotices(data)
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }, [])

  const filters = [
    { id: 'all', label: 'All Notices' },
    { id: 'admission', label: '📋 Admission' },
    { id: 'exam', label: '📝 Exams & Schedules' },
    { id: 'result', label: '🏆 Results & Merits' },
    { id: 'holiday', label: '🗓 Academic Calendar' },
    { id: 'general', label: '📢 Announcements' },
  ]

  const filtered = activeFilter === 'all'
    ? notices
    : notices.filter(n => n.category === activeFilter)

  const important = notices.filter(n => n.important)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white py-24 px-4 text-center border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-amber-400 text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full mb-5 shadow-sm uppercase tracking-wider">
            📢 Official Notice Board
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Notices &amp; Announcements</h1>
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Stay updated with official school communications, exam timetables, admission deadlines, and academic circulars.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16">

        {/* Important Notices Banner */}
        {important.length > 0 && (
          <div className="bg-rose-50 border-2 border-rose-200 rounded-3xl p-6 mb-10 shadow-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center">
                <Bell size={18} />
              </div>
              <h2 className="font-black text-rose-900 text-lg">Urgent / Priority Notices</h2>
            </div>
            <div className="space-y-3">
              {important.slice(0, 3).map(notice => (
                <div key={notice._id} className="flex items-center gap-3 text-sm text-rose-800 bg-white p-3.5 rounded-xl border border-rose-100">
                  <span className="w-2.5 h-2.5 bg-rose-500 rounded-full shrink-0 animate-pulse" />
                  <span className="font-bold">{notice.title}</span>
                  <span className="text-rose-500 ml-auto shrink-0 font-medium text-xs">{notice.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-8">
          {filters.map(filter => (
            <button key={filter.id} onClick={() => setActiveFilter(filter.id)}
              className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition shadow-xs ${
                activeFilter === filter.id
                  ? 'bg-slate-900 text-amber-300'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-16">
            <div className="w-10 h-10 border-4 border-blue-900 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-400">Loading notices...</p>
          </div>
        )}

        {/* Notices List */}
        {!loading && (
          <div className="space-y-4">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-slate-400 bg-white rounded-3xl border border-slate-200 p-10">
                <Megaphone size={48} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg font-bold text-slate-700">No notices in this category</p>
                <p className="text-sm text-slate-400 mt-1">Please check back soon for recent circulars.</p>
              </div>
            ) : (
              filtered.map(notice => (
                <div key={notice._id}
                  className={`bg-white rounded-2xl border-2 p-6 md:p-7 relative transition hover:shadow-md ${
                    notice.important ? 'border-rose-200 bg-rose-50/20' : 'border-slate-200/80'
                  }`}>
                  {notice.important && (
                    <span className="absolute top-5 right-5 bg-rose-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                      URGENT
                    </span>
                  )}
                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl mb-2 pr-24">{notice.title}</h3>
                  <p className="text-slate-500 text-xs mb-3 flex items-center gap-1.5 font-medium">
                    <Calendar size={13} className="text-amber-600" />
                    {notice.date}
                  </p>
                  <p className="text-slate-700 text-sm leading-relaxed">{notice.description}</p>
                  <span className="inline-block mt-4 bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-lg border border-slate-200 capitalize">
                    {notice.category}
                  </span>
                </div>
              ))
            )}
          </div>
        )}

        {/* Telegram CTA */}
        <div className="mt-14 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white border border-slate-800 rounded-3xl p-8 text-center shadow-lg">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full inline-block mb-3">
            Real-Time Broadcasts
          </span>
          <h3 className="font-black text-2xl mb-2">Get Instant Updates on Telegram 📲</h3>
          <p className="text-slate-300 mb-6 text-sm max-w-md mx-auto font-light">Join our official verified Telegram channel to receive urgent circulars and holiday alerts instantly on your phone.</p>
          <a href="https://t.me/GurukulGokhaliTelegramChannel" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-3.5 rounded-xl transition shadow-md">
            <span>Join Official Telegram Channel</span>
            <span>✈</span>
          </a>
        </div>

      </div>
    </div>
  )
}