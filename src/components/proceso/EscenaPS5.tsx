import { motion } from 'framer-motion'
import { C, Ventilador, rnd } from './comun'

const CX = 200
const CY = 150
// Fuzzy dust clumps caught on the grille, like the photos of real PS5 fans.
const GRUMOS = Array.from({ length: 14 }, (_, i) => {
  const a = (i / 14) * Math.PI * 2 + rnd(i) * 0.4
  const d = 40 + rnd(i + 20) * 46
  return { x: CX + Math.cos(a) * d, y: CY + Math.sin(a) * d, rx: 7 + rnd(i + 40) * 9, ry: 3 + rnd(i + 60) * 4, rot: (a * 180) / Math.PI + 90, seed: i }
})

// Phases: 0 dusty and noisy · 1 brush sweeps the grille · 2 fan spins freely · 3 quiet and cool
export function EscenaPS5({ fase }: { fase: number }) {
  const ruido = fase <= 1
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Animación de limpieza del ventilador de un PS5">
      <circle cx={CX} cy={CY} r="118" fill="#0b1019" stroke={C.line} strokeWidth="3" />
      <circle cx={CX} cy={CY} r="100" fill="#0f1520" stroke={C.lineSoft} strokeWidth="2" />

      <g transform={`translate(${CX} ${CY})`}>
        <Ventilador r={88} rpm={fase >= 2 ? 160 : 45} aspas={17} color="#232d40" />
      </g>

      {/* White grille: hub, ring and six curved spokes */}
      <g stroke="#d9dee6" fill="none" strokeLinecap="round">
        <circle cx={CX} cy={CY} r="88" strokeWidth="6" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <path key={deg} d={`M${CX} ${CY - 26} C ${CX + 30} ${CY - 46}, ${CX + 30} ${CY - 70}, ${CX + 12} ${CY - 88}`} strokeWidth="7" transform={`rotate(${deg} ${CX} ${CY})`} />
        ))}
      </g>
      <circle cx={CX} cy={CY} r="26" fill="#d9dee6" />

      {/* Dust clumps */}
      {GRUMOS.map((g, i) => (
        <motion.g
          key={g.seed}
          initial={false}
          animate={fase >= 1 ? { opacity: 0, x: -120 - rnd(i + 80) * 60, y: 30 + rnd(i + 90) * 40 } : { opacity: 0.9, x: 0, y: 0 }}
          transition={fase >= 1 ? { duration: 0.8, delay: 0.4 + (1 - g.x / 400) * 1.2 } : { duration: 0.6 }}
        >
          <ellipse cx={g.x} cy={g.y} rx={g.rx} ry={g.ry} transform={`rotate(${g.rot} ${g.x} ${g.y})`} fill={i % 2 ? C.dust : C.dustLight} />
        </motion.g>
      ))}

      {/* Brush sweeping right to left */}
      <motion.g
        initial={false}
        animate={fase === 1 ? { x: [180, -200], y: [0, -20, 10, 0], opacity: [0, 1, 1, 0] } : { x: 180, opacity: 0 }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
      >
        <rect x="252" y="40" width="12" height="96" rx="5" fill="#2b2f36" transform="rotate(-25 258 88)" />
        <path d="M228 128 L262 126 L266 160 L224 164 Z" fill="#c9a77a" transform="rotate(-25 245 145)" />
      </motion.g>

      {/* Noise waves while it struggles */}
      {[-1, 1].map((side) => (
        <motion.g key={side} initial={false} animate={{ opacity: ruido ? 1 : 0 }} transition={{ duration: 0.5 }}>
          {[0, 1, 2].map((i) => (
            <motion.path
              key={i}
              d={`M${CX + side * (132 + i * 14)} ${CY - 22 - i * 6} Q ${CX + side * (142 + i * 14)} ${CY} ${CX + side * (132 + i * 14)} ${CY + 22 + i * 6}`}
              stroke={C.hot}
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </motion.g>
      ))}
    </svg>
  )
}
