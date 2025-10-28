'use client'
import Link from 'next/link'

export const NAV_SECTIONS = [
  { id: 'hero', label: 'Services' },
  { id: 'career', label: 'Career' },
  { id: 'work', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
]

interface Props {
  active: string
  onClick?: () => void
  orientation?: 'row' | 'column'
}

export default function NavLinks({ active, onClick, orientation = 'row' }: Props) {
  return (
    <ul
      className={`flex ${
        orientation === 'row' ? 'flex-row gap-5' : 'flex-col gap-3'
      } items-center`}
    >
      {NAV_SECTIONS.map(({ id, label }) => (
        <li key={id}>
          <Link
            href={`#${id}`}
            className={`transition-colors ${
              active === id
                ? 'text-[var(--color-accent)]'
                : 'text-[var(--color-text-muted)] hover:text-[var(--color-accent-secondary)]'
            }`}
            onClick={onClick}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
