import { useRef } from 'react'
import { useParticleNetwork } from '../../hooks/useParticleNetwork'

export default function ParticleNetwork({ className = '', ...options }) {
  const canvasRef = useRef(null)
  useParticleNetwork(canvasRef, options)

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}

