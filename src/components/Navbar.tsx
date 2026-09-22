import { useCallback, useEffect, useRef, useState } from 'react'
import { LOGO } from '../data/images'
import { useScrolled } from '../hooks/useScrolled'

const NAV_LINKS = [
  { label: 'Proje', href: '#project-intro' },
  { label: 'Kat Planları', href: '#floor-plans' },
  { label: 'Görseller', href: '#gallery' },
  { label: 'Katalog', href: '#catalog' },
  { label: 'Hakkımızda', href: '#about' },
]

export function Navbar() {
  const scrolled = useScrolled(60)
  const [menuOpen, setMenuOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Opening the menu pushes one history entry tagged `mobileMenu`, purely so a Back press while
  // it's open can be intercepted (closed) instead of leaving the page — see the popstate effect.
  function openMenu() {
    window.history.pushState({ mobileMenu: true }, '')
    setMenuOpen(true)
  }

  // For closes that aren't already navigating somewhere (toggle button, outside tap): pop the
  // entry pushed on open so it never lingers in history.
  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    if (window.history.state?.mobileMenu) window.history.back()
  }, [])

  // For closes triggered by following a nav link: the link's default action is about to push its
  // own entry for the target section, so instead of popping (which would race with that
  // navigation) we just neutralize our marker in place before it happens.
  function closeMenuForNavigation() {
    setMenuOpen(false)
    if (window.history.state?.mobileMenu) window.history.replaceState(null, '')
  }

  function toggleMenu() {
    if (menuOpen) closeMenu()
    else openMenu()
  }

  // Browser/device Back while the menu is open closes it instead of leaving the page — the Back
  // press itself pops the entry pushed on open, so we only need to sync the UI state here.
  useEffect(() => {
    function handlePopState() {
      if (menuOpen) setMenuOpen(false)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [menuOpen])

  // Tapping outside the open panel (and outside the toggle button, which has its own handler)
  // closes it. Attached only while open, so it's fully inert otherwise.
  useEffect(() => {
    if (!menuOpen) return
    function handlePointerDown(e: PointerEvent) {
      const target = e.target as Node
      if (panelRef.current?.contains(target) || toggleRef.current?.contains(target)) return
      closeMenu()
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [menuOpen, closeMenu])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-[#E5E5E5]' : ''
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 lg:px-14 py-5 flex items-center justify-between gap-4">
        <a href="#" aria-label="Ninova Premium — Ana Sayfa" className="block shrink-0">
          <img
            src={LOGO.full}
            alt="Ninova Premium"
            className="h-10 md:h-11 w-auto transition-[filter] duration-300"
            style={scrolled ? undefined : { filter: 'brightness(0) invert(1)' }}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5 lg:gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-[11px] tracking-[0.18em] uppercase font-body whitespace-nowrap transition-colors duration-300 hover:opacity-60 ${
                scrolled ? 'text-[#111111]' : 'text-white/90'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`text-[11px] tracking-[0.18em] uppercase font-body whitespace-nowrap border px-4 lg:px-5 py-2.5 transition-all duration-300 hover:opacity-60 ${
              scrolled ? 'border-[#111111] text-[#111111]' : 'border-white/60 text-white'
            }`}
          >
            İletişim
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={toggleRef}
          type="button"
          className={`md:hidden flex flex-col gap-1.5 ${scrolled ? 'text-[#111111]' : 'text-white'}`}
          onClick={toggleMenu}
          aria-label="Menü"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-px transition-colors duration-300 ${scrolled ? 'bg-[#111111]' : 'bg-white'}`} />
          <span className={`block w-4 h-px transition-colors duration-300 ${scrolled ? 'bg-[#111111]' : 'bg-white'}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div ref={panelRef} className="md:hidden bg-white border-t border-[#E5E5E5] px-8 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={closeMenuForNavigation}
              className="text-[11px] tracking-[0.25em] uppercase text-[#111111] hover:text-[#6B6B6B]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenuForNavigation}
            className="text-[11px] tracking-[0.25em] uppercase text-[#111111] border-t border-[#E5E5E5] pt-5 hover:text-[#6B6B6B]"
          >
            İletişim
          </a>
        </div>
      )}
    </nav>
  )
}
