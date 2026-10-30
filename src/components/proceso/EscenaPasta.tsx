import { motion } from 'framer-motion'
import { C } from './comun'

// Phases: 0 old dried paste · 1 cloth wipes it · 2 syringe applies a new dot · 3 heatsink mounts and spreads it
export function EscenaPasta({ fase }: { fase: number }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label="Animación del cambio de pasta térmica">
      <defs>
        <linearGradient id="ihs" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d9dfe8" />
          <stop offset="1" stopColor="#8f9aab" />
        </linearGradient>
      </defs>

      {/* Motherboard with a few traces */}
      <rect x="20" y="20" width="360" height="260" rx="14" fill={C.board} stroke={C.line} />
      <g stroke={C.lineSoft} strokeWidth="2" fill="none">
        <path d="M40 60 H110 V120" />
        <path d="M40 240 H120 V200" />
        <path d="M360 60 H290 V110" />
        <path d="M360 240 H300 V190 H280" />
        <path d="M200 260 V230" />
      </g>
      {[48, 72, 96, 312, 336].map((x) => (
        <rect key={x} x={x} y="252" width="16" height="10" rx="2" fill={C.panel} stroke={C.line} />
      ))}

      {/* Socket + processor */}
      <rect x="130" y="80" width="140" height="140" rx="8" fill="#0b121e" stroke={C.line} strokeWidth="2" />
      <rect x="148" y="98" width="104" height="104" rx="6" fill="url(#ihs)" stroke="#c9d1dc" />

      {/* Old paste: dry, cracked, grey-brown */}
      <motion.g initial={false} animate={{ opacity: fase === 0 ? 1 : 0 }} transition={{ duration: 0.7, delay: fase === 1 ? 0.8 : 0 }}>
        <path
          d="M162 118 C176 104 208 110 226 106 C244 112 242 136 238 152 C246 170 232 190 210 186 C190 194 168 190 160 172 C150 156 156 134 162 118 Z"
          fill="#8c8778"
        />
        <g stroke="#615d52" strokeWidth="1.6" fill="none" strokeLinecap="round">
          <path d="M172 130 L188 142 L184 158" />
          <path d="M214 122 L206 140 L222 150" />
          <path d="M196 168 L210 160 L226 172" />
          <path d="M170 166 L180 176" />
        </g>
      </motion.g>

      {/* Cloth wiping back and forth */}
      <motion.g
        initial={false}
        animate={fase === 1 ? { x: [-170, 10, -40, 30, -20, 220], opacity: [0, 1, 1, 1, 1, 0] } : { x: -170, opacity: 0 }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
      >
        <path d="M150 108 C170 98 214 100 232 112 C244 136 236 170 226 190 C200 198 172 196 156 186 C146 162 144 132 150 108 Z" fill="#f2f4f8" />
        <path d="M162 124 C184 118 206 122 222 128 M160 150 C184 146 206 150 226 156 M164 174 C186 172 206 176 220 180" stroke="#d7dce4" strokeWidth="2" fill="none" />
        <path d="M200 140 C206 134 214 136 214 144" stroke="#9aa3b1" strokeWidth="2" fill="none" />
      </motion.g>

      {/* New paste: a dot first, spread flat by the heatsink */}
      <motion.ellipse
        cx="200"
        cy="150"
        fill="#d4dae3"
        stroke="#eef2f7"
        initial={false}
        animate={
          fase === 2
            ? { rx: 10, ry: 10, opacity: 1 }
            : fase === 3
              ? { rx: 44, ry: 44, opacity: 1 }
              : { rx: 0, ry: 0, opacity: 0 }
        }
        transition={{ duration: 0.6, delay: fase === 2 ? 0.75 : fase === 3 ? 0.9 : 0 }}
      />

      {/* Syringe comes down, dispenses, goes back up */}
      <motion.g
        initial={false}
        animate={fase === 2 ? { y: [-150, 0, 0, -150] } : { y: -150 }}
        transition={{ duration: 2, times: [0, 0.32, 0.68, 1], ease: 'easeInOut' }}
      >
        <rect x="191" y="10" width="18" height="70" rx="4" fill="#e8edf4" stroke="#aeb7c4" />
        <rect x="194" y="40" width="12" height="38" rx="2" fill="#c3cad5" />
        <rect x="184" y="4" width="32" height="8" rx="3" fill="#aeb7c4" />
        <path d="M196 80 L204 80 L201 136 L199 136 Z" fill="#aeb7c4" />
      </motion.g>

      {/* Heatsink drops onto the processor */}
      <motion.g
        initial={false}
        animate={fase === 3 ? { y: 0, opacity: 1 } : { y: -230, opacity: 0 }}
        transition={fase === 3 ? { duration: 0.7, delay: 0.25, ease: [0.3, 1.4, 0.5, 1] } : { duration: 0.4 }}
      >
        <rect x="138" y="88" width="124" height="124" rx="8" fill="#1d2738" fillOpacity="0.9" stroke={C.metal} strokeWidth="2" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <line key={i} x1={152 + i * 12} y1="98" x2={152 + i * 12} y2="202" stroke={C.metalDark} strokeWidth="3" />
        ))}
        <rect x="186" y="136" width="28" height="28" rx="4" fill={C.panel} stroke={C.metal} />
      </motion.g>
    </svg>
  )
}
