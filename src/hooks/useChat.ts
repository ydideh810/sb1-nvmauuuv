import { useState } from 'react';
import { usePollinationsChat } from '@pollinations/react';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export const useChat = () => {
  const [input, setInput] = useState('');
  const { sendUserMessage, messages } = usePollinationsChat([
    {
      role: 'system',
      content: 'You are Prismatix, an advanced AI assistant. Respond in a professional, concise manner with a futuristic tone. Focus on being helpful while maintaining an air of sophisticated technology.'
    }
  ], {
    seed: 42,
    jsonMode: false,
    model: 'mistral'
  });

  const handleSend = async () => {
    if (!input.trim()) return;
    
    await sendUserMessage(input);
    setInput('');
  };

  return {
    input,
    setInput,
    messages,
    handleSend
  };
};