import React from 'react';
import { Activity } from 'lucide-react';

interface ActivityItem {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
}

const ActivityFeed = () => {
  const activities: ActivityItem[] = [
    {
      id: '1',
      user: 'Marcus',
      action: 'modified',
      target: 'training parameters',
      timestamp: '1m ago'
    },
    {
      id: '2',
      user: 'Elena',
      action: 'deployed',
      target: 'new model version',
      timestamp: '3m ago'
    }
  ];

  return (
    <div className="border border-red-900/30 rounded-lg p-3">
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-4 h-4 text-red-400" />
        <span className="text-sm text-red-400">Activity Feed</span>
      </div>
      <div className="space-y-2">
        {activities.map((item) => (
          <div key={item.id} className="flex items-center gap-2 text-xs">
            <span className="w-1 h-1 bg-red-400/50 rounded-full" />
            <span className="text-red-400">{item.user}</span>
            <span className="text-red-400/70">{item.action}</span>
            <span className="text-red-400">{item.target}</span>
            <span className="text-red-400/50 ml-auto">{item.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;