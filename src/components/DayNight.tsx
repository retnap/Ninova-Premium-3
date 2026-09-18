import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { IMG } from '../data/images'
import { Label } from './Label'
import { Reveal } from './Reveal'

type Mode = 'day' | 'night'

const COPY: Record<Mode, string> = {
  day: 'Gün ışığında Ninova Premium, ferah cephe hatları ve doğal ışıkla bütünleşen mimari diliyle karşılıyor.',
  night: 'Gece, cephe aydınlatması yapının mimari hatlarını öne çıkararak Ninova Premium’a farklı bir karakter kazandırıyor.',
}

const COLOR_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }

export function DayNight() {
  const reduceMotion = useReducedMotion()
  const [mode, setMode] = useState<Mode>('day')
  const isDay = mode === 'day'

  return (
    <motion.section
      className="relative overflow-hidden py-24 md:py-32"
      animate={{ backgroundColor: isDay ? '#FFFFFF' : '#111111' }}
      transition={reduceMotion ? { duration: 0 } : COLOR_TRANSITION}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-center">
          <Reveal className="md:col-span-5">
            <Label className={`mb-6 transition-colors duration-700 ${isDay ? 'text-[#9B9B9B]' : 'text-white/50'}`}>Cephe</Label>
            <motion.h2
              className="font-display text-[36px] md:text-[52px] font-medium leading-[1.15] mb-6"
              animate={{ color: isDay ? '#111111' : '#FFFFFF' }}
              transition={reduceMotion ? { duration: 0 } : COLOR_TRANSITION}
            >
              Gündüz ve gece,
              <br />
              <em className="italic">aynı karakter.</em>
            </motion.h2>
            <motion.p
              className="text-[14px] md:text-[16px] leading-[1.9] max-w-[420px]"
              animate={{ color: isDay ? '#4B4B4B' : 'rgba(255,255,255,0.6)' }}
              transition={reduceMotion ? { duration: 0 } : COLOR_TRANSITION}
            >
              {COPY[mode]}
            </motion.p>
          </Reveal>

          <Reveal delay={0.15} scale={0.97} className="md:col-span-7">
            <div className={`relative h-[48vh] min-h-[340px] md:h-[64vh] md:min-h-[480px] transition-colors duration-700 ${isDay ? 'bg-[#F0F0EE]' : 'bg-[#161616]'}`}>
              <picture>
                <source media="(max-width: 768px)" srcSet={IMG.exteriorDaySm} />
                <img
                  src={IMG.exteriorDay}
                  alt="Ninova Premium — Gündüz"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[650ms] ease-in-out ${
                    isDay ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                />
              </picture>
              <picture>
                <source media="(max-width: 768px)" srcSet={IMG.exteriorNightSm} />
                <img
                  src={IMG.exteriorNight}
                  alt="Ninova Premium — Gece"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[650ms] ease-in-out ${
                    isDay ? 'opacity-0' : 'opacity-100'
                  }`}
                  loading="lazy"
                />
              </picture>
            </div>

            <div className="mt-8 flex items-center justify-between flex-wrap gap-6">
              <div className={`flex border transition-colors duration-700 ${isDay ? 'border-[#111111]/20' : 'border-white/30'}`}>
                <button
                  type="button"
                  onClick={() => setMode('day')}
                  aria-pressed={isDay}
                  className={`text-[11px] tracking-[0.22em] uppercase px-8 py-4 transition-all duration-200 ${
                    isDay
                      ? 'bg-[#111111] text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Gündüz
                </button>
                <button
                  type="button"
                  onClick={() => setMode('night')}
                  aria-pressed={!isDay}
                  className={`text-[11px] tracking-[0.22em] uppercase px-8 py-4 transition-all duration-200 ${
                    !isDay ? 'bg-white text-[#111111]' : 'text-[#6B6B6B] hover:text-[#111111]'
                  }`}
                >
                  Gece
                </button>
              </div>
              <p className={`text-[10px] tracking-[0.3em] uppercase transition-colors duration-700 ${isDay ? 'text-[#9B9B9B]' : 'text-white/50'}`}>
                Ninova Premium — Dış Cephe
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </motion.section>
  )
}
