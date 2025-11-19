# Cerevyn Voice Agent - Quick Start Guide

## 🚀 Getting Started

### Step 1: Install Dependencies

**Backend:**
```powershell
cd e:\automation\cerevyn-voice-agent
npm install
```

**Frontend:**
```powershell
cd client
npm install
```

### Step 2: Start the Application

**Terminal 1 - Backend Server:**
```powershell
cd e:\automation\cerevyn-voice-agent
npm start
```
The backend will start on http://localhost:3000

**Terminal 2 - React Frontend:**
```powershell
cd e:\automation\cerevyn-voice-agent\client
npm start
```
The frontend will automatically open on http://localhost:3000 in your browser

### Step 3: Login

Use these demo credentials:
- **Email:** john.smith@company.com
- **Password:** password123

## 📋 Features to Explore

### Voice Input
1. Click the **"Speak"** button
2. Speak your question clearly
3. The agent will respond with text-to-speech

### Text Input
1. Type your question in the message box
2. Press Enter or click the send button
3. Get instant responses

### Try These Queries

**HR Queries:**
- "What is my leave balance?"
- "Tell me about remote work policy"
- "What are the holidays?"
- "What is the expense policy?"

**IT Queries:**
- "How do I reset my password?"
- "How do I set up VPN?"
- "I need a software license"
- "I have a hardware issue"

**Facilities:**
- "Book a meeting room"
- "What meeting rooms are available?"

## 🎨 UI Highlights

- **Modern Gradient Design:** Pink, Red, and Purple color scheme
- **Smooth Animations:** Transitions on all interactions
- **Responsive Layout:** Works on desktop, tablet, and mobile
- **Professional Feel:** Enterprise-grade UI with attention to detail

## 🔧 Troubleshooting

### Port Already in Use
If port 3000 is busy:
```powershell
# Kill the process using port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Voice Not Working
- Ensure your browser has microphone permissions
- Try Chrome, Edge, or Firefox (most compatible)
- Check browser console for errors

### React App Not Starting
```powershell
cd client
npm cache clean --force
rm -r node_modules
npm install
npm start
```

### Backend Connection Issues
- Ensure backend is running on port 3000
- Check if CORS is properly configured
- Clear browser cache and hard refresh

## 📊 Project Structure

```
cerevyn-voice-agent/
├── src/server.js              ← Backend API
├── client/
│   └── src/
│       ├── components/        ← React components
│       ├── styles/            ← CSS files
│       └── App.js             ← Main app
├── data/employees.json        ← Employee database
└── package.json               ← Dependencies
```

## 🌐 Production Deployment

### Prepare for Production
1. Build React app: `cd client && npm run build`
2. Environment variables in `.env`
3. Use HTTPS for security
4. Deploy backend to cloud (Heroku, Azure, AWS, etc.)
5. Deploy frontend static files to CDN or hosting

## 📞 Support

For issues or questions:
1. Check the README.md for detailed information
2. Review the code comments
3. Check browser console for errors
4. Verify all dependencies are installed correctly

---

**Happy using Cerevyn! 🎉**
