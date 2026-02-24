'use client'

import { useState, useEffect } from 'react'
import { client } from '@/lib/sanity'
import { noticesQuery } from '@/lib/sanityQueries'
import { Bell, Calendar } from 'lucide-react'

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
    { id: 'exam', label: '📝 Exams' },
    { id: 'result', label: '🏆 Results' },
    { id: 'holiday', label: '🗓 Holidays' },
    { id: 'general', label: '📢 General' },
  ]

  const filtered = activeFilter === 'all'
    ? notices
    : notices.filter(n => n.category === activeFilter)

  const important = notices.filter(n => n.important)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20 px-4 text-center">
        <div className="inline-block bg-yellow-400 text-green-900 font-bold text-sm px-4 py-1 rounded-full mb-4">
          📢 Stay Updated
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Notices & Announcements</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          Stay informed about admissions, exams, results, holidays, and all important updates.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Important Notices Banner */}
        {important.length > 0 && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Bell className="text-red-500" size={22} />
              <h2 className="font-bold text-red-700 text-lg">Important Notices</h2>
            </div>
            <div className="space-y-2">
              {important.slice(0, 3).map(notice => (
                <div key={notice._id} className="flex items-center gap-2 text-sm text-red-600">
                  <span className="w-2 h-2 bg-red-500 rounded-full shrink-0 animate-pulse" />
                  <span className="font-medium">{notice.title}</span>
                  <span className="text-red-400 ml-auto shrink-0">{notice.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {filters.map(filter => (
            <button key={filter.id} onClick={() => setActiveFilter(filter.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition ${
                activeFilter === filter.id
                  ? 'bg-green-700 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
              }`}>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-16">
            <div className="w-10 h-10 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-400">Loading notices...</p>
          </div>
        )}

        {/* Notices List */}
        {!loading && (
          <div className="space-y-4">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <Bell size={48} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg">No notices found</p>
              </div>
            ) : (
              filtered.map(notice => (
                <div key={notice._id}
                  className={`bg-white rounded-2xl border-2 p-6 relative ${
                    notice.important ? 'border-red-200' : 'border-gray-100'
                  }`}>
                  {notice.important && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      IMPORTANT
                    </span>
                  )}
                  <h3 className="font-bold text-gray-800 text-lg mb-1 pr-24">{notice.title}</h3>
                  <p className="text-gray-400 text-xs mb-3 flex items-center gap-1">
                    <Calendar size={12} />
                    {notice.date}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{notice.description}</p>
                  <span className="inline-block mt-3 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200 capitalize">
                    {notice.category}
                  </span>
                </div>
              ))
            )}
          </div>
        )}

        {/* Telegram CTA */}
        <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
          <h3 className="font-bold text-blue-800 text-xl mb-2">Get Instant Updates! 📲</h3>
          <p className="text-blue-600 mb-4 text-sm">Join our Telegram channel to receive notices instantly.</p>
          <a href="https://t.me/GurukulGokhaliTelegramChannel" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            ✈ Join Telegram Channel
          </a>
        </div>

      </div>
    </div>
  )
}