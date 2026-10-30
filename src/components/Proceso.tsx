import { AnimatePresence, motion, useInView } from 'framer-motion'
import { Check, Cpu, Gamepad2, Monitor, type LucideIcon } from 'lucide-react'
import { useEffect, useRef, useState, type ComponentType } from 'react'
import { waLink } from '../data/site'
import { EscenaPasta } from './proceso/EscenaPasta'
import { EscenaPC } from './proceso/EscenaPC'
import { EscenaPS5 } from './proceso/EscenaPS5'
import { Reveal } from './Reveal'
import { Container, SectionHeader } from './ui'

type Proceso = {
  id: string
  tab: string
  icon: LucideIcon
  pasos: string[]
  duraciones: number[] // ms per step; the scene draws step N while it is active
  Escena: ComponentType<{ fase: number }>
  mensaje: string
}

const PROCESOS: Proceso[] = [
  {
    id: 'pasta',
    tab: 'Pasta térmica',
    icon: Cpu,
    pasos: [
      'Retiramos la pasta vieja y reseca',
      'Limpiamos la superficie del procesador',
      'Aplicamos pasta térmica nueva',
      'Montamos el disipador y revisamos temperaturas',
    ],
    duraciones: [2200, 2600, 2400, 2800],
    Escena: EscenaPasta,
    mensaje: 'Hola, quisiera un cambio de pasta térmica.',
  },
  {
    id: 'pc',
    tab: 'Limpieza de PC',
    icon: Monitor,
    pasos: [
      'Revisamos el polvo acumulado',
      'Sacamos el polvo de ventiladores y componentes',
      'Los ventiladores vuelven a girar libres',
      'Equipo más fresco y silencioso',
    ],
    duraciones: [2200, 2600, 2200, 2600],
    Escena: EscenaPC,
    mensaje: 'Hola, quisiera una limpieza para mi computadora de escritorio.',
  },
  {
    id: 'ps5',
    tab: 'Limpieza de PS5',
    icon: Gamepad2,
    pasos: [
      'Abrimos la consola y ubicamos el polvo',
      'Limpiamos el ventilador y la rejilla',
      'El ventilador gira sin esfuerzo',
      'Menos ruido y menos calor al jugar',
    ],
    duraciones: [2400, 2600, 2200, 2600],
    Escena: EscenaPS5,
    mensaje: 'Hola, quisiera una limpieza para mi PS5.',
  },
]

export function Proceso() {
  const [activo, setActivo] = useState(0)
  const [fase, setFase] = useState(0)
  const [manual, setManual] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const visible = useInView(ref, { margin: '0px 0px -20% 0px' })
  const p = PROCESOS.at(activo) ?? PROCESOS[0]

  // Step through the phases while the section is on screen; after the last one, move on to the
  // next process (or replay the same one if the visitor picked a tab).
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => {
      if (fase < p.pasos.length - 1) setFase(fase + 1)
      else {
        setFase(0)
        if (!manual) setActivo((activo + 1) % PROCESOS.length)
      }
    }, p.duraciones.at(fase))
    return () => clearTimeout(t)
  }, [visible, fase, activo, manual, p])

  const elegir = (i: number) => {
    setActivo(i)
    setFase(0)
    setManual(true)
  }

  const listo = fase === p.pasos.length - 1
  const { Escena } = p

  return (
    <section id="proceso" className="py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Así trabajamos"
          title="Así se ve un mantenimiento por dentro"
          text="Los mismos pasos que seguimos con tu computadora o tu consola."
        />
        <Reveal>
          <div ref={ref} className="card overflow-hidden">
            <div className="flex gap-1 overflow-x-auto border-b border-line p-2 [scrollbar-width:none]" role="tablist">
              {PROCESOS.map((x, i) => (
                <button
                  key={x.id}
                  type="button"
                  role="tab"
                  aria-selected={i === activo}
                  onClick={() => elegir(i)}
                  className={`relative flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                    i === activo ? 'text-white' : 'text-subtle hover:text-fg-2'
                  }`}
                >
                  {i === activo && (
                    <motion.span layoutId="tab-activa" className="absolute inset-0 rounded-xl bg-brand/15 ring-1 ring-brand/40" />
                  )}
                  <x.icon className="relative h-4 w-4" />
                  <span className="relative">{x.tab}</span>
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-[1.25fr_1fr]">
              <div className="relative aspect-[4/3] border-line bg-[#0a101b] md:border-r">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={p.id}
                    className="absolute inset-0 p-4"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35 }}
                  >
                    <Escena fase={fase} />
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                  {listo && (
                    <motion.div
                      className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full bg-wa px-3 py-1.5 text-xs font-bold text-wa-ink"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.15 } }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 1 }}
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={3} /> Listo
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col p-6 md:p-8">
                <ol className="flex flex-col gap-3">
                  {p.pasos.map((paso, i) => {
                    const hecho = i < fase
                    const actual = i === fase
                    return (
                      <li key={paso} className="relative overflow-hidden rounded-xl border border-line bg-ink/40 px-4 py-3">
                        {actual && (
                          <motion.span
                            key={`${p.id}-${fase}`}
                            className="absolute inset-y-0 left-0 bg-brand/10"
                            initial={{ width: '0%' }}
                            animate={{ width: visible ? '100%' : '0%' }}
                            transition={{ duration: (p.duraciones.at(i) ?? 2000) / 1000, ease: 'linear' }}
                          />
                        )}
                        <div className="relative flex items-center gap-3">
                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                              hecho ? 'bg-wa text-wa-ink' : actual ? 'bg-brand text-ink' : 'bg-panel text-dim'
                            }`}
                          >
                            {hecho ? <Check className="h-4 w-4" strokeWidth={3} /> : i + 1}
                          </span>
                          <span className={`text-sm transition-colors ${actual ? 'font-semibold text-white' : hecho ? 'text-fg-2' : 'text-dim'}`}>
                            {paso}
                          </span>
                        </div>
                      </li>
                    )
                  })}
                </ol>

                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-xs font-semibold">
                    <span className="text-subtle">Temperatura</span>
                    <motion.span animate={{ color: listo ? '#22c55e' : '#ef4444' }}>{listo ? 'Normal' : 'Alta'}</motion.span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-panel">
                    <motion.div
                      className="h-full rounded-full"
                      animate={{ width: listo ? '35%' : '88%', backgroundColor: listo ? '#22c55e' : '#ef4444' }}
                      transition={{ duration: 1.2, delay: listo ? 0.8 : 0 }}
                    />
                  </div>
                </div>

                <a
                  href={waLink(p.mensaje)}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 text-sm font-bold text-brand hover:text-brand-hi md:mt-auto md:pt-6"
                >
                  Agendar este servicio por WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
