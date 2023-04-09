'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

type Props = {
  modelPath: string;
};

const Model: React.FC<Props> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

  return (
    <group rotation={[0, 0, 0]} position={[0, 0, 0]} scale={[1, 1, 1]}>
      <primitive object={scene} />
    </group>
  );
};

const Model3D: React.FC<Props> = ({ modelPath }) => {
  return (
    <Canvas style={{ width: '150px', height: '150px' }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Model modelPath={modelPath} />
      <OrbitControls />
    </Canvas>
  );
};

export default Model3D;
