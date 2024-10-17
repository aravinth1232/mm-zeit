import React from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Extend the necessary components
extend({ BoxGeometry: THREE.BoxGeometry, CylinderGeometry: THREE.CylinderGeometry, TorusGeometry: THREE.TorusGeometry });

const Bike = () => {
  return (
    <>
      {/* Bike Frame */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      {/* Front Wheel */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[-1, 0, 0]}>
        <torusGeometry args={[0.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Rear Wheel */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[1, 0, 0]}>
        <torusGeometry args={[0.5, 0.05, 16, 100]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Handlebar */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[0.1, 0.02, 1]} />
        <meshStandardMaterial color="grey" />
      </mesh>
    </>
  );
};

const BikeScene = () => (
  <Canvas camera={{ position: [0, 2, 5], fov: 50 }} style={{ height: '100vh', background: '#f0f0f0' }}>
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <Bike />
    <OrbitControls enableZoom={true} />
  </Canvas>
);

export default BikeScene;
