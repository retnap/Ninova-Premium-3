import { motion, useReducedMotion, type PanInfo } from 'motion/react'
import { ChevronLeft, ChevronRight, Minus, Plus, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react'
import type { TrackImage } from './ImageTrack'

interface GalleryLightboxProps {
  images: TrackImage[]
  index: number
  onSelect: (index: number) => void
  onClose: () => void
}

// Discrete stops rather than a continuous range, per spec: 1x → 1.25x → ... → 3x.
const ZOOM_STEPS = [1, 1.25, 1.5, 1.75, 2, 2.5, 3]
const ZOOM_MIN = ZOOM_STEPS[0]
const SWIPE_THRESHOLD = 60

const ICON_BTN =
  'w-11 h-11 flex items-center justify-center text-white/80 hover:text-white border border-white/20 hover:border-white/50 transition-colors disabled:opacity-30 disabled:hover:text-white/80 disabled:hover:border-white/20'

/**
 * Fullscreen image viewer shared by every gallery/carousel on the site (interior, exterior, …):
 * full-resolution image (never cropped), stepped zoom, prev/next browsing, numbered jump-to-image,
 * and tap-empty-background-to-close. Takes a plain `images` list plus the caller's own index state,
 * so it has no opinion about where those images come from or how the caller's carousel works.
 *
 * Navigation here is independent of any slide-transition lock a caller's own carousel might use
 * (e.g. `useCarousel`'s `move`) — the lightbox has its own instant fade transition, so reusing that
 * lock would make rapid prev/next clicks feel unresponsive for no benefit. Callers pass their raw
 * index setter as `onSelect` instead.
 */
export function GalleryLightbox({ images, index, onSelect, onClose }: GalleryLightboxProps) {
  const reduceMotion = useReducedMotion()
  const overlayRef = useRef<HTMLDivElement>(null)
  const activeNumberRef = useRef<HTMLButtonElement>(null)
  const [zoomStep, setZoomStep] = useState(0)
  // Reset zoom whenever the visible image changes. Adjusted directly during render (React's
  // recommended pattern for this) rather than in an effect, which would cost an extra render pass.
  const [prevIndex, setPrevIndex] = useState(index)
  if (index !== prevIndex) {
    setPrevIndex(index)
    setZoomStep(0)
  }
  const zoom = ZOOM_STEPS[zoomStep]
  const image = images[index]
  const total = images.length
  const canNavigate = total > 1

  const goTo = useCallback((i: number) => onSelect(((i % total) + total) % total), [onSelect, total])
  const goPrev = () => goTo(index - 1)
  const goNext = () => goTo(index + 1)

  // Lock page scroll while open, restore whatever it was on close.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && canNavigate) goTo(index - 1)
      else if (e.key === 'ArrowRight' && canNavigate) goTo(index + 1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [canNavigate, index, onClose, goTo])

  // Keep the active number pill in view when navigating via chevrons/keyboard/swipe, not just clicks.
  useEffect(() => {
    activeNumberRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', inline: 'center', block: 'nearest' })
  }, [index, reduceMotion])

  // Only a click landing directly on the overlay itself (not a descendant like the image or a
  // control) should close — this is what makes background-tap-to-close work without needing
  // stopPropagation on every interactive child.
  function handleOverlayClick(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose()
  }

  function handlePanEnd(_: PointerEvent | MouseEvent | TouchEvent, info: PanInfo) {
    if (zoom > ZOOM_MIN || !canNavigate) return
    if (info.offset.x < -SWIPE_THRESHOLD) goNext()
    else if (info.offset.x > SWIPE_THRESHOLD) goPrev()
  }

  return (
    <motion.div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      style={{ touchAction: 'none' }}
      onClick={handleOverlayClick}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Top-left: zoom controls */}
      <div className="absolute top-5 left-5 md:top-8 md:left-8 z-10 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setZoomStep((s) => Math.max(0, s - 1))}
          disabled={zoomStep <= 0}
          aria-label="Uzaklaştır"
          className={ICON_BTN}
        >
          <Minus size={18} strokeWidth={1.5} />
        </button>
        <span className="text-[11px] tracking-[0.15em] text-white/60 tabular-nums w-10 text-center select-none">{zoom}×</span>
        <button
          type="button"
          onClick={() => setZoomStep((s) => Math.min(ZOOM_STEPS.length - 1, s + 1))}
          disabled={zoomStep >= ZOOM_STEPS.length - 1}
          aria-label="Yakınlaştır"
          className={ICON_BTN}
        >
          <Plus size={18} strokeWidth={1.5} />
        </button>
      </div>

      {/* Top-right: close */}
      <button type="button" onClick={onClose} aria-label="Kapat" className={`absolute top-5 right-5 md:top-8 md:right-8 z-10 ${ICON_BTN}`}>
        <X size={20} strokeWidth={1.5} />
      </button>

      {canNavigate && (
        <>
          <button type="button" onClick={goPrev} aria-label="Önceki görsel" className={`absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-10 ${ICON_BTN}`}>
            <ChevronLeft size={22} strokeWidth={1.5} />
          </button>
          <button type="button" onClick={goNext} aria-label="Sonraki görsel" className={`absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-10 ${ICON_BTN}`}>
            <ChevronRight size={22} strokeWidth={1.5} />
          </button>
        </>
      )}

      <motion.img
        key={index}
        src={image.src}
        alt={image.alt}
        drag={zoom > ZOOM_MIN}
        dragConstraints={overlayRef}
        dragElastic={0.15}
        onPanEnd={handlePanEnd}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1, scale: zoom }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        draggable={false}
        className="max-w-[88vw] max-h-[68vh] md:max-h-[76vh] w-auto h-auto object-contain select-none"
        style={{ touchAction: zoom > ZOOM_MIN ? 'none' : 'pan-y' }}
      />

      {/* Bottom: numbered pagination — one number per image in the current gallery/category, active one highlighted. */}
      {canNavigate && (
        <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-10 max-w-[92vw] overflow-x-auto">
          <div className="flex items-center gap-1.5 px-1">
            {images.map((img, i) => (
              <button
                key={img.src}
                ref={i === index ? activeNumberRef : undefined}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`${i + 1}. görsel`}
                aria-current={i === index}
                className={`shrink-0 w-9 h-9 flex items-center justify-center text-[11px] tabular-nums border transition-colors ${
                  i === index ? 'bg-white text-[#111111] border-white' : 'text-white/70 border-white/20 hover:border-white/50 hover:text-white'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}
