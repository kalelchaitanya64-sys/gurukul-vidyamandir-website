const Notice = require('../models/Notice')

// GET /api/notices — Get all notices
exports.getNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 })
    res.json({ success: true, data: notices })
  } catch (error) {
    console.error('Get notices error:', error.message)
    res.status(500).json({ success: false, error: 'Failed to fetch notices' })
  }
}

// POST /api/notices — Create a notice (for admin)
exports.createNotice = async (req, res) => {
  try {
    const { title, description, category, date, important } = req.body

    const notice = await Notice.create({
      title,
      description,
      category,
      date,
      important: important || false,
    })

    res.status(201).json({ success: true, data: notice })
  } catch (error) {
    console.error('Create notice error:', error.message)
    res.status(500).json({ success: false, error: 'Failed to create notice' })
  }
}
