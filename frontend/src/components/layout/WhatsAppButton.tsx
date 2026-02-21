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
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 50,
        backgroundColor: '#22c55e',
        color: 'white',
        padding: '16px',
        borderRadius: '9999px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <MessageCircle size={28} />
    </a>
  )
}