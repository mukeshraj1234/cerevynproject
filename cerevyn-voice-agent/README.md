# Cerevyn Voice Agent - Enterprise Support System

A professional, modern enterprise-grade AI voice support agent for IT and HR service desk operations.

## Features

✨ **Voice-Enabled Communication**
- Speech-to-text conversion using Web Speech API
- Natural text-to-speech responses
- Real-time voice feedback and listening indicators

🔐 **Enterprise Security**
- Secure login authentication with session management
- User-specific data access and isolation
- Password reset and account management support

🤖 **AI Agent Capabilities**
- Handles 10+ enterprise queries
- Multi-turn conversation support
- Natural language understanding for HR and IT support
- Conversation history tracking

📱 **Modern Responsive UI**
- Beautiful gradient design with smooth animations
- Mobile-friendly interface
- Professional enterprise appearance
- Smooth transitions and interactive feedback

## Supported Queries

### HR Services
- 🏥 Leave Balance Inquiry
- 📋 Policy Information
- 🎫 Holiday Information
- 💰 Expense Policy

### IT Support
- 🔑 Password Reset
- 🌐 VPN Setup
- 📦 Software Licenses
- 💻 Hardware Issues
- 🛠️ General IT Support

### Facilities
- 🏢 Meeting Room Booking
- 📍 Room Availability
- 📞 Facility Contacts

## Tech Stack

**Backend:**
- Node.js & Express.js
- Express Session for authentication
- JSON-based data storage

**Frontend:**
- React 18
- Axios for API calls
- Web Speech API for voice
- CSS3 with animations & transitions

## Installation

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup

1. **Clone and navigate to the project:**
```bash
cd cerevyn-voice-agent
```

2. **Install backend dependencies:**
```bash
npm install
```

3. **Install frontend dependencies:**
```bash
cd client
npm install
cd ..
```

4. **Start the backend server:**
```bash
npm start
# Or for development with auto-reload:
npm run dev
```

5. **Start the React frontend (in a new terminal):**
```bash
npm run client
```

6. **Access the application:**
- Open http://localhost:3000 in your browser

## Demo Credentials

Use these credentials to test the application:

📧 **Email:** john.smith@company.com  
🔑 **Password:** password123

Other demo accounts:
- sarah.johnson@company.com / password123 (HR)
- michael.chen@company.com / password123 (Finance)

## Usage

1. **Login** with your credentials
2. **Speak or type** your query
3. **Voice Input:** Click the "Speak" button and ask your question
4. **Text Input:** Type your message in the text box
5. **Listen** to the AI agent's response with text-to-speech
6. **Multi-turn:** Continue the conversation naturally

## Project Structure

```
cerevyn-voice-agent/
├── src/
│   └── server.js                    # Express backend server
├── client/
│   ├── public/
│   │   └── index.html               # HTML entry point
│   └── src/
│       ├── components/
│       │   ├── Login.js             # Login component
│       │   ├── ChatInterface.js     # Main chat interface
│       │   ├── MessageBubble.js     # Message display
│       │   └── VoiceInput.js        # Voice control
│       ├── styles/
│       │   ├── Login.css            # Login styling
│       │   ├── ChatInterface.css    # Chat styling
│       │   ├── MessageBubble.css    # Message styling
│       │   └── VoiceInput.css       # Voice input styling
│       ├── App.js                   # Main app component
│       └── index.js                 # React entry point
├── data/
│   └── employees.json               # Mock employee database
├── package.json                     # Backend dependencies
└── client/package.json              # Frontend dependencies
```

## API Endpoints

### Authentication
- `POST /api/login` - User login
- `POST /api/logout` - User logout
- `GET /api/session` - Check authentication status

### Chat
- `POST /api/query` - Send query to AI agent
- `POST /api/save-conversation` - Save conversation history

## UI Design Features

✨ **Modern Aesthetics**
- Vibrant gradient backgrounds (Pink/Red/Purple theme)
- Smooth micro-interactions
- Professional typography

🎨 **Animations**
- Slide-up/down transitions
- Fade-in effects
- Pulsing indicators for active states
- Smooth hover effects

📱 **Responsive Design**
- Mobile-first approach
- Tablet optimization
- Desktop-enhanced experience
- Touch-friendly controls

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- The application uses the Web Speech API, which is supported in most modern browsers
- Some features may require HTTPS in production
- Session data persists for 1 hour by default
- Conversation logs are saved locally

## License

MIT License - Feel free to use and modify

---

**Built with ❤️ for Enterprise Support Excellence**
