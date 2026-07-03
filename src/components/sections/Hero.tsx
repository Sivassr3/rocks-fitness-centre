import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Star, Phone, MessageCircle, Dumbbell, Users, Trophy } from 'lucide-react'
import gsap from 'gsap'
import heroImage from '@/assets/hero.png'

const HEADLINE_WORDS = ['FORGE', 'YOUR', 'LEGEND']
const SUBHEADLINE = "Coimbatore's most elite training environment. Where champions are built, one rep at a time."

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number; y: number; vx: number; vy: number
      size: number; opacity: number; gold: boolean
    }> = []

    const COUNT = 60
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        gold: Math.random() > 0.6,
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.gold
          ? `rgba(245,180,0,${p.opacity})`
          : `rgba(255,255,255,${p.opacity * 0.5})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy
        p.opacity += (Math.random() - 0.5) * 0.01

        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width }
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10
        p.opacity = Math.max(0.05, Math.min(0.6, p.opacity))
      })
      animId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[2] pointer-events-none"
      aria-hidden="true"
    />
  )
}

const trustBadges = [
  { icon: Star, text: '4.9★ Google Rating', sub: '400+ Reviews' },
  { icon: Users, text: '1000+ Members', sub: 'Active & Counting' },
  { icon: Trophy, text: '5+ Years', sub: 'Of Excellence' },
]

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  // Cinematic 30s bg zoom
  useEffect(() => {
    if (!bgRef.current) return
    const tl = gsap.timeline({ repeat: -1, yoyo: true })
    tl.to(bgRef.current, {
      scale: 1.08,
      duration: 30,
      ease: 'sine.inOut',
    })
    return () => { tl.kill() }
  }, [])

  // Parallax
  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollY = window.scrollY
      bgRef.current.style.transform = `translateY(${scrollY * 0.4}px) scale(${1 + scrollY * 0.0001})`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-0 will-change-transform origin-center">
        <img
          src={heroImage}
          alt="Rock's Health and Fitness Centre"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.4) contrast(1.1) saturate(0.85)' }}
          loading="eager"
        />
        {/* Cinematic color grade overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
        {/* Gold warm tint on right (athlete side) */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#F5B400]/08 via-transparent to-transparent" />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.7) 100%)',
          }}
        />
      </div>

      {/* Ambient light */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#F5B400]/05 blur-3xl z-[1] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#F5B400]/03 blur-3xl z-[1] pointer-events-none" />

      {/* Particles */}
      <ParticleField />

      {/* Oversized background text */}
      <div
        className="absolute bottom-8 left-0 right-0 z-[1] pointer-events-none overflow-hidden select-none"
        aria-hidden="true"
      >
        <div
          className="text-[20vw] font-black leading-none tracking-tighter"
          style={{
            fontFamily: 'Space Grotesk',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(245,180,0,0.04)',
            whiteSpace: 'nowrap',
            transform: 'translateX(-5%)',
          }}
        >
          ROCK'S HEALTH AND FITNESS CENTRE
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom w-full pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Pre-headline badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#F5B400]/30 bg-[#F5B400]/10 mb-8"
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5B400] animate-pulse" />
            <span className="text-[#F5B400] text-xs tracking-[0.2em] uppercase font-medium" style={{ fontFamily: 'Inter' }}>
              Kuniyamuthur, Coimbatore
            </span>
          </motion.div>

          {/* Main Headline — word by word */}
          <h1 className="mb-6 overflow-hidden">
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {HEADLINE_WORDS.map((word, i) => (
                <motion.span
                  key={word}
                  className="block text-[14vw] md:text-[10vw] lg:text-[7rem] xl:text-[9rem] font-black leading-none tracking-tighter text-white"
                  style={{ fontFamily: 'Space Grotesk' }}
                  initial={{ opacity: 0, y: 80, filter: 'blur(20px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.9,
                    delay: 0.8 + i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word === 'YOUR' ? (
                    <span className="text-gold-gradient">{word}</span>
                  ) : word}
                </motion.span>
              ))}
            </div>
          </h1>

          {/* Subheadline */}
          <motion.p
            className="text-white/60 text-base md:text-xl leading-relaxed mb-10 max-w-xl"
            style={{ fontFamily: 'Plus Jakarta Sans' }}
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {SUBHEADLINE}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Primary CTA */}
            <motion.button
              className="group relative overflow-hidden px-8 py-4 bg-[#F5B400] text-black font-bold text-base rounded-full flex items-center justify-center gap-3"
              style={{ fontFamily: 'Space Grotesk' }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(245,180,0,0.5)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#membership')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Book Free Trial</span>
              <Dumbbell size={18} className="relative z-10" />
              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.button>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/918056961313?text=Hi%20Rock's%20Fitness!%20I'd%20like%20to%20enquire%20about%20membership."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-white font-semibold text-base rounded-full flex items-center justify-center gap-3 hover:border-[#F5B400]/40 hover:text-[#F5B400] transition-all duration-300 backdrop-blur-sm bg-white/5"
              style={{ fontFamily: 'Space Grotesk' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={18} />
              WhatsApp Enquiry
            </motion.a>

            {/* Call CTA */}
            <motion.a
              href="tel:+918056961313"
              className="px-8 py-4 border border-white/10 text-white/70 font-semibold text-base rounded-full flex items-center justify-center gap-3 hover:border-[#F5B400]/20 hover:text-white transition-all duration-300"
              style={{ fontFamily: 'Space Grotesk' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone size={18} />
              Call Us
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.text}
                className="flex items-center gap-3 glass-card px-4 py-2.5 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 + i * 0.1, duration: 0.6 }}
              >
                <badge.icon size={16} className="text-[#F5B400] flex-shrink-0" />
                <div>
                  <div className="text-white text-xs font-semibold leading-tight" style={{ fontFamily: 'Space Grotesk' }}>
                    {badge.text}
                  </div>
                  <div className="text-white/40 text-[10px]" style={{ fontFamily: 'Inter' }}>{badge.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'Inter' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} className="text-[#F5B400]/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
