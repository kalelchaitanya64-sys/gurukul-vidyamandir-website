import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '3dit6cye',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})