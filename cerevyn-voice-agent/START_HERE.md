# 🎉 Cerevyn Voice Agent - Installation & Quick Start

## 📦 What's Included

Your complete enterprise voice support agent with:
- ✅ React-based modern UI with beautiful animations
- ✅ Voice input/output capabilities
- ✅ Secure login system
- ✅ AI agent handling 10+ queries
- ✅ Responsive mobile-friendly design
- ✅ Professional gradient UI (pink/red theme)
- ✅ Multi-turn conversation support

---

## 🚀 Get Started in 3 Steps

### Step 1: Quick Install (Windows)
```powershell
cd e:\automation\cerevyn-voice-agent
.\setup.bat
```
This will automatically:
- Install all backend dependencies
- Install all React frontend dependencies
- Open two terminals
- Start the application

### Step 2: Wait for Startup
The setup will open:
- **Backend Terminal**: Node.js server on port 3000
- **Frontend Terminal**: React app opens in browser

### Step 3: Login
Use these demo credentials:
- 📧 **Email**: john.smith@company.com
- 🔑 **Password**: password123

---

## 🎯 Try These Interactions

### Voice Input
1. Click the **"Speak"** button
2. Say: "What is my leave balance?"
3. Listen to the AI response

### Text Input
1. Type: "Tell me about remote work policy"
2. Press Enter or click send
3. Get instant response with text-to-speech

### Example Queries
- "How do I reset my password?"
- "What is my leave balance?"
- "Tell me about the holiday policy"
- "Book a meeting room"
- "I need IT support"

---

## 📁 Project Structure

```
cerevyn-voice-agent/
├── src/server.js              # Backend API
├── client/                    # React Frontend
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── styles/            # Beautiful CSS with animations
│   │   └── App.js
│   └── package.json
├── data/employees.json        # Employee & policy data
├── README.md                  # Full documentation
├── QUICKSTART.md             # Quick reference
└── COMPLETE_DOCUMENTATION.md # Detailed guide
```

---

## 🎨 UI Highlights

- **Modern Design**: Pink/Red gradients (no blue)
- **Smooth Animations**: Transitions on all interactions
- **Responsive**: Works on desktop, tablet, mobile
- **Professional**: Enterprise-grade appearance
- **Intuitive**: Easy-to-use interface

---

## 🔧 Manual Start (If Needed)

**Terminal 1 - Backend:**
```powershell
cd e:\automation\cerevyn-voice-agent
npm install
npm start
```

**Terminal 2 - Frontend (new terminal):**
```powershell
cd e:\automation\cerevyn-voice-agent\client
npm install
npm start
```

Access at: http://localhost:3000

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Full feature list & details |
| QUICKSTART.md | Quick start guide |
| COMPLETE_DOCUMENTATION.md | In-depth technical documentation |
| setup.bat | Automatic Windows setup |
| setup.sh | Automatic Linux/Mac setup |

---

## ✨ Key Features

### Voice-Enabled 🎙️
- Click to speak and get instant responses
- Automatic text-to-speech replies
- Real-time transcription display

### Secure Login 🔐
- Email/password authentication
- Session management
- Demo accounts available

### Smart AI Agent 🤖
- Handles HR queries (leave, policies)
- Handles IT support (password, VPN, software)
- Handles facilities (meeting rooms)

### Beautiful UI 🎨
- Modern gradient design
- Smooth animations
- Mobile responsive

---

## 🌐 Demo Accounts

| Email | Password | Department |
|-------|----------|-----------|
| john.smith@company.com | password123 | IT |
| sarah.johnson@company.com | password123 | HR |
| michael.chen@company.com | password123 | Finance |

---

## ⚠️ Troubleshooting

### Port 3000 Already in Use
```powershell
netstat -ano | findstr :3000
taskkill /PID {PID} /F
```

### Voice Not Working
- Check microphone permissions
- Use Chrome, Firefox, or Edge
- Check browser console for errors

### React App Won't Start
```powershell
cd client
rm node_modules -r
npm install
npm start
```

---

## 📞 Support

1. Check **README.md** for features
2. Check **COMPLETE_DOCUMENTATION.md** for details
3. Check browser console for errors
4. Ensure all dependencies installed: `npm install`

---

## 🎊 You're All Set!

Your professional enterprise voice support agent is ready to use!

**Next Steps:**
1. Run `.\setup.bat` on Windows
2. Login with demo credentials
3. Try voice and text queries
4. Explore all features

Enjoy using Cerevyn! 🚀

---

**Built with Modern Technologies:**
- Node.js & Express Backend
- React 18 Frontend
- Web Speech API Voice
- Beautiful CSS Animations
- Responsive Design

**Enterprise-Ready** ✓ Professional ✓ Secure ✓
