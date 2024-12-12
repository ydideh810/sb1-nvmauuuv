import React from 'react';
import { Play, Pause, RotateCcw, Download, Layers } from 'lucide-react';

const SimulationControls = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
        <div className="text-xs text-red-400">Simulation Controls</div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-2 py-1 bg-black/40 border border-red-900/30 rounded text-xs text-red-400 hover:bg-red-900/20">
            <Play className="w-3 h-3" />
            Start
          </button>
          <button className="flex items-center gap-1 px-2 py-1 bg-black/40 border border-red-900/30 rounded text-xs text-red-400 hover:bg-red-900/20">
            <RotateCcw className="w-3 h-3" />
            Reset
          </button>
          <button className="flex items-center gap-1 px-2 py-1 bg-black/40 border border-red-900/30 rounded text-xs text-red-400 hover:bg-red-900/20">
            <Layers className="w-3 h-3" />
            Layers
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-xs text-red-400">Export Options</div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-2 py-1 bg-black/40 border border-red-900/30 rounded text-xs text-red-400 hover:bg-red-900/20">
            <Download className="w-3 h-3" />
            STL
          </button>
          <button className="flex items-center gap-1 px-2 py-1 bg-black/40 border border-red-900/30 rounded text-xs text-red-400 hover:bg-red-900/20">
            <Download className="w-3 h-3" />
            OBJ
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimulationControls;