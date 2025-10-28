'use client'

import { Github, Linkedin, Mail, Rss } from 'lucide-react'

export const CONTACT_LINKS = [
  {
    href: 'https://github.com/jonathanduvan',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/jonathan-duvan-gonzalez',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:jon@jonduvan.com',
    icon: Mail,
    label: 'Email',
  },
  {
    href: 'https://fossilfools.substack.com',
    icon: Rss,
    label: 'Substack',
  },
]

export default function ContactLinks({ orientation = 'row' }: { orientation?: 'row' | 'col' }) {
  return (
    <div
      className={`flex ${
        orientation === 'row' ? 'flex-row space-x-4' : 'flex-col space-y-4'
      }`}
    >
      {CONTACT_LINKS.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group text-[var(--color-text-muted)] hover:text-[var(--color-accent)]
                     transition-colors duration-300 flex items-center justify-center"
        >
          <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
        </a>
      ))}
    </div>
  )
}
