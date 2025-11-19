import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Load employee data
const employeeData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/employees.json'), 'utf-8'));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

// Session configuration
app.use(session({
  secret: 'cerevyn-secret-key-2024',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 3600000 } // 1 hour
}));

// Routes

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  const user = employeeData.users.find(u => u.email === email && u.password === password);
  
  if (user) {
    req.session.userId = user.id;
    req.session.userName = user.name;
    req.session.department = user.department;
    res.json({ success: true, user: { id: user.id, name: user.name, email: user.email, department: user.department } });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Logout endpoint
app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true });
});

// Check session
app.get('/api/session', (req, res) => {
  if (req.session.userId) {
    res.json({ authenticated: true, user: { id: req.session.userId, name: req.session.userName, department: req.session.department } });
  } else {
    res.json({ authenticated: false });
  }
});

// Protected route middleware
const requireLogin = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res.status(401).json({ success: false, message: 'Not authenticated' });
  }
};

// AI Agent Query Handler
app.post('/api/query', requireLogin, (req, res) => {
  const { query } = req.body;
  const userId = req.session.userId;
  
  // Find user leave balance
  const leaveInfo = employeeData.leaveBalance.find(l => l.employeeId === userId);
  
  // Simple NLU - keyword matching for enterprise queries
  let response = processQuery(query.toLowerCase(), userId, leaveInfo);
  
  res.json({ response, success: true });
});

// Query processing function
function processQuery(query, userId, leaveInfo) {
  // Password reset
  if (query.includes('password') && (query.includes('reset') || query.includes('change'))) {
    return "To reset your password, visit portal.company.com and click 'Forgot Password'. You can also contact IT Support at it-helpdesk@company.com or extension 5555. Your password must be at least 12 characters with mixed case, numbers, and symbols.";
  }
  
  // Leave balance
  if (query.includes('leave') && (query.includes('balance') || query.includes('remaining'))) {
    if (leaveInfo) {
      return `Your current leave balance is: Casual Leave - ${leaveInfo.casual} days, Medical Leave - ${leaveInfo.medical} days, Earned Leave - ${leaveInfo.earned} days. You have used ${leaveInfo.used} days so far.`;
    }
    return "I couldn't find your leave information. Please contact HR.";
  }
  
  // Policy information
  if (query.includes('policy') || query.includes('policies')) {
    if (query.includes('working') || query.includes('hours')) {
      return `Working Hours Policy: ${employeeData.policies.workingHours}`;
    }
    if (query.includes('remote') || query.includes('work from home')) {
      return `Remote Work Policy: ${employeeData.policies.remotework}`;
    }
    if (query.includes('holiday')) {
      return `Holiday Policy: ${employeeData.policies.holidaylist}`;
    }
    if (query.includes('expense')) {
      return `Expense Policy: ${employeeData.policies.expenses}`;
    }
    if (query.includes('conduct') || query.includes('code')) {
      return `Code of Conduct: ${employeeData.policies.code_of_conduct}`;
    }
    return "Available policies include: Working Hours, Remote Work, Holiday, Expenses, and Code of Conduct. Which one would you like to know about?";
  }
  
  // Meeting room booking
  if (query.includes('meeting') || query.includes('room') || query.includes('book')) {
    let rooms = employeeData.meetingRooms.map(r => `${r.name} (${r.capacity} capacity)`).join(', ');
    return `Available meeting rooms: ${rooms}. To book a room, please visit the facilities portal or contact reception@company.com with room name, date, time, and attendee count.`;
  }
  
  // VPN setup
  if (query.includes('vpn')) {
    return `VPN Setup: ${employeeData.itsupport.vpn}`;
  }
  
  // Software license
  if (query.includes('software') || query.includes('license')) {
    return `Software Licenses: ${employeeData.itsupport.softwarelicense}`;
  }
  
  // Hardware issues
  if (query.includes('hardware') || query.includes('computer') || query.includes('laptop')) {
    return `Hardware Support: ${employeeData.itsupport.hardwareissues}`;
  }
  
  // IT Support general
  if (query.includes('it support') || query.includes('technical')) {
    return "I can help with: Password Reset, VPN Setup, Software Licenses, Hardware Issues, and general IT support. What do you need help with?";
  }
  
  // HR general
  if (query.includes('hr') || query.includes('human resources')) {
    return "I can help with: Leave Balance, Policies, Employee Benefits, and HR-related queries. What would you like to know?";
  }
  
  // Help
  if (query.includes('help') || query.includes('what can')) {
    return "I can assist you with: Password Reset, Leave Balance Inquiry, Policy Information, Meeting Room Booking, IT Support, and HR Services. How can I help you today?";
  }
  
  // Default response
  return "I didn't quite understand that. Can you please rephrase? I can help with password reset, leave balance, policies, room booking, IT support, and HR services.";
}

// Conversation history endpoint
app.post('/api/save-conversation', requireLogin, (req, res) => {
  const { conversation } = req.body;
  const userId = req.session.userId;
  const timestamp = new Date().toISOString();
  
  const logFile = path.join(__dirname, `../data/conversation-${userId}-${Date.now()}.json`);
  fs.writeFileSync(logFile, JSON.stringify({ userId, timestamp, conversation }, null, 2));
  
  res.json({ success: true, message: 'Conversation saved' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Cerevyn Voice Agent running at http://localhost:${PORT}`);
}); 