import type { FloorPlan } from '../types/content'

import plan01 from '../assets/images/floorplans/plan-01.webp'
import plan02 from '../assets/images/floorplans/plan-02.webp'
import plan03 from '../assets/images/floorplans/plan-03.webp'
import plan04 from '../assets/images/floorplans/plan-04.webp'
import plan05 from '../assets/images/floorplans/plan-05.webp'
import plan06 from '../assets/images/floorplans/plan-06.webp'
import plan07 from '../assets/images/floorplans/plan-07.webp'
import plan08 from '../assets/images/floorplans/plan-08.webp'
import plan09 from '../assets/images/floorplans/plan-09.webp'
import plan10 from '../assets/images/floorplans/plan-10.webp'
import plan11 from '../assets/images/floorplans/plan-11.webp'
import plan12 from '../assets/images/floorplans/plan-12.webp'
import plan13 from '../assets/images/floorplans/plan-13.webp'
import plan14 from '../assets/images/floorplans/plan-14.webp'
import plan15 from '../assets/images/floorplans/plan-15.webp'

function occupancy(daireBase: number): { kat: number; daireNo: number }[] {
  return [7, 8, 9, 10].map((kat, i) => ({ kat, daireNo: daireBase + i * 15 }))
}

/**
 * Sourced directly from the Ninova Premium floor-plan PDFs (ProjectAssets/KAT PLANLARI).
 * Each plan lists its facade (cephe), the printed total apartment area, and the
 * floor/unit numbers it applies to — all read from the plan artwork itself.
 */
export const FLOOR_PLANS: FloorPlan[] = [
  { id: 'a-1', cephe: 'A', type: '2+1', daireAlani: 85, ortakAlan: 50, image: plan01, floors: occupancy(96) },
  { id: 'a-2', cephe: 'A', type: '2+1', daireAlani: 92, ortakAlan: 50, image: plan02, floors: occupancy(97) },
  { id: 'a-3', cephe: 'A', type: '2+1', daireAlani: 90.5, ortakAlan: 50, image: plan03, floors: occupancy(98) },
  { id: 'a-4', cephe: 'A', type: '2+1', daireAlani: 95, ortakAlan: 50, image: plan04, floors: occupancy(99) },
  { id: 'a-5', cephe: 'A', type: '2+1', daireAlani: 65, ortakAlan: 50, image: plan05, floors: occupancy(100) },
  { id: 'a-6', cephe: 'A', type: '3+1', daireAlani: 121.5, ortakAlan: 50, image: plan06, floors: occupancy(101) },
  { id: 'b-1', cephe: 'B', type: '2+1', daireAlani: 60, ortakAlan: 50, image: plan07, floors: occupancy(102) },
  { id: 'b-2', cephe: 'B', type: '2+1', daireAlani: 70, ortakAlan: 50, image: plan08, floors: occupancy(103) },
  { id: 'b-3', cephe: 'B', type: '3+1', daireAlani: 104.5, ortakAlan: 50, image: plan09, floors: occupancy(104) },
  { id: 'c-1', cephe: 'C', type: '2+1', daireAlani: 80.5, ortakAlan: 50, image: plan10, floors: occupancy(105) },
  { id: 'c-2', cephe: 'C', type: '2+1', daireAlani: 80.5, ortakAlan: 50, image: plan11, floors: occupancy(106) },
  { id: 'd-1', cephe: 'D', type: '2+1', daireAlani: 83.5, ortakAlan: 50, image: plan12, floors: occupancy(107) },
  { id: 'd-2', cephe: 'D', type: '2+1', daireAlani: 91, ortakAlan: 50, image: plan13, floors: occupancy(108) },
  { id: 'd-3', cephe: 'D', type: '2+1', daireAlani: 91, ortakAlan: 50, image: plan14, floors: occupancy(109) },
  { id: 'd-4', cephe: 'D', type: '3+1', daireAlani: 113.5, ortakAlan: 50, image: plan15, floors: occupancy(110) },
]

export const CEPHE_OPTIONS: FloorPlan['cephe'][] = ['A', 'B', 'C', 'D']
