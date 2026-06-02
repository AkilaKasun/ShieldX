import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

// ── Icosphere-like geometry for cyber-polygon look ──
function CyberSphere({ scrollY }) {
  const groupRef = useRef()
  const outerRef = useRef()
  const innerRef = useRef()
  const ringsRef = useRef([])
  const particlesRef = useRef()
  const glowRef = useRef()
  const { size } = useThree()

  // Build icosahedron wireframe for cyber look
  const icoGeo = useMemo(() => new THREE.IcosahedronGeometry(1.6, 4), [])
  const icoMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: 0x00AFFF,
    wireframe: true,
    transparent: true,
    opacity: 0.12,
  }), [])

  // Detailed sphere beneath
  const sphereGeo = useMemo(() => new THREE.SphereGeometry(1.55, 64, 48), [])
  const sphereMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: 0x001a2e,
    transparent: true,
    opacity: 0.95,
  }), [])

  // Surface dots – Fibonacci sphere distribution
  const dotsGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const n = 2000
    const pos = new Float32Array(n * 3)
    const phi = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = phi * i
      const radius = 1.58 + Math.random() * 0.01
      pos[i * 3] = Math.cos(theta) * r * radius
      pos[i * 3 + 1] = y * radius
      pos[i * 3 + 2] = Math.sin(theta) * r * radius
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    return geo
  }, [])
  const dotsMat = useMemo(() => new THREE.PointsMaterial({
    color: 0x00AFFF,
    size: 0.018,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
  }), [])

  // Outer glow sphere
  const glowGeo = useMemo(() => new THREE.SphereGeometry(1.8, 32, 32), [])
  const glowMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: 0x0044aa,
    transparent: true,
    opacity: 0.05,
    side: THREE.BackSide,
  }), [])

  // Equatorial rings
  const rings = useMemo(() => [
    { r: 2.0, thickness: 0.006, tilt: Math.PI * 0.18, speed: 0.08 },
    { r: 2.3, thickness: 0.004, tilt: Math.PI * 0.35, speed: -0.05 },
    { r: 2.6, thickness: 0.003, tilt: Math.PI * 0.52, speed: 0.04 },
  ], [])

  // Ambient particles
  const ambientGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const n = 600
    const pos = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) {
      const r = 3 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    return geo
  }, [])
  const ambientMat = useMemo(() => new THREE.PointsMaterial({
    color: 0x2D7FF9,
    size: 0.02,
    transparent: true,
    opacity: 0.4,
  }), [])

  // Energy arc lines on surface
  const arcLines = useMemo(() => {
    const lines = []
    for (let i = 0; i < 8; i++) {
      const points = []
      const startPhi = Math.random() * Math.PI
      const startTheta = Math.random() * Math.PI * 2
      const r = 1.61
      for (let j = 0; j <= 32; j++) {
        const t = j / 32
        const phi = startPhi + t * (Math.random() * 0.8 - 0.4)
        const theta = startTheta + t * (Math.PI * 0.6 + Math.random() * 0.4)
        points.push(new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.cos(phi),
          r * Math.sin(phi) * Math.sin(theta)
        ))
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points)
      const mat = new THREE.LineBasicMaterial({
        color: 0x00AFFF,
        transparent: true,
        opacity: 0.15 + Math.random() * 0.15,
      })
      lines.push({ geo, mat })
    }
    return lines
  }, [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    const scroll = scrollY.current

    // Globe rotation — continuous slow spin + scroll tilt
    groupRef.current.rotation.y = t * 0.12 + scroll * Math.PI * 0.5
    groupRef.current.rotation.x = scroll * 0.3

    // Scale down and move down as user scrolls
    const scale = Math.max(0.3, 1 - scroll * 0.55)
    groupRef.current.scale.setScalar(scale)

    // Move up/back as scrolled
    groupRef.current.position.y = scroll * -3.5
    groupRef.current.position.z = scroll * -2

    // Inner icosahedron counter-rotation
    if (outerRef.current) outerRef.current.rotation.y = -t * 0.08
    if (innerRef.current) innerRef.current.rotation.x = t * 0.15

    // Ring rotations
    ringsRef.current.forEach((ring, i) => {
      if (ring) ring.rotation.z = t * rings[i].speed
    })

    // Glow pulse
    if (glowRef.current) {
      glowRef.current.material.opacity = 0.04 + Math.sin(t * 0.8) * 0.02
    }

    // Ambient particles slow rotation
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.015
    }

    // Arc line opacity flicker
  })

  return (
    <group ref={groupRef}>
      {/* Ambient particles (don't scale with globe) */}
      <points ref={particlesRef} geometry={ambientGeo} material={ambientMat} />

      {/* Core sphere */}
      <mesh geometry={sphereGeo} material={sphereMat} />

      {/* Fibonacci dots */}
      <points geometry={dotsGeo} material={dotsMat} />

      {/* Icosahedron wireframe overlay */}
      <mesh ref={outerRef} geometry={icoGeo} material={icoMat} />

      {/* Inner denser wireframe */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.3, 2]} />
        <meshBasicMaterial color={0x00AFFF} wireframe transparent opacity={0.06} />
      </mesh>

      {/* Glow */}
      <mesh ref={glowRef} geometry={glowGeo} material={glowMat} />

      {/* Orbit rings */}
      {rings.map((ring, i) => (
        <mesh
          key={i}
          ref={el => ringsRef.current[i] = el}
          rotation={[ring.tilt, 0, 0]}
        >
          <torusGeometry args={[ring.r, ring.thickness, 4, 128]} />
          <meshBasicMaterial color={0x00AFFF} transparent opacity={0.2 - i * 0.04} />
        </mesh>
      ))}

      {/* Energy arc lines */}
      {arcLines.map((arc, i) => (
        <line key={i} geometry={arc.geo} material={arc.mat} />
      ))}

      {/* Equatorial scan line */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.62, 0.003, 4, 128]} />
        <meshBasicMaterial color={0x00ffcc} transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

// Scroll-aware wrapper (reads window scroll, not drei scroll)
function ScrollReader({ scrollY }) {
  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      scrollY.current = Math.min(window.scrollY / Math.max(maxScroll, 1), 1)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollY])
  return null
}

function Scene({ scrollY }) {
  return (
    <>
      <ScrollReader scrollY={scrollY} />
      <CyberSphere scrollY={scrollY} />
      <ambientLight intensity={0.3} color={0x001133} />
      <pointLight position={[5, 3, 5]} intensity={1.5} color={0x00AFFF} />
      <pointLight position={[-5, -3, -3]} intensity={0.8} color={0x2D7FF9} />
    </>
  )
}

export default function CyberEarth({ scrollY }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 2]}
    >
      <Scene scrollY={scrollY} />
    </Canvas>
  )
}
