/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { useFrame, extend, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { useControls } from 'leva';

// Shaders
import vertex from '../shaders/vertex.js';
import fragment from '../shaders/fragment.js';

const Scene = () => {
  // Refs
  const meshRef = useRef();
  const matRef = useRef();

  // Controls
  const controls = useControls({
    height: { value: 1, min: 0, max: 2, step: 0.01 },
    width: { value: 1, min: 0, max: 2, step: 0.01 },
  });

  // Shader Material
  const ShaderMaterial = shaderMaterial({ uTime: 0 }, vertex, fragment);
  extend({ ShaderMaterial });

  // Frame loop
  useFrame((state) => {
    // Uniforms update
    matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[controls.height, controls.width]} />
      <shaderMaterial ref={matRef} />
    </mesh>
  );
};

export default Scene;
