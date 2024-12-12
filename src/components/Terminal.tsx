import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useChat } from '../hooks/useChat';

const Terminal = () => {
  const { input, setInput, messages, handleSend } = useChat();

  return (
    <div className="border border-red-900/30 rounded-lg p-3">
      <div className="flex items-center gap-2 mb-3">
        <TerminalIcon className="w-4 h-4 text-red-400" />
        <span className="text-sm text-red-400">Prismatix Terminal</span>
      </div>
      <div className="bg-black/20 rounded p-2 h-48 mb-2 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-xs text-red-400/70 font-mono">
            $ Prismatix v1.0 initialized. Awaiting input...
          </div>
        ) : (
          <div className="space-y-2">
            {messages.map((msg, index) => (
              <div key={index} className="text-xs text-red-400/70 font-mono">
                {msg.role === 'user' ? '$ ' : '> '}
                {msg.content}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 bg-black/20 border border-red-900/30 rounded px-2 py-1 text-xs text-red-400 outline-none focus:border-red-500/50 font-mono"
          placeholder="Enter command..."
        />
        <button 
          onClick={handleSend}
          className="px-3 py-1 text-xs border border-red-900/30 rounded text-red-400 hover:bg-red-900/20"
        >
          Execute
        </button>
      </div>
    </div>
  );
};

export default Terminal;