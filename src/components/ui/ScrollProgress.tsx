import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      setVisible(v > 0.01)
    })
    return unsubscribe
  }, [scrollYProgress])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[200] h-[2px] bg-gradient-to-r from-[#F5B400] to-[#FFD166] origin-left"
      style={{ scaleX: scrollYProgress, opacity: visible ? 1 : 0 }}
      transition={{ opacity: { duration: 0.3 } }}
    />
  )
}
