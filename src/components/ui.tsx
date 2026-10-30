import type { ReactNode } from 'react'
import { WHATSAPP_DISPLAY, waLink } from '../data/site'
import { WhatsAppIcon } from './icons'
import { Reveal } from './Reveal'

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1180px] px-5 md:px-8 ${className}`}>{children}</div>
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.14em] text-brand">{children}</div>
}

export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-[640px] text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-[28px] font-extrabold leading-tight text-white md:text-4xl">{title}</h2>
      <p className="mt-3.5 text-base text-muted">{text}</p>
    </Reveal>
  )
}

export function WhatsAppButton({
  label = `Escríbenos al ${WHATSAPP_DISPLAY}`,
  message,
  size = 'md',
  className = '',
}: {
  label?: ReactNode
  message?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const sizes = {
    sm: 'px-5 py-[11px] text-sm',
    md: 'px-[26px] py-[15px] text-[15px]',
    lg: 'px-[30px] py-[17px] text-base',
  }
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center gap-2.5 whitespace-nowrap rounded-xl bg-wa font-bold text-wa-ink transition-colors hover:bg-wa-hi ${sizes[size]} ${className}`}
    >
      <WhatsAppIcon className={size === 'lg' ? 'h-5 w-5' : 'h-[18px] w-[18px]'} />
      {label}
    </a>
  )
}

export function IconBadge({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] border border-brand/35 bg-brand/12 text-brand">
      {children}
    </div>
  )
}
