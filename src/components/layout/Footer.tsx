import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, MessageCircle, MapPin, Globe, Share2, PlayCircle } from 'lucide-react'

const quickLinks = [
  { label: 'About Us', href: '#why-choose' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#location' },
]

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true })

  const currentYear = new Date().getFullYear()

  return (
    <footer ref={ref} className="relative border-t border-white/5 overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#F5B400]/30 to-transparent" />

      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 rounded-full border-2 border-[#F5B400] flex items-center justify-center">
                  <span className="text-[#F5B400] font-bold" style={{ fontFamily: 'Space Grotesk' }}>R</span>
                </div>
                <div className="absolute inset-0 rounded-full bg-[#F5B400]/20 blur-sm" />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none" style={{ fontFamily: 'Space Grotesk' }}>ROCK'S</div>
                <div className="text-[#F5B400] text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: 'Inter' }}>Health & Fitness Centre</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6" style={{ fontFamily: 'Plus Jakarta Sans' }}>
              Coimbatore's premier fitness destination. Building stronger bodies, resilient minds, and 
              transformative habits since 2019. Join 1000+ members who chose excellence.
            </p>
            <div className="flex items-center gap-3">
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
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-sm tracking-wide mb-6 uppercase" style={{ fontFamily: 'Space Grotesk' }}>
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-[#F5B400] transition-colors duration-300 flex items-center gap-2 group"
                    style={{ fontFamily: 'Plus Jakarta Sans' }}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <span className="w-0 h-px bg-[#F5B400] group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-sm tracking-wide mb-6 uppercase" style={{ fontFamily: 'Space Grotesk' }}>
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+918056961313"
                  className="flex items-start gap-3 text-white/40 hover:text-white transition-colors duration-300 group"
                >
                  <Phone size={15} className="text-[#F5B400] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm" style={{ fontFamily: 'Plus Jakarta Sans' }}>+91 80569 61313</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918056961313?text=Hi%20Rock's%20Health%20and%20Fitness%20Centre!%20I'd%20like%20to%20enquire%20about%20membership."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/40 hover:text-white transition-colors duration-300 group"
                >
                  <MessageCircle size={15} className="text-[#F5B400] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm" style={{ fontFamily: 'Plus Jakarta Sans' }}>WhatsApp Enquiry</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/40">
                  <MapPin size={15} className="text-[#F5B400] mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                    Kuniyamuthur,<br />Coimbatore – 641 008<br />Tamil Nadu
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white/25 text-xs" style={{ fontFamily: 'Inter' }}>
            © {currentYear} Rock's Health & Fitness Centre. All rights reserved.
          </p>
          <p className="text-white/15 text-xs" style={{ fontFamily: 'Inter' }}>
            Kuniyamuthur, Coimbatore, Tamil Nadu
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
