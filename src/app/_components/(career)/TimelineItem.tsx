'use client'

import { motion } from 'framer-motion'
import { TimelineItem as Item } from '@/app/_data/timeline'

type Props = { item: Item; isLast: boolean }

export default function TimelineItem({ item, isLast }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0, 0, 0.58, 1] }}
      className="relative flex gap-6 pb-10 last:pb-0"
    >
      {/* Left line + dot */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-[var(--color-accent)]" />
        {!isLast && (
          <div className="flex-1 w-[2px] bg-[var(--color-border)] mt-1" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-accent mb-1">
          {item.title}
        </h4>
        {item.org && (
          <p className="text-sm text-[var(--color-text-muted)] mb-1">
            {item.org}
          </p>
        )}
        <p className="text-sm text-muted mb-1">{item.description}</p>
        <p className="text-xs text-[var(--color-text-muted)]">{item.year}</p>
      </div>
    </motion.div>
  )
}
