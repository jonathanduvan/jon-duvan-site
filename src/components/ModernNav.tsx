'use client'
import { useEffect, useState } from 'react'
import NavLinks, { NAV_SECTIONS } from './NavLinks'
import { motion, AnimatePresence } from 'framer-motion'


export default function ModernNav() {
  const [active, setActive] = useState('hero')
  const [showTop, setShowTop] = useState(true)
  const [lastY, setLastY] = useState(0)

  // track visible section
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { threshold: 0.4 }
    )
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(s => observer.observe(s))
    return () => sections.forEach(s => observer.unobserve(s))
  }, [])

  // show/hide top nav based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < 80) setShowTop(true)
      else if (currentY < lastY) setShowTop(true)
      else setShowTop(false)
      setLastY(currentY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  return (
    <>
      {/* desktop / tablet: scroll-aware top nav */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)]
          backdrop-blur bg-[var(--color-bg-secondary)]/70 transition-transform duration-300
          ${showTop ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="mx-auto flex justify-center py-3">
          <NavLinks active={active} />
        </div>
      </nav>

      {/* mobile: thumb-friendly bottom bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--color-border)]
          backdrop-blur bg-[var(--color-bg-secondary)]/70">
        <div className="flex justify-center py-2">
          <NavLinks active={active} orientation="row" />
        </div>
      </nav>

      {/* optional: small scroll dots on right for desktop aesthetic */}

        {/* right-side contextual dot nav */}
        <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-5 z-40">
        {NAV_SECTIONS.map((section, index) => {
            const isActive = section.id === active
            const prev = NAV_SECTIONS[index - 1]
            const next = NAV_SECTIONS[index + 1]
            const showPrevLabel = prev && active === section.id && prev.label
            const showNextLabel = next && active === section.id && next.label

            return (
            <div key={section.id} className="relative flex items-center">
                {/* label for previous section (above current dot) */}
                {showPrevLabel && (
                <AnimatePresence>
                    <motion.span
                    key={`prev-${prev.id}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 0.6, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-6 -top-6 text-xs text-[var(--color-text-muted)] select-none"
                    >
                    {prev.label}
                    </motion.span>
                </AnimatePresence>
                )}

                {/* actual dot */}
                <button
                onClick={() =>
                    document.getElementById(section.id)?.scrollIntoView({
                    behavior: 'smooth',
                    })
                }
                className={`h-3 w-3 rounded-full border border-[var(--color-border)] transition-colors relative
                    ${isActive ? 'bg-[var(--color-accent)]' : 'bg-transparent hover:bg-[var(--color-accent-secondary)]'}`}
                aria-label={`Go to ${section.label}`}
                >
                {/* label for next section (below current dot) */}
                {showNextLabel && (
                    <AnimatePresence>
                    <motion.span
                        key={`next-${next.id}`}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 0.6, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-6 top-6 text-xs text-[var(--color-text-muted)] select-none"
                    >
                        {next.label}
                    </motion.span>
                    </AnimatePresence>
                )}
                </button>
            </div>
            )
        })}
        </div>

    </>
  )
}
