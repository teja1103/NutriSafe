"use client"

// pages/community-chat.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button } from "@tremor/react";
interface Message {
  id: number;
  user: string;
  text: string;
}

const CommunityChat: React.FC = () => {
  const fixedUserName = 'Surya';
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.trim() !== '') {
      const newMessage: Message = {
        id: Date.now(),
        user: fixedUserName,
        text: message,
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage('');
    }
  };

  return (
    <div>
      
      <h1 style={{display:'flex',alignItems:'center',flexDirection:'column'}}> <b>Community Chat</b></h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', minHeight: '500px', overflowY: 'auto' }}>
        {messages.map((msg) => (
          <div key={msg.id}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <label>
    Message:
    <input type="text" value={message} onChange={handleMessageChange} />
  </label>
  <br />
  <Button className='border-2 rounded-md border-black p-2' type="submit" size="md" variant="primary" style={{ marginTop: '10px' }}>
    Send
  </Button>
</form>

    </div>
  );
};

export default CommunityChat;