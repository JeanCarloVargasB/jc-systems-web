import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Space the sticky navbar takes, so a jump lands the section title just under it.
const NAVBAR = 96

let lenis: Lenis | null = null

/** Smooth, inertial page scroll. Skipped for visitors who ask for reduced motion. Returns a cleanup. */
export function iniciarScrollSuave() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}
  lenis = new Lenis({ autoRaf: true, lerp: 0.09 })
  return () => {
    lenis?.destroy()
    lenis = null
  }
}

export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  if (lenis) lenis.scrollTo(el, { offset: -NAVBAR })
  else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function scrollArriba() {
  if (lenis) lenis.scrollTo(0)
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}
