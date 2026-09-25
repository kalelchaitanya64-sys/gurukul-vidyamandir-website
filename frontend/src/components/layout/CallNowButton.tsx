'use client'

import { Phone } from 'lucide-react'

export default function CallNowButton() {
  return (
    <a
      href="tel:+919673761468"
      className="fixed bottom-6 left-6 z-50 bg-slate-950 text-amber-400 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 border-2 border-amber-400/40 flex items-center justify-center group"
      aria-label="Call Admissions Helpline"
      title="Call Gurukul Admissions"
    >
      <Phone size={24} className="group-hover:rotate-12 transition-transform" />
    </a>
  )
}