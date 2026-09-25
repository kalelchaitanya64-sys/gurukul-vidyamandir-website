'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Patil',
    role: 'Parent of JEE Student',
    text: 'Gurukul has transformed my son\'s future. The teachers are dedicated and the results speak for themselves. The academic discipline here is unmatched.',
    rating: 5,
  },
  {
    name: 'Sunita Deshmukh',
    role: 'Parent of NEET Student',
    text: 'My daughter got selected in MBBS thanks to Gurukul coaching. Forever grateful to this institution for bringing top-quality medical preparation to rural students.',
    rating: 5,
  },
  {
    name: 'Vikas Shinde',
    role: 'Alumni, IIT Bombay',
    text: 'The conceptual foundation I built at Gurukul helped me crack IIT. Best coaching and personal mentorship in the entire region.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Words of Trust
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">
            What Parents &amp; Alumni Say
          </h2>
          <p className="text-slate-600 mt-2 text-base">Real experiences from our Gurukul family</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} size={16} fill="#f59e0b" />
                    ))}
                  </div>
                  <Quote size={24} className="text-blue-950/20" />
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-950 text-amber-300 font-bold flex items-center justify-center text-sm shadow-xs">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                  <p className="text-amber-700 font-semibold text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}