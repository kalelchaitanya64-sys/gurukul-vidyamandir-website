const Inquiry = require('../models/Inquiry')

// POST /api/inquiry — Submit a new inquiry
exports.createInquiry = async (req, res) => {
  try {
    const { studentName, parentName, mobile, whatsapp, classInterested, email, message } = req.body

    const inquiry = await Inquiry.create({
      studentName,
      parentName,
      mobile,
      whatsapp: whatsapp || mobile,
      classInterested,
      email,
      message,
    })

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      data: { id: inquiry._id },
    })
  } catch (error) {
    console.error('Create inquiry error:', error.message)
    res.status(500).json({
      success: false,
      error: 'Failed to submit inquiry',
    })
  }
}

// GET /api/inquiry — Get all inquiries (for admin)
exports.getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 })
    res.json({ success: true, data: inquiries })
  } catch (error) {
    console.error('Get inquiries error:', error.message)
    res.status(500).json({ success: false, error: 'Failed to fetch inquiries' })
  }
}
