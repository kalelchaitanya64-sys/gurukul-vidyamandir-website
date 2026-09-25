'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phone = '+919673761468'
  const message = 'Hello, I want to know more about admission at Gurukul Vidyamandir Gokhali.'
  const url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-200 border-2 border-emerald-400/40 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
    </a>
  )
}