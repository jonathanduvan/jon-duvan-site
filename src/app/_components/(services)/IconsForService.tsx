'use client'

import dynamic, { DynamicOptions } from 'next/dynamic'
import { memo, ComponentType } from 'react'
import type { LucideProps } from 'lucide-react'
import { IconName } from '@/app/_data/services'

/**
 * Helper to safely create dynamically loaded Lucide icons.
 * - Keeps SSR disabled to avoid hydration mismatch
 * - Strongly typed with LucideProps
 */
function dynamicLucideIcon(name: keyof typeof import('lucide-react')) {
  return dynamic<LucideProps>(
    async () => {
      const mod = await import('lucide-react')
      // Return the specific Lucide icon component
      return (mod as unknown as Record<string, ComponentType<LucideProps>>)[name]
    },
    { ssr: false } satisfies DynamicOptions<LucideProps>
  )
}

/** Map of icon names to dynamic Lucide imports */
const iconMap: Record<IconName, ComponentType<LucideProps>> = {
  Code: dynamicLucideIcon('Code'),
  ClipboardCheck: dynamicLucideIcon('ClipboardCheck'),
  BarChart3: dynamicLucideIcon('BarChart3'),
  Sun: dynamicLucideIcon('Sun'),
  BookOpen: dynamicLucideIcon('BookOpen'),
}

type IconForServiceProps = {
  name: IconName
  className?: string
}

/** Memoized icon renderer for cards/grids */
function IconForServiceBase({ name, className }: IconForServiceProps) {
  const IconComponent = iconMap[name]

  if (!IconComponent) {
    return (
      <div
        className={`w-6 h-6 rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-secondary)] ${className ?? ''}`}
        aria-hidden="true"
      />
    )
  }

  return <IconComponent className={className} strokeWidth={1.75} />
}

const IconForService = memo(IconForServiceBase)
IconForService.displayName = 'IconForService'

export default IconForService
