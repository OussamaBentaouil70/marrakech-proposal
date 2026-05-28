'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  variant?: 'words' | 'chars' | 'lines' | 'fade'
  delay?: number
  stagger?: number
  once?: boolean
}

export default function AnimatedText({
  text,
  className,
  style,
  as: Tag = 'p',
  variant = 'words',
  delay = 0,
  stagger = 0.04,
  once = true,
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount: 0.05 })

  if (variant === 'fade') {
    return (
      <div ref={ref} className={className} style={style}>
        <Tag>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {text}
          </motion.span>
        </Tag>
      </div>
    )
  }

  if (variant === 'lines') {
    const lines = text.split('\n')
    return (
      <div ref={ref}>
        <Tag className={cn('overflow-hidden', className)} style={style}>
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%', opacity: 0 }}
                animate={inView ? { y: '0%', opacity: 1 } : { y: '110%', opacity: 0 }}
                transition={{
                  duration: 1.1,
                  delay: delay + i * 0.12,
                  ease: [0.76, 0, 0.24, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </Tag>
      </div>
    )
  }

  const units = variant === 'words' ? text.split(' ') : text.split('')

  return (
    <div ref={ref}>
      <Tag
        className={cn('overflow-hidden', className)}
        style={style}
        aria-label={text}
      >
        {units.map((unit, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden"
            style={{ marginRight: variant === 'words' ? '0.25em' : undefined }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: '115%', opacity: 0 }}
              animate={inView ? { y: '0%', opacity: 1 } : { y: '115%', opacity: 0 }}
              transition={{
                duration: 0.9,
                delay: delay + i * stagger,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {unit}
            </motion.span>
          </span>
        ))}
      </Tag>
    </div>
  )
}
