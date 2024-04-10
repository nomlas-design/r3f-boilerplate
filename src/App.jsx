/* eslint-disable react/no-unknown-property */
import './styles/styles.scss';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Scene from './components/Scene';

const App = () => {
  return (
    <Canvas className='canvas' camera={{ position: [0, 0, 2], fov: 35 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
};

export default App;
