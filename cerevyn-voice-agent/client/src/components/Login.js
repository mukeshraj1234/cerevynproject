import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';
import api from './api';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('/api/login', { email, password });
      if (response.data.success) {
        onLogin(response.data.user);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const demoLogin = () => {
    setEmail('mukesh@company.com');
    setPassword('12345678');
  };

  return (
    <div className="login-container">
      <div className="login-gradient"></div>
      
      <div className="login-card">
        <div className="login-header">
          <div className="logo-circle">
            <svg viewBox="0 0 100 100" className="logo-icon">
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E94560" />
                  <stop offset="100%" stopColor="#F5A623" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="45" fill="none" stroke="url(#logoGradient)" strokeWidth="2"/>
              <path d="M30 50 Q50 70 70 50" fill="none" stroke="url(#logoGradient)" strokeWidth="3" strokeLinecap="round"/>
              <circle cx="40" cy="40" r="3" fill="url(#logoGradient)"/>
              <circle cx="60" cy="40" r="3" fill="url(#logoGradient)"/>
            </svg>
          </div>
          <h1 className="login-title">CEREVYN</h1>
          <p className="login-subtitle">Enterprise Voice Support</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                required
              />
              <div className="input-focus-border"></div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
              <div className="input-focus-border"></div>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="btn-login" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span> Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="demo-section">
          <p className="demo-label">Demo Account</p>
          <div className="demo-box">
            <p className="demo-info">
              <span className="demo-icon">📧</span>
              mukesh@company.com
            </p>
            <p className="demo-info">
              <span className="demo-icon">🔑</span>
              12345678
            </p>
          </div>
          <button type="button" onClick={demoLogin} className="btn-demo">
            Use Demo Credentials
          </button>
        </div>

        <div className="footer-text">
          <p>Secure Enterprise Support Portal</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
