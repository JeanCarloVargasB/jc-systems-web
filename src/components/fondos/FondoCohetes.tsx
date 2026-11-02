import { motion } from 'framer-motion'

// Small versions of the logo rocket lifting off with a fading trail.
const COHETES = [
  { left: '6%', size: 22, dur: 7, delay: 0 },
  { left: '18%', size: 16, dur: 9, delay: 3.5 },
  { left: '32%', size: 18, dur: 8, delay: 6 },
  { left: '68%', size: 20, dur: 7.5, delay: 1.8 },
  { left: '82%', size: 15, dur: 9.5, delay: 4.6 },
  { left: '93%', size: 24, dur: 8.5, delay: 2.6 },
]

function Cohete({ size }: { size: number }) {
  return (
    <div className="flex flex-col items-center" style={{ width: size }}>
      <svg viewBox="0 0 200 270" width={size} fill="none" stroke="#5b9bff" strokeWidth="14" strokeLinejoin="round">
        <path d="M100 20 C70 50 58 100 60 150 C62 185 70 210 78 225 L122 225 C130 210 138 185 140 150 C142 100 130 50 100 20 Z" />
        <circle cx="100" cy="120" r="20" />
        <path d="M64 165 L38 184 L38 224 L78 206 M136 165 L162 184 L162 224 L122 206" />
      </svg>
      <div className="w-[2px] bg-gradient-to-b from-[#8fbaff] to-transparent" style={{ height: size * 4 }} />
    </div>
  )
}

export function FondoCohetes() {
  return (
    <>
      {COHETES.map((c) => (
        <motion.div
          key={c.left}
          className="absolute"
          style={{ left: c.left }}
          initial={{ top: '110%', opacity: 0 }}
          animate={{ top: ['110%', '-30%'], opacity: [0, 0.55, 0.55, 0] }}
          transition={{ duration: c.dur, delay: c.delay, repeat: Infinity, repeatDelay: 2, ease: 'easeIn', times: [0, 0.15, 0.8, 1] }}
        >
          <Cohete size={c.size} />
        </motion.div>
      ))}
    </>
  )
}
