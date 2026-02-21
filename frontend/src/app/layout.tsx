import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gurukul - School & Coaching Institute',
  description: 'Excellence in School Education and Coaching for IIT JEE, NEET and Foundation Classes'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}