import { motion, useReducedMotion } from 'motion/react'
import { IMG } from '../data/images'
import { CountUp } from './CountUp'

const EASE_OUT = [0.22, 1, 0.36, 1] as const
const EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const

// Entrance timings (seconds), matched to the hero's own reveal sequence.
const IMAGE_DELAY = 0.15
const IMAGE_OPACITY_DURATION = 1
const IMAGE_SCALE_DURATION = 10
const LABEL_DELAY = 0.35
const HEADING_DELAY = 0.45
const STATS_BLOCK_DELAY = 0.55
const STATS_COUNT_DURATION = 1.35
const DAIRE_COUNT_DELAY = 0.75
const DUKKAN_COUNT_DELAY = 0.9

const fadeUpTransition = (delay: number) => ({ duration: 0.6, delay, ease: EASE_OUT })

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative h-dvh min-h-[600px] overflow-hidden bg-[#1a1a1a]">
      <picture>
        <source media="(max-width: 768px)" srcSet={IMG.heroSm} />
        <motion.img
          src={IMG.hero}
          alt="Ninova Premium — Dış Cephe"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          fetchPriority="high"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            opacity: { duration: IMAGE_OPACITY_DURATION, delay: IMAGE_DELAY, ease: 'easeOut' },
            scale: { duration: IMAGE_SCALE_DURATION, delay: IMAGE_DELAY, ease: EASE_CINEMATIC },
          }}
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 max-w-[1440px] mx-auto px-8 md:px-14 pb-24 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
          <div>
            <motion.p
              className="text-[10px] tracking-[0.35em] text-white/60 uppercase mb-5"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={fadeUpTransition(LABEL_DELAY)}
            >
              Gaziosmanpaşa / Küçükköy — Istanbul
            </motion.p>
            <motion.h1
              className="font-display text-[48px] md:text-[72px] lg:text-[90px] text-white leading-[1.0] font-medium"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={fadeUpTransition(HEADING_DELAY)}
            >
              Ninova
              <br />
              <em className="italic">Premium</em>
            </motion.h1>
          </div>

          <motion.div
            className="flex flex-row md:flex-col gap-8 md:gap-4 md:text-right pb-2"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={fadeUpTransition(STATS_BLOCK_DELAY)}
          >
            <div>
              <p className="text-[9px] tracking-[0.3em] text-white/50 uppercase mb-1.5">Konut</p>
              <p className="text-[28px] md:text-[36px] font-body font-light text-white leading-none">
                <CountUp to={200} duration={STATS_COUNT_DURATION} delay={DAIRE_COUNT_DELAY} />
              </p>
              <p className="text-[10px] tracking-[0.15em] text-white/60 uppercase mt-1">Daire</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.3em] text-white/50 uppercase mb-1.5">Ticari</p>
              <p className="text-[28px] md:text-[36px] font-body font-light text-white leading-none">
                <CountUp to={35} duration={STATS_COUNT_DURATION} delay={DUKKAN_COUNT_DELAY} />
              </p>
              <p className="text-[10px] tracking-[0.15em] text-white/60 uppercase mt-1">Dükkan</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce motion-reduce:animate-none">
        <span className="text-[9px] tracking-[0.3em] text-white/50 uppercase">Keşfet</span>
        <div className="w-px h-10 bg-white/30" />
      </div>
    </section>
  )
}
