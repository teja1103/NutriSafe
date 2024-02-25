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
      
      <h1 style={{display:'flex',alignItems:'center',flexDirection:'column'}} className='text-xl text-c-white'> <b>Community Chat</b></h1>
      <div className='bg-c-violet rounded-2xl' style={{ border: '1px solid #ccc', padding: '10px', minHeight: '500px', overflowY: 'auto' }}>
        {messages.map((msg) => (
          <div className='bg-f-pen text-c-white rounded-sm text-f-t-pen border-white' key={msg.id}>
            <strong>{msg.user}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <label >
    <h4 className='text-c-white'>Message:</h4>
    <input className='rounded-md border-2 border-black' type="text" value={message} onChange={handleMessageChange} />
  </label>
  <br />
  <Button className='border-2 text-c-white hover:shadow-sm hover:shadow-white rounded-md border-black p-2 hover:bg-e-d-brown' type="submit" size="md" variant="primary" style={{ marginTop: '10px' }}>
    Send
  </Button>
</form>

    </div>
  );
};

export default CommunityChat;