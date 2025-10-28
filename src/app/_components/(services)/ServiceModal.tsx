'use client'

import { useState, useEffect, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { Service } from '@/app/_data/services'
import IconForService from './IconsForService'

type Props = {
  service: Service | null
  onClose: () => void
}

/* small skeleton loader for media slots */
const Skeleton = memo(() => (
  <div className="animate-pulse bg-[var(--color-border)]/40 rounded-lg w-full h-48" />
))
Skeleton.displayName = 'Skeleton'

export default function ServiceModal({ service, onClose }: Props) {
  const [loadedMedia, setLoadedMedia] = useState<Record<number, boolean>>({})
  const [prefersReducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
  }, [])

  if (!service) return null
  const d = service.details

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ y: prefersReducedMotion ? 0 : 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: prefersReducedMotion ? 0 : 30, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-[var(--color-bg)] rounded-xl shadow-xl 
                     max-w-3xl w-full p-6 text-left overflow-y-auto max-h-[90vh]
                     will-change-transform contain-layout"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 text-[var(--color-text-muted)] hover:text-accent
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header row */}
          <div className="flex items-start gap-3 mb-4">
            <IconForService
              name={service.icon}
              className="w-8 h-8 text-accent flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl font-semibold text-accent leading-snug">
                {service.title}
              </h2>
              {service.description && (
                <p className="text-sm text-[var(--color-text-muted)] leading-normal">
                  {service.description}
                </p>
              )}
            </div>
          </div>

          {/* media preview (images / clips) */}
          {service.media && service.media.length > 0 && (
            <div className="mb-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.media.map((m, i) => (
                <div
                  key={i}
                  className="relative w-full h-48 rounded-lg overflow-hidden border border-[var(--color-border)] shadow-sm"
                >
                  {!loadedMedia[i] && <Skeleton />}

                  {m.type === 'video' ? (
                    <video
                      src={m.src}
                      controls
                      preload="metadata"
                      onLoadedData={() =>
                        setLoadedMedia((prev) => ({ ...prev, [i]: true }))
                      }
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <Image
                      src={m.src}
                      alt={m.alt}
                      fill
                      className={`object-cover transition-opacity duration-300 ${
                        loadedMedia[i] ? 'opacity-100' : 'opacity-0'
                      }`}
                      sizes="(max-width:768px) 100vw, 50vw"
                      priority={false}
                      onLoadingComplete={() =>
                        setLoadedMedia((prev) => ({ ...prev, [i]: true }))
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* overview / pitch paragraph */}
          {d?.overview && (
            <p className="text-sm text-[var(--color-text-muted)] mb-5 leading-relaxed">
              {d.overview}
            </p>
          )}

          {/* experience bullets */}
          {d?.experience && (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-5"
            >
              <h3 className="text-lg font-semibold text-accent-secondary mb-2">
                Experience Highlights
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-[var(--color-text-muted)]">
                {d.experience.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* strengths chips */}
          {d?.highlights && (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-5"
            >
              <h3 className="text-lg font-semibold text-accent-secondary mb-2">
                Core Strengths
              </h3>
              <ul className="flex flex-wrap gap-2">
                {d.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="border border-[var(--color-border)] rounded-full 
                               px-3 py-1 text-xs bg-[var(--color-bg-secondary)]/40"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* tools list */}
          {d?.tools && (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-5"
            >
              <h3 className="text-lg font-semibold text-accent-secondary mb-2">
                Tools & Tech
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                {d.tools.join(', ')}
              </p>
            </motion.section>
          )}

          {/* sample projects */}
          {d?.sampleProjects?.length ? (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-accent-secondary mb-2">
                Sample Projects
              </h3>
              <ul className="space-y-2 text-sm">
                {d.sampleProjects.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ExternalLink className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[var(--color-text)]">
                        {p.name}
                      </p>
                      {p.desc && (
                        <p className="text-[var(--color-text-muted)]">
                          {p.desc}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.section>
          ) : null}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
