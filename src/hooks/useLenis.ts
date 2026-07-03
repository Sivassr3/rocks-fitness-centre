import { useEffect } from 'react'
import Lenis from 'lenis'

let lenis: Lenis | null = null

export const useLenis = () => {
  useEffect(() => {
    lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis!.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis?.destroy()
      lenis = null
    }
  }, [])

  return lenis
}

export const getLenis = () => lenis
