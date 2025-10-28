'use client'

import dynamic from 'next/dynamic'
import { memo } from 'react'
import type { LucideProps } from 'lucide-react'
import { IconName } from '@/app/_data/services'

// For each icon we support, define a lazy loader.
// next/dynamic ensures code splitting per-icon.
const iconMap: Record<IconName, ReturnType<typeof dynamic>> = {
  Code: dynamic(async () => {
    const mod = await import('lucide-react')
    return mod.Code
  }),
  ClipboardCheck: dynamic(async () => {
    const mod = await import('lucide-react')
    return mod.ClipboardCheck
  }),
  BarChart3: dynamic(async () => {
    const mod = await import('lucide-react')
    return mod.BarChart3
  }),
  Sun: dynamic(async () => {
    const mod = await import('lucide-react')
    return mod.Sun
  }),
  BookOpen: dynamic(async () => {
    const mod = await import('lucide-react')
    return mod.BookOpen
  }),
}

type IconForServiceProps = {
  name: IconName
  className?: string
}

// memo to avoid rerender noise in cards/grids
function IconForServiceBase({ name, className }: IconForServiceProps) {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    // graceful fallback box, tiny and neutral
    return (
      <div
        className={`w-6 h-6 rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-secondary)] ${className || ''
          }`}
        aria-hidden="true"
      />
    )
  }

  // We forward className to Lucide so tailwind sizing/color still works
  return <IconComponent className={className} strokeWidth={1.75 as LucideProps['strokeWidth']} />
}

const IconForService = memo(IconForServiceBase)
IconForService.displayName = 'IconForService'

export default IconForService
