import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const transformations = [
  { name: 'Karthik', duration: '12 weeks', result: '-15kg', type: 'Weight Loss', highlight: 'Lost 15kg of fat while maintaining muscle mass through structured programming.' },
  { name: 'Anitha', duration: '16 weeks', result: '+8kg muscle', type: 'Muscle Gain', highlight: 'Gained 8kg of lean muscle with personalized hypertrophy programming.' },
  { name: 'Surya', duration: '8 weeks', result: '-10kg', type: 'Body Recomp', highlight: 'Complete body recomposition — leaner, stronger, and more confident than ever.' },
]

export default function Transformation() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-100px' })

  return (
    <section id="transformation" className="section-padding relative overflow-hidden">
      {/* Dark gradient bg accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(245,180,0,0.02) 50%, transparent 100%)' }}
        />
      </div>

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
              Success Stories
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight mb-6"
            style={{ fontFamily: 'Space Grotesk' }}
            initial={{ opacity: 0, y: 40 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Real People.
            <br />
            <span className="text-gold-gradient">Real Transformations.</span>
          </motion.h2>
          <motion.p
            className="text-white/40 text-base max-w-lg"
            style={{ fontFamily: 'Plus Jakarta Sans' }}
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            400+ lives transformed. Each journey unique. Every result, earned.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {transformations.map((t, i) => (
            <motion.div
              key={t.name}
              className="group glass-card rounded-2xl overflow-hidden hover:border-[#F5B400]/20 transition-all duration-500 relative"
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              {/* Before/After visual */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 flex">
                  {/* Before */}
                  <div
                    className="w-1/2 h-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #0f0f0f, #1a1a1a)' }}
                  >
                    <div className="text-center">
                      <div className="text-white/20 text-[10px] uppercase tracking-widest mb-2" style={{ fontFamily: 'Inter' }}>Before</div>
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 mx-auto" />
                    </div>
                  </div>
                  {/* Divider */}
                  <div className="w-px bg-[#F5B400]/20 relative z-10">
                    <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#050505] border border-[#F5B400]/30 flex items-center justify-center">
                      <ArrowRight size={10} className="text-[#F5B400]" />
                    </div>
                  </div>
                  {/* After */}
                  <div
                    className="w-1/2 h-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #1a1005, #0f0f0f)' }}
                  >
                    <div className="text-center">
                      <div className="text-[#F5B400] text-[10px] uppercase tracking-widest mb-2" style={{ fontFamily: 'Inter' }}>After</div>
                      <div className="w-16 h-16 rounded-full bg-[#F5B400]/10 border border-[#F5B400]/30 mx-auto" />
                    </div>
                  </div>
                </div>

                {/* Result badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-[#F5B400] text-black text-xs font-bold rounded-full" style={{ fontFamily: 'Space Grotesk' }}>
                  {t.result}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-bold text-lg group-hover:text-[#F5B400] transition-colors duration-300" style={{ fontFamily: 'Space Grotesk' }}>
                    {t.name}
                  </h3>
                  <div className="text-white/30 text-xs" style={{ fontFamily: 'Inter' }}>{t.duration}</div>
                </div>
                <span className="inline-block px-2.5 py-1 bg-white/5 text-white/40 text-[10px] rounded mb-3" style={{ fontFamily: 'Inter' }}>{t.type}</span>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  {t.highlight}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#F5B400] to-transparent group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://wa.me/918056961313?text=I'd%20like%20to%20start%20my%20transformation%20journey!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#F5B400] text-black font-bold rounded-full hover:shadow-[0_0_40px_rgba(245,180,0,0.4)] hover:bg-[#FFD166] transition-all duration-300"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Start Your Transformation
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
