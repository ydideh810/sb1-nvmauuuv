import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import SpacecraftModel from './SpacecraftModel';
import { SIMULATION_CONFIG } from './constants';

const SimulationCanvas = () => {
  return (
    <Canvas shadows camera={{ 
      position: SIMULATION_CONFIG.CAMERA.POSITION, 
      fov: SIMULATION_CONFIG.CAMERA.FOV 
    }}>
      <Stage environment="city" intensity={0.5}>
        <SpacecraftModel />
      </Stage>
      <OrbitControls makeDefault />
    </Canvas>
  );
};

export default SimulationCanvas;