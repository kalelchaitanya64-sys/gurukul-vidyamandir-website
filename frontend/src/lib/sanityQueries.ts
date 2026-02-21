export const facultyQuery = `*[_type == "faculty"] | order(name asc) {
  _id,
  name,
  role,
  subjects,
  qualification,
  experience,
  specialization,
  instagram,
  photo
}`

export const resultsQuery = `*[_type == "result"] | order(year desc) {
  _id,
  studentName,
  exam,
  score,
  year,
  stream,
  photo
}`

export const noticesQuery = `*[_type == "notice"] | order(date desc) {
  _id,
  title,
  category,
  description,
  date,
  important
}`

export const admissionQuery = `*[_type == "admission"] | order(_createdAt desc) {
  _id,
  title,
  session,
  isOpen,
  lastDate,
  details,
  programs
}`