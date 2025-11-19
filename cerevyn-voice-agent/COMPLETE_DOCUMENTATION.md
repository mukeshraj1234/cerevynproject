# 🎯 Cerevyn Voice Agent - Complete Project Documentation

## 📱 Project Overview

**Cerevyn** is a professional, enterprise-grade AI voice support agent built with modern technologies. It automates internal IT and HR service desk operations through an intuitive voice and text interface.

### 🌟 Key Highlights

✨ **Modern React UI** with beautiful animations  
🎙️ **Voice Input/Output** with Web Speech API  
🔐 **Secure Authentication** with session management  
🤖 **AI Agent** handling 10+ enterprise queries  
📱 **Fully Responsive** across all devices  
🎨 **Professional Design** with pink/red gradients (no blue)

---

## 🚀 Installation & Setup

### Quick Setup (Windows)
```powershell
cd e:\automation\cerevyn-voice-agent
.\setup.bat
```

### Manual Setup

**Step 1: Backend Setup**
```powershell
cd e:\automation\cerevyn-voice-agent
npm install
npm start
```
Backend runs on: `http://localhost:3000`

**Step 2: Frontend Setup (New Terminal)**
```powershell
cd e:\automation\cerevyn-voice-agent\client
npm install
npm start
```
Frontend runs on: `http://localhost:3000` (opens automatically)

### Linux/Mac Setup
```bash
cd e:\automation\cerevyn-voice-agent
./setup.sh
```

---

## 👤 Demo Accounts

Three demo accounts are available:

| Email | Password | Department | Role |
|-------|----------|-----------|------|
| john.smith@company.com | password123 | IT | Senior Engineer |
| sarah.johnson@company.com | password123 | HR | HR Manager |
| michael.chen@company.com | password123 | Finance | Finance Analyst |

---

## 🎯 Features & Capabilities

### 1️⃣ Authentication System

**Login Features:**
- Secure email/password authentication
- Session-based login persistence
- Password visibility toggle
- Demo credentials quick-fill button
- Beautiful animated login form
- Professional error handling

**Security:**
- Session timeout after 1 hour
- Secure session cookies
- User data isolation

### 2️⃣ Voice Capabilities

**Speech-to-Text:**
- Click "Speak" button to activate microphone
- Real-time transcript display
- Listening indicator with pulse animation
- Auto-submission on speech end
- Support for multiple languages (configurable)

**Text-to-Speech:**
- Automatic voice response to queries
- Professional voice with adjustable rate/pitch
- Visual speaking indicator
- Smooth integration with chat

**Browser Support:**
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Supported
- Mobile browsers: Supported (iOS 14.5+, Android Chrome)

### 3️⃣ AI Agent - Query Categories

#### HR Services 👥
- **Leave Balance**: "What is my leave balance?" → Displays casual, medical, earned leave
- **Policies**: Ask about working hours, remote work, holidays, expenses, code of conduct
- **Leave Inquiry**: "How many leaves do I have remaining?"
- **Policy Details**: "Tell me about the remote work policy"

#### IT Support 💻
- **Password Reset**: "How do I reset my password?" → Instructions and portal link
- **VPN Setup**: "How do I set up VPN?" → Setup instructions
- **Software Licenses**: "I need a software license" → License portal information
- **Hardware Issues**: "I have a hardware problem" → Support ticket information
- **General IT**: "I need IT support" → Overview of available services

#### Facilities & Services 🏢
- **Meeting Rooms**: "Book a meeting room" → Available rooms and booking process
- **Room Details**: "What meeting rooms are available?" → Full room list with capacity

#### Help & General 🤔
- **Help**: "Help", "What can you do?" → Full capabilities overview

---

## 🎨 UI/UX Design

### Color Scheme
- **Primary Gradient**: Pink (#F093FB) to Red (#F5576C)
- **Secondary Colors**: Purple accents
- **Background**: Modern gradients with layered effects
- **No Blue**: Strictly avoided blue color shades

### Design Features

**Animations:**
- Smooth fade-in/slide-up transitions
- Pulsing indicators for active states
- Hover effects with elevation
- Micro-interactions on all buttons
- Floating backgrounds

**Responsive Breakpoints:**
- Desktop (1200px+): Full layout
- Tablet (768px - 1199px): Optimized layout
- Mobile (480px - 767px): Compact layout
- Small Mobile (<480px): Ultra-compact

**Professional Elements:**
- Glass-morphism effects
- Smooth gradients
- Professional typography
- Proper spacing and hierarchy
- Accessible color contrasts

---

## 📁 Project Structure

```
cerevyn-voice-agent/
│
├── 📄 package.json              # Backend dependencies
├── 📄 package-lock.json         # Dependency lock
├── 📄 README.md                 # Full documentation
├── 📄 QUICKSTART.md             # Quick start guide
├── 📄 .env.example              # Environment variables template
├── 📄 .gitignore                # Git exclusions
├── 🏃 setup.bat                 # Windows quick setup
├── 🏃 setup.sh                  # Linux/Mac quick setup
│
├── 📂 src/
│   └── server.js                # Express backend server
│                                # - Authentication routes
│                                # - Query processing
│                                # - Session management
│                                # - Conversation logging
│
├── 📂 client/                   # React frontend application
│   ├── package.json             # Frontend dependencies
│   ├── public/
│   │   └── index.html           # HTML entry point
│   └── src/
│       ├── App.js               # Main application component
│       ├── index.js             # React entry point
│       │
│       ├── 📂 components/
│       │   ├── Login.js         # Login form component
│       │   │                    # - Email/password input
│       │   │                    # - Demo credentials
│       │   │                    # - Error handling
│       │   │
│       │   ├── ChatInterface.js # Main chat interface
│       │   │                    # - Message display
│       │   │                    # - Voice input control
│       │   │                    # - Text-to-speech
│       │   │                    # - Session management
│       │   │
│       │   ├── MessageBubble.js # Message display component
│       │   │                    # - User/agent message styling
│       │   │                    # - Timestamp display
│       │   │
│       │   └── VoiceInput.js    # Voice control component
│       │                        # - Web Speech API integration
│       │                        # - Real-time transcription
│       │                        # - Listening indicator
│       │
│       └── 📂 styles/
│           ├── index.css        # Global styles & animations
│           ├── App.css          # App container styles
│           ├── Login.css        # Login form styles
│           │                    # - Beautiful animations
│           │                    # - Gradient backgrounds
│           │                    # - Responsive layout
│           │
│           ├── ChatInterface.css # Chat interface styles
│           │                    # - Header styling
│           │                    # - Message container
│           │                    # - Input area
│           │                    # - Smooth transitions
│           │
│           ├── MessageBubble.css # Message bubble styles
│           └── VoiceInput.css    # Voice button & feedback
│
├── 📂 data/
│   └── employees.json           # Mock employee database
│                                # - User credentials
│                                # - Leave balance data
│                                # - Policies
│                                # - Meeting rooms
│                                # - IT support info
│
└── conversation logs/           # Auto-generated conversation files
```

---

## 🔧 API Endpoints

### Authentication
```
POST /api/login
  Body: { email, password }
  Response: { success, user: { id, name, email, department } }

POST /api/logout
  Response: { success }

GET /api/session
  Response: { authenticated, user }
```

### Chat & Queries
```
POST /api/query
  Headers: Requires active session
  Body: { query: "user question" }
  Response: { response: "agent answer", success }

POST /api/save-conversation
  Headers: Requires active session
  Body: { conversation: [] }
  Response: { success, message }
```

---

## 💬 Conversation Examples

### Example 1: Leave Balance
```
User: "What is my leave balance?"
Agent: "Your current leave balance is: Casual Leave - 8 days, 
        Medical Leave - 5 days, Earned Leave - 12 days. 
        You have used 3 days so far."
```

### Example 2: Policy Query
```
User: "Tell me about the remote work policy"
Agent: "Remote Work Policy: Eligible employees can work from home 
        up to 2 days per week"
```

### Example 3: Password Reset
```
User: "How do I reset my password?"
Agent: "To reset your password, visit portal.company.com and 
        click 'Forgot Password'. You can also contact IT Support 
        at it-helpdesk@company.com or extension 5555."
```

---

## 🌐 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| iOS Safari | 14.5+ | ✅ Full Support |
| Android Chrome | Latest | ✅ Full Support |

---

## 🛠️ Technology Stack

### Backend
- **Runtime:** Node.js 16+
- **Framework:** Express.js 4.18
- **Authentication:** Express Session
- **Middleware:** Body Parser, CORS
- **Data:** JSON (no database required)

### Frontend
- **Framework:** React 18
- **HTTP Client:** Axios
- **Styling:** CSS3 with Animations
- **APIs:** Web Speech API, Web Audio API
- **Build:** Create React App

### DevOps
- **Version Control:** Git
- **Package Manager:** npm
- **Scripts:** Bash/Batch

---

## 📊 Data Management

### Employees Database (employees.json)
```json
{
  "users": [...],           # User credentials & info
  "leaveBalance": [...],    # Leave information per employee
  "policies": {...},        # HR policies
  "meetingRooms": [...],    # Room info & bookings
  "itsupport": {...}        # IT support details
}
```

### Conversation Logs
- Auto-saved after each conversation
- File: `data/conversation-{userId}-{timestamp}.json`
- Contains full message history with timestamps

---

## 🚀 Deployment Guide

### Local Development
```bash
npm install && cd client && npm install && cd ..
npm start      # Terminal 1
npm run client # Terminal 2
```

### Production Build
```bash
# Build React app
cd client
npm run build
cd ..

# Backend uses production dependencies only
NODE_ENV=production npm start
```

### Cloud Deployment (Heroku Example)
```bash
heroku login
heroku create cerevyn-voice-agent
git push heroku main
```

### Docker Deployment
Create a `Dockerfile`:
```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install && cd client && npm install && cd ..
RUN cd client && npm run build && cd ..
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🔒 Security Considerations

1. **Authentication**: Secure session-based auth (1 hour timeout)
2. **HTTPS**: Use in production
3. **CORS**: Configured for development
4. **Input Validation**: Query text validated
5. **Data Isolation**: Per-user data access
6. **Sensitive Data**: Passwords hashed (in production)

---

## ⚠️ Troubleshooting

### Voice Not Working
1. Check browser microphone permissions
2. Use Chrome, Firefox, or Safari
3. Enable microphone access in settings
4. Check browser console for errors

### Connection Issues
1. Verify backend running on port 3000
2. Check CORS configuration
3. Clear browser cache
4. Hard refresh (Ctrl+Shift+R)

### Port 3000 Already in Use
```powershell
# Find process
netstat -ano | findstr :3000
# Kill process
taskkill /PID {PID} /F
```

### React App Won't Start
```bash
cd client
rm -r node_modules package-lock.json
npm install
npm start
```

---

## 📝 Notes & Tips

- **First Time**: Use demo credentials to explore features
- **Voice Privacy**: Microphone is only active when button clicked
- **Conversation Logs**: Automatically saved locally
- **Session Timeout**: 1 hour of inactivity logs you out
- **Multi-turn**: Continue conversations naturally
- **Custom Policies**: Edit `data/employees.json` to add more queries

---

## 📞 Support & Documentation

- **README.md**: Full feature documentation
- **QUICKSTART.md**: Quick start guide
- **Code Comments**: Throughout the codebase
- **Browser Console**: Debug information available

---

## 🎉 Features Summary

| Feature | Status | Details |
|---------|--------|---------|
| Voice Input | ✅ Active | Web Speech API |
| Voice Output | ✅ Active | Text-to-Speech |
| Login System | ✅ Active | Session-based |
| HR Queries | ✅ Active | 6 query types |
| IT Support | ✅ Active | 5 query types |
| Facilities | ✅ Active | Room booking |
| Multi-turn Chat | ✅ Active | Full conversation |
| Responsive UI | ✅ Active | Mobile-friendly |
| Animations | ✅ Active | Smooth transitions |
| Conversation Logs | ✅ Active | Auto-saved |

---

## 🏆 Enterprise-Ready Features

✅ Professional UI/UX Design  
✅ Mobile-first Responsive Layout  
✅ Secure Authentication  
✅ Multi-user Support  
✅ Session Management  
✅ Voice Integration  
✅ Data Persistence  
✅ Error Handling  
✅ Accessibility Features  
✅ Performance Optimized  

---

**Cerevyn Voice Agent - Transforming Enterprise Support with AI** 🚀

Built with ❤️ for Enterprise Excellence
