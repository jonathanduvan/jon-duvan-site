'use client'

import { useEffect, useState } from 'react'
import NavLinks, { NAV_SECTIONS } from './NavLinks'
import ContactLinks from './(hero)/ContactLinks'
import { motion, AnimatePresence } from 'framer-motion'
import FloatingContact from './FloatingContact'

export default function ModernNav() {
  const [active, setActive] = useState('hero')
  const [showTop, setShowTop] = useState(true)
  const [lastY, setLastY] = useState(0)

  // === Track visible section ===
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

  // === Show/hide top nav based on scroll ===
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
      {/* === Desktop / Tablet Top Nav === */}
      <nav
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)]
          backdrop-blur bg-[var(--color-bg-secondary)]/70 transition-transform duration-300
          ${showTop ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="w-full mx-auto flex items-center justify-between py-3 px-6">
          <NavLinks active={active} orientation="row" />
          <ContactLinks orientation="row" />
        </div>
      </nav>

      {/* === Mobile Nav (no contact icons here anymore) === */}
      <nav
        className="md:hidden fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)]
          backdrop-blur bg-[var(--color-bg-secondary)]/70"
      >
        <div className="flex justify-center items-center px-6 py-2">
          <NavLinks active={active} orientation="row" />
        </div>
      </nav>

      {/* === Floating Contact Button (mobile only) === */}
      <FloatingContact />

      {/* === Optional Floating Scroll-aware Contact Bar (desktop only) === */}
      <AnimatePresence>
        {!showTop && (
          <motion.div
            initial={{ opacity: 0, y: -10, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -10, x: 20 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:flex fixed top-16 right-8 z-40
                       bg-[var(--color-bg-secondary)]/70 backdrop-blur-md border border-[var(--color-border)]
                       rounded-xl px-3 py-2 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          >
            <ContactLinks orientation="row" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* === Right-side dot nav (desktop only) === */}
      <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-5 z-40">
        {NAV_SECTIONS.map(section => {
          const isActive = section.id === active
          return (
            <button
              key={section.id}
              onClick={() =>
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
              className={`h-3 w-3 rounded-full border border-[var(--color-border)] transition-colors relative
                ${isActive ? 'bg-[var(--color-accent)]' : 'bg-transparent hover:bg-[var(--color-accent-secondary)]'}`}
              aria-label={`Go to ${section.label}`}
            />
          )
        })}
      </div>
    </>
  )
}
