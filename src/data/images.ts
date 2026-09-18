// ─── Exterior ─────────────────────────────────────────────────────────────
import extDay01 from '../assets/images/exterior/ext-day-01.webp'
import extDay01Sm from '../assets/images/exterior/ext-day-01-sm.webp'
import extDay02 from '../assets/images/exterior/ext-day-02.webp'
import extDay03 from '../assets/images/exterior/ext-day-03.webp'
import extDay03Sm from '../assets/images/exterior/ext-day-03-sm.webp'
import extDay04 from '../assets/images/exterior/ext-day-04.webp'
import extDay04Sm from '../assets/images/exterior/ext-day-04-sm.webp'
import extDusk01 from '../assets/images/exterior/ext-dusk-01.webp'
import extNight01 from '../assets/images/exterior/ext-night-01.webp'
import extNight01Sm from '../assets/images/exterior/ext-night-01-sm.webp'
import extNight02 from '../assets/images/exterior/ext-night-02.webp'
import extNight02Sm from '../assets/images/exterior/ext-night-02-sm.webp'
import extNight03 from '../assets/images/exterior/ext-night-03.webp'
import extNight04 from '../assets/images/exterior/ext-night-04.webp'

// ─── Interior (Life Spaces / Material Detail — decor placeholders) ────────
import salon02 from '../assets/images/interior/salon-02.webp'
import salon02Sm from '../assets/images/interior/salon-02-sm.webp'
import mutfak02 from '../assets/images/interior/mutfak-02.webp'
import yatak02 from '../assets/images/interior/yatak-02.webp'
import yatak02Sm from '../assets/images/interior/yatak-02-sm.webp'
import yatak03 from '../assets/images/interior/yatak-03.webp'
import detailWide01 from '../assets/images/interior/detail-wide-01.webp'

// ─── Location ─────────────────────────────────────────────────────────────
import istanbulPhoto from '../assets/images/location/istanbul.webp'
import istanbulPhotoSm from '../assets/images/location/istanbul-sm.webp'

// ─── Logo ─────────────────────────────────────────────────────────────────
import ninovaLogo from '../assets/logo/ninova-logo.png'
import ninovaIcon from '../assets/logo/ninova-icon.png'

export const IMG = {
  hero: extDay01,
  heroSm: extDay01Sm,
  introSide: extDay02,
  archLarge: extDay03,
  archLargeSm: extDay03Sm,
  archSmall: extDusk01,
  exteriorDay: extDay04,
  exteriorDaySm: extDay04Sm,
  exteriorNight: extNight01,
  exteriorNightSm: extNight01Sm,
  catalogBg: extNight02,
  catalogBgSm: extNight02Sm,
  interiorMosaicWide: detailWide01,
  interiorMosaicPortraitA: yatak03,
  interiorMosaicPortraitB: mutfak02,
  lifeA: salon02,
  lifeASm: salon02Sm,
  lifeB: yatak02,
  lifeBSm: yatak02Sm,
  location: istanbulPhoto,
  locationSm: istanbulPhotoSm,
} as const

export const LOGO = {
  full: ninovaLogo,
  icon: ninovaIcon,
} as const

// All 9 exterior renders — used for the full "Proje Görüntüleri" exterior-only gallery.
export const GALLERY_IMAGES = {
  dayCorner: extDay01,
  dayFront: extDay02,
  dayWide: extDay03,
  dayFull: extDay04,
  dusk: extDusk01,
  nightWide: extNight01,
  nightCorner: extNight02,
  nightFront: extNight03,
  nightDetail: extNight04,
} as const
