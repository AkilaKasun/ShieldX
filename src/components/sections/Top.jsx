import React, { Suspense, useState } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, Html, Effects } from '@react-three/drei';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { Model } from './Model';

extend({ UnrealBloomPass });

const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;

function Top() {
  const [modelLoaded, setModelLoaded] = useState(false);

  return (
    <section className="relative w-full h-screen bg-[#050505] z-20 flex flex-col items-center justify-center overflow-hidden">

  
      {!modelLoaded && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]">
          
        
          <div className="w-20 h-20 rounded-full border-2 border-transparent border-t-[#00F0FF] border-r-[#00F0FF]/30 animate-spin mb-6" />
          
        
          <span className="text-[#00F0FF] font-mono text-sm tracking-[0.4em] uppercase animate-pulse">
            Initializing...
          </span>
        </div>
      )}

      <Canvas
        camera={{ position: [0, 0, 28], fov: 65 }}
        dpr={isMobile ? 1 : window.devicePixelRatio}
        performance={{ min: 0.5 }}
        gl={{
          antialias: !isMobile,
          powerPreference: isMobile ? 'low-power' : 'high-performance',
        }}
      >
        <ambientLight intensity={0.1} />

        <Suspense fallback={null}>
          <Model
            scale={1}
            position={[0, -3, 0]}
            onLoad={() => setModelLoaded(true)}
          />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={isMobile ? 0.8 : 1.5}
          />
        </Suspense>

        {!isMobile && (
          <Effects disableGamma>
            <unrealBloomPass threshold={0.05} strength={4.5} radius={0.8} />
          </Effects>
        )}

      </Canvas>


      {modelLoaded && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 pointer-events-none">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-white/50 font-sans font-bold">Scroll to Enter</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      )}

    </section>
  );
}

export default Top;