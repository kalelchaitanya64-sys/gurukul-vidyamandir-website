export type Faculty = {
  _id: string
  name: string
  subject: string
  qualification: string
  experience: number
  photo: {
    asset: {
      _ref: string
    }
  }
  bio: string
}