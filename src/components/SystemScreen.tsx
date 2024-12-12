import React from 'react';
import Screen from './Screen';
import { Settings2 } from 'lucide-react';
import Terminal from './Terminal';
import CommandHistory from './CommandHistory';

const SystemScreen = () => {
  const commandHistory = [
    { command: 'Initialize Prismatix core systems', status: 'complete' },
    { command: 'Load neural pathways', status: 'complete' },
    { command: 'Calibrate response matrices', status: 'running' },
  ];

  return (
    <Screen>
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-red-400 text-sm">Command Center</div>
          <Settings2 className="w-4 h-4 text-red-400/70" />
        </div>

        <Terminal />

        <CommandHistory commands={commandHistory} />
      </div>
    </Screen>
  );
};

export default SystemScreen;