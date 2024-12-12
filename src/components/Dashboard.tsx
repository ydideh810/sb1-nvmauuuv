import React from 'react';
import NavigationScreen from './NavigationScreen';
import SystemScreen from './SystemScreen';
import StatusScreen from './StatusScreen';
import ControlPanel from './ControlPanel';
import Title from './Title';

const Dashboard = () => {
  return (
    <div className="min-h-screen pb-48 bg-navy-950 text-red-400 font-tektur">
      <div className="container mx-auto px-4 py-6">
        <Title />
        <div className="grid grid-cols-3 gap-6">
          <NavigationScreen />
          <SystemScreen />
          <StatusScreen />
        </div>
      </div>
      <ControlPanel />
    </div>
  );
};

export default Dashboard;