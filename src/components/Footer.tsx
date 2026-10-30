import logo from '../assets/img/logo.png'
import { FACEBOOK_URL, INSTAGRAM_URL, NAV, WHATSAPP_DISPLAY, waLink } from '../data/site'
import { Container, scrollToId } from './ui'

const link = 'text-left text-[13px] text-dim transition-colors hover:text-fg-2'

export function Footer() {
  return (
    <footer className="border-t border-line-2 pt-12 pb-7">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <img src={logo} alt="JC Systems" className="mb-3.5 h-[42px] w-auto" />
            <p className="max-w-[280px] text-[13px] leading-[1.7] text-dim">
              Mantenimiento, reparación y venta de equipos de informática y consolas.
            </p>
          </div>
          <div>
            <div className="mb-3.5 text-[13px] font-bold text-fg-2">Enlaces</div>
            <div className="flex flex-col items-start gap-2.5">
              {NAV.filter((n) => n.id !== 'contacto').map((n) => (
                <button key={n.id} type="button" onClick={() => scrollToId(n.id)} className={link}>
                  {n.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-3.5 text-[13px] font-bold text-fg-2">Contacto</div>
            <div className="flex flex-col gap-2.5">
              <a href={waLink()} target="_blank" rel="noopener" className={link}>
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className={link}>
                Instagram: @systems.jc
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener" className={link}>
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mt-9 border-t border-line-2 pt-[22px] text-xs text-faint">
          © {new Date().getFullYear()} JC Systems. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  )
}
