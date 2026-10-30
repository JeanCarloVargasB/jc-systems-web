import { ArrowRight } from 'lucide-react'
import proof from '../assets/img/license-proof.jpg'
import { CATEGORIAS } from '../data/licencias'
import { waLink } from '../data/site'
import { Reveal, RevealGroup, RevealItem } from './Reveal'
import { Container, Eyebrow, IconBadge, WhatsAppButton } from './ui'

export function Licencias() {
  return (
    <section id="licencias" className="border-y border-line-2 bg-ink-2 py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-14 md:grid-cols-2">
          <Reveal from="left">
            <Eyebrow>Software legítimo</Eyebrow>
            <h2 className="font-display text-[28px] font-extrabold leading-[1.15] text-white md:text-[32px]">
              Licencias 100% originales, activadas frente a ti
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-muted">
              Instalamos y activamos software con licencias legítimas, nada de copias pirata que dejan tu equipo
              vulnerable o que dejan de funcionar a los meses. Precios en colones para 1 equipo; el precio final
              depende de la versión y la cantidad de equipos.
            </p>
            <WhatsAppButton
              className="mt-6"
              label="Consultar por WhatsApp"
              message="Hola, quisiera consultar por una licencia de software."
            />
          </Reveal>
          <Reveal from="right" className="card overflow-hidden p-3.5">
            <img
              src={proof}
              alt="Pantalla de activación de Microsoft Office LTSC Profesional Plus 2024 verificada"
              className="w-full rounded-[10px]"
            />
            <p className="mt-2.5 text-center text-xs text-dim">Captura real de una activación realizada por nuestro equipo</p>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {CATEGORIAS.map(({ icon: Icon, nombre, productos, desde, garantia, mensaje }) => (
            <RevealItem key={nombre} className="card flex flex-col p-6">
              <div className="flex items-center gap-3.5">
                <IconBadge>
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </IconBadge>
                <h3 className="font-display text-lg font-bold text-white">{nombre}</h3>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-dim">Precios desde</span>
                <span className="font-display text-2xl font-extrabold text-brand tabular-nums">{desde}</span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {productos.map((p) => (
                  <li key={p} className="rounded-full border border-line-3 bg-panel px-3 py-1.5 text-xs font-semibold text-fg-2">
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-dim">{garantia}</p>
              <a
                href={waLink(mensaje)}
                target="_blank"
                rel="noopener"
                className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-brand hover:text-brand-hi"
              >
                Consultar por WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
            </RevealItem>
          ))}
          <RevealItem className="card flex flex-col justify-center bg-[linear-gradient(160deg,rgba(91,155,255,0.14),rgba(91,155,255,0.02))] p-6">
            <h3 className="font-display text-lg font-bold text-white">¿Necesitas otro programa?</h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-dim">Precios desde</span>
              <span className="font-display text-2xl font-extrabold text-brand tabular-nums">₡10.000</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              También manejamos Filmora, Parallels, CCleaner y más. Pregúntanos por el que necesites.
            </p>
            <a
              href={waLink('Hola, ¿tienen licencia de este programa?: ')}
              target="_blank"
              rel="noopener"
              className="mt-4 text-sm font-bold text-brand hover:text-brand-hi"
            >
              Preguntar por WhatsApp →
            </a>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  )
}
