'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0,  }}
      animate={{ scale: 1, opacity: 1, }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 0.3,
        repeatType: 'reverse',
      }}
    >
      {children}
    </motion.div>
  )
}
