import React from 'react';
import Screen from './Screen';
import { Cpu, Network, HardDrive } from 'lucide-react';
import TeamChat from './collaboration/TeamChat';
import ActivityFeed from './collaboration/ActivityFeed';
import FileSharing from './collaboration/FileSharing';

const NavigationScreen = () => {
  const metrics = [
    { icon: Cpu, label: 'CPU Load', value: '78%', trend: '+2%' },
    { icon: Network, label: 'Network', value: '1.2GB/s', trend: '-0.1GB/s' },
    { icon: HardDrive, label: 'Storage', value: '2.1TB', trend: '85%' },
  ];

  return (
    <Screen>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="text-red-400 text-sm">System Metrics</div>
          <div className="text-red-400/70 text-xs">Last updated: 2m ago</div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {metrics.map(({ icon: Icon, label, value, trend }) => (
            <div key={label} className="border border-red-900/30 rounded p-2">
              <div className="flex items-center gap-2 mb-2">
                <Icon className="w-4 h-4 text-red-400/70" />
                <span className="text-xs text-red-400/70">{label}</span>
              </div>
              <div className="text-red-400 text-lg">{value}</div>
              <div className="text-xs text-red-400/50">{trend}</div>
            </div>
          ))}
        </div>

        <TeamChat />
        <ActivityFeed />
        <FileSharing />

      </div>
    </Screen>
  );
};

export default NavigationScreen;