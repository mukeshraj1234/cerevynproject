#!/bin/bash
# Cerevyn Voice Agent - Installation Script (Linux/Mac)

echo ""
echo "================================"
echo " CEREVYN VOICE AGENT INSTALLER"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please download and install Node.js from https://nodejs.org"
    exit 1
fi

echo "[✓] Node.js found"
echo ""

# Install backend dependencies
echo "[1/4] Installing backend dependencies..."
echo ""
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install backend dependencies"
    exit 1
fi
echo "[✓] Backend dependencies installed"
echo ""

# Install frontend dependencies
echo "[2/4] Installing frontend dependencies..."
echo ""
cd client
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install frontend dependencies"
    exit 1
fi
cd ..
echo "[✓] Frontend dependencies installed"
echo ""

echo "[3/4] Setup complete!"
echo ""
echo "================================"
echo " STARTING CEREVYN VOICE AGENT"
echo "================================"
echo ""
echo "Run the following commands in separate terminals:"
echo ""
echo "Terminal 1 (Backend):"
echo "  npm start"
echo ""
echo "Terminal 2 (Frontend):"
echo "  cd client && npm start"
echo ""
echo "Demo Credentials:"
echo "  Email: john.smith@company.com"
echo "  Password: password123"
echo ""
