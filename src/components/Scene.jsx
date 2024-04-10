/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

// Shaders
import vertex from '../shaders/vertex.js';
import fragment from '../shaders/fragment.js';

const Scene = () => {
  const ref = useRef();

  // Shader Material
  const ShaderMaterial = shaderMaterial({ uTime: 0 }, vertex, fragment);
  extend({ ShaderMaterial });

  // Animation
  useFrame(({ clock }) => {
    ref.current.uTime = clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial ref={ref} />
    </mesh>
  );
};

export default Scene;
