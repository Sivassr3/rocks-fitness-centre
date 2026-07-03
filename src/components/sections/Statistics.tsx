import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StatItem {
  value: number
  suffix: string
  prefix?: string
  label: string
  description: string
}

const stats: StatItem[] = [
  { value: 4.9, suffix: '★', label: 'Google Rating', description: 'Based on 416 verified reviews' },
  { value: 3000, suffix: '+', label: 'Transformations', description: 'True transformations achieved' },
  { value: 60, suffix: '+', label: 'Advanced Equipment', description: 'State-of-the-art training gear' },
  { value: 5, suffix: '+', label: 'Years of Excellence', description: 'Kuniyamuthur\'s trusted gym' },
]

function StatCounter({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [displayed, setDisplayed] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!inView || started) return
    setStarted(true)

    const start = 0
    const end = stat.value
    const duration = 2000
    const startTime = performance.now()
    const isDecimal = end % 1 !== 0

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out quart
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = start + (end - start) * eased
      setDisplayed(isDecimal ? parseFloat(current.toFixed(1)) : Math.round(current))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, started, stat.value])

  return (
    <motion.div
      ref={ref}
      className="group text-center relative"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Number */}
      <div
        className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none tracking-tighter mb-2"
        style={{ fontFamily: 'Space Grotesk' }}
        aria-label={`${stat.value}${stat.suffix}`}
      >
        <span className="text-gold-gradient">
          {stat.prefix || ''}{displayed}{stat.suffix}
        </span>
      </div>

      {/* Label */}
      <div
        className="text-white font-bold text-lg md:text-xl mb-1"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        {stat.label}
      </div>

      {/* Description */}
      <div
        className="text-white/40 text-sm"
        style={{ fontFamily: 'Plus Jakarta Sans' }}
      >
        {stat.description}
      </div>

      {/* Divider (except last) */}
      {index < stats.length - 1 && (
        <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" />
      )}
    </motion.div>
  )
}

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true })

  return (
    <section id="statistics" className="section-padding relative overflow-hidden" ref={sectionRef}>
      {/* Gold ambient radial */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(245,180,0,0.06) 0%, transparent 70%)' }}
        />
      </div>

      {/* Oversized BG text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="text-[25vw] font-black leading-none tracking-tighter select-none"
          style={{
            fontFamily: 'Space Grotesk',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(245,180,0,0.03)',
          }}
        >
          STATS
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div ref={headRef} className="text-center mb-16 md:mb-20">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-12 bg-[#F5B400]" />
            <span className="text-[#F5B400] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: 'Inter' }}>
              Numbers That Speak
            </span>
            <div className="h-px w-12 bg-[#F5B400]" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight"
            style={{ fontFamily: 'Space Grotesk' }}
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Proven Results.
            <br />
            <span className="text-gold-gradient">Real People.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 xl:gap-8">
          {stats.map((stat, i) => (
            <StatCounter key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
