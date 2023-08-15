import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';

const Message = () => {
  const [chatData] = useState([
    {
      id: 1,
      name: 'Bajrang Gour',
      avatar: 'URL_TO_USER_1_AVATAR',
      messages: [
        { id: 1, content: 'Hi!', sender: 'other' },
        { id: 2, content: 'How are you?', sender: 'other' },
      ],
    },
    {
      id: 2,
      name: 'Sujal Garg',
      avatar: 'URL_TO_USER_2_AVATAR',
      messages: [
        { id: 1, content: 'Hey there!', sender: 'other' },
        { id: 2, content: 'What\'s up?', sender: 'other' },
      ],
    },
    {
        id: 3,
        name: 'Anjali Saini',
        avatar: 'URL_TO_USER_2_AVATAR',
        messages: [
          { id: 1, content: 'Hey there!', sender: 'other' },
          { id: 2, content: 'What\'s up?', sender: 'other' },
        ],
      },
      {
        id: 4,
        name: 'Alisa Rajput',
        avatar: 'URL_TO_USER_2_AVATAR',
        messages: [
          { id: 1, content: 'Hey there!', sender: 'other' },
          { id: 2, content: 'What\'s up?', sender: 'other' },
        ],
      },
   
  ]);

  const [selectedChat, setSelectedChat] = useState(chatData[0]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '' || !selectedChat) return;

    const newMessageObj = {
      id: selectedChat.messages.length + 1,
      content: newMessage,
      sender: 'user',
    };

    setSelectedChat((prevChat) => ({
      ...prevChat,
      messages: [...prevChat.messages, newMessageObj],
    }));
    setNewMessage('');
  };

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Message
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper style={{ padding: '20px', minHeight: '400px' }}>
            <Typography variant="h6" gutterBottom>
              Chat List
            </Typography>
            <List>
              {chatData.map((chat) => (
                <ListItem
                  key={chat.id}
                  button
                  onClick={() => handleSelectChat(chat)}
                >
                  <ListItemAvatar>
                    <Avatar alt={chat.name} src={chat.avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={chat.name} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper style={{ padding: '20px', minHeight: '400px' }}>
            {selectedChat ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <Avatar alt={selectedChat.name} src={selectedChat.avatar} style={{ marginRight: '10px' }} />
                  <Typography variant="h6">
                    Conversation with {selectedChat.name}
                  </Typography>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  {selectedChat.messages.map((message) => (
                    <div
                      key={message.id}
                      style={{
                        textAlign: message.sender === 'user' ? 'right' : 'left',
                        marginBottom: '10px',
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-block',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          backgroundColor:
                            message.sender === 'user' ? '#DCF8C6' : '#E0E0E0',
                        }}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex' }}>
                  <TextField
                    label="Type a message"
                    variant="outlined"
                    fullWidth
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <Button
  variant="contained"
  color="primary"
  style={{ marginLeft: '10px', backgroundColor: '#96144C', color: 'white', borderRadius: '4px' }}
  onClick={handleSendMessage}
>
  Send
</Button>

                </div>
              </div>
            ) : (
              <Typography>Select a chat to start conversation</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Message;
