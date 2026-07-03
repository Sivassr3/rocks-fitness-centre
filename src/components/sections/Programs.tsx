import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const programs = [
  {
    title: 'Strength & Powerlifting',
    category: 'BUILD',
    desc: 'Structured periodization programs designed to maximize raw strength and muscle mass.',
    duration: '60 min',
    level: 'All Levels',
    highlight: true,
  },
  {
    title: 'Weight Loss & Cardio',
    category: 'BURN',
    desc: 'High-intensity metabolic conditioning combined with strategic nutrition guidance.',
    duration: '45 min',
    level: 'Beginner+',
    highlight: false,
  },
  {
    title: 'Body Transformation',
    category: 'TRANSFORM',
    desc: 'Comprehensive recomposition — lose fat, gain muscle, and redefine your physique entirely.',
    duration: '75 min',
    level: 'Intermediate',
    highlight: false,
  },
  {
    title: 'Personal Training',
    category: 'ELITE',
    desc: '1-on-1 sessions with certified coaches. Maximum accountability, maximum results.',
    duration: 'Custom',
    level: 'All Levels',
    highlight: false,
  },
  {
    title: 'Sports Performance',
    category: 'PERFORM',
    desc: 'Athletic conditioning for players, athletes and competitors seeking peak performance.',
    duration: '60 min',
    level: 'Advanced',
    highlight: false,
  },
  {
    title: 'Yoga & Flexibility',
    category: 'RESTORE',
    desc: 'Mobility, flexibility, and mindfulness practices for holistic wellness and recovery.',
    duration: '45 min',
    level: 'All Levels',
    highlight: false,
  },
]

function ProgramCard({ program, index }: { program: typeof programs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full
        ${program.highlight
          ? 'bg-gradient-to-br from-[#F5B400]/20 to-[#F5B400]/5 border border-[#F5B400]/30'
          : 'glass-card hover:border-[#F5B400]/20'
        }`}
      initial={{ opacity: 0, y: 80, rotateX: 5 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
    >
      <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
        {/* Category tag */}
        <div className="flex items-center justify-between mb-6">
          <span
            className={`text-[10px] tracking-[0.3em] font-bold px-3 py-1 rounded-full
              ${program.highlight
                ? 'bg-[#F5B400] text-black'
                : 'bg-white/8 text-[#F5B400]'
              }`}
            style={{ fontFamily: 'Inter' }}
          >
            {program.category}
          </span>
          <div className="flex items-center gap-2 text-white/30 text-xs" style={{ fontFamily: 'Inter' }}>
            <span>{program.duration}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>{program.level}</span>
          </div>
        </div>

        <h3
          className={`text-xl md:text-2xl font-bold mb-3 transition-colors duration-300 leading-tight
            ${program.highlight ? 'text-white' : 'text-white group-hover:text-[#F5B400]'}`}
          style={{ fontFamily: 'Space Grotesk' }}
        >
          {program.title}
        </h3>

        <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ fontFamily: 'Plus Jakarta Sans' }}>
          {program.desc}
        </p>

        {/* Enroll link */}
        <div className="flex items-center gap-2 mt-auto text-[#F5B400] text-sm font-medium group/link">
          <span style={{ fontFamily: 'Space Grotesk' }}>Enquire Now</span>
          <motion.span
            className="inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            →
          </motion.span>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div
        className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 bg-gradient-to-r from-[#F5B400] to-transparent
          ${program.highlight ? 'w-full' : 'w-0 group-hover:w-full'}`}
      />

      {/* Glow on hover */}
      {!program.highlight && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[#F5B400]/5 to-transparent" />
      )}
    </motion.div>
  )
}

export default function Programs() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-100px' })

  return (
    <section id="programs" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#F5B400]/03 blur-3xl pointer-events-none" />

      <div className="container-custom">
        <div ref={headRef} className="mb-16">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-12 bg-[#F5B400]" />
            <span className="text-[#F5B400] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: 'Inter' }}>
              Training Programs
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight"
            style={{ fontFamily: 'Space Grotesk' }}
            initial={{ opacity: 0, y: 40 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Train With
            <br />
            <span className="text-gold-gradient">Purpose.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {programs.map((program, i) => (
            <ProgramCard key={program.title} program={program} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://wa.me/918056961313?text=Hi!%20I'd%20like%20to%20know%20more%20about%20your%20programs."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#F5B400]/30 text-[#F5B400] font-semibold rounded-full hover:bg-[#F5B400]/10 transition-all duration-300"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            View All Programs & Pricing
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
