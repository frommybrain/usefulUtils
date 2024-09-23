// shadersExtendedMaterial.jsx
import React, { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { ExtendedPhongMaterial } from './shaders/ExtendedPhongMaterial';

extend({ ExtendedPhongMaterial });

export function ShadersExtendedMaterial() {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <extendedPhongMaterial
        ref={materialRef}
        color={0x00ff00}
        emissive={0x000000}
        specular={0x111111}
        shininess={30}
        attach="material"
      />
    </mesh>
  );
}