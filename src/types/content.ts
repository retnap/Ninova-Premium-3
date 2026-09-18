export type Cephe = 'A' | 'B' | 'C' | 'D'

export type ApartmentType = '2+1' | '3+1'

export interface FloorOccupancy {
  kat: number
  daireNo: number
}

export interface FloorPlan {
  id: string
  cephe: Cephe
  type: ApartmentType
  /** Total apartment area in m², as printed on the plan. */
  daireAlani: number
  /** Shared parking + social facility allocation in m², as printed on the plan. */
  ortakAlan: number
  image: string
  floors: FloorOccupancy[]
}

export interface InteriorImage {
  src: string
  srcSm: string
  alt: string
}

export interface InteriorCategory {
  label: string
  title: string
  desc: string
  images: InteriorImage[]
}

export type GalleryCategory = 'Mimari' | 'İç Mekan' | 'Ortak Alan'

export interface GalleryItem {
  img: string
  label: string
  cat: GalleryCategory
}
