import { motion } from 'framer-motion'

// The rocket from the JC Systems logo, split into the strokes that draw it.
const TRAZOS = [
  'M100 20 C70 50 58 100 60 150 C62 185 70 210 78 225 L122 225 C130 210 138 185 140 150 C142 100 130 50 100 20 Z',
  'M70 75 Q100 67 130 75',
  'M78 120 a22 22 0 1 0 44 0 a22 22 0 1 0 -44 0',
  'M91 120 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0',
  'M64 165 L38 184 L38 224 L78 206',
  'M136 165 L162 184 L162 224 L122 206',
  'M84 225 L80 254 L120 254 L116 225',
]

const CICLO = 10 // seconds: draw, hold with the engine lit, then un-draw

export function LogoArmandose({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 320" fill="none" className={className} aria-hidden="true">
      <defs>
        <filter id="rocket-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="rocket-flame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fbaff" />
          <stop offset="1" stopColor="#5b9bff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.g
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {TRAZOS.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="#5b9bff"
            strokeWidth={5}
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#rocket-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: CICLO,
              times: [0, 0.18, 0.86, 1],
              repeat: Infinity,
              delay: i * 0.22,
              ease: 'easeInOut',
            }}
          />
        ))}
        <motion.path
          d="M86 258 Q100 318 114 258 Z"
          fill="url(#rocket-flame)"
          style={{ originY: 0 }}
          initial={{ opacity: 0, scaleY: 0.4 }}
          animate={{ opacity: [0, 0, 1, 0.6, 1, 0.7, 0], scaleY: [0.4, 0.4, 1, 0.8, 1.15, 0.9, 0.4] }}
          transition={{ duration: CICLO, times: [0, 0.3, 0.38, 0.5, 0.62, 0.76, 0.86], repeat: Infinity, delay: 1.3 }}
        />
      </motion.g>
    </svg>
  )
}

// Small twinkling dots scattered behind the hero; positions are fixed so every render matches.
const ESTRELLAS = [
  [8, 18], [16, 72], [27, 35], [38, 12], [46, 80], [58, 26], [66, 64], [74, 14], [83, 48], [91, 22], [95, 76], [5, 50],
] as const

export function Estrellas() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {ESTRELLAS.map(([x, y], i) => (
        <motion.span
          key={`${x}-${y}`}
          className="absolute h-1 w-1 rounded-full bg-brand-hi"
          style={{ left: `${x}%`, top: `${y}%` }}
          animate={{ opacity: [0.1, 0.8, 0.1], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.35, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
