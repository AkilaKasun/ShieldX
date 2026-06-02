import { useEffect, useRef } from 'react'

// Smooth scroll with Lenis
export function useLenis() {
  useEffect(() => {
    let lenis
    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
      })
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }).catch(() => {
      // Lenis not available, fallback gracefully
    })
    return () => { if (lenis) lenis.destroy() }
  }, [])
}

// Intersection observer for scroll reveals
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 90)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

// Count-up numbers
export function useCountUp() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-count]')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const target = parseInt(e.target.dataset.count)
          const suffix = e.target.dataset.suffix || ''
          let start = 0
          const dur = 2000
          const step = target / dur * 16
          const timer = setInterval(() => {
            start += step
            if (start >= target) {
              clearInterval(timer)
              e.target.textContent = Math.round(target) + suffix
            } else {
              e.target.textContent = Math.floor(start) + suffix
            }
          }, 16)
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.5 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

// Custom cursor
export function useCursor() {
  useEffect(() => {
    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx - 4 + 'px'
      dot.style.top = my - 4 + 'px'
    }
    document.addEventListener('mousemove', onMove)

    let rafId
    const animRing = () => {
      rx += (mx - rx - 18) * 0.12
      ry += (my - ry - 18) * 0.12
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      rafId = requestAnimationFrame(animRing)
    }
    animRing()

    const grow = () => { ring.style.width = '56px'; ring.style.height = '56px'; ring.style.borderColor = 'rgba(0,175,255,0.8)' }
    const shrink = () => { ring.style.width = '36px'; ring.style.height = '36px'; ring.style.borderColor = 'rgba(0,175,255,0.35)' }
    document.querySelectorAll('button, a, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])
}
