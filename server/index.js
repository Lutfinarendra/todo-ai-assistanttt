import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors({
  origin: "https://todo-ai-assistanttt.vercel.app",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());
app.options("*", (_, res) => res.sendStatus(200));

const useMock = process.env.NODE_ENV === 'production' || !process.env.OPENAI_API_KEY;
console.log('🌍 Mode:', process.env.NODE_ENV);
console.log('🔑 API Key Available:', !!process.env.OPENAI_API_KEY);
console.log(`🧪 AI aktif: ${!useMock}`);

app.post("/api/suggest-priority", (req, res) => {
  const { tasks } = req.body;
  if (!Array.isArray(tasks)) {
    return res.status(400).json({ error: "Tasks harus berupa array." });
  }
  const shuffled = [...tasks]
    .sort(() => Math.random() - 0.5)
    .map((task, index) => ({
      task,
      priority: index + 1,
    }));

  res.json(shuffled);
});
app.get("/", (_, res) => {
  res.send("✅ Backend aktif dari Replit!");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  const mode = useMock ? "MOCK" : "AI aktif";
  console.log(`🚀 Server berjalan di http://localhost:${PORT} (${mode})`);
});
