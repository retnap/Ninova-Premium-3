import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'motion/react'
import { useEffect, useRef } from 'react'

interface CountUpProps {
  to: number
  duration?: number
  delay?: number
  className?: string
}

/** Animates a number counting up to its final value once it enters the viewport. Respects prefers-reduced-motion. */
export function CountUp({ to, duration = 1.3, delay = 0, className }: CountUpProps) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })
  const count = useMotionValue(reduceMotion ? to : 0)
  const rounded = useTransform(count, (value) => Math.round(value).toString())

  useEffect(() => {
    if (reduceMotion || !inView) {
      return
    }

    const controls = animate(count, to, { duration, delay, ease: [0.16, 1, 0.3, 1] })
    return () => controls.stop()
  }, [count, to, duration, delay, reduceMotion, inView])

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  )
}
