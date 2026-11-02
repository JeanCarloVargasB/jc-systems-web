import { motion } from 'framer-motion'

// Soft blue/cyan/indigo light drifting and blending behind the license cards.
const MANCHAS = [
  { className: 'left-[-10%] top-[5%] bg-[#5b9bff]/25', x: [0, 120, -40, 0], y: [0, 80, 140, 0], dur: 18 },
  { className: 'right-[-8%] top-[25%] bg-[#22d3ee]/15', x: [0, -140, -60, 0], y: [0, 100, -40, 0], dur: 22 },
  { className: 'left-[30%] bottom-[-15%] bg-[#6366f1]/20', x: [0, 80, -100, 0], y: [0, -120, -40, 0], dur: 20 },
]

export function FondoAurora() {
  return (
    <>
      {MANCHAS.map((m) => (
        <motion.div
          key={m.className}
          className={`absolute h-[45vw] max-h-[560px] w-[45vw] max-w-[560px] rounded-full blur-[100px] ${m.className}`}
          animate={{ x: m.x, y: m.y, scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: m.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </>
  )
}
