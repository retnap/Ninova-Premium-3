import { GALLERY_IMAGES } from './images'
import type { GalleryItem } from '../types/content'

// Exterior-only collection — every relevant Ninova Premium exterior render.
// Interior photography belongs exclusively to the Yaşam Alanları (İç Mekan) gallery.
export const GALLERY_ITEMS: GalleryItem[] = [
  { img: GALLERY_IMAGES.dayCorner, label: 'Köşe Cephe — Gündüz', cat: 'Mimari' },
  { img: GALLERY_IMAGES.dayFront, label: 'Ön Cephe — Gündüz', cat: 'Mimari' },
  { img: GALLERY_IMAGES.dayWide, label: 'Genel Görünüm — Gündüz', cat: 'Mimari' },
  { img: GALLERY_IMAGES.dayFull, label: 'Tam Cephe — Gündüz', cat: 'Mimari' },
  { img: GALLERY_IMAGES.dusk, label: 'Alacakaranlık Görünümü', cat: 'Mimari' },
  { img: GALLERY_IMAGES.nightWide, label: 'Genel Görünüm — Gece', cat: 'Mimari' },
  { img: GALLERY_IMAGES.nightCorner, label: 'Köşe Cephe — Gece', cat: 'Mimari' },
  { img: GALLERY_IMAGES.nightFront, label: 'Ön Cephe — Gece', cat: 'Mimari' },
  { img: GALLERY_IMAGES.nightDetail, label: 'Cephe Detayı — Gece', cat: 'Mimari' },
]
