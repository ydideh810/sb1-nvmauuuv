import React from 'react';
import Screen from './Screen';
import SimulationCanvas from './simulation/SimulationCanvas';
import SimulationControls from './simulation/SimulationControls';
import SimulationMetrics from './simulation/SimulationMetrics';
import { Settings2 } from 'lucide-react';

const StatusScreen = () => {
  return (
    <Screen>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-red-400 text-sm">Simulation Environment</div>
          <Settings2 className="w-4 h-4 text-red-400/70" />
        </div>

        <div className="relative h-[300px] border border-red-900/30 rounded-lg overflow-hidden">
          <SimulationCanvas />
          <div className="absolute top-2 left-2 right-2 bg-black/40 border border-red-900/30 rounded p-2">
            <div className="text-xs text-red-400/70">
              Active Prompt: Generate a spacecraft propulsion system prototype
            </div>
          </div>
        </div>

        <SimulationControls />
        <SimulationMetrics />
      </div>
    </Screen>
  );
};

export default StatusScreen;