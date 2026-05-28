'use client'
import { useEffect } from 'react'

export function useLenis() {
  useEffect(() => {
    let cleanup: (() => void) | undefined

    async function init() {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])

      gsap.registerPlugin(ScrollTrigger)

      const lenis = new Lenis({
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
      })

      lenis.on('scroll', ScrollTrigger.update)

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })

      gsap.ticker.lagSmoothing(0)

      cleanup = () => {
        lenis.destroy()
        gsap.ticker.remove((time) => {
          lenis.raf(time * 1000)
        })
      }
    }

    init()

    return () => {
      cleanup?.()
    }
  }, [])
}
