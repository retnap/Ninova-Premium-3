import Lenis from 'lenis'
import { useEffect } from 'react'

/** Drives smooth scrolling site-wide; disabled automatically under prefers-reduced-motion. */
export function useLenis() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    let frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])
}
