import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { ChevronsLeftRight } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import type { Foto } from '../data/trabajos'

const ALTO = 'h-[260px]'

function Etiqueta({ children, lado }: { children: string; lado: 'izq' | 'der' }) {
  return (
    <span
      className={`pointer-events-none absolute top-2.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${
        lado === 'izq' ? 'left-2.5 bg-ink/75 text-fg-2' : 'right-2.5 bg-wa/90 text-wa-ink'
      }`}
    >
      {children}
    </span>
  )
}

/**
 * Before/after slider: the "after" photo fills the frame and the "before" photo is clipped to the left of the handle.
 * Drag (mouse or finger) or use the arrow keys. When it first comes into view the handle sweeps once to show it moves.
 */
export function Comparador({ antes, despues, titulo }: { antes: Foto; despues: Foto; titulo: string }) {
  const caja = useRef<HTMLDivElement>(null)
  const pos = useMotionValue(50)
  const [valor, setValor] = useState(50)
  const [tocado, setTocado] = useState(false)
  const visto = useInView(caja, { once: true, amount: 0.9 })
  const reducir = useReducedMotion()
  const id = useId()
  const clip = useTransform(pos, (v) => `inset(0 ${100 - v}% 0 0)`)
  const left = useTransform(pos, (v) => `${v}%`)

  useEffect(() => pos.on('change', (v) => setValor(Math.round(v))), [pos])

  // One hint sweep the first time it is seen, unless the visitor already grabbed it.
  useEffect(() => {
    if (!visto || tocado || reducir) return
    const a = animate(pos, [50, 78, 22, 50], { duration: 2.2, ease: 'easeInOut', delay: 0.9 })
    return () => a.stop()
  }, [visto, tocado, reducir, pos])

  const mover = (clientX: number) => {
    const r = caja.current?.getBoundingClientRect()
    if (!r) return
    pos.set(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)))
  }

  return (
    <div
      ref={caja}
      className={`relative ${ALTO} cursor-ew-resize touch-pan-y overflow-hidden select-none`}
      onPointerDown={(e) => {
        setTocado(true)
        e.currentTarget.setPointerCapture(e.pointerId)
        mover(e.clientX)
      }}
      onPointerMove={(e) => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) mover(e.clientX)
      }}
    >
      <img src={despues.src} alt={despues.alt} loading="lazy" draggable={false} className="absolute inset-0 h-full w-full object-cover" />
      <motion.img
        src={antes.src}
        alt={antes.alt}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: clip }}
      />
      <Etiqueta lado="izq">Antes</Etiqueta>
      <Etiqueta lado="der">Después</Etiqueta>

      <motion.div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.6)]" style={{ left }}>
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-ink/80 text-white shadow-lg backdrop-blur-sm">
          <ChevronsLeftRight className="h-5 w-5" />
        </div>
      </motion.div>

      {/* Keyboard and screen-reader control; the pointer handlers above cover mouse and touch. */}
      <label htmlFor={id} className="sr-only">
        Comparar antes y después: {titulo}
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        value={valor}
        onChange={(e) => {
          setTocado(true)
          pos.set(Number(e.target.value))
        }}
        className="peer sr-only"
      />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-2 ring-brand opacity-0 peer-focus-visible:opacity-100" />
    </div>
  )
}

export const ALTO_FOTO = ALTO
