import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { INTERIOR_CATS } from '../data/interiorCategories'
import { useCarousel } from '../hooks/useCarousel'
import { CarouselNav } from './CarouselNav'
import { ImageTrack } from './ImageTrack'
import { Label } from './Label'
import { Reveal } from './Reveal'

const CATEGORY_TRANSITION = { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }

export function InteriorExperience() {
  const reduceMotion = useReducedMotion()
  const [activeCat, setActiveCat] = useState(0)

  const current = INTERIOR_CATS[activeCat]
  const { index: activeImg, setIndex: setActiveImg, move: goToImage } = useCarousel(current.images.length)

  // Selecting a category swaps the active image collection and always resets to its first image.
  function switchCat(idx: number) {
    if (idx === activeCat) return
    setActiveCat(idx)
    setActiveImg(0)
  }

  return (
    <section id="interior" className="bg-[#F8F8F7] py-20 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <Reveal>
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <Label className="mb-4">İç Mekan</Label>
              <h2 className="font-display text-[36px] md:text-[50px] font-medium">{current.title}</h2>
            </div>
            <div className="flex flex-wrap gap-1">
              {INTERIOR_CATS.map((cat, i) => (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => switchCat(i)}
                  className={`text-[10px] tracking-[0.22em] uppercase px-4 py-2.5 transition-all duration-200 ${
                    activeCat === i
                      ? 'bg-[#111111] text-white'
                      : 'text-[#6B6B6B] hover:text-[#111111] border border-transparent hover:border-[#E5E5E5]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCat}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={CATEGORY_TRANSITION}
            >
              <ImageTrack
                images={current.images}
                index={activeImg}
                onSwipe={goToImage}
                priority={activeCat === 0}
                renderActiveOverlay={() => (
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/50 to-transparent pointer-events-none">
                    <p className="text-[13px] md:text-[15px] text-white/85 max-w-[440px] leading-[1.7]">{current.desc}</p>
                  </div>
                )}
              />
              <CarouselNav
                onPrev={() => goToImage(-1)}
                onNext={() => goToImage(1)}
                current={activeImg + 1}
                total={current.images.length}
                className="mt-8"
              />
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
