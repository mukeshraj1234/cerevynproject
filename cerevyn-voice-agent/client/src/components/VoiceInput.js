import React, { useState, useEffect } from 'react';
import '../styles/VoiceInput.css';

function VoiceInput({ onTranscript, isSpeaking }) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSupported, setIsSupported] = useState(false);
  const recognitionRef = React.useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setIsSupported(true);
      recognitionRef.current = new SpeechRecognition();
      
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onstart = () => {
        setIsListening(true);
        setTranscript('');
      };

      recognitionRef.current.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;

          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }

        setTranscript(finalTranscript || interimTranscript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
        if (transcript.trim()) {
          onTranscript(transcript.trim());
          setTranscript('');
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
    }
  }, [onTranscript, transcript]);

  const toggleListening = () => {
    if (!isSupported) {
      alert('Speech Recognition is not supported in your browser.');
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      recognitionRef.current?.start();
    }
  };

  return (
    <div className="voice-input-section">
      <button
        className={`btn-voice ${isListening ? 'listening' : ''}`}
        onClick={toggleListening}
        disabled={isSpeaking}
        title={isListening ? 'Stop listening' : 'Start listening'}
      >
        <svg className={`mic-icon ${isListening ? 'active' : ''}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
          <path d="M17 16.91c-1.48 1.46-3.5 2.36-5.77 2.36-2.26 0-4.29-.9-5.77-2.36m12.29-2.44l1.42 1.41C21.54 16.89 22 14.76 22 12h-2.58c0 2.11-.46 4.12-1.27 5.92z"/>
        </svg>
        <span className="voice-label">{isListening ? 'Listening...' : 'Speak'}</span>
      </button>

      {isListening && (
        <div className="listening-feedback">
          <div className="transcript-text">
            {transcript || 'Listening...'}
          </div>
          <div className="pulse-indicator">
            <div className="pulse"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VoiceInput;
