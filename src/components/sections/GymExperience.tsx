import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

// Gallery items with generated placeholder colors/descriptions
const galleryItems = [
  { id: 1, label: 'Free Weights Zone', span: 'col-span-2 row-span-2', color: '#1a1a1a' },
  { id: 2, label: 'Cardio Area', span: 'col-span-1 row-span-1', color: '#111111' },
  { id: 3, label: 'Weight Training', span: 'col-span-1 row-span-1', color: '#151515' },
  { id: 4, label: 'Group Sessions', span: 'col-span-1 row-span-2', color: '#131313' },
  { id: 5, label: 'Olympic Platform', span: 'col-span-2 row-span-1', color: '#181818' },
  { id: 6, label: 'Stretching Zone', span: 'col-span-1 row-span-1', color: '#121212' },
]

function GalleryCard({
  item,
  index,
}: {
  item: (typeof galleryItems)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20])

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.span}`}
      style={{ minHeight: '200px' }}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
    >
      {/* Gradient placeholder (replace with actual images) */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          y,
          background: `linear-gradient(135deg, ${item.color} 0%, rgba(245,180,0,0.05) 100%)`,
        }}
      />

      {/* Shimmer lines for visual richness */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-white/5"
            style={{ top: `${25 + i * 25}%`, left: 0, right: 0 }}
          />
        ))}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Gold line reveal on hover */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#F5B400] to-transparent group-hover:w-full transition-all duration-500" />

      {/* Caption */}
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
        <span
          className="text-white text-xs font-semibold tracking-wide"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          {item.label}
        </span>
      </div>

      {/* Corner accent */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-6 h-6 rounded border border-[#F5B400]/50 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-[#F5B400]" />
        </div>
      </div>
    </motion.div>
  )
}

export default function GymExperience() {
  const headRef = useRef<HTMLDivElement>(null)
  const headInView = useInView(headRef, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div ref={headRef} className="mb-14 md:mb-16">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={headInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-12 bg-[#F5B400]" />
            <span className="text-[#F5B400] text-xs tracking-[0.25em] uppercase font-medium" style={{ fontFamily: 'Inter' }}>
              The Experience
            </span>
          </motion.div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight"
              style={{ fontFamily: 'Space Grotesk' }}
              initial={{ opacity: 0, y: 40 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Inside
              <br />
              <span className="text-gold-gradient">Rock's.</span>
            </motion.h2>
            <motion.p
              className="text-white/40 text-sm md:text-base max-w-xs leading-relaxed"
              style={{ fontFamily: 'Plus Jakarta Sans' }}
              initial={{ opacity: 0 }}
              animate={headInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              World-class facilities designed to push every boundary. Premium equipment in a motivating atmosphere.
            </motion.p>
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
