import React from 'react';
import { Activity, Gauge } from 'lucide-react';
import { DEFAULT_METRICS } from './constants';

const SimulationMetrics = () => {
  const metrics = DEFAULT_METRICS;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Activity className="w-4 h-4 text-red-400" />
        <span className="text-sm text-red-400">Real-time Metrics</span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="border border-red-900/30 rounded p-2">
            <div className="flex items-center gap-2 mb-1">
              <Gauge className="w-3 h-3 text-red-400/70" />
              <span className="text-xs text-red-400/70">{metric.label}</span>
            </div>
            <div className="text-sm text-red-400">{metric.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimulationMetrics;