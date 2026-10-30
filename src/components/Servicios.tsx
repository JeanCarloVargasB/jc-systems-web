import { SERVICIOS } from '../data/servicios'
import { waLink } from '../data/site'
import { RevealGroup, RevealItem } from './Reveal'
import { Container, IconBadge, SectionHeader } from './ui'

export function Servicios() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Lo que hacemos"
          title="Un solo lugar para tu equipo"
          text="Desde una limpieza preventiva hasta el armado completo de tu próxima PC."
        />
        <RevealGroup className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {SERVICIOS.map(({ icon: Icon, titulo, texto }) => (
            <RevealItem key={titulo} className="card p-[30px]">
              <IconBadge>
                <Icon className="h-6 w-6" strokeWidth={2} />
              </IconBadge>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">{texto}</p>
            </RevealItem>
          ))}
          <RevealItem className="card flex flex-col justify-center bg-[linear-gradient(160deg,rgba(91,155,255,0.14),rgba(91,155,255,0.02))] p-[30px]">
            <h3 className="font-display text-lg font-bold text-white">¿No ves tu caso aquí?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Contanos qué le pasa a tu equipo y te decimos cómo podemos ayudarte.
            </p>
            <a
              href={waLink('Hola, tengo un problema con mi equipo y quisiera consultar.')}
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
