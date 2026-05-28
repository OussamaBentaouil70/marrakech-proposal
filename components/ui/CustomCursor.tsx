'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches
    if (isMobile) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let rafId = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
    }

    const tick = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
      rafId = requestAnimationFrame(tick)
    }

    const enlarge = () => {
      ring.style.width = '56px'
      ring.style.height = '56px'
      dot.style.opacity = '0.3'
    }
    const reset = () => {
      ring.style.width = '36px'
      ring.style.height = '36px'
      dot.style.opacity = '1'
    }

    rafId = requestAnimationFrame(tick)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    const links = document.querySelectorAll('a, button')
    links.forEach((el) => {
      el.addEventListener('mouseenter', enlarge)
      el.addEventListener('mouseleave', reset)
    })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMouseMove)
      links.forEach((el) => {
        el.removeEventListener('mouseenter', enlarge)
        el.removeEventListener('mouseleave', reset)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="hidden md:block"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: '#C6A46A',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'multiply',
          transition: 'opacity 0.3s, width 0.3s, height 0.3s',
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="hidden md:block"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          border: '1px solid #C6A46A',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0.7,
          transition: 'width 0.3s, height 0.3s',
          willChange: 'transform',
        }}
      />
    </>
  )
}
