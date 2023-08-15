import React from 'react';

const JobChat = ({ chatTitle }) => {
  const jobChats = [
    { content: 'Hello, how can I assist you with this job?', sender: 'bot' },
    { content: 'What are the requirements for this job?', sender: 'user' },
    // Add more job-related conversation messages here
  ];

  return (
    <div>
      <h3>{chatTitle}</h3>
      {jobChats.map((chat, index) => (
        <div
          key={index}
          style={{
            textAlign: chat.sender === 'user' ? 'right' : 'left',
            marginBottom: '10px',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '8px 12px',
              borderRadius: chat.sender === 'user' ? '20px 20px 0 20px' : '20px 20px 20px 0',
              backgroundColor: chat.sender === 'user' ? '#DCF8C6' : '#E0E0E0',
            }}
          >
            {chat.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobChat;
