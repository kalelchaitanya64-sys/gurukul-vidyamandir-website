const express = require('express')
const router = express.Router()
const { createInquiry, getInquiries } = require('../controllers/inquiryController')
const { validateInquiry } = require('../middleware/validateInput')
const { inquiryLimiter } = require('../middleware/rateLimiter')

// POST /api/inquiry — public, rate-limited
router.post('/', inquiryLimiter, validateInquiry, createInquiry)

// GET /api/inquiry — for admin (no auth for now)
router.get('/', getInquiries)

module.exports = router
