export const SIMULATION_CONFIG = {
  ROTATION_SPEED: 0.5,
  CAMERA: {
    POSITION: [0, 0, 8],
    FOV: 50,
  },
  MATERIAL: {
    COLOR: '#ef4444',
    METALNESS: 0.8,
    ROUGHNESS: 0.2,
  },
} as const;

export const DEFAULT_METRICS: Array<{ label: string; value: string }> = [
  { label: 'Performance', value: '98%' },
  { label: 'Stress Level', value: '45%' },
  { label: 'Temperature', value: '310K' },
];