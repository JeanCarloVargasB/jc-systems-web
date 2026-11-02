import { motion } from 'framer-motion'

function Ventilador({ className, duracion, sentido }: { className: string; duracion: number; sentido: 1 | -1 }) {
  const aspas = 9
  const blade = 'M0 -22 C 35 -45 55 -70 18 -92 C -5 -60 -12 -40 0 -22 Z'
  return (
    <motion.svg
      viewBox="-100 -100 200 200"
      className={`absolute ${className}`}
      animate={{ rotate: 360 * sentido }}
      transition={{ duration: duracion, repeat: Infinity, ease: 'linear' }}
    >
      <circle r="98" fill="none" stroke="#5b9bff" strokeWidth="1.5" />
      <circle r="94" fill="none" stroke="#5b9bff" strokeWidth="0.5" strokeDasharray="2 6" />
      {Array.from({ length: aspas }, (_, i) => (
        <path key={i} d={blade} transform={`rotate(${(360 / aspas) * i})`} fill="#5b9bff" />
      ))}
      <circle r="22" fill="#0d121c" stroke="#5b9bff" strokeWidth="1.5" />
    </motion.svg>
  )
}

// A huge, faint fan turning slowly behind the equipment photos, plus a smaller one counter-rotating.
export function FondoVentilador() {
  return (
    <>
      <Ventilador className="top-1/2 -right-40 h-[620px] w-[620px] -translate-y-1/2 opacity-[0.07] md:-right-24" duracion={40} sentido={1} />
      <Ventilador className="-bottom-24 -left-24 h-[300px] w-[300px] opacity-[0.05]" duracion={28} sentido={-1} />
    </>
  )
}
