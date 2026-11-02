import { useEffect } from 'react'

/** Feeds the pointer position to the card under it, so the CSS glow in `.card::after` follows the mouse. */
export function useBrilloTarjetas() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    const mover = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.('.card') as HTMLElement | null
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', mover, { passive: true })
    return () => document.removeEventListener('pointermove', mover)
  }, [])
}
