# 🧠 AI‑Assisted To‑Do List

Aplikasi web berbasis **React** dan **Express** yang membantu pengguna menyusun **prioritas tugas** secara otomatis menggunakan bantuan **AI GPT** (OpenAI), atau dapat dijalankan gratis dalam mode mock/simulasi.

---

## 🚀 Fitur

- ✅ Tambah dan hapus tugas
- 🧠 Rekomendasi prioritas otomatis dari AI (atau mock tanpa biaya)
- 💾 Penyimpanan lokal di browser (`localStorage`)
- 🎨 Antarmuka bersih dan responsif
- 🛠️ Backend mock mode untuk testing gratis (tanpa API Key)

---

## 🛠️ Teknologi yang Digunakan

| Layer      | Teknologi                  |
|------------|----------------------------|
| Frontend   | React, HTML, CSS           |
| Backend    | Node.js, Express, dotenv   |
| AI Engine  | OpenAI GPT-3.5 (opsional)  |
| Database   | localStorage (browser)     |

---

## 💻 Cara Menjalankan

### 1️⃣ Clone Repositori

```bash
git clone https://github.com/Lutfinarendra/todo-ai-assistant.git
cd todo-ai-assistant
```

### 📦 2. Install Dependency

```bash
npm install
cd server
npm install
```

### 🔐 3. Atur API Key (Opsional)

Buat file `.env` di folder `server/`:

```
OPENAI_API_KEY=REMOVED_API_KEYxxxxx
PORT=4000
```

> Jika tidak mengisi API key, backend akan otomatis gunakan mode mock.

---

### ▶️ 4. Jalankan Aplikasi

**Terminal 1 (backend):**

```bash
cd server
npm start
```

**Terminal 2 (frontend):**

```bash
cd ..
npm start
```

🔗 Buka: [http://localhost:3000](http://localhost:3000)

---

## 📸 Screenshot (Opsional)

*Tambahkan tampilan UI project Anda di sini:*

![Tampilan UI](image.png)))

## 🧪 Contoh Respons Mock

```json
[
  { "task": "Belanja react", "priority": 2 },
  { "task": "koding mantap", "priority": 1 }
]
```

---

## 📄 Lisensi

MIT License – Bebas digunakan, dimodifikasi, dan disebarluaskan.

---

## 📬 Kontak

Made with ❤️ by [@Lutfinarendra](https://github.com/Lutfinarendra)
