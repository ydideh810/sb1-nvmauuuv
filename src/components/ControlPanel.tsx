import React from 'react';
import ControlButton from './ControlButton';

const ControlPanel = () => {
  const panels = [
    {
      id: 'monitoring',
      buttons: [
        ['TOGGLE METRICS', 'SEARCH LOGS', 'FILTER DATA', 'EXPORT DATA'],
        ['ACK ALERTS', 'SET THRESHOLD', 'MUTE ALERTS', 'CLEAR LOGS']
      ]
    },
    {
      id: 'command',
      buttons: [
        ['RUN COMMAND', 'VOICE INPUT', 'SHORTCUTS', 'SAVE TASK'],
        ['PAUSE TASK', 'CANCEL TASK', 'PRIORITY UP', 'AI ASSIST']
      ]
    },
    {
      id: 'config',
      buttons: [
        ['SAVE CONFIG', 'LOAD PRESET', 'CREATE FLOW', 'SCHEDULE'],
        ['DIAGNOSTICS', 'USER ACCESS', 'SECURITY', 'UPDATE SYS']
      ]
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-navy-950/95 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-8">
          {panels.map((panel) => (
            <div 
              key={panel.id}
              className="relative bg-black/60 rounded-lg p-4 border border-red-900/30"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-red-900/5 to-transparent" />
              <div className="absolute -top-px left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
              <div className="absolute -bottom-px left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-red-900/30 to-transparent" />
              <div className="relative z-10">
                {panel.buttons.map((row, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-4 gap-3 mb-3 last:mb-0">
                    {row.map((label) => (
                      <ControlButton key={label} label={label} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;