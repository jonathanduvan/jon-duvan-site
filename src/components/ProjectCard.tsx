'use client'

import { motion } from 'framer-motion'
import { Project } from '@/data/projects'
import Image from 'next/image'
import { cardEntrance } from '@/lib/motion'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      variants={cardEntrance}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group relative flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/60 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-[var(--color-accent)] hover:shadow-[0_0_20px_rgba(226,183,20,0.15)]"
    >
      {/* Optional image */}
      {project.image && (
        <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Text content */}
      <div>
        <h3 className="text-xl font-semibold text-accent mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted mb-4">{project.description}</p>
        <ul className="flex flex-wrap gap-2 text-xs text-[var(--color-text-muted)]">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/40 px-3 py-1 transition-colors group-hover:border-[var(--color-accent-secondary)]"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="mt-5 flex gap-4 text-sm">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover underline-offset-4 hover:underline"
          >
            Live Site →
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-secondary hover:text-accent-hover underline-offset-4 hover:underline"
          >
            Code →
          </a>
        )}
      </div>
    </motion.div>
  )
}
