import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { SIMULATION_CONFIG } from './constants';

const SpacecraftModel = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * SIMULATION_CONFIG.ROTATION_SPEED;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.4, 16, 32]} />
      <meshStandardMaterial 
        color={SIMULATION_CONFIG.MATERIAL.COLOR}
        metalness={SIMULATION_CONFIG.MATERIAL.METALNESS}
        roughness={SIMULATION_CONFIG.MATERIAL.ROUGHNESS}
      />
    </mesh>
  );
};

export default SpacecraftModel;