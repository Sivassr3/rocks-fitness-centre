import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Zap, Users, Clock, Award, Heart } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Expert-Led Training',
    desc: 'Certified coaches who craft personalized programs for maximum results and zero guesswork.',
    gold: true,
  },
  {
    icon: Zap,
    title: 'Premium Equipment',
    desc: 'State-of-the-art machines and free weights from leading global fitness brands.',
    gold: false,
  },
  {
    icon: Users,
    title: 'Community Energy',
    desc: 'A motivating tribe of 1000+ members who push each other to exceed every limit.',
    gold: false,
  },
  {
    icon: Clock,
    title: 'Flexible Timings',
    desc: 'Open 7 days a week with morning and evening batches designed for busy schedules.',
    gold: false,
  },
  {
    icon: Award,
    title: '5+ Years Legacy',
    desc: 'Proven track record of hundreds of transformations with a 4.9★ Google rating.',
    gold: false,
  },
  {
    icon: Heart,
    title: 'Holistic Wellness',
    desc: 'Beyond aesthetics — we build strength, endurance, nutrition habits, and mental resilience.',
    gold: false,
  },
]

function FeatureCard({ icon: Icon, title, desc, gold, index }: (typeof reasons)[0] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={`group relative glass-card rounded-2xl p-6 md:p-8 overflow-hidden transition-all duration-500
        hover:border-[#F5B400]/30 hover:bg-white/[0.06] ${gold ? 'border-[#F5B400]/30' : ''}`}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Gold glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#F5B400]/10 to-transparent" />
      </div>

      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110
        ${gold ? 'bg-[#F5B400] ' : 'bg-white/8 group-hover:bg-[#F5B400]/20'}`}>
        <Icon size={22} className={gold ? 'text-black' : 'text-[#F5B400]'} />
      </div>

      <h3
        className="text-white font-bold text-lg mb-3 group-hover:text-[#F5B400] transition-colors duration-300"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        {title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans' }}>
        {desc}
      </p>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-[#F5B400] to-transparent group-hover:w-full transition-all duration-500" />
    </motion.div>
  )
}

export default function WhyChoose() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-100px' })

  return (
    <section id="why-choose" className="section-padding relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#F5B400]/04 blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="container-custom">
        {/* Header */}
        <div ref={headRef} className="mb-16 md:mb-20">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="h-px w-12 bg-[#F5B400]" />
            <span className="text-[#F5B400] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: 'Inter' }}>
              Why Rock's
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-6"
            style={{ fontFamily: 'Space Grotesk' }}
            initial={{ opacity: 0, y: 40 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Not Just a Gym.
            <br />
            <span className="text-gold-gradient">An Experience.</span>
          </motion.h2>
          <motion.p
            className="text-white/50 text-lg max-w-xl leading-relaxed"
            style={{ fontFamily: 'Plus Jakarta Sans' }}
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Rock's Health & Fitness Centre is Coimbatore's premier destination for serious transformation.
            Where every visit pushes you closer to who you're meant to be.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <FeatureCard key={reason.title} {...reason} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
