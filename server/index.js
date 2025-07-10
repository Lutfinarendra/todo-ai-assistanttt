import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
// import { OpenAI } from 'openai' // ❌ Nonaktifkan jika tidak digunakan

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Logging mode
const useMock = process.env.NODE_ENV === 'production' || !process.env.OPENAI_API_KEY
console.log('🌍 Mode:', process.env.NODE_ENV)
console.log('🔑 API Key Available:', !!process.env.OPENAI_API_KEY)
console.log(`🧪 AI aktif: ${!useMock}`)

// API endpoint
app.post('/api/suggest-priority', async (req, res) => {
  const { tasks } = req.body

  if (useMock) {
    const mock = tasks.map((t, i) => ({
      task: t,
      priority: tasks.length - i
    }))
    console.log('🔧 MOCK response:', mock)
    return res.json(mock)
  }

  // Versi AI (nonaktif untuk sekarang)
  console.log('🧠 AI dipanggil (dev mode)')
  res.status(501).json({ error: 'Fitur AI tidak tersedia di versi ini.' })
})

// Start server
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  const mode = useMock ? 'MOCK' : 'AI aktif'
  console.log(`✅ Server berjalan di http://localhost:${PORT} (${mode})`)
})
