import { MutableRefObject } from 'react';
import { Mesh } from 'three';

export interface SimulationMetric {
  label: string;
  value: string;
}

export interface MeshRef {
  ref: MutableRefObject<Mesh | null>;
}