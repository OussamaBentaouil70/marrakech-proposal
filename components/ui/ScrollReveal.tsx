'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  once?: boolean
  scale?: boolean
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.9,
  once = true,
  scale = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-8% 0px' })

  const directionMap = {
    up: { y: 50, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
    none: { y: 0, x: 0 },
  }

  const initial = {
    opacity: 0,
    ...directionMap[direction],
    scale: scale ? 0.95 : 1,
  }

  const animate = inView
    ? { opacity: 1, y: 0, x: 0, scale: 1 }
    : initial

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScrollRevealStagger({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode[]
  className?: string
  stagger?: number
  delay?: number
  direction?: 'up' | 'left' | 'none'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: direction === 'up' ? 40 : 0, x: direction === 'left' ? 40 : 0 }}
          animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
          transition={{
            duration: 0.9,
            delay: delay + i * stagger,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}
