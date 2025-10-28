'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import ContactLinks from './(hero)/ContactLinks'

export default function FloatingContact() {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.25}
      className="md:hidden fixed bottom-6 right-6 z-50 cursor-grab active:cursor-grabbing"
    >
      {/* === Toggle Button === */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 flex items-center justify-center rounded-full 
                   bg-[var(--color-accent)] text-white shadow-lg
                   hover:bg-[var(--color-accent-secondary)] transition-colors"
        aria-label="Contact or social links"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* === Floating Contact Menu === */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            className="absolute bottom-14 right-0 bg-[var(--color-bg-secondary)]/90 backdrop-blur-md
                       border border-[var(--color-border)] rounded-xl shadow-lg p-3"
          >
            <ContactLinks orientation="col" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
