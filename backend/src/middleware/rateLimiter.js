const rateLimit = require('express-rate-limit')

// Limit inquiry submissions: 5 per 15 minutes per IP
const inquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    error: 'Too many submissions. Please try again after 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
})

module.exports = { inquiryLimiter }
