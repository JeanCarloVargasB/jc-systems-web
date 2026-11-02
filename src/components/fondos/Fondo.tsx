import { useInView, useReducedMotion } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

/**
 * Decorative layer behind a section. Its animation only mounts while the section is on (or near) the screen,
 * so off-screen sections cost no battery, and it is skipped entirely for visitors who ask for reduced motion.
 * The parent section needs `relative overflow-hidden`, and its content `relative`.
 */
export function Fondo({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const cerca = useInView(ref, { margin: '200px 0px' })
  const reducir = useReducedMotion()
  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {cerca && !reducir ? children : null}
    </div>
  )
}
