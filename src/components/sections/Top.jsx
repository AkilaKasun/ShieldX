"use client";

import React, { Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, Html, Effects } from '@react-three/drei';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { Model } from './Model';

// This registers the native Three.js Bloom effect so React can use it
extend({ UnrealBloomPass });

function Top() {
  return (
    <section className="relative w-full h-screen bg-[#050505] z-20 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Notice we don't need the gl={} hack anymore either */}
      <Canvas camera={{ position: [0, 0, 28], fov: 65 }}>
        
        <ambientLight intensity={0.1} />
        
        <Suspense fallback={<Html center><span className="text-[#00F0FF] font-mono text-xl tracking-widest">LOADING MODEL...</span></Html>}>
          
          <Model scale={1} position={[0, -3, 0]} />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate 
            autoRotateSpeed={1.5} 
          />
        </Suspense>
        
        {/* --- NATIVE THREE.JS BLOOM (Crash-Proof) --- */}
        <Effects disableGamma>
          <unrealBloomPass 
            threshold={0.1} 
            strength={2.5} // Increase for brighter glow
            radius={0.5} 
          />
        </Effects>
        
      </Canvas>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 pointer-events-none">
        <span className="text-[0.65rem] tracking-[0.3em] uppercase text-white/50 font-sans font-bold">Scroll to Enter</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>

    </section>
  );
}

export default Top;