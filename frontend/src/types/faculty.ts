export type Faculty = {
  _id: string
  name: string
  role: string
  subjects: string[]
  qualification: string
  experience: string
  specialization: string
  instagram?: string
  photo?: {
    asset: {
      _ref: string
    }
  }
  bio?: string
}