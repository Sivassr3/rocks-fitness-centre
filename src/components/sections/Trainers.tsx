import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award } from 'lucide-react'

const trainers = [
  {
    name: 'Praveen (Founder)',
    role: 'Head Trainer & Founder',
    specialization: 'Bodybuilding · Strength',
    experience: '17+ years',
    bio: 'Fitness coach with 17+ years of fitness experience. Praveen combines competitive bodybuilding experience with certified training to deliver transformative results.',
    certifications: ['ISSA Certified', 'Nutrition Coach'],
  },
  {
    name: 'Trainer 2',
    role: 'Cardio & Weight Loss',
    specialization: 'Functional · Fat Loss',
    experience: '5+ years',
    bio: 'Specialist in metabolic conditioning and functional fitness. Renowned for creating highly effective fat-loss protocols.',
    certifications: ['ACE Certified', 'HIIT Specialist'],
  },
  {
    name: 'Trainer 3',
    role: 'Sports Performance',
    specialization: 'Athletics · Endurance',
    experience: '6+ years',
    bio: 'Former competitive athlete turned performance coach. Helps clients unlock athletic potential and sporting excellence.',
    certifications: ['NSCA-CSCS', 'Sports Nutrition'],
  },
]

export default function Trainers() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-100px' })

  return (
    <section id="trainers" className="section-padding relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#F5B400]/04 blur-3xl pointer-events-none" />

      <div className="container-custom">
        <div ref={headRef} className="mb-14 md:mb-16">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-12 bg-[#F5B400]" />
            <span className="text-[#F5B400] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: 'Inter' }}>
              Meet The Team
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight"
            style={{ fontFamily: 'Space Grotesk' }}
            initial={{ opacity: 0, y: 40 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Expert Coaches.
            <br />
            <span className="text-gold-gradient">Real Results.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              className="group glass-card rounded-2xl overflow-hidden hover:border-[#F5B400]/20 transition-all duration-500"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Avatar area */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                  style={{
                    background: i === 0
                      ? 'linear-gradient(135deg, #1a1005 0%, #2a1a05 50%, #1a1005 100%)'
                      : `linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #111111 100%)`,
                  }}
                />
                {/* Initials avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/5 border border-[#F5B400]/20 flex items-center justify-center">
                    <span className="text-3xl font-black text-[#F5B400]" style={{ fontFamily: 'Space Grotesk' }}>
                      {trainer.name[0]}
                    </span>
                  </div>
                </div>
                {/* Gold glow on founder */}
                {i === 0 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F5B400]/10 to-transparent" />
                )}
                {/* Experience badge */}
                <div className="absolute top-4 right-4 px-2.5 py-1 bg-black/60 backdrop-blur-sm text-[#F5B400] text-xs rounded-full border border-[#F5B400]/20" style={{ fontFamily: 'Inter' }}>
                  {trainer.experience}
                </div>
              </div>

              <div className="p-6">
                {/* Role */}
                <div className="text-[#F5B400] text-[10px] tracking-[0.2em] uppercase mb-2 font-medium" style={{ fontFamily: 'Inter' }}>
                  {trainer.role}
                </div>
                <h3 className="text-white font-bold text-xl mb-1 group-hover:text-[#F5B400] transition-colors duration-300" style={{ fontFamily: 'Space Grotesk' }}>
                  {trainer.name}
                </h3>
                <div className="text-white/40 text-xs mb-4" style={{ fontFamily: 'Inter' }}>{trainer.specialization}</div>
                <p className="text-white/50 text-sm leading-relaxed mb-5" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  {trainer.bio}
                </p>

                {/* Certs */}
                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="flex items-center gap-1 px-2.5 py-1 bg-[#F5B400]/8 text-[#F5B400] text-[10px] rounded-full"
                      style={{ fontFamily: 'Inter' }}
                    >
                      <Award size={10} />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#F5B400] to-transparent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
