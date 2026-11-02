import { motion } from 'framer-motion'

// Motherboard-style traces hugging the edges of the section, leaving the middle clear for the cards.
const PISTAS = [
  'M0 120 H200 L240 160 H330',
  'M0 300 H140 L190 250 H300',
  'M1200 90 H1000 L960 130 H880',
  'M1200 260 H1060 L1010 310 H900',
  'M0 560 H180 L230 610 H400',
  'M1200 520 H1040 L990 570 H860 L820 530 H700',
  'M300 800 V700 L340 660 V560',
  'M900 800 V720 L860 680 V600',
  'M0 720 H90 L130 680 H260',
  'M1200 720 H1110 L1070 760 H960',
  'M600 0 V60 L640 100 V160',
  'M140 0 V60 L180 100 H300',
]

// Which traces carry a travelling pulse, and how fast.
const PULSOS = [
  { i: 0, dur: 3.2, delay: 0 },
  { i: 1, dur: 4, delay: 1.2 },
  { i: 3, dur: 3.6, delay: 0.6 },
  { i: 5, dur: 4.2, delay: 2 },
  { i: 6, dur: 2.8, delay: 1.6 },
  { i: 7, dur: 3, delay: 0.3 },
  { i: 10, dur: 2.6, delay: 2.4 },
  { i: 4, dur: 3.4, delay: 3 },
]

export function FondoCircuito() {
  return (
    <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <marker id="pad" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
          <circle cx="5" cy="5" r="4" fill="none" stroke="#5b9bff" strokeWidth="1.5" />
        </marker>
        <filter id="pulso-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <g fill="none" stroke="#5b9bff" strokeOpacity="0.1" strokeWidth="2" strokeLinejoin="round">
        {PISTAS.map((d) => (
          <path key={d} d={d} markerEnd="url(#pad)" />
        ))}
      </g>
      {PULSOS.map(({ i, dur, delay }) => {
        const d = PISTAS.at(i)
        return (
          <g key={i}>
            {[true, false].map((halo) => (
              <motion.path
                key={String(halo)}
                d={d}
                fill="none"
                stroke={halo ? '#5b9bff' : '#8fbaff'}
                strokeWidth={halo ? 8 : 2.5}
                strokeLinecap="round"
                filter={halo ? 'url(#pulso-glow)' : undefined}
                initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
                animate={{ pathOffset: [0, 0.9], opacity: [0, halo ? 0.5 : 0.9, halo ? 0.5 : 0.9, 0] }}
                transition={{ duration: dur, delay, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut', times: [0, 0.15, 0.85, 1] }}
              />
            ))}
          </g>
        )
      })}
    </svg>
  )
}
