'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Rss } from 'lucide-react'

export default function ContactWidget() {
  const contacts = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/YOUR_USERNAME',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/YOUR_USERNAME',
      label: 'LinkedIn',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:your.email@example.com',
      label: 'Email',
    },
    {
      icon: <Rss className="w-5 h-5" />,
      href: 'https://YOUR_SUBSTACK_URL',
      label: 'Substack',
    },
  ]

  return (
    <>
      {/* Desktop / large screens */}
      <motion.aside
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="hidden lg:flex flex-col gap-4 fixed right-8 top-1/2 -translate-y-1/2
                   bg-[var(--color-bg-secondary)]/70 backdrop-blur-md border border-[var(--color-border)]
                   rounded-2xl p-3 shadow-[0_0_20px_rgba(0,0,0,0.25)] z-40"
      >
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={c.label}
            className="group flex items-center justify-center w-10 h-10
                       text-[var(--color-text-muted)] hover:text-[var(--color-accent)]
                       transition-all duration-300"
          >
            {c.icon}
          </a>
        ))}
      </motion.aside>

      {/* Mobile / tablet footer bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="lg:hidden fixed bottom-0 left-0 w-full
                   bg-[var(--color-bg-secondary)]/80 backdrop-blur-md border-t border-[var(--color-border)]
                   flex justify-around py-3 z-40"
      >
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={c.label}
            className="flex flex-col items-center text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all duration-300"
          >
            {c.icon}
          </a>
        ))}
      </motion.div>
    </>
  )
}
