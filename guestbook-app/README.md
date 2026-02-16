# 🌟 React + Nest.js + Supabase Guestbook

A full-stack guestbook application built with modern web technologies.

![Tech Stack](https://img.shields.io/badge/React-19-blue)
![Tech Stack](https://img.shields.io/badge/NestJS-10-red)
![Tech Stack](https://img.shields.io/badge/Supabase-2.0-green)
![Deployment](https://img.shields.io/badge/Vercel-Deployed-black)

## 📋 Features

- ✅ Add guestbook entries with name and message
- ✅ View all entries in chronological order
- ✅ Delete entries
- ✅ Real-time database with Supabase
- ✅ Modern, responsive UI
- ✅ Deployed on Vercel

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Vite 7
- Modern CSS3

**Backend:**
- Nest.js 10
- TypeScript
- Express

**Database:**
- Supabase (PostgreSQL)

**Deployment:**
- Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Supabase account (free tier works)
- Vercel account (for deployment)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd profile-app
```

### 2. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the database to initialize (~2 minutes)
3. In the SQL Editor, run the script from `database/setup.sql`
4. Get your credentials:
   - Go to Settings → API
   - Copy your **Project URL** and **anon public key**

### 3. Configure Backend

```bash
cd backend
npm install

# Create .env file
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:

```env
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=eyJxxx...your-key
PORT=3000
```

### 4. Configure Frontend

```bash
cd ../frontend
npm install
```

### 5. Run Locally

**Terminal 1 - Backend:**
```bash
cd backend
npm run start:dev
```

Backend will run on http://localhost:3000

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Frontend will run on http://localhost:5173

## 📦 Project Structure

```
profile-app/
├── backend/                    # Nest.js API
│   ├── src/
│   │   ├── guestbook/         # Guestbook module
│   │   │   ├── guestbook.controller.ts
│   │   │   ├── guestbook.service.ts
│   │   │   └── guestbook.module.ts
│   │   ├── app.module.ts
│   │   ├── app.controller.ts
│   │   ├── app.service.ts
│   │   └── main.ts
│   ├── api/
│   │   └── index.ts           # Vercel serverless function
│   ├── .env                    # Environment variables
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                   # React app
│   ├── src/
│   │   ├── App.jsx            # Main component
│   │   ├── App.css            # Styles
│   │   ├── main.jsx           # Entry point
│   │   └── index.css          # Global styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── database/
│   └── setup.sql              # Database schema
│
├── package.json               # Root build script
├── vercel.json                # Vercel config
└── README.md
```

## 🌐 API Endpoints

### Get All Entries
```http
GET /api/guestbook
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Alice",
    "message": "Great website!",
    "created_at": "2025-01-15T10:30:00Z"
  }
]
```

### Create Entry
```http
POST /api/guestbook
Content-Type: application/json

{
  "name": "Alice",
  "message": "Great website!"
}
```

### Delete Entry
```http
DELETE /api/guestbook/:id
```

## 🚢 Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the configuration

### 3. Add Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

- `SUPABASE_URL` = your Supabase URL
- `SUPABASE_KEY` = your Supabase anon key

### 4. Redeploy

After adding environment variables, go to Deployments tab and click "Redeploy"

## 🧪 Testing

### Test Backend API

```bash
# Get all entries
curl http://localhost:3000/api/guestbook

# Create entry
curl -X POST http://localhost:3000/api/guestbook \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","message":"Test message"}'

# Delete entry (replace 1 with actual ID)
curl -X DELETE http://localhost:3000/api/guestbook/1
```

### Test Frontend

1. Open http://localhost:5173
2. Fill in name and message
3. Click "Sign Guestbook"
4. Verify entry appears in the list
5. Click delete button to remove entry

## 🐛 Troubleshooting

### CORS Error

**Solution:** Make sure `app.enableCors()` is in `backend/src/main.ts`

### Empty Array from API

**Solution:** Check your environment variables in `.env` file and Vercel dashboard

### Build Failed on Vercel

**Solution:** Verify your root `package.json` has the correct build script

### Database Connection Error

**Solution:** 
1. Verify Supabase credentials are correct
2. Check if RLS policies are set up correctly
3. Make sure the table exists in your database

## 📸 Screenshots

### Application Interface
![Guestbook Interface](docs/screenshot-app.png)

### Vercel Dashboard
![Vercel Dashboard](docs/screenshot-vercel.png)

### GitHub Repository
![GitHub Repo](docs/screenshot-github.png)

## 🎯 Future Enhancements

- [ ] User authentication with Supabase Auth
- [ ] Edit functionality for entries
- [ ] Pagination for large datasets
- [ ] Search and filter entries
- [ ] Like/reaction system
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Rate limiting
- [ ] Image uploads
- [ ] Dark mode

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [React Documentation](https://react.dev/)
- [Nest.js Documentation](https://nestjs.com/)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

---

Built with ❤️ for WEBPROG course
