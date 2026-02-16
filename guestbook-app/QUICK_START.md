# 🚀 QUICK START CHECKLIST

Follow these steps in order to get your guestbook running!

## ✅ Step 1: Set Up Supabase (10 minutes)

- [ ] Go to https://supabase.com and sign up
- [ ] Create a new project
- [ ] Wait for database initialization (~2 minutes)
- [ ] Go to SQL Editor
- [ ] Copy and paste the contents of `database/setup.sql`
- [ ] Click "Run"
- [ ] Go to Settings → API
- [ ] Copy your **Project URL** (save it!)
- [ ] Copy your **anon public key** (save it!)

## ✅ Step 2: Set Up Backend (5 minutes)

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env file with your Supabase credentials
# Use notepad, VS Code, or any text editor
```

Your `.env` should look like:
```
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=eyJxxxxx...
PORT=3000
```

## ✅ Step 3: Set Up Frontend (5 minutes)

```bash
# Navigate to frontend folder
cd ../frontend

# Install dependencies
npm install
```

## ✅ Step 4: Test Locally (5 minutes)

**Open Terminal 1 - Start Backend:**
```bash
cd backend
npm run start:dev
```

Wait until you see: "Application is running on: http://localhost:3000"

**Open Terminal 2 - Start Frontend:**
```bash
cd frontend  
npm run dev
```

**Open your browser:**
- Go to http://localhost:5173
- Try adding a guestbook entry
- Verify it appears in the list

## ✅ Step 5: Deploy to GitHub (5 minutes)

```bash
# Go to root folder
cd ..

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Guestbook app"

# Create repository on GitHub
# Then push:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

## ✅ Step 6: Deploy to Vercel (10 minutes)

- [ ] Go to https://vercel.com
- [ ] Sign in with GitHub
- [ ] Click "New Project"
- [ ] Select your guestbook repository
- [ ] Click "Deploy" (wait for build)
- [ ] Go to Settings → Environment Variables
- [ ] Add `SUPABASE_URL` with your Supabase URL
- [ ] Add `SUPABASE_KEY` with your Supabase key
- [ ] Go to Deployments tab
- [ ] Click "Redeploy" on the latest deployment

## ✅ Step 7: Take Screenshots (10 minutes)

### Screenshot 1: GitHub Repository
- [ ] Open your GitHub repo
- [ ] Make sure you can see files and commit history
- [ ] Take screenshot

### Screenshot 2: Vercel Dashboard
- [ ] Go to your Vercel project
- [ ] Show deployment status (should be "Ready")
- [ ] Take screenshot

### Screenshot 3: Working Website
- [ ] Open your Vercel URL (e.g., your-app.vercel.app)
- [ ] Add a test guestbook entry
- [ ] Show it in the list
- [ ] Take screenshot

### Screenshot 4: Development Process
- [ ] Take screenshots of your code editor
- [ ] Show your terminal with running servers
- [ ] Document any AI tools you used

## ✅ Step 8: Complete Assignment Document (10 minutes)

- [ ] Open the assignment Word document
- [ ] Fill in your name, date, section
- [ ] Paste GitHub repository link
- [ ] Insert GitHub screenshot
- [ ] Insert Vercel dashboard screenshot
- [ ] Paste live website link
- [ ] Insert working website screenshot
- [ ] Document AI prompts used or pair programming sessions
- [ ] Write reflection (challenges, solutions, learnings)
- [ ] Export to PDF
- [ ] Submit!

---

## 🆘 Need Help?

### Backend not starting?
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
npm run start:dev
```

### Frontend not starting?
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### API returns empty array?
- Check your `.env` file has correct Supabase credentials
- Make sure you ran the SQL setup script
- Verify in Supabase dashboard that data exists

### Vercel build failing?
- Make sure all dependencies are in package.json
- Check that root package.json has correct build script
- Verify environment variables are set in Vercel

---

## 📞 AI Tools to Help

If you get stuck, you can ask:

**ChatGPT / Claude:**
- "How do I fix this error: [paste error]"
- "Explain what this code does: [paste code]"
- "Help me debug my Supabase connection"

**Remember to document all AI prompts you use!**

---

**Total Time: ~60 minutes**

Good luck! 🎉
