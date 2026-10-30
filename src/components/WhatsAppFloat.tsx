import { motion } from 'framer-motion'
import { waLink } from '../data/site'
import { WhatsAppIcon } from './icons'

export function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
      className="fixed right-6 bottom-6 z-60 flex h-[58px] w-[58px] items-center justify-center rounded-full bg-wa text-wa-ink shadow-[0_8px_24px_rgba(34,197,94,0.4)]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </motion.a>
  )
}
