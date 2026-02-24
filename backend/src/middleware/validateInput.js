const validateInquiry = (req, res, next) => {
  const { studentName, parentName, mobile, classInterested } = req.body

  const errors = []

  if (!studentName || studentName.trim().length < 2) {
    errors.push('Student name is required (min 2 characters)')
  }
  if (!parentName || parentName.trim().length < 2) {
    errors.push('Parent name is required (min 2 characters)')
  }
  if (!mobile || !/^[6-9]\d{9}$/.test(mobile.replace(/\s/g, ''))) {
    errors.push('Valid 10-digit Indian mobile number is required')
  }
  if (!classInterested) {
    errors.push('Class/Program selection is required')
  }

  if (errors.length > 0) {
    return res.status(400).json({ success: false, errors })
  }

  // Sanitize inputs
  req.body.studentName = studentName.trim()
  req.body.parentName = parentName.trim()
  req.body.mobile = mobile.replace(/\s/g, '')

  next()
}

module.exports = { validateInquiry }
