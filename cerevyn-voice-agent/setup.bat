@echo off
REM Cerevyn Voice Agent - Installation Script
REM This script automatically installs all dependencies and starts the application

echo.
echo ================================
echo  CEREVYN VOICE AGENT INSTALLER
echo ================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org
    pause
    exit /b 1
)

echo [✓] Node.js found
echo.

REM Install backend dependencies
echo [1/4] Installing backend dependencies...
echo.
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to install backend dependencies
    pause
    exit /b 1
)
echo [✓] Backend dependencies installed
echo.

REM Install frontend dependencies
echo [2/4] Installing frontend dependencies...
echo.
cd client
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to install frontend dependencies
    pause
    exit /b 1
)
cd ..
echo [✓] Frontend dependencies installed
echo.

echo [3/4] Setup complete!
echo.
echo ================================
echo  STARTING CEREVYN VOICE AGENT
echo ================================
echo.
echo Two terminal windows will open:
echo  - Backend will run on http://localhost:3000
echo  - Frontend (React) will open in your browser
echo.
echo Demo Credentials:
echo  Email: john.smith@company.com
echo  Password: password123
echo.
pause

REM Start backend in new terminal
start cmd /k "cd %CD% && npm start"

REM Wait a moment for backend to start
timeout /t 3

REM Start frontend in new terminal
start cmd /k "cd %CD%\client && npm start"

echo [✓] Application started!
echo.
echo Frontend should open automatically in your default browser.
echo If not, visit: http://localhost:3000
echo.
pause
