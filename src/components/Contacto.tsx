import { Fondo } from './fondos/Fondo'
import { FondoCohetes } from './fondos/FondoCohetes'
import { FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_DISPLAY } from '../data/site'
import { FacebookIcon, InstagramIcon } from './icons'
import { Reveal } from './Reveal'
import { Container, WhatsAppButton } from './ui'

const social =
  'flex h-[46px] w-[46px] items-center justify-center rounded-xl border border-line-3 bg-panel text-fg-2 transition-colors hover:border-[#2f3c58] hover:bg-[#1a2334]'

export function Contacto() {
  return (
    <section id="contacto" className="relative overflow-hidden py-16 md:py-24">
      <Fondo>
        <FondoCohetes />
      </Fondo>
      <Container className="relative">
        <Reveal className="card bg-[linear-gradient(160deg,rgba(91,155,255,0.14),#0f1520_60%)] px-6 py-16 text-center md:px-12">
          <h2 className="font-display text-[28px] font-extrabold text-white md:text-[32px]">
            ¿Listo para darle mantenimiento a tu equipo?
          </h2>
          <p className="mx-auto mt-3.5 max-w-[480px] text-base text-muted">
            Escríbenos por WhatsApp y te ayudamos a diagnosticar el problema o a elegir tu próximo equipo.
          </p>
          <div className="mt-[30px] flex justify-center">
            <WhatsAppButton size="lg" label={WHATSAPP_DISPLAY} />
          </div>
          <div className="mt-[26px] flex justify-center gap-3.5">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener" aria-label="Instagram" className={social}>
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener" aria-label="Facebook" className={social}>
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
