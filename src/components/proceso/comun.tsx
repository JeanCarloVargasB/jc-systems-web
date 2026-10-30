import { motion, useAnimationFrame, useMotionValue } from 'framer-motion'
import { useRef } from 'react'

export const C = {
  brand: '#5b9bff',
  brandHi: '#8fbaff',
  line: '#2a3448',
  lineSoft: '#1c2638',
  board: '#0e1726',
  panel: '#131a29',
  metal: '#b4bdca',
  metalDark: '#6b7686',
  white: '#e6ebf3',
  dust: '#8a7356',
  dustLight: '#b39b78',
  hot: '#ef4444',
  ok: '#22c55e',
}

/** Deterministic pseudo-random in [0, 1) so the dust lands in the same places on every render. */
export function rnd(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  return x - Math.floor(x)
}

/**
 * A fan whose speed eases toward `rpm` instead of jumping, so a dusty fan visibly spins up once cleaned.
 * Drawn around (0,0); place it with a translate on a parent <g>.
 */
export function Ventilador({
  r,
  rpm,
  aspas = 7,
  color = C.metalDark,
  brillo = false,
}: {
  r: number
  rpm: number
  aspas?: number
  color?: string
  brillo?: boolean
}) {
  const giro = useMotionValue(0)
  const velocidad = useRef(rpm)
  useAnimationFrame((_, delta) => {
    velocidad.current += (rpm - velocidad.current) * 0.04
    giro.set((giro.get() + (velocidad.current * 360 * delta) / 60000) % 360)
  })
  const blade = `M0 ${-r * 0.22} C ${r * 0.35} ${-r * 0.45} ${r * 0.55} ${-r * 0.7} ${r * 0.18} ${-r * 0.92} C ${-r * 0.05} ${-r * 0.6} ${-r * 0.12} ${-r * 0.4} 0 ${-r * 0.22} Z`
  return (
    <g>
      <motion.circle
        r={r}
        fill="none"
        strokeWidth={brillo ? 3 : 2}
        animate={{ stroke: brillo ? C.brand : C.line }}
        style={{ filter: brillo ? `drop-shadow(0 0 6px ${C.brand})` : 'none' }}
        transition={{ duration: 0.6 }}
      />
      <motion.g style={{ rotate: giro }}>
        {/* invisible full circle keeps the group's box centred on (0,0), so it spins in place */}
        <circle r={r} fill="none" stroke="none" />
        {Array.from({ length: aspas }, (_, i) => (
          <path key={i} d={blade} transform={`rotate(${(360 / aspas) * i})`} fill={color} />
        ))}
        <circle r={r * 0.22} fill={C.panel} stroke={C.line} />
      </motion.g>
    </g>
  )
}

/** Dust specks that blow away (dx, dy) when `limpio` turns on and settle back when it turns off. */
export function Polvo({
  puntos,
  limpio,
  dx = 140,
  dy = -60,
}: {
  puntos: { x: number; y: number; r: number; seed: number }[]
  limpio: boolean
  dx?: number
  dy?: number
}) {
  return (
    <g>
      {puntos.map((p, i) => (
        <motion.circle
          key={p.seed}
          cx={p.x}
          cy={p.y}
          r={p.r}
          fill={rnd(p.seed + 3) > 0.5 ? C.dust : C.dustLight}
          initial={false}
          animate={
            limpio
              ? { x: dx * (0.6 + rnd(p.seed + 1)), y: dy * (0.4 + rnd(p.seed + 2)), opacity: 0 }
              : { x: 0, y: 0, opacity: 0.85 }
          }
          transition={limpio ? { duration: 1.1, delay: i * 0.025, ease: 'easeOut' } : { duration: 0.6 }}
        />
      ))}
    </g>
  )
}

/** Scatter `n` specks inside a box. */
export function sembrarPolvo(n: number, x: number, y: number, w: number, h: number, seed = 1) {
  return Array.from({ length: n }, (_, i) => ({
    x: x + rnd(seed * 100 + i) * w,
    y: y + rnd(seed * 200 + i) * h,
    r: 1.4 + rnd(seed * 300 + i) * 2.4,
    seed: seed * 1000 + i,
  }))
}
