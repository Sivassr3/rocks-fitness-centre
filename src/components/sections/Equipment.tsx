import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const equipment = [
  { name: 'Olympic Barbells & Plates', category: 'Free Weights', description: 'Competition-grade Olympic bars from top manufacturers. Full plate selection up to 20kg per disc.' },
  { name: 'Cable & Pulley Systems', category: 'Machines', description: 'Dual-stack adjustable cable machines for unlimited exercise variation and precise resistance control.' },
  { name: 'Commercial Treadmills', category: 'Cardio', description: 'High-speed commercial treadmills with incline up to 15%. Built for serious endurance training.' },
  { name: 'Smith Machine', category: 'Free Weights', description: 'Counter-balanced Smith machine for safe heavy lifting and guided movement patterns.' },
  { name: 'Dumbbell Rack 2.5–50kg', category: 'Free Weights', description: 'Complete dumbbell set in chromed hex dumbbells. Perfect for isolation and compound movements.' },
  { name: 'Cardio Zone', category: 'Cardio', description: 'Ellipticals, rowing machines, stationary bikes for diverse, low-impact cardiovascular training.' },
]

export default function Equipment() {
  const ref = useRef<HTMLElement>(null)
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const xLeft = useTransform(scrollYProgress, [0, 1], [-40, 40])
  const xRight = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="equipment" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Side ambient glows */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 rounded-full bg-[#F5B400]/04 blur-3xl pointer-events-none"
        style={{ x: xLeft }}
      />
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-96 rounded-full bg-[#F5B400]/04 blur-3xl pointer-events-none"
        style={{ x: xRight }}
      />

      <div className="container-custom">
        <div ref={headRef} className="mb-14">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-12 bg-[#F5B400]" />
            <span className="text-[#F5B400] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: 'Inter' }}>
              Equipment
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight"
            style={{ fontFamily: 'Space Grotesk' }}
            initial={{ opacity: 0, y: 40 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Built for
            <br />
            <span className="text-gold-gradient">Champions.</span>
          </motion.h2>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: equipment list */}
          <div className="flex flex-col gap-4">
            {equipment.map((item, i) => (
              <motion.div
                key={item.name}
                className="group glass-card rounded-xl p-5 flex items-start gap-5 hover:border-[#F5B400]/20 transition-all duration-300 overflow-hidden relative"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                {/* Index number */}
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#F5B400]/10 flex items-center justify-center text-[#F5B400] font-bold text-xs group-hover:bg-[#F5B400]/20 transition-colors duration-300" style={{ fontFamily: 'Space Grotesk' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold text-sm group-hover:text-[#F5B400] transition-colors duration-300" style={{ fontFamily: 'Space Grotesk' }}>
                      {item.name}
                    </h3>
                    <span className="px-2 py-0.5 bg-white/5 text-white/30 text-[10px] rounded" style={{ fontFamily: 'Inter' }}>{item.category}</span>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans' }}>{item.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#F5B400] to-transparent group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Right: visual */}
          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden hidden lg:block"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1208 50%, #0f0f0f 100%)',
              }}
            />
            {/* Gold geometric accent */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div
                  className="w-48 h-48 rounded-full border border-[#F5B400]/10"
                  style={{ boxShadow: '0 0 80px rgba(245,180,0,0.08)' }}
                />
                <div className="absolute inset-8 rounded-full border border-[#F5B400]/15" />
                <div className="absolute inset-16 rounded-full bg-[#F5B400]/10 flex items-center justify-center">
                  <span className="text-[#F5B400] text-4xl font-black" style={{ fontFamily: 'Space Grotesk' }}>R</span>
                </div>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-[#F5B400]/30 rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-[#F5B400]/30 rounded-br-lg" />

            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-white/20 text-xs uppercase tracking-widest mb-2" style={{ fontFamily: 'Inter' }}>Premium Equipment</div>
              <div className="text-white font-bold text-xl" style={{ fontFamily: 'Space Grotesk' }}>World-Class. <span className="text-[#F5B400]">Always.</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
