require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const inquiryRoutes = require('./routes/inquiryRoutes')
const noticeRoutes = require('./routes/noticeRoutes')

const app = express()
const PORT = process.env.PORT || 5000

// Connect to MongoDB
connectDB()

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json())

// Routes
app.use('/api/inquiry', inquiryRoutes)
app.use('/api/notices', noticeRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
