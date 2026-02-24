export type Result = {
  _id: string
  studentName: string
  exam: string
  score: string
  year: string
  stream: string
  photo?: {
    asset: {
      _ref: string
    }
  }
}