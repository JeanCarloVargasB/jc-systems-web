import { motion, useInView, type Variants } from 'framer-motion'
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

// Content reveals once its top edge passes 60% of the way up the screen.
const MARGIN = '0px 0px -60% 0px'
export const EASE = [0.16, 1, 0.3, 1] as const

// Blocks at the very bottom can never climb that high, so reaching the page end reveals them too.
function useAtPageEnd() {
  const [atEnd, setAtEnd] = useState(false)
  useEffect(() => {
    const check = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) setAtEnd(true)
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])
  return atEnd
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: MARGIN })
  const atEnd = useAtPageEnd()
  // A menu jump can land content just under the 60% line; if it sits on screen for a moment, show it anyway.
  const onScreen = useInView(ref)
  const [settled, setSettled] = useState(false)
  useEffect(() => {
    if (!onScreen || settled) return
    const t = setTimeout(() => setSettled(true), 700)
    return () => clearTimeout(t)
  }, [onScreen, settled])
  return [ref, inView || atEnd || settled] as const
}

const OFFSET = { up: { y: 32 }, left: { x: -36 }, right: { x: 36 } }

export function Reveal({
  children,
  from = 'up',
  className,
}: {
  children: ReactNode
  from?: keyof typeof OFFSET
  className?: string
}) {
  const [ref, shown] = useReveal()
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...OFFSET[from] }}
      animate={shown ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

const group: Variants = { hidden: {}, shown: { transition: { staggerChildren: 0.07 } } }
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  const [ref, shown] = useReveal()
  return (
    <motion.div ref={ref} className={className} variants={group} initial="hidden" animate={shown ? 'shown' : 'hidden'}>
      {children}
    </motion.div>
  )
}

export function RevealItem({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <motion.div className={className} style={style} variants={item}>
      {children}
    </motion.div>
  )
}
