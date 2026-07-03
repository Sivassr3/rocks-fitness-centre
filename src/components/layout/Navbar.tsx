import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#why-choose' },
  { label: 'Programs', href: '#programs' },
  { label: 'Experience', href: '#experience' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Memberships', href: '#membership' },
  { label: 'Contact', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        ref={navRef}
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-2xl bg-black/60 border-b border-white/8'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <div className="container-custom flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <div className="relative">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#F5B400] flex items-center justify-center">
                <span className="text-[#F5B400] font-bold text-sm md:text-base" style={{ fontFamily: 'Space Grotesk' }}>R</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-[#F5B400]/20 blur-sm animate-pulse" />
            </div>
            <div>
              <div className="text-white font-bold text-sm md:text-base leading-none" style={{ fontFamily: 'Space Grotesk' }}>
                ROCK'S
              </div>
              <div className="text-[#F5B400] text-[9px] md:text-[10px] tracking-[0.25em] uppercase leading-none mt-0.5">
                Health & Fitness
              </div>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-300 relative group"
                style={{ fontFamily: 'Inter' }}
                onClick={() => handleNavClick(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                whileHover={{ y: -1 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#F5B400] group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="tel:+918056961313"
              className="text-sm text-white/70 hover:text-[#F5B400] transition-colors duration-300 flex items-center gap-2"
              style={{ fontFamily: 'Inter' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Call Now
            </motion.a>
            <motion.button
              className="px-5 py-2.5 bg-[#F5B400] text-black text-sm font-semibold rounded-full hover:bg-[#FFD166] transition-all duration-300"
              style={{ fontFamily: 'Space Grotesk' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(245,180,0,0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavClick('#membership')}
            >
              Free Trial
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Full-screen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[99] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-[#050505]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.97 }}
              exit={{ opacity: 0 }}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-8">
              {/* Gold ambient */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#F5B400]/5 blur-3xl pointer-events-none" />

              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    className="text-white text-3xl font-bold tracking-tight hover:text-[#F5B400] transition-colors duration-300"
                    style={{ fontFamily: 'Space Grotesk' }}
                    onClick={() => handleNavClick(link.href)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {link.label}
                  </motion.button>
                ))}

                <motion.div
                  className="flex flex-col items-center gap-4 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                >
                  <a
                    href="tel:+918056961313"
                    className="px-8 py-3.5 bg-[#F5B400] text-black font-bold text-lg rounded-full w-full text-center"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    Book Free Trial
                  </a>
                  <a
                    href="https://wa.me/918056961313?text=Hi%20Rock's%20Health%20and%20Fitness%20Centre!%20I'd%20like%20to%20enquire%20about%20membership."
                    className="text-white/50 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Enquiry →
                  </a>
                </motion.div>
              </div>

              {/* Close button */}
              <motion.button
                className="absolute top-5 right-6 text-white/60 hover:text-white p-2"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                aria-label="Close menu"
              >
                <X size={24} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
