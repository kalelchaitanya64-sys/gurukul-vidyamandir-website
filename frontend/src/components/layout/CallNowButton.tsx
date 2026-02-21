'use client'

import { Phone } from 'lucide-react'

export default function CallNowButton() {
  return (
    <a
      href="tel:+919673761468"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        zIndex: 50,
        backgroundColor: '#ea580c',
        color: 'white',
        padding: '16px',
        borderRadius: '9999px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Phone size={28} />
    </a>
  )
}