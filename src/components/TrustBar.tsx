import { CircleCheck, Clock, Headphones, Shield } from 'lucide-react'
import { RevealGroup, RevealItem } from './Reveal'
import { Container } from './ui'

const ITEMS = [
  { icon: CircleCheck, label: 'Servicio profesional' },
  { icon: Shield, label: 'Garantía de servicio' },
  { icon: Headphones, label: 'Soporte técnico' },
  { icon: Clock, label: 'Atención personalizada' },
]

export function TrustBar() {
  return (
    <div className="border-y border-line-2 bg-ink-2">
      <Container className="py-10">
        <RevealGroup className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {ITEMS.map(({ icon: Icon, label }) => (
            <RevealItem key={label} className="flex items-center gap-3">
              <Icon className="h-[22px] w-[22px] shrink-0 text-brand" strokeWidth={2} />
              <span className="text-sm font-semibold text-fg-2">{label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </div>
  )
}
