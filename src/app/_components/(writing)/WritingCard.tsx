'use client'

import { Article } from '@/app/_lib/types'
import { motion } from 'framer-motion'

type Props = { entry: Article }

export default function WritingCard({ entry }: Props) {
  return (
    <motion.a
      href={entry.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group block rounded-xl border border-[var(--color-border)]
                 bg-[var(--color-bg-secondary)]/60 p-5 backdrop-blur-sm
                 hover:border-[var(--color-accent)]
                 hover:shadow-[0_0_20px_rgba(226,183,20,0.15)]"
    >
      {entry.image && (
        <img
          src={entry.image}
          alt=""
          className="rounded-lg mb-3 w-full h-40 object-cover"
        />
      )}
      <h3 className="text-lg md:text-xl font-semibold text-accent mb-1">
        {entry.title}
      </h3>
      <p className="text-sm text-muted mb-3">{entry.summary}</p>
      <div className="flex flex-wrap gap-2 text-xs text-[var(--color-text-muted)]">
        {entry.tags?.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[var(--color-border)]
                       bg-[var(--color-bg)]/40 px-2 py-0.5"
          >
            {t}
          </span>
        ))}
        <span className="ml-auto">
          {new Date(entry.date).toLocaleDateString()}
        </span>
      </div>
    </motion.a>
  )
}
