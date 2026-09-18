import { AnimatePresence, motion, useReducedMotion, type PanInfo } from 'motion/react'
import { useEffect, useRef, useState, type ReactNode } from 'react'

export interface TrackImage {
  src: string
  srcSm?: string
  alt: string
}

interface ImageTrackProps {
  images: TrackImage[]
  index: number
  onSwipe: (direction: 1 | -1) => void
  heightClassName?: string
  priority?: boolean
  /** Rendered inside the active slot only (e.g. a caption overlay), moves/scales with it. */
  renderActiveOverlay?: (image: TrackImage) => ReactNode
}

const SWIPE_THRESHOLD = 60
const SIDE_OPACITY = 0.4
const SIDE_SCALE = 0.88
const SLIDE_TRANSITION = { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }

/**
 * Premium layered carousel: a large active image centered at full opacity, with the
 * previous/next images peeking out from behind its left/right edges at reduced
 * opacity and scale. Slots are keyed by image index so Motion interpolates
 * position/opacity/scale smoothly as the active index changes.
 */
export function ImageTrack({ images, index, onSwipe, heightClassName, priority = false, renderActiveOverlay }: ImageTrackProps) {
  const reduceMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (entry) setWidth(entry.contentRect.width)
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const total = images.length
  const prevIdx = (index - 1 + total) % total
  const nextIdx = (index + 1) % total

  // Active fills most of the frame; side slots are a touch narrower and pulled in
  // close enough to visually tuck behind the active image's edges.
  const activeRatio = width < 480 ? 0.82 : width < 768 ? 0.72 : 0.56
  const sideRatio = activeRatio * 0.86
  const activeWidth = width * activeRatio
  const sideWidth = width * sideRatio
  const overlap = width < 480 ? 0.42 : 0.32
  const step = activeWidth / 2 + sideWidth / 2 - sideWidth * overlap

  const slots = [
    { key: `img-${prevIdx}`, img: images[prevIdx], role: 'prev' as const, x: -step, w: sideWidth, opacity: SIDE_OPACITY, scale: SIDE_SCALE, z: 1 },
    { key: `img-${index}`, img: images[index], role: 'active' as const, x: 0, w: activeWidth, opacity: 1, scale: 1, z: 2 },
    { key: `img-${nextIdx}`, img: images[nextIdx], role: 'next' as const, x: step, w: sideWidth, opacity: SIDE_OPACITY, scale: SIDE_SCALE, z: 1 },
  ]

  function handlePanEnd(_: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) {
    if (total < 2) return
    if (info.offset.x < -SWIPE_THRESHOLD) onSwipe(1)
    else if (info.offset.x > SWIPE_THRESHOLD) onSwipe(-1)
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-[#F8F8F7] ${heightClassName ?? 'h-[58vh] min-h-[380px] md:h-[72vh] md:min-h-[520px]'}`}
      style={{ touchAction: 'pan-y' }}
      onPanEnd={handlePanEnd}
    >
      <AnimatePresence initial={false}>
        {slots.map((slot) => (
          <motion.div
            key={slot.key}
            className="absolute inset-y-0 left-1/2 flex items-center justify-center pointer-events-none"
            style={{ width: slot.w || '70%', marginLeft: -(slot.w || 0) / 2, zIndex: slot.z }}
            initial={reduceMotion ? false : { x: slot.x, opacity: 0 }}
            animate={{ x: slot.x, opacity: slot.opacity, scale: slot.scale }}
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { x: slot.x === 0 ? 0 : slot.x + Math.sign(slot.x) * step * 0.6, opacity: 0 }
            }
            transition={reduceMotion ? { duration: 0.15 } : SLIDE_TRANSITION}
          >
            <div
              className={`relative w-full h-full ${
                slot.role === 'active' ? 'shadow-[0_30px_70px_-20px_rgba(0,0,0,0.35)]' : ''
              }`}
            >
              <picture className="block w-full h-full select-none">
                {slot.img.srcSm && <source media="(max-width: 768px)" srcSet={slot.img.srcSm} />}
                <img
                  src={slot.img.src}
                  alt={slot.role === 'active' ? slot.img.alt : ''}
                  draggable={false}
                  className="w-full h-full object-cover"
                  loading={slot.role === 'active' && priority ? 'eager' : 'lazy'}
                />
              </picture>
              {slot.role === 'active' && renderActiveOverlay?.(slot.img)}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}
