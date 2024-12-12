import React from 'react';
import { History } from 'lucide-react';

interface Command {
  command: string;
  status: string;
}

interface CommandHistoryProps {
  commands: Command[];
}

const CommandHistory = ({ commands }: CommandHistoryProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <History className="w-4 h-4 text-red-400" />
        <span className="text-sm text-red-400">Command History</span>
      </div>
      <div className="space-y-2">
        {commands.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-red-900/30 rounded p-2"
          >
            <div className="text-xs text-red-400/70 font-mono">{item.command}</div>
            <div className="text-xs px-2 py-0.5 rounded bg-red-900/20 text-red-400">
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommandHistory;