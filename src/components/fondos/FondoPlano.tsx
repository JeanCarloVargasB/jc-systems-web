import { motion } from 'framer-motion'

// Engineering-blueprint grid with a slow diagnostic scan line sweeping down.
export function FondoPlano() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(91,155,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(91,155,255,0.035)_1px,transparent_1px),linear-gradient(rgba(91,155,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(91,155,255,0.07)_1px,transparent_1px)] bg-[size:24px_24px,24px_24px,120px_120px,120px_120px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      <motion.div
        className="absolute inset-x-0 h-40 border-b border-brand/40 bg-gradient-to-b from-transparent to-brand/10"
        initial={{ top: '-20%' }}
        animate={{ top: ['-20%', '110%'] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
      />
      {[
        ['8%', '18%'],
        ['88%', '30%'],
        ['14%', '78%'],
        ['92%', '84%'],
      ].map(([x, y]) => (
        <motion.div
          key={x + y}
          className="absolute h-6 w-6"
          style={{ left: x, top: y }}
          animate={{ opacity: [0.15, 0.6, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="absolute top-1/2 left-0 h-px w-full bg-brand" />
          <span className="absolute top-0 left-1/2 h-full w-px bg-brand" />
          <span className="absolute inset-1.5 rounded-full border border-brand" />
        </motion.div>
      ))}
    </>
  )
}
