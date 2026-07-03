import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, MessageCircle, MapPin } from 'lucide-react'

export default function MembershipCTA() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="membership" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Dramatic background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gold radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(245,180,0,0.12) 0%, rgba(245,180,0,0.04) 40%, transparent 70%)',
          }}
        />
        {/* Subtle horizontal lines */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-white/[0.02]"
            style={{ top: `${10 + i * 16}%` }}
          />
        ))}
      </div>

      {/* Oversized background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="text-[22vw] font-black leading-none select-none"
          style={{
            fontFamily: 'Space Grotesk',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(245,180,0,0.04)',
          }}
        >
          JOIN
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="h-px w-12 bg-[#F5B400]" />
              <span className="text-[#F5B400] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: 'Inter' }}>
                Start Today
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8"
              style={{ fontFamily: 'Space Grotesk' }}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Your First
              <br />
              <span className="text-gold-gradient">Session</span>
              <br />
              Is Free.
            </motion.h2>

            <motion.p
              className="text-white/50 text-lg leading-relaxed mb-10 max-w-md"
              style={{ fontFamily: 'Plus Jakarta Sans' }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              No commitment. No pressure. Just walk in, experience the Rock's difference,
              and decide. We're confident you'll never look back.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <motion.a
                href="https://wa.me/918056961313?text=Hi!%20I'd%20like%20to%20book%20a%20free%20trial%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden px-8 py-4 bg-[#F5B400] text-black font-bold text-base rounded-full flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(245,180,0,0.5)] transition-all duration-300"
                style={{ fontFamily: 'Space Grotesk' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle size={18} />
                Book via WhatsApp
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
              </motion.a>

              <motion.a
                href="tel:+918056961313"
                className="px-8 py-4 border border-white/20 text-white font-semibold text-base rounded-full flex items-center justify-center gap-3 hover:border-[#F5B400]/40 hover:text-[#F5B400] transition-all duration-300"
                style={{ fontFamily: 'Space Grotesk' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone size={18} />
                Call Now
              </motion.a>
            </motion.div>

            {/* Walk-in info */}
            <motion.p
              className="flex items-center gap-2 text-white/30 text-sm"
              style={{ fontFamily: 'Inter' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <MapPin size={14} className="text-[#F5B400]/60" />
              Walk-ins welcome — Kuniyamuthur, Coimbatore
            </motion.p>
          </div>

          {/* Right: Plans */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { plan: 'Monthly', price: '₹999', period: '/month', features: ['Full gym access', 'Trainer guidance', 'Locker facility'], highlight: false },
              { plan: 'Quarterly', price: '₹2,499', period: '/3 months', features: ['Full gym access', 'Diet consultation', 'Progress tracking', '1 Free session'], highlight: true },
              { plan: 'Annual', price: '₹7,999', period: '/year', features: ['Everything in Quarterly', 'Unlimited personal sessions', 'Body composition analysis'], highlight: false },
            ].map((tier, i) => (
              <motion.div
                key={tier.plan}
                className={`relative rounded-2xl p-6 overflow-hidden transition-all duration-300
                  ${tier.highlight
                    ? 'bg-gradient-to-r from-[#F5B400]/15 to-[#F5B400]/5 border border-[#F5B400]/40'
                    : 'glass-card hover:border-white/15'
                  }`}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                {tier.highlight && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 bg-[#F5B400] text-black text-[10px] font-bold rounded-full tracking-wide">
                    POPULAR
                  </div>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <div className="text-white/50 text-xs mb-1" style={{ fontFamily: 'Inter' }}>{tier.plan}</div>
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-3xl font-black ${tier.highlight ? 'text-gold-gradient' : 'text-white'}`}
                        style={{ fontFamily: 'Space Grotesk' }}
                      >
                        {tier.price}
                      </span>
                      <span className="text-white/40 text-sm" style={{ fontFamily: 'Inter' }}>{tier.period}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-white/60 text-sm" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                      <div className="w-1 h-1 rounded-full bg-[#F5B400]" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-[#F5B400]/0 via-[#F5B400]/30 to-transparent" />
              </motion.div>
            ))}

            <p className="text-white/30 text-xs text-center mt-2" style={{ fontFamily: 'Inter' }}>
              * Prices indicative. Contact us for current offers & student discounts.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
