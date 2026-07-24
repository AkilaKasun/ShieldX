import { useEffect } from 'react'

export function useParticleNetwork(
  canvasRef,
  {
    density = 18000,
    maxParticles = 55,
    maxDist = 145,
    color = '0, 240, 255',
    speed = 0.45,
    opacity = 0.35,
  } = {},
) {
  useEffect(() => {
    const canvas = canvasRef.current
    const parent = canvas?.parentElement
    if (!canvas || !parent) return undefined

    const context = canvas.getContext('2d')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let particles = []
    let frameId = 0
    let resizeFrame = 0

    const createParticles = () => {
      const count = Math.min(Math.max(Math.floor((width * height) / density), 12), maxParticles)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: Math.random() * 1.25 + 0.45,
      }))
    }

    const resize = () => {
      const rect = parent.getBoundingClientRect()
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = Math.max(rect.width, 1)
      height = Math.max(parent.offsetHeight, rect.height, 1)
      canvas.width = Math.floor(width * pixelRatio)
      canvas.height = Math.floor(height * pixelRatio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      createParticles()
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      const maxDistSquared = maxDist * maxDist

      particles.forEach((particle, index) => {
        if (!reducedMotion) {
          particle.x += particle.vx
          particle.y += particle.vy
          if (particle.x <= 0 || particle.x >= width) particle.vx *= -1
          if (particle.y <= 0 || particle.y >= height) particle.vy *= -1
        }

        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(${color}, ${Math.min(opacity * 1.8, 0.85)})`
        context.fill()

        for (let next = index + 1; next < particles.length; next += 1) {
          const other = particles[next]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distanceSquared = dx * dx + dy * dy
          if (distanceSquared >= maxDistSquared) continue

          const distance = Math.sqrt(distanceSquared)
          context.beginPath()
          context.moveTo(particle.x, particle.y)
          context.lineTo(other.x, other.y)
          context.strokeStyle = `rgba(${color}, ${(1 - distance / maxDist) * opacity})`
          context.lineWidth = 0.75
          context.stroke()
        }
      })

      if (!reducedMotion) frameId = window.requestAnimationFrame(draw)
    }

    const queueResize = () => {
      window.cancelAnimationFrame(resizeFrame)
      resizeFrame = window.requestAnimationFrame(() => {
        resize()
        if (reducedMotion) draw()
      })
    }

    const resizeObserver = new ResizeObserver(queueResize)
    resizeObserver.observe(parent)
    resize()
    draw()

    return () => {
      resizeObserver.disconnect()
      window.cancelAnimationFrame(frameId)
      window.cancelAnimationFrame(resizeFrame)
    }
  }, [canvasRef, color, density, maxDist, maxParticles, opacity, speed])
}

