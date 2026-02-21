export type Result = {
  _id: string
  studentName: string
  exam: 'JEE Mains' | 'NEET' | 'Board'
  rank: number
  score: number
  year: number
  photo?: {
    asset: {
      _ref: string
    }
  }
}