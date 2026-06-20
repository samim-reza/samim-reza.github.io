import React, { useState, useEffect } from 'react';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
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
    <div className="chat-widget">
      <button 
        className="chat-toggle"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        title="Chat with me"
        onClick={handleToggle}
        type="button"
      >
        <i className="fas fa-comment-dots"></i>
      </button>
      
      {isOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <h3>AI Assistant</h3>
            <button 
              className="chat-close"
              onClick={handleClose}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className="chat-body">
            <iframe 
              src="https://samim-chatbot-app.azurewebsites.net/" 
              title="Chat with AI Assistant" 
              frameBorder="0"
              style={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatWidget;
