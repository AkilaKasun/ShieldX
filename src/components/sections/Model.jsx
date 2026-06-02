import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function Model({ onLoad, ...props }) {
  const { nodes, materials, scene } = useGLTF('/cyber_djinn.glb');

  useEffect(() => {
    // 1. Head & Hands (Ultra Bright Neon Blue)
    const neonBlueWireframe = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0, 2, 10), 
      wireframe: true,
      transparent: true,
      opacity: 1, 
    });

    // 2. TV Machine, Monitors & Keyboards (Ultra Bright Cyan)
    const neonCyanWireframe = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0, 10, 10), 
      wireframe: true,
      transparent: true,
      opacity: 1, 
    });

    // 3. Rest of the machine/cables (Brighter Neon Green)
    const neonGreenWireframe = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0, 5, 0), 
      wireframe: true,
      transparent: true,
      opacity: 0.5, 
    });

    // Loop through and assign colors
    scene.traverse((child) => {
      if (child.isMesh) {
        if (child.material === materials.human || child.material?.name === 'human') {
          child.material = neonBlueWireframe;
        } else if (
          child.material === materials.monitor_and_details || 
          child.material === materials.keyboard || 
          child.material === materials.glass
        ) {
          child.material = neonCyanWireframe;
        } else {
          child.material = neonGreenWireframe;
        }
      }
    });

    if (onLoad) {
      onLoad();
    }
  }, [scene, materials, onLoad]);

  // Make sure all meshes are returned inside this single group
  return (
    <group {...props} dispose={null}>
      <group position={[7.521, -1.809, -0.197]} rotation={[-3.124, 0.009, 2.943]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_36.geometry} material={materials.human} />
        <mesh castShadow receiveShadow geometry={nodes.Object_37.geometry} material={materials.human} />
      </group>
      <group position={[-0.015, 1.378, -3.102]} rotation={[0, -0.575, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_143.geometry} material={materials.drivers} />
        <mesh castShadow receiveShadow geometry={nodes.Object_144.geometry} material={materials.glass} />
      </group>
      <group position={[-1.591, 0.745, 2.835]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_148.geometry} material={materials.drivers} />
        <mesh castShadow receiveShadow geometry={nodes.Object_149.geometry} material={materials.material_0} />
      </group>
      <group position={[-0.015, 0.569, -3.102]} rotation={[0, -0.575, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_175.geometry} material={materials.drivers} />
        <mesh castShadow receiveShadow geometry={nodes.Object_176.geometry} material={materials.glass} />
      </group>
      <group position={[-0.015, -0.23, -3.102]} rotation={[0, -0.575, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_178.geometry} material={materials.drivers} />
        <mesh castShadow receiveShadow geometry={nodes.Object_179.geometry} material={materials.glass} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.material} position={[-7.481, 15.436, 0.046]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.big_details} position={[-1.086, 1.254, -2.43]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.big_details} position={[-2.856, 0.733, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.big_details} position={[-0.8, -0.491, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials.big_details} position={[-0.8, -0.53, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials.big_details} position={[-0.8, -0.579, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials.big_details} position={[-0.8, -0.785, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.big_details} position={[-0.8, 2.716, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_20.geometry} material={materials.big_details} position={[-0.8, 2.649, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_22.geometry} material={materials.big_details} position={[-0.8, -2.948, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_24.geometry} material={materials.big_details} position={[-0.8, -0.717, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_26.geometry} material={materials.big_details} position={[-1.086, 0.445, -2.43]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_28.geometry} material={materials.big_details} position={[-1.086, -0.358, -2.43]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_30.geometry} material={materials.big_details} position={[-1.086, 1.254, 2.472]} rotation={[Math.PI, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_32.geometry} material={materials.big_details} position={[-1.086, -0.351, 2.472]} rotation={[Math.PI, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_34.geometry} material={materials.material_0} position={[7.521, -1.809, -0.197]} rotation={[-3.124, 0.009, 2.943]} scale={1.254} />
      <mesh castShadow receiveShadow geometry={nodes.Object_39.geometry} material={materials.Cable_and_conectors} position={[-0.8, -0.579, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_41.geometry} material={materials.Cable_and_conectors} position={[-0.8, -0.579, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_43.geometry} material={materials.Cable_and_conectors} position={[-0.8, -0.986, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_45.geometry} material={materials.Cable_and_conectors} position={[-0.8, -1.406, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_47.geometry} material={materials.Cable_and_conectors} position={[-2.643, -1.254, 4.582]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_49.geometry} material={materials.Cable_and_conectors} position={[-3.703, -1.254, -4.253]} rotation={[Math.PI, -1.227, Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_51.geometry} material={materials.Cable_and_conectors} position={[-0.8, -0.579, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_53.geometry} material={materials.Cable_and_conectors} position={[-0.8, -0.579, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_55.geometry} material={materials.Cable_and_conectors} position={[-0.8, -0.579, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_57.geometry} material={materials.Cable_and_conectors} position={[-0.71, -0.579, -0.076]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_59.geometry} material={materials.Cable_and_conectors} position={[1.01, -0.579, 0.335]} rotation={[-Math.PI, 0.728, -Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_61.geometry} material={materials.Cable_and_conectors} position={[1.166, -0.579, 0.514]} rotation={[-Math.PI, 0.728, -Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_63.geometry} material={materials.Cable_and_conectors} position={[1.293, -0.579, 0.64]} rotation={[-Math.PI, 0.728, -Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_65.geometry} material={materials.Cable_and_conectors} position={[1.402, -0.579, 0.761]} rotation={[-Math.PI, 0.728, -Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_67.geometry} material={materials.Cable_and_conectors} position={[-2.26, 0.931, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_69.geometry} material={materials.Cable_and_conectors} position={[-2.26, 0.931, -0.288]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_71.geometry} material={materials.Cable_and_conectors} position={[0.382, -0.007, 3.986]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_73.geometry} material={materials.Cable_and_conectors} position={[-1.009, 0.079, -1.507]} rotation={[-0.179, -0.253, -0.045]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_75.geometry} material={materials.Cable_and_conectors} position={[-0.75, 1.67, -2.802]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_77.geometry} material={materials.Cable_and_conectors} position={[-0.8, -2.948, 0]} rotation={[Math.PI, -Math.PI / 3, Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_79.geometry} material={materials.Cable_and_conectors} position={[-0.8, -0.591, 0]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_81.geometry} material={materials.Cable_and_conectors} position={[-0.8, -0.579, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_83.geometry} material={materials.Cable_and_conectors} position={[-2.26, 0.931, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_85.geometry} material={materials.Cable_and_conectors} position={[-2.26, 0.931, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_87.geometry} material={materials.Cable_and_conectors} position={[-2.26, 0.114, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_89.geometry} material={materials.Cable_and_conectors} position={[-2.26, 0.931, 0]} rotation={[0, 0, -2.142]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_91.geometry} material={materials.Cable_and_conectors} position={[-0.303, -0.54, 2.149]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_93.geometry} material={materials.Cable_and_conectors} position={[-2.354, 0.589, 0.462]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_95.geometry} material={materials.Cable_and_conectors} position={[-2.26, 0.931, 0]} rotation={[0, 0, -2.142]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_97.geometry} material={materials.Cable_and_conectors} position={[-0.75, 0.867, -2.802]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_99.geometry} material={materials.Cable_and_conectors} position={[-0.75, 0.057, -2.802]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_101.geometry} material={materials.Cable_and_conectors} position={[-2.298, 0.467, -0.497]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_103.geometry} material={materials.Cable_and_conectors} position={[-0.8, -2.948, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_105.geometry} material={materials.Cable_and_conectors} position={[-0.8, -2.948, 0]} rotation={[0, Math.PI / 3, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_107.geometry} material={materials.Cable_and_conectors} position={[-0.8, -2.948, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_109.geometry} material={materials.Cable_and_conectors} position={[-0.8, -2.948, 0]} rotation={[-Math.PI, 0, -Math.PI]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_111.geometry} material={materials.Cable_and_conectors} position={[-0.8, -2.948, 0]} rotation={[0, -Math.PI / 3, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_113.geometry} material={materials.material} position={[-10.469, 10.307, 9.719]} scale={0.063} />
      <mesh castShadow receiveShadow geometry={nodes.Object_115.geometry} material={materials.material} position={[-11.165, 14.156, 4.227]} scale={0.118} />
      <mesh castShadow receiveShadow geometry={nodes.Object_117.geometry} material={materials.material} position={[-3.898, 10.715, -7.84]} scale={0.118} />
      <mesh castShadow receiveShadow geometry={nodes.Object_119.geometry} material={materials.material} position={[2.078, 7.893, 9.08]} scale={0.028} />
      <mesh castShadow receiveShadow geometry={nodes.Object_121.geometry} material={materials.material} position={[-3.804, 6.442, -13.027]} scale={0.034} />
      <mesh castShadow receiveShadow geometry={nodes.Object_123.geometry} material={materials.material} position={[-3.869, 10.387, -8.01]} scale={0.044} />
      <mesh castShadow receiveShadow geometry={nodes.Object_125.geometry} material={materials.material} position={[-3.85, 10.077, -7.609]} scale={0.044} />
      <mesh castShadow receiveShadow geometry={nodes.Object_127.geometry} material={materials.material} position={[-7.548, 12.837, -7.163]} scale={0.044} />
      <mesh castShadow receiveShadow geometry={nodes.Object_129.geometry} material={materials.material} position={[-6.57, 8.759, 10.308]} scale={0.063} />
      <mesh castShadow receiveShadow geometry={nodes.Object_131.geometry} material={materials.material} position={[-6.707, 8.987, 10.592]} scale={0.027} />
      <mesh castShadow receiveShadow geometry={nodes.Object_133.geometry} material={materials.material} position={[-6.904, 8.265, 8.169]} scale={0.027} />
      <mesh castShadow receiveShadow geometry={nodes.Object_135.geometry} material={materials.material} position={[-8.271, 8.265, -0.101]} scale={0.035} />
      <mesh castShadow receiveShadow geometry={nodes.Object_137.geometry} material={materials.material} position={[-10.774, 17.745, -4.158]} scale={0.098} />
      <mesh castShadow receiveShadow geometry={nodes.Object_139.geometry} material={materials.material} position={[-10.551, 16.921, -3.715]} scale={0.051} />
      <mesh castShadow receiveShadow geometry={nodes.Object_141.geometry} material={materials.drivers} position={[-0.991, 0.745, 2.835]} rotation={[-0.014, -0.044, 1.677]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_146.geometry} material={materials.drivers} position={[-0.306, 0.745, 2.835]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_151.geometry} material={materials.drivers} position={[-1.012, 0.745, 2.835]} rotation={[-Math.PI / 4, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_153.geometry} material={materials.drivers} position={[-0.194, 0.239, 2.827]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_155.geometry} material={materials.drivers} position={[-0.205, -0.841, 2.829]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_157.geometry} material={materials.drivers} position={[0.393, -0.457, 2.603]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_159.geometry} material={materials.drivers} position={[0.086, -0.513, 3.435]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_161.geometry} material={materials.drivers} position={[-0.089, 0.335, 2.835]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_163.geometry} material={materials.drivers} position={[-0.286, -0.083, 2.861]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_165.geometry} material={materials.drivers} position={[0.494, -0.485, 2.605]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_167.geometry} material={materials.drivers} position={[0.503, -0.455, 3.199]} rotation={[Math.PI / 2, 1.347, -Math.PI / 2]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_169.geometry} material={materials.drivers} position={[0.503, -0.455, 3.009]} rotation={[Math.PI / 2, 1.347, -Math.PI / 2]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_171.geometry} material={materials.drivers} position={[-0.194, 0.626, 2.827]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_173.geometry} material={materials.drivers} position={[-0.194, 1.002, 2.827]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_181.geometry} material={materials.warm} position={[-0.8, -0.53, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_183.geometry} material={materials.glass} position={[-2.87, 0.733, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_185.geometry} material={materials.glass} position={[-0.8, 2.709, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_187.geometry} material={materials.glass} position={[-1.278, 0.745, 2.835]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_189.geometry} material={materials.glass} position={[-0.404, 0.745, 2.835]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_191.geometry} material={materials.floor} position={[-6.94, 15.116, 0.207]} scale={0.01} />
      <mesh castShadow receiveShadow geometry={nodes.Object_193.geometry} material={materials.floor} position={[-4.41, 15.116, -0.558]} rotation={[0, 0.166, 0]} scale={0.01} />
      <mesh castShadow receiveShadow geometry={nodes.Object_195.geometry} material={materials.material} position={[-6.94, 15.116, 0.207]} scale={0.01} />
      <mesh castShadow receiveShadow geometry={nodes.Object_197.geometry} material={materials.material} position={[-4.41, 15.116, -0.558]} rotation={[0, 0.166, 0]} scale={0.01} />
      <mesh castShadow receiveShadow geometry={nodes.Object_199.geometry} material={materials.floor} position={[-7.681, 15.436, 0.046]} rotation={[-Math.PI / 2, -1.197, -Math.PI / 2]} scale={[9.986, 9.258, 9.258]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_201.geometry} material={materials.material} position={[-7.681, 15.436, 0.046]} rotation={[-Math.PI / 2, -1.197, -Math.PI / 2]} scale={0.81} />
      <mesh castShadow receiveShadow geometry={nodes.Object_203.geometry} material={materials.monitor_and_details} position={[1.015, -0.175, 0.001]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_205.geometry} material={materials.monitor_and_details} position={[2.183, -1.019, 0.222]} rotation={[0, 0, 0.151]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_207.geometry} material={materials.monitor_and_details} position={[1.187, -0.184, 1.391]} rotation={[-0.062, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_209.geometry} material={materials.monitor_and_details} position={[2.815, -2.046, 0.018]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_211.geometry} material={materials.monitor_and_details} position={[2.815, -2.06, 0.018]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_213.geometry} material={materials.monitor_and_details} position={[1.587, -0.053, 0.001]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_215.geometry} material={materials.monitor_and_details} position={[1.587, -0.053, 0.001]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_217.geometry} material={materials.monitor_and_details} position={[1.587, -0.053, 0.001]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_219.geometry} material={materials.monitor_and_details} position={[-2.309, 0.931, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_221.geometry} material={materials.monitor_and_details} position={[2.185, -1.011, 0.886]} rotation={[0, 0, -1.404]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_223.geometry} material={materials.monitor_and_details} position={[2.185, -1.011, 0.688]} rotation={[0, 0, -1.404]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_225.geometry} material={materials.monitor_and_details} position={[2.176, -1.02, -0.577]} rotation={[0, 0, -1.408]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_227.geometry} material={materials.monitor_and_details} position={[2.176, -1.02, -0.643]} rotation={[0, 0, -1.408]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_229.geometry} material={materials.monitor_and_details} position={[1.587, -0.053, 0.001]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_231.geometry} material={materials.monitor_and_details} position={[-2.405, 0.931, 0]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_233.geometry} material={materials.monitor_and_details} position={[1.587, -0.053, 0.001]} rotation={[0, 0, -1.444]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_235.geometry} material={materials.monitor_and_details} position={[-2.329, 0.931, 0]} rotation={[0, 0, -Math.PI / 2]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_237.geometry} material={materials.numbers} position={[-7.298, 10.307, 4.064]} rotation={[0, 0, -Math.PI / 2]} scale={0.595} />
      <mesh castShadow receiveShadow geometry={nodes.Object_239.geometry} material={materials.numbers} position={[-8.477, 13.859, -4.695]} rotation={[0, 0, -Math.PI / 2]} scale={0.759} />
      <mesh castShadow receiveShadow geometry={nodes.Object_241.geometry} material={materials.numbers} position={[-5.62, 10.307, 7.105]} rotation={[0, 0.647, -Math.PI / 2]} scale={0.595} />
      <mesh castShadow receiveShadow geometry={nodes.Object_243.geometry} material={materials.numbers} position={[2.372, 8.21, -10.628]} rotation={[0, -1.103, -Math.PI / 2]} scale={0.595} />
      <mesh castShadow receiveShadow geometry={nodes.Object_245.geometry} material={materials.numbers} position={[2.308, 10.307, 11.232]} rotation={[-Math.PI, 1.197, Math.PI / 2]} scale={0.595} />
      <mesh castShadow receiveShadow geometry={nodes.Object_247.geometry} material={materials.numbers} position={[-6.596, 10.307, -6.354]} rotation={[0, -0.684, -Math.PI / 2]} scale={0.595} />
      <mesh castShadow receiveShadow geometry={nodes.Object_249.geometry} material={materials.numbers} position={[-6.416, 8.156, 5.811]} rotation={[0, 0.336, -Math.PI / 2]} scale={0.313} />
      <mesh castShadow receiveShadow geometry={nodes.Object_251.geometry} material={materials.numbers} position={[-0.712, 9.596, 11.676]} rotation={[-Math.PI, 1.553, 1.571]} scale={0.525} />
      <mesh castShadow receiveShadow geometry={nodes.Object_253.geometry} material={materials.numbers} position={[-6.538, 12.609, 10.743]} rotation={[0, 0.926, -Math.PI / 2]} scale={0.855} />
      <mesh castShadow receiveShadow geometry={nodes.Object_255.geometry} material={materials.numbers} position={[-6.528, 15.466, 5.65]} rotation={[0, 0.336, -Math.PI / 2]} scale={0.758} />
      <mesh castShadow receiveShadow geometry={nodes.Object_257.geometry} material={materials.numbers} position={[-6.225, 7.882, -9.594]} rotation={[0, -0.812, -Math.PI / 2]} scale={0.691} />
      <mesh castShadow receiveShadow geometry={nodes.Object_259.geometry} material={materials.numbers} position={[-6.798, 13.295, -9.411]} rotation={[0, -0.594, -Math.PI / 2]} scale={0.742} />
      <mesh castShadow receiveShadow geometry={nodes.Object_261.geometry} material={materials.numbers} position={[3.998, 7.131, 6.871]} rotation={[0, 1.504, -1.571]} scale={0.405} />
      <mesh castShadow receiveShadow geometry={nodes.Object_263.geometry} material={materials.numbers} position={[1.909, 5.075, -7.228]} rotation={[0, -1.396, -Math.PI / 2]} scale={0.595} />
      <mesh castShadow receiveShadow geometry={nodes.Object_265.geometry} material={materials.numbers} position={[-6.924, 8.028, -1.368]} rotation={[0, -0.142, -Math.PI / 2]} scale={0.595} />
      <mesh castShadow receiveShadow geometry={nodes.Object_267.geometry} material={materials.numbers} position={[-7.183, 7.124, 1.956]} rotation={[0, -0.044, -Math.PI / 2]} scale={0.483} />
      <mesh castShadow receiveShadow geometry={nodes.Object_269.geometry} material={materials.numbers} position={[-2.33, 9.08, -10.998]} rotation={[0, -1.197, -Math.PI / 2]} scale={0.343} />
      <mesh castShadow receiveShadow geometry={nodes.Object_271.geometry} material={materials.keyboard} position={[3.111, -1.422, 0.049]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_273.geometry} material={materials.keyboard} position={[2.672, -1.379, 0.997]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_275.geometry} material={materials.keyboard} position={[2.816, -1.394, 0.969]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_277.geometry} material={materials.keyboard} position={[2.966, -1.405, 0.939]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_279.geometry} material={materials.keyboard} position={[2.965, -1.408, -0.997]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_281.geometry} material={materials.keyboard} position={[2.965, -1.408, -0.753]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_283.geometry} material={materials.keyboard} position={[2.673, -1.385, -0.853]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_285.geometry} material={materials.human} position={[8.987, -2.929, 0.668]} scale={0.027} />
      <mesh castShadow receiveShadow geometry={nodes.Object_287.geometry} material={materials.human} position={[8.979, -2.736, 0.8]} scale={0.027} />
      <mesh castShadow receiveShadow geometry={nodes.Object_289.geometry} material={materials.human} position={[8.991, -2.914, 0.964]} scale={0.032} />
      <mesh castShadow receiveShadow geometry={nodes.Object_291.geometry} material={materials.human} position={[8.753, -2.638, 0.906]} scale={0.043} />
      <mesh castShadow receiveShadow geometry={nodes.Object_293.geometry} material={materials.human} position={[7.296, -1.152, 1.756]} scale={0.02} />
      <mesh castShadow receiveShadow geometry={nodes.Object_295.geometry} material={materials.human} position={[7.135, -0.524, 0.969]} scale={0.02} />
      <mesh castShadow receiveShadow geometry={nodes.Object_297.geometry} material={materials.human} position={[7.534, -0.429, -0.924]} scale={0.038} />
      <mesh castShadow receiveShadow geometry={nodes.Object_299.geometry} material={materials.human} position={[7.751, -1.015, -2.105]} scale={0.038} />
      <mesh castShadow receiveShadow geometry={nodes.Object_301.geometry} material={materials.human} position={[7.286, -1.273, -1.782]} scale={0.025} />
      <mesh castShadow receiveShadow geometry={nodes.Object_303.geometry} material={materials.human} position={[7.597, 0.24, -1.002]} scale={0.025} />
      <mesh castShadow receiveShadow geometry={nodes.Object_305.geometry} material={materials.human} position={[6.518, 0.24, 1.417]} scale={0.03} />
      <mesh castShadow receiveShadow geometry={nodes.Object_307.geometry} material={materials.human} position={[7.71, -2.484, 0.279]} scale={0.03} />
      <mesh castShadow receiveShadow geometry={nodes.Object_309.geometry} material={materials.human} position={[7.955, -1.987, 0.324]} scale={0.03} />
      <mesh castShadow receiveShadow geometry={nodes.Object_311.geometry} material={materials.human} position={[7.435, -1.987, -0.406]} scale={0.03} />
      <mesh castShadow receiveShadow geometry={nodes.Object_313.geometry} material={materials.human} position={[7.859, 0.2, -0.893]} scale={0.03} />
      <mesh castShadow receiveShadow geometry={nodes.Object_315.geometry} material={materials.human} position={[7.21, 0.703, 0.595]} scale={0.03} />
      <mesh castShadow receiveShadow geometry={nodes.Object_317.geometry} material={materials.human} position={[8.659, -1.233, 1.331]} scale={0.03} />
      <mesh castShadow receiveShadow geometry={nodes.Object_319.geometry} material={materials.human} position={[8.071, -2.263, -1.893]} scale={0.03} />
      <mesh castShadow receiveShadow geometry={nodes.Object_321.geometry} material={materials.human} position={[8.884, -2.144, -1.364]} scale={0.027} />
      <mesh castShadow receiveShadow geometry={nodes.Object_323.geometry} material={materials.human} position={[8.659, -2.046, -1.258]} scale={0.043} />
      <mesh castShadow receiveShadow geometry={nodes.Object_325.geometry} material={materials.floor} position={[-0.746, -3.948, 0.854]} scale={78.209} />
      <mesh castShadow receiveShadow geometry={nodes.Object_327.geometry} material={materials.keyboard} position={[2.527, -1.368, 1.034]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_329.geometry} material={materials.keyboard} position={[2.527, -1.368, 0.896]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_331.geometry} material={materials.keyboard} position={[2.527, -1.368, 0.758]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_333.geometry} material={materials.keyboard} position={[2.527, -1.368, 0.62]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_335.geometry} material={materials.keyboard} position={[2.527, -1.368, 0.482]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_337.geometry} material={materials.keyboard} position={[2.527, -1.368, 0.344]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_339.geometry} material={materials.keyboard} position={[2.527, -1.368, 0.207]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_341.geometry} material={materials.keyboard} position={[2.527, -1.368, 0.069]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_343.geometry} material={materials.keyboard} position={[2.527, -1.368, -0.069]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_345.geometry} material={materials.keyboard} position={[2.527, -1.368, -0.207]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_347.geometry} material={materials.keyboard} position={[2.527, -1.368, -0.345]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_349.geometry} material={materials.keyboard} position={[2.527, -1.368, -0.483]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_351.geometry} material={materials.keyboard} position={[2.527, -1.368, -0.62]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_353.geometry} material={materials.keyboard} position={[2.527, -1.368, -0.758]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_355.geometry} material={materials.keyboard} position={[2.527, -1.368, -0.896]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_357.geometry} material={materials.keyboard} position={[2.527, -1.368, -1.034]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_359.geometry} material={materials.keyboard} position={[2.672, -1.379, 0.823]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_361.geometry} material={materials.keyboard} position={[2.672, -1.379, 0.685]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_363.geometry} material={materials.keyboard} position={[2.672, -1.379, 0.548]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_365.geometry} material={materials.keyboard} position={[2.672, -1.379, 0.41]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_367.geometry} material={materials.keyboard} position={[2.672, -1.379, 0.272]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_369.geometry} material={materials.keyboard} position={[2.672, -1.379, 0.134]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_371.geometry} material={materials.keyboard} position={[2.672, -1.379, -0.004]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_373.geometry} material={materials.keyboard} position={[2.672, -1.379, -0.142]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_375.geometry} material={materials.keyboard} position={[2.672, -1.379, -0.279]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_377.geometry} material={materials.keyboard} position={[2.672, -1.379, -0.417]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_379.geometry} material={materials.keyboard} position={[2.672, -1.379, -0.555]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_381.geometry} material={materials.keyboard} position={[2.672, -1.379, -0.693]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_383.geometry} material={materials.keyboard} position={[2.672, -1.379, -1.032]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_385.geometry} material={materials.keyboard} position={[2.817, -1.393, 0.765]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_387.geometry} material={materials.keyboard} position={[2.817, -1.393, 0.627]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_389.geometry} material={materials.keyboard} position={[2.817, -1.393, 0.489]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_391.geometry} material={materials.keyboard} position={[2.817, -1.393, 0.351]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_393.geometry} material={materials.keyboard} position={[2.817, -1.393, 0.214]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_395.geometry} material={materials.keyboard} position={[2.817, -1.393, 0.076]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_397.geometry} material={materials.keyboard} position={[2.817, -1.393, -0.062]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_399.geometry} material={materials.keyboard} position={[2.817, -1.393, -0.2]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_401.geometry} material={materials.keyboard} position={[2.817, -1.393, -0.338]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_403.geometry} material={materials.keyboard} position={[2.817, -1.393, -0.476]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_405.geometry} material={materials.keyboard} position={[2.817, -1.393, -0.613]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_407.geometry} material={materials.keyboard} position={[2.965, -1.393, 0.696]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_409.geometry} material={materials.keyboard} position={[2.965, -1.393, 0.558]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_411.geometry} material={materials.keyboard} position={[2.965, -1.393, 0.421]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_413.geometry} material={materials.keyboard} position={[2.965, -1.393, 0.283]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_415.geometry} material={materials.keyboard} position={[2.965, -1.393, 0.145]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_417.geometry} material={materials.keyboard} position={[2.965, -1.393, 0.007]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_419.geometry} material={materials.keyboard} position={[2.965, -1.393, -0.131]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_421.geometry} material={materials.keyboard} position={[2.965, -1.393, -0.269]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_423.geometry} material={materials.keyboard} position={[2.965, -1.393, -0.406]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_425.geometry} material={materials.keyboard} position={[2.965, -1.393, -0.544]} />
      <mesh castShadow receiveShadow geometry={nodes.Object_427.geometry} material={materials.keyboard} position={[2.817, -1.393, -1.034]} />
    </group>
  );
}

useGLTF.preload('/cyber_djinn.glb');