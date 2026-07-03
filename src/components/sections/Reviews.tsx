import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Jenosh Immanuvel',
    rating: 5,
    time: '3 months ago',
    text: "So far, Rock Fitness Centre has been the best gym I've had the opportunity to train at—helping me push my limits and build the best version of my physique.",
    badge: 'Physique Transformation',
  },
  {
    name: 'Poornima K',
    rating: 5,
    time: '4 months ago',
    text: "I've had an amazing experience at this gym! The environment is extremely motivating, clean, and well-maintained. The trainers are highly professional, supportive, and always ready to guide with proper form.",
    badge: 'Motivating Vibe',
  },
  {
    name: 'Anonymous',
    rating: 5,
    time: 'Recent',
    text: "A good atmosphere for workout well maintained professional trainers..",
    badge: 'Professional Trainers',
  },
  {
    name: 'Local Guide',
    rating: 5,
    time: 'Recent',
    text: "The best gym in the locality with imported equipment and good ambiance.",
    badge: 'Premium Equipment',
  },
  {
    name: 'Fitness Enthusiast',
    rating: 5,
    time: 'Recent',
    text: "Its a good place for fitness 😊🥰 best gym best quality ill give 5 🌟",
    badge: 'Top Quality',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#F5B400] text-[#F5B400]" />
      ))}
    </div>
  )
}

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true })

  // Auto-advance
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((c) => (c + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [isPaused, current])

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length)
  }
  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % reviews.length)
  }

  // Show 3 at a time on desktop, 1 on mobile
  const visible = [
    reviews[current % reviews.length],
    reviews[(current + 1) % reviews.length],
    reviews[(current + 2) % reviews.length],
  ]

  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-[#F5B400]/04 blur-3xl pointer-events-none" />

      <div className="container-custom">
        {/* Header */}
        <div ref={headRef} className="mb-14">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-12 bg-[#F5B400]" />
            <span className="text-[#F5B400] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: 'Inter' }}>
              Google Reviews
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2
                className="text-4xl md:text-6xl font-black text-white leading-none tracking-tight mb-3"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Members Love
                <br />
                <span className="text-gold-gradient">Rock's Health and Fitness Centre.</span>
              </h2>
            </motion.div>

            {/* Overall rating */}
            <motion.a
              href="https://maps.app.goo.gl/nuAvTMjomThqk1jr8"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card px-8 py-6 rounded-2xl flex items-center gap-6 cursor-pointer hover:border-[#F5B400]/40 transition-colors duration-300 hover:bg-white/5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={headInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-5xl font-black text-gold-gradient" style={{ fontFamily: 'Space Grotesk' }}>
                4.9
              </div>
              <div>
                <StarRating rating={5} />
                <div className="text-white/50 text-xs mt-1" style={{ fontFamily: 'Inter' }}>400+ Google Reviews</div>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop: 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-5">
            {visible.map((review, i) => (
              <motion.div
                key={`${review.name}-${i}`}
                className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:border-[#F5B400]/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Quote size={24} className="text-[#F5B400]/30 mb-4" />

                <p className="text-white/70 text-sm leading-relaxed mb-6" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  "{review.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold text-sm" style={{ fontFamily: 'Space Grotesk' }}>{review.name}</div>
                    <StarRating rating={review.rating} />
                    <div className="text-white/30 text-xs mt-1" style={{ fontFamily: 'Inter' }}>{review.time}</div>
                  </div>
                  <span className="px-2.5 py-1 bg-[#F5B400]/10 text-[#F5B400] text-[10px] rounded-full" style={{ fontFamily: 'Inter' }}>
                    {review.badge}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-[#F5B400] to-transparent group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Mobile: single card */}
          <div className="md:hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                className="glass-card rounded-2xl p-6 relative overflow-hidden"
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Quote size={24} className="text-[#F5B400]/30 mb-4" />
                <p className="text-white/70 text-sm leading-relaxed mb-6" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  "{reviews[current].text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold text-sm" style={{ fontFamily: 'Space Grotesk' }}>{reviews[current].name}</div>
                    <StarRating rating={reviews[current].rating} />
                    <div className="text-white/30 text-xs mt-1" style={{ fontFamily: 'Inter' }}>{reviews[current].time}</div>
                  </div>
                  <span className="px-2.5 py-1 bg-[#F5B400]/10 text-[#F5B400] text-[10px] rounded-full" style={{ fontFamily: 'Inter' }}>
                    {reviews[current].badge}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? 'w-6 h-1.5 bg-[#F5B400]' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-[#F5B400] hover:border-[#F5B400]/30 transition-all duration-300"
                onClick={prev}
                aria-label="Previous review"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-white/60 hover:text-[#F5B400] hover:border-[#F5B400]/30 transition-all duration-300"
                onClick={next}
                aria-label="Next review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-sm hover:text-[#F5B400] transition-colors duration-300 underline underline-offset-4"
            style={{ fontFamily: 'Inter' }}
          >
            View all reviews on Google Maps →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
