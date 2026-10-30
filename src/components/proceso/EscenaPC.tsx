import { motion } from 'framer-motion'
import { C, Polvo, Ventilador, sembrarPolvo } from './comun'

const POLVO = [
  ...sembrarPolvo(26, 230, 58, 46, 168, 1), // on the front fans
  ...sembrarPolvo(18, 132, 60, 90, 110, 2), // on the motherboard
  ...sembrarPolvo(10, 132, 186, 100, 30, 3), // on the graphics card
]
const FANS = [80, 140, 200]

// Phases: 0 dusty, fans crawling · 1 compressed air blows the dust out · 2 fans spin up with their lights · 3 cool and quiet
export function EscenaPC({ fase }: { fase: number }) {
  const limpio = fase >= 1
  const rpm = fase === 0 ? 18 : fase === 1 ? 30 : 120
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Animación de limpieza de una computadora de escritorio">
      {/* Case */}
      <rect x="110" y="26" width="190" height="250" rx="12" fill="#0d1421" stroke="#3a4660" strokeWidth="2" />
      <rect x="122" y="38" width="166" height="226" rx="7" fill="rgba(91,155,255,0.04)" stroke="#243048" />
      <rect x="132" y="52" width="92" height="124" rx="4" fill="#101b2c" stroke="#24324a" />
      <circle cx="172" cy="96" r="20" fill="#0b1220" stroke="#33415c" strokeWidth="2" />
      <circle cx="172" cy="96" r="8" fill="none" stroke={C.metalDark} />
      <rect x="196" y="62" width="6" height="40" rx="2" fill="#2a3650" />
      <rect x="206" y="62" width="6" height="40" rx="2" fill="#2a3650" />
      <rect x="132" y="190" width="104" height="24" rx="4" fill="#1a2335" stroke="#2c3a55" />
      <rect x="138" y="232" width="98" height="22" rx="4" fill="#141c2b" stroke="#24324a" />

      {/* Front fans: crawl when dusty, spin up and light up once clean */}
      {FANS.map((y) => (
        <g key={y} transform={`translate(256 ${y})`}>
          <Ventilador r={24} rpm={rpm} brillo={fase >= 2} color={fase >= 2 ? '#3b4a66' : C.metalDark} />
        </g>
      ))}

      <Polvo puntos={POLVO} limpio={limpio} dx={150} dy={-50} />

      {/* Compressed-air can with air streams */}
      <motion.g
        initial={false}
        animate={fase === 1 ? { x: 0, opacity: 1 } : { x: -90, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <rect x="22" y="118" width="40" height="84" rx="10" fill="#d8dee8" stroke="#9aa3b1" />
        <rect x="22" y="132" width="40" height="20" fill={C.brand} />
        <rect x="34" y="106" width="16" height="14" rx="3" fill="#9aa3b1" />
        <path d="M50 110 H96" stroke="#9aa3b1" strokeWidth="4" strokeLinecap="round" />
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M100 ${104 + i * 6} C 140 ${96 + i * 12}, 180 ${110 + i * 8}, 230 ${100 + i * 14}`}
            stroke={C.brandHi}
            strokeWidth="2"
            strokeDasharray="6 10"
            fill="none"
            animate={{ strokeDashoffset: [0, -64] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </motion.g>
    </svg>
  )
}
