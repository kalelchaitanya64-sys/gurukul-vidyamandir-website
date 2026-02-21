const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export async function submitInquiry(data: any) {
  const response = await fetch(`${API_URL}/api/inquiry`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error('Failed to submit inquiry')
  }

  return response.json()
}