import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './components/Login';
import ChatInterface from './components/ChatInterface';
import './styles/App.css';

// Set API base URL for both local development and production
const API_BASE = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3000/api';

// Configure axios base URL
const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true // Important for sessions to work
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const response = await api.get('/session');
      if (response.data.authenticated) {
        setIsAuthenticated(true);
        setUser(response.data.user);
      }
    } catch (error) {
      console.log('Session check failed:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = async () => {
    try {
      await api.post('/logout');
    } catch (error) {
      console.log('Logout error:', error.message);
    } finally {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading Cerevyn...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {!isAuthenticated ? (
        <Login onLogin={handleLogin} api={api} />
      ) : (
        <ChatInterface user={user} onLogout={handleLogout} api={api} />
      )}
    </div>
  );
}

export default App;