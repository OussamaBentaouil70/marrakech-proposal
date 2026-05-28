'use client'
import { useEffect, useRef } from 'react'

export function useParallax<T extends HTMLElement>(speed: number = 0.3) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let cleanup: (() => void) | undefined

    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const tween = gsap.to(el, {
        y: () => -ScrollTrigger.maxScroll(window) * speed * 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      cleanup = () => {
        tween.kill()
        ScrollTrigger.getAll().forEach((t) => {
          if (t.trigger === el) t.kill()
        })
      }
    }

    init()
    return () => cleanup?.()
  }, [speed])

  return ref
}
