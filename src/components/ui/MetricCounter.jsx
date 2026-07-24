import { useEffect, useRef, useState } from 'react'

export default function MetricCounter({ value, suffix = '', duration = 1200 }) {
  const ref = useRef(null)
  const [displayValue, setDisplayValue] = useState(value === 0 ? 0 : 0)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frameId = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        if (reducedMotion || value === 0) {
          setDisplayValue(value)
          return
        }

        const startedAt = performance.now()
        const animate = (time) => {
          const progress = Math.min((time - startedAt) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplayValue(Math.round(value * eased))
          if (progress < 1) frameId = requestAnimationFrame(animate)
        }
        frameId = requestAnimationFrame(animate)
      },
      { threshold: 0.35 },
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [duration, value])

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  )
}

