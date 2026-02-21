'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { Trophy, Star, Award, TrendingUp } from 'lucide-react'

export default function ResultsPage() {
  const locale = useLocale()

  const toppers = [
    { name: 'Rahul Patil', exam: 'IIT JEE Mains', score: '97.8 Percentile', year: '2024', stream: 'Engineering', color: 'bg-blue-600' },
    { name: 'Priya Shinde', exam: 'NEET UG', score: '650/720', year: '2024', stream: 'Medical', color: 'bg-red-600' },
    { name: 'Amit Jadhav', exam: 'IIT JEE Advanced', score: 'AIR 2847', year: '2023', stream: 'Engineering', color: 'bg-blue-600' },
    { name: 'Sneha Kulkarni', exam: 'NEET UG', score: '630/720', year: '2023', stream: 'Medical', color: 'bg-red-600' },
    { name: 'Rohan Deshmukh', exam: 'IIT JEE Mains', score: '95.4 Percentile', year: '2023', stream: 'Engineering', color: 'bg-blue-600' },
    { name: 'Kavya More', exam: 'NEET UG', score: '610/720', year: '2022', stream: 'Medical', color: 'bg-red-600' },
  ]

  const yearlyStats = [
    { year: '2024', jee: 8, neet: 12, total: 20 },
    { year: '2023', jee: 6, neet: 10, total: 16 },
    { year: '2022', jee: 5, neet: 8, total: 13 },
    { year: '2021', jee: 3, neet: 6, total: 9 },
    { year: '2019', jee: 2, neet: 4, total: 6 },
  ]

  const overallStats = [
    { number: '100+', label: 'Total Selections', icon: <Trophy className="text-yellow-500" size={32} /> },
    { number: '97.8%', label: 'Highest JEE Percentile', icon: <Star className="text-blue-500" size={32} /> },
    { number: '650', label: 'Highest NEET Score', icon: <Award className="text-red-500" size={32} /> },
    { number: '95%+', label: 'Board Pass Rate', icon: <TrendingUp className="text-green-600" size={32} /> },
  ]

  const boardToppers = [
    { name: 'Divya Wagh', std: 'Std 10', percent: '95.4%', year: '2024' },
    { name: 'Suraj Nimkar', std: 'Std 10', percent: '93.8%', year: '2024' },
    { name: 'Aisha Shaikh', std: 'Std 12', percent: '91.2%', year: '2024' },
    { name: 'Tushar Gaikwad', std: 'Std 10', percent: '90.6%', year: '2023' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20 px-4 text-center">
        <div className="inline-block bg-yellow-400 text-green-900 font-bold text-sm px-4 py-1 rounded-full mb-4">
          🏆 Proven Track Record
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Results</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          Every year, Gurukul students prove that rural students can compete with the best. Here are our proud achievers.
        </p>
      </div>

      {/* Overall Stats */}
      <div className="bg-yellow-400 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {overallStats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              {stat.icon}
              <div className="text-2xl md:text-3xl font-bold text-green-900 mt-2">{stat.number}</div>
              <div className="text-green-800 text-xs font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Achievers */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-4">Star Achievers</h2>
        <p className="text-gray-500 text-center mb-12">Our students who cracked IIT JEE & NEET — the toughest exams in India</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toppers.map((topper, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
              <div className={`${topper.color} p-4 flex items-center gap-3`}>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{topper.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="text-white font-bold">{topper.name}</div>
                  <div className="text-white/80 text-xs">{topper.stream}</div>
                </div>
                {i === 0 && <div className="ml-auto text-2xl">🥇</div>}
                {i === 1 && <div className="ml-auto text-2xl">🥇</div>}
              </div>
              <div className="p-5">
                <div className="text-gray-800 font-bold text-lg mb-1">{topper.score}</div>
                <div className="text-gray-500 text-sm">{topper.exam}</div>
                <div className="mt-3 inline-block bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                  Batch of {topper.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Yearly Progress */}
      <div className="bg-green-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-yellow-400">Year-wise Selections</h2>
          <p className="text-green-200 text-center mb-12">Growing stronger every year 📈</p>

          <div className="space-y-4">
            {yearlyStats.map((stat, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-yellow-400 font-bold text-lg">{stat.year}</span>
                  <span className="text-white font-bold">{stat.total} Total Selections</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-green-300 text-xs mb-1">IIT JEE ({stat.jee} students)</div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: `${(stat.jee / 12) * 100}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="text-green-300 text-xs mb-1">NEET ({stat.neet} students)</div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div className="bg-red-400 h-2 rounded-full" style={{ width: `${(stat.neet / 15) * 100}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Board Toppers */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-4">Board Exam Toppers</h2>
        <p className="text-gray-500 text-center mb-12">Outstanding performance in Maharashtra Board Exams</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {boardToppers.map((topper, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                <span className="text-green-900 font-bold text-lg">{topper.name.charAt(0)}</span>
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-800">{topper.name}</div>
                <div className="text-gray-500 text-sm">{topper.std} • Batch {topper.year}</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-700">{topper.percent}</div>
                <div className="text-gray-400 text-xs">Percentage</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-yellow-400 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Your Child Could Be Next! 🌟</h2>
        <p className="text-green-800 mb-8 text-lg">Join the growing list of Gurukul success stories.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}/admission`}
            className="bg-green-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-800 transition text-lg">
            Apply for Admission
          </Link>
          <Link href={`/${locale}/coaching`}
            className="bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition text-lg border-2 border-green-700">
            View Programs
          </Link>
        </div>
      </div>

    </div>
  )
}