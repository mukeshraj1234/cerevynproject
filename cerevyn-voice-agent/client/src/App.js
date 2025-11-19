import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './components/Login';
import ChatInterface from './components/ChatInterface';
import './styles/App.css';

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
      const response = await axios.get('/api/session');
      if (response.data.authenticated) {
        setIsAuthenticated(true);
        setUser(response.data.user);
      }
    } catch (error) {
      console.log('Session check failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
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
        <Login onLogin={handleLogin} />
      ) : (
        <ChatInterface user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
