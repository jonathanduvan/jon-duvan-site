'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Download, X } from 'lucide-react'

export default function ResumeModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* === Resume Button === */}
      <button
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm md:text-base text-[var(--color-text)]
                   hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300 
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 
                   active:scale-95"
      >
        <span>View Resume</span>
      </button>

      {/* === Modal === */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-full h-[90vh] max-w-5xl bg-[var(--color-bg)] rounded-xl shadow-xl overflow-hidden flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-3 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]/70 backdrop-blur-sm">
                <span className="text-sm md:text-base font-semibold text-[var(--color-text)]">
                  Resume
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-1 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden md:inline">Download</span>
                  </a>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-1 rounded-md hover:bg-[var(--color-bg-secondary)] transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5 text-[var(--color-text-muted)] hover:text-[var(--color-accent)]" />
                  </button>
                </div>
              </div>

              {/* Resume content */}
              <iframe
                src="/resume.pdf"
                title="Resume PDF"
                className="flex-1 w-full h-full border-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
