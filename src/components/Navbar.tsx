import logo from '../assets/img/logo.png'
import { NAV } from '../data/site'
import { scrollArriba } from './scroll'
import { Container, WhatsAppButton, scrollToId } from './ui'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-2 bg-ink/85 backdrop-blur-md">
      <Container className="flex h-[84px] items-center justify-between gap-4">
        <button type="button" onClick={scrollArriba} aria-label="Ir al inicio">
          <img src={logo} alt="JC Systems" className="h-8 w-auto md:h-[50px]" />
        </button>
        <nav className="flex max-w-[40vw] items-center gap-5 overflow-x-auto [scrollbar-width:none] md:max-w-none md:gap-9">
          {NAV.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => scrollToId(n.id)}
              className="shrink-0 text-sm font-medium text-[#c3cbdb] transition-colors hover:text-white"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <WhatsAppButton size="sm" label={<span className="hidden sm:inline">WhatsApp</span>} />
      </Container>
    </header>
  )
}
