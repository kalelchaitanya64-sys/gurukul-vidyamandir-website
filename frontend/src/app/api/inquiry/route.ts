import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.studentName || !data.parentName || !data.mobile || !data.classInterested) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Try to forward to backend API if available
    const backendUrl = process.env.BACKEND_API_URL || 'http://localhost:5000'
    try {
      const backendRes = await fetch(`${backendUrl}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (backendRes.ok) {
        const result = await backendRes.json()
        return NextResponse.json(result)
      }
    } catch {
      // Backend not available — that's OK, we still accept the form
      console.log('Backend API not available, form data logged only')
    }

    // Log the inquiry (always, as fallback)
    console.log('New inquiry received:', data)

    return NextResponse.json({ success: true, message: 'Inquiry submitted successfully' })
  } catch {
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    )
  }
}
