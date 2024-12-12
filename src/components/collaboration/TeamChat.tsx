import React from 'react';
import { MessageSquare, Send } from 'lucide-react';

interface Message {
  id: string;
  user: string;
  content: string;
  timestamp: string;
}

const TeamChat = () => {
  const messages: Message[] = [
    {
      id: '1',
      user: 'Sarah Chen',
      content: 'Updated the neural network parameters',
      timestamp: '2 min ago'
    },
    {
      id: '2',
      user: 'Alex Kumar',
      content: 'Running final tests on the new model',
      timestamp: '5 min ago'
    }
  ];

  return (
    <div className="border border-red-900/30 rounded-lg p-3">
      <div className="flex items-center gap-2 mb-3">
        <MessageSquare className="w-4 h-4 text-red-400" />
        <span className="text-sm text-red-400">Team Chat</span>
      </div>
      <div className="space-y-2 h-32 overflow-y-auto mb-3">
        {messages.map((message) => (
          <div key={message.id} className="bg-black/20 rounded p-2">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-red-400">{message.user}</span>
              <span className="text-xs text-red-400/50">{message.timestamp}</span>
            </div>
            <p className="text-xs text-red-400/70">{message.content}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-black/20 border border-red-900/30 rounded px-2 py-1 text-xs text-red-400 outline-none focus:border-red-500/50"
        />
        <button className="p-1.5 border border-red-900/30 rounded text-red-400 hover:bg-red-900/20">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TeamChat;