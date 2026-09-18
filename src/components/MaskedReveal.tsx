import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface MaskedRevealProps {
  children: ReactNode
  as?: 'div' | 'h2' | 'p'
  className?: string
  delay?: number
}

const MOTION_TAG = {
  div: motion.div,
  h2: motion.h2,
  p: motion.p,
} as const

/**
 * Reveals content from behind an overflow-hidden mask with a subtle upward
 * slide + fade, so the text appears to emerge into place rather than fly in.
 * Respects prefers-reduced-motion.
 */
export function MaskedReveal({ children, as = 'div', className, delay = 0 }: MaskedRevealProps) {
  const reduceMotion = useReducedMotion()
  const Tag = as

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = MOTION_TAG[as]

  return (
    <div className="overflow-hidden">
      <MotionTag
        className={className}
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </MotionTag>
    </div>
  )
}
