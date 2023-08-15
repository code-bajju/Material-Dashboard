import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

const JobDescription = () => {
  const [chats, setChats] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);

  // Open the first chat by default when the component mounts
  useEffect(() => {
    handleChatSelect(chats[0]?.title || '');
  }, [chats]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '' || !selectedChat) return;

    const newMessage = { content: inputMessage, sender: 'user' };
    setSelectedChat((prevChat) => ({
      ...prevChat,
      messages: [...prevChat.messages, newMessage],
    }));
    setInputMessage('');

    // Simulating a bot response after a short delay
    setTimeout(() => {
      const botResponse = { content: 'Thank you for your interest in the job!', sender: 'bot' };
      setSelectedChat((prevChat) => ({
        ...prevChat,
        messages: [...prevChat.messages, botResponse],
      }));
    }, 1000);
  };

  const handleChatSelect = (chatTitle) => {
    const selected = chats.find((chat) => chat.title === chatTitle);
    if (selected) {
      setSelectedChat(selected);
    }
  };

  const handleAddChat = () => {
    const newChatTitle = `Chat ${chats.length + 1}`;
    const newChat = {
      title: newChatTitle,
      messages: [],
    };
    setChats([...chats, newChat]);
    setSelectedChat(newChat);
  };

  // Pre-existing chat messages
  useEffect(() => {
    setChats([
      {
        title: 'Chat 1',
        messages: [
          { content: 'Hi there! I am interested in the job.', sender: 'user' },
        ],
      },
      // Add more pre-existing chats here
    ]);
  }, []);

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem', display: 'flex' }}>
      <Paper style={{ width: '30%', borderRight: '1px solid #ccc', padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Chat List
        </Typography>
        <List>
          {chats.map((chat, index) => (
            <ListItem
              key={index}
              button
              onClick={() => handleChatSelect(chat.title)}
              selected={selectedChat && selectedChat.title === chat.title}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={chat.title} />
            </ListItem>
          ))}
          <Divider />
          <ListItem button onClick={handleAddChat}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add New Chat" />
          </ListItem>
        </List>
      </Paper>
      <div style={{ flex: 1, marginLeft: '20px' }}>
        {selectedChat ? (
          <div>
            <Typography variant="h4" gutterBottom>
              {selectedChat.title}
            </Typography>
            <Paper style={{ padding: '20px', minHeight: '400px' }}>
              {selectedChat.messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    textAlign: message.sender === 'user' ? 'right' : 'left',
                    marginBottom: '10px',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '8px 12px',
                      borderRadius:
                        message.sender === 'user' ? '20px 20px 0 20px' : '20px 20px 20px 0',
                      backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#E0E0E0',
                    }}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div style={{ display: 'flex', marginTop: '10px' }}>
                <TextField
                  label="Type a message"
                  variant="outlined"
                  fullWidth
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSendMessage}
                  style={{ marginLeft: '10px', backgroundColor: '#96144C', color: 'white', borderRadius: '4px' }}
                >
                  <SendIcon />
                </Button>
              </div>
            </Paper>
          </div>
        ) : (
          <Typography variant="h4" gutterBottom>
            Select or add a chat to start conversation
          </Typography>
        )}
      </div>
    </Container>
  );
};

export default JobDescription;
