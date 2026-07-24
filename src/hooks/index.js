import { useEffect } from 'react'

export function useLenis() {
  useEffect(() => {
    let lenis
    let frameId
    let mounted = true

    import('lenis')
      .then(({ default: Lenis }) => {
        if (!mounted) return
        lenis = new Lenis({
          duration: 1.2,
          easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
          smoothWheel: true,
          syncTouch: false,
        })
        const frame = (time) => {
          lenis.raf(time)
          frameId = requestAnimationFrame(frame)
        }
        frameId = requestAnimationFrame(frame)
      })
      .catch(() => {})

    return () => {
      mounted = false
      cancelAnimationFrame(frameId)
      lenis?.destroy()
    }
  }, [])
}

export function useReveal(routeKey) {
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 },
      )
      elements.forEach((element) => observer.observe(element))
      window.__shieldxRevealObserver = observer
    })

    return () => {
      cancelAnimationFrame(frame)
      window.__shieldxRevealObserver?.disconnect()
    }
  }, [routeKey])
}

export function useCursor(routeKey) {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined

    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return undefined

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let frameId

    const move = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`
    }
    const hover = (event) => {
      const interactive = event.target.closest('button, a, input, textarea, select, [data-hover]')
      ring.classList.toggle('cursor-active', Boolean(interactive))
    }
    const animate = () => {
      ringX += (mouseX - ringX - 18) * 0.14
      ringY += (mouseY - ringY - 18) * 0.14
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      frameId = requestAnimationFrame(animate)
    }

    document.addEventListener('pointermove', move)
    document.addEventListener('pointerover', hover)
    animate()

    return () => {
      document.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', hover)
      cancelAnimationFrame(frameId)
    }
  }, [routeKey])
}

