import { useCallback, useRef, useState } from 'react'

// Matches ImageTrack's slide transition duration so a new nav action can never
// fire mid-animation and desync the layered slots.
const NAV_LOCK_MS = 600

/** Index + prev/next navigation for a fixed-length carousel, locked during the slide transition. */
export function useCarousel(length: number) {
  const [index, setIndex] = useState(0)
  const lockedRef = useRef(false)

  const move = useCallback(
    (direction: 1 | -1) => {
      if (lockedRef.current || length < 2) return
      lockedRef.current = true
      setIndex((i) => (i + direction + length) % length)
      window.setTimeout(() => {
        lockedRef.current = false
      }, NAV_LOCK_MS)
    },
    [length],
  )

  return { index, setIndex, move }
}
