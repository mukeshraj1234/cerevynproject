import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import MessageBubble from './MessageBubble';
import VoiceInput from './VoiceInput';
import '../styles/ChatInterface.css';
import api from './api';

function ChatInterface({ user, onLogout }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef(null);
  const synth = window.speechSynthesis;

  useEffect(() => {
    // Welcome message
    const welcomeMsg = {
      id: Date.now(),
      type: 'agent',
      text: `Hello ${user.name}! I'm Cerevyn, your AI support assistant. How can I help you today? I can assist with password reset, leave balance, policies, meeting room booking, and IT support.`,
      timestamp: new Date(),
    };
    setMessages([welcomeMsg]);
  }, [user.name]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogout = async () => {
    try {
      await axios.post('/api/logout');
      onLogout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setLoading(true);

    try {
      const response = await axios.post('/api/query', { query: text });
      
      const agentMessage = {
        id: Date.now() + 1,
        type: 'agent',
        text: response.data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, agentMessage]);
      
      // Text to speech
      speakResponse(response.data.response);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        type: 'agent',
        text: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const speakResponse = (text) => {
    if ('speechSynthesis' in window) {
      synth.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);

      synth.speak(utterance);
    }
  };

  const handleVoiceInput = (transcript) => {
    sendMessage(transcript);
  };

  const handleSendClick = () => {
    sendMessage(inputText);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendClick();
    }
  };

  return (
    <div className="chat-interface">
      {/* Header */}
      <div className="chat-header">
        <div className="header-left">
          <div className="user-avatar">
            <span>{user.name.charAt(0).toUpperCase()}</span>
          </div>
          <div className="user-header-info">
            <h2>{user.name}</h2>
            <p>{user.department}</p>
          </div>
        </div>
        <button className="btn-logout" onClick={handleLogout} title="Logout">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      </div>

      {/* Messages Area */}
      <div className="messages-container">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        {loading && (
          <div className="message-bubble agent-message">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        {isSpeaking && (
          <div className="speaking-indicator">
            <svg viewBox="0 0 100 100" className="sound-waves">
              <circle cx="50" cy="50" r="5" fill="currentColor" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span>Speaking...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="input-area">
        <VoiceInput onTranscript={handleVoiceInput} isSpeaking={isSpeaking} />
        
        <div className="text-input-section">
          <textarea
            className="text-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message or use voice input..."
            rows="1"
          />
          <button
            className="btn-send"
            onClick={handleSendClick}
            disabled={!inputText.trim() || loading}
            title="Send message"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"></path>
              <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInterface;
