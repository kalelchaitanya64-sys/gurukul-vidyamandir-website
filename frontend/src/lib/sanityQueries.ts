export const facultyQuery = `*[_type == "faculty"] | order(name asc) {
  _id,
  name,
  subject,
  qualification,
  experience,
  photo,
  bio
}`

export const resultsQuery = `*[_type == "result"] | order(year desc) {
  _id,
  studentName,
  exam,
  rank,
  score,
  year,
  photo
}`

export const noticesQuery = `*[_type == "notice"] | order(date desc) {
  _id,
  title,
  description,
  date,
  important
}`