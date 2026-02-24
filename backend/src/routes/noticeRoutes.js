const express = require('express')
const router = express.Router()
const { getNotices, createNotice } = require('../controllers/noticeController')

// GET /api/notices — public
router.get('/', getNotices)

// POST /api/notices — for admin (no auth for now)
router.post('/', createNotice)

module.exports = router
