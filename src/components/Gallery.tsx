import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { GALLERY_ITEMS } from '../data/gallery'
import { useCarousel } from '../hooks/useCarousel'
import { CarouselNav } from './CarouselNav'
import { GalleryLightbox } from './GalleryLightbox'
import { ImageTrack, type TrackImage } from './ImageTrack'
import { Label } from './Label'
import { Reveal } from './Reveal'

// Shared by the carousel and the lightbox so both read from a single mapping of the source data.
const TRACK_IMAGES: TrackImage[] = GALLERY_ITEMS.map((item) => ({ src: item.img, alt: item.label }))

export function Gallery() {
  const total = GALLERY_ITEMS.length
  const { index, setIndex, move: goToImage } = useCarousel(total)
  const active = GALLERY_ITEMS[index]
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <section id="gallery" className="bg-[#F8F8F7] py-24 md:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-14">
        <Reveal>
          <div className="mb-12">
            <Label className="mb-4">Galeri</Label>
            <h2 className="font-display text-[36px] md:text-[50px] font-medium">Proje Görüntüleri</h2>
          </div>
        </Reveal>

        <Reveal>
          <ImageTrack
            images={TRACK_IMAGES}
            index={index}
            onSwipe={goToImage}
            heightClassName="h-[52vh] min-h-[320px] md:h-[68vh] md:min-h-[480px]"
            onActiveClick={() => setLightboxOpen(true)}
          />
          <CarouselNav onPrev={() => goToImage(-1)} onNext={() => goToImage(1)} current={index + 1} total={total} className="mt-8 mb-8" />
          <div className="flex items-center justify-between mb-8">
            <span className="text-[13px] text-[#6B6B6B]">{active.label}</span>
            <span className="text-[10px] tracking-[0.2em] text-[#9B9B9B] uppercase">{active.cat}</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-3 md:grid-cols-9 gap-2">
          {GALLERY_ITEMS.map((item, i) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={item.label}
              className={`aspect-square overflow-hidden bg-[#E0E0DE] transition-all ${
                index === i ? 'ring-2 ring-[#111111]' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img src={item.img} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <GalleryLightbox images={TRACK_IMAGES} index={index} onSelect={setIndex} onClose={() => setLightboxOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  )
}
