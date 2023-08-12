import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

const ChatList = ({ chatData, onSelectChat }) => {
  return (
    <List>
      {chatData.map((chat) => (
        <ListItem key={chat.id} button onClick={() => onSelectChat(chat)}>
          <ListItemAvatar>
            <Avatar alt={chat.name} src={chat.avatar} />
          </ListItemAvatar>
          <ListItemText primary={chat.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default ChatList;
