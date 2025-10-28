'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const books = [
  {
    title: 'Data Science and Applications for Modern Power Systems',
    author: 'Le Xie, Yang Weng, Ram Rajagopal',
  },
  {
    title: 'Do Androids Dream of Electric Sheep?',
    author: 'Philip K. Dick',
  },
]

export default function ReadingNow({ compact = false }: { compact?: boolean }) {
  const [open, setOpen] = useState(false)

  // === Compact mobile version (collapsible) ===
  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-xs bg-[var(--color-bg-secondary)]/60 backdrop-blur-sm 
                   border border-[var(--color-border)] rounded-lg p-3 text-center shadow-sm"
      >
        <button
          onClick={() => setOpen(!open)}
          className="text-sm font-semibold text-accent w-full"
        >
          Currently Reading {open ? '–' : '+'}
        </button>
        {open && (
          <ul className="mt-2 space-y-2">
            {books.map((b) => (
              <li key={b.title} className="text-xs">
                <p className="text-[var(--color-text)] hover:text-accent transition-colors">
                  {b.title}
                </p>
                <p className="text-[var(--color-text-muted)] text-[10px]">
                  {b.author}
                </p>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    )
  }

  // === Floating desktop version ===
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[var(--color-bg-secondary)]/70 backdrop-blur-md
                 mt-10
                 border border-[var(--color-border)] rounded-2xl shadow-lg
                 px-5 py-4 w-64 text-sm relative
                 before:content-[''] before:absolute before:-left-3 before:top-4
                 before:w-4 before:h-4 before:rotate-45
                 before:bg-[var(--color-bg-secondary)]/70 before:border-l before:border-t before:border-[var(--color-border)]
                 before:rounded-sm"
    >
      <h3 className="text-sm font-semibold text-accent mb-2 text-center">
        Currently Reading
      </h3>
      <ul className="space-y-2 text-left">
        {books.map((b) => (
          <li key={b.title}>
            <p className="font-medium text-[var(--color-text)] leading-snug">
              {b.title}
            </p>
            <p className="text-xs text-[var(--color-text-muted)]">{b.author}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
