const mongoose = require('mongoose')

const inquirySchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: [true, 'Student name is required'],
    trim: true,
  },
  parentName: {
    type: String,
    required: [true, 'Parent name is required'],
    trim: true,
  },
  mobile: {
    type: String,
    required: [true, 'Mobile number is required'],
    trim: true,
  },
  whatsapp: {
    type: String,
    trim: true,
  },
  classInterested: {
    type: String,
    required: [true, 'Class/Program selection is required'],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  message: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'enrolled', 'closed'],
    default: 'new',
  },
}, {
  timestamps: true,
})

module.exports = mongoose.model('Inquiry', inquirySchema)
