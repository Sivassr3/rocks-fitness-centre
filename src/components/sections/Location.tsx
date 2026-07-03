import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Clock, Globe, Share2, PlayCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Kuniyamuthur, Coimbatore, Tamil Nadu',
    link: "https://maps.app.goo.gl/nuAvTMjomThqk1jr8",
    linkLabel: 'Get Directions →',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 80569 61313',
    link: 'tel:+918056961313',
    linkLabel: 'Call Now →',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 80569 61313',
    link: "https://wa.me/918056961313?text=Hi%20Rock's%20Health%20and%20Fitness%20Centre!%20I'd%20like%20to%20enquire%20about%20membership.",
    linkLabel: 'Message Us →',
  },
  {
    icon: Clock,
    label: 'Timings',
    value: 'Mon–Sat: 5:30 AM – 10:00 PM\nSun: 6:00 AM – 8:00 PM',
    link: null,
    linkLabel: null,
  },
]

export default function Location() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="location" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Ambient */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#F5B400]/04 blur-3xl pointer-events-none" />

      <div className="container-custom">
        {/* Header */}
        <div className="mb-14">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-12 bg-[#F5B400]" />
            <span className="text-[#F5B400] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: 'Inter' }}>
              Find Us
            </span>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight"
            style={{ fontFamily: 'Space Grotesk' }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Visit Us in
            <br />
            <span className="text-gold-gradient">Coimbatore.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                className="glass-card rounded-2xl p-5 group hover:border-[#F5B400]/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F5B400]/10 flex items-center justify-center group-hover:bg-[#F5B400]/20 transition-colors duration-300">
                    <item.icon size={16} className="text-[#F5B400]" />
                  </div>
                  <span className="text-white/40 text-xs tracking-wide uppercase" style={{ fontFamily: 'Inter' }}>{item.label}</span>
                </div>
                <p className="text-white text-sm font-medium leading-relaxed mb-3 whitespace-pre-line" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  {item.value}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-[#F5B400] text-xs font-medium hover:underline"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {item.linkLabel}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            className="relative rounded-2xl overflow-hidden h-80 lg:h-full min-h-[320px] glass-card border border-white/8"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Rock's%20Health%20and%20Fitness%20Centre,%20Kuniyamuthur,%20Coimbatore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rock's Health and Fitness Centre location"
              className="absolute inset-0"
            />
            {/* Map overlay for style */}
            <div className="absolute inset-0 pointer-events-none border border-[#F5B400]/10 rounded-2xl" />
          </motion.div>
        </div>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <span className="text-white/30 text-sm" style={{ fontFamily: 'Inter' }}>Follow us:</span>
          {[
            { Icon: Globe, href: '#', label: 'Instagram' },
            { Icon: Share2, href: '#', label: 'Facebook' },
            { Icon: PlayCircle, href: '#', label: 'YouTube' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-white/50 hover:text-[#F5B400] hover:border-[#F5B400]/30 transition-all duration-300"
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
