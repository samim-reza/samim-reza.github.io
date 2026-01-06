import React, { useState, useEffect } from 'react';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Restore previous state from localStorage
    const wasOpen = localStorage.getItem('chat_open') === '1';
    if (wasOpen) {
      setIsOpen(true);
    }
  }, []);

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = !isOpen;
    setIsOpen(newState);
    localStorage.setItem('chat_open', newState ? '1' : '0');
  };

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    localStorage.setItem('chat_open', '0');
  };

  return (
    <div 
      id="chat-widget" 
      className={isOpen ? 'open' : ''} 
      aria-hidden="false"
    >
      <button 
        id="chat-toggle" 
        aria-label={isOpen ? "Close chat" : "Open chat"}
        title="Chat with me"
        onClick={handleToggle}
        style={{ pointerEvents: 'auto' }}
        type="button"
      >
        <i className="fas fa-comment-dots" style={{ pointerEvents: 'none' }}></i>
      </button>
      <div 
        id="chat-panel" 
        aria-hidden={!isOpen} 
        role="dialog" 
        aria-label="Chat panel"
        style={{ display: isOpen ? 'flex' : 'none' }}
      >
        <div id="chat-header">
          <span style={{ pointerEvents: 'none' }}>AI Assistant</span>
          <button 
            id="chat-close" 
            aria-label="Close chat"
            onClick={handleClose}
            style={{ pointerEvents: 'auto' }}
            type="button"
          >
            ×
          </button>
        </div>
        <iframe 
          id="chat-iframe" 
          src="https://samim-chatbot-app.azurewebsites.net/" 
          title="Chat" 
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default ChatWidget;
