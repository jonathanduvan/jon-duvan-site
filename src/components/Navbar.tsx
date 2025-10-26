'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'writing', label: 'Writing' },
]

export default function Navbar() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { threshold: 0.4 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach(section => observer.observe(section))
    return () => sections.forEach(section => observer.unobserve(section))
  }, [])

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]/70 backdrop-blur">
      <ul className="flex justify-center gap-4 py-4 text-sm md:text-base">
        {NAV_SECTIONS.map(({ id, label }) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              className={`transition-colors ${
                active === id
                  ? 'text-[var(--color-accent)]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-accent-secondary)]'
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
