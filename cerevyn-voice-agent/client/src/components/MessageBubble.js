import React from 'react';
import '../styles/MessageBubble.css';
import api from './api';

function MessageBubble({ message }) {
  const isUser = message.type === 'user';
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`message-bubble ${isUser ? 'user-message' : 'agent-message'}`}>
      <div className="message-content">
        <p>{message.text}</p>
      </div>
      <span className="message-time">{formatTime(message.timestamp)}</span>
    </div>
  );
}

export default MessageBubble;
