'use client'

import { Service } from '@/app/_data/services'
import { motion } from 'framer-motion'
import IconForService from './IconsForService'

type Props = {
  service: Service
  onOpen: (service: Service) => void
}

export default function ServiceCard({ service, onOpen }: Props) {
  return (
    <motion.button
      type="button"
      onClick={() => onOpen(service)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className="w-full text-left cursor-pointer rounded-xl border border-[var(--color-border)]
                 bg-[var(--color-bg-secondary)]/60 backdrop-blur-sm p-5 shadow-glow
                 hover:border-[var(--color-accent)] transition focus:outline-none
                 focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-0"
    >
      <div className="flex items-start gap-3 mb-3">
        <IconForService
          name={service.icon}
          className="w-6 h-6 text-accent flex-shrink-0"
        />
        <div>
          <h3 className="font-semibold text-lg text-accent leading-snug">
            {service.title}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-normal">
            {service.short}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 text-xs text-[var(--color-text-muted)]">
        {service.tags.slice(0, 3).map((t) => (
          <span
            key={t}
            className="border border-[var(--color-border)] px-2 py-0.5 rounded-full
                       bg-[var(--color-bg)]/30"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.button>
  )
}
