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

const Skeleton = memo(() => (
  <div className="animate-pulse bg-(--color-border)/40 rounded-lg w-full h-40 sm:h-48" />
))
Skeleton.displayName = 'Skeleton'

export default function ServiceModal({ service, onClose }: Props) {
  const [loadedMedia, setLoadedMedia] = useState<Record<number, boolean>>({})
  const [prefersReducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    // Set asynchronously to avoid triggering cascading re-renders (ESLint-safe)
    queueMicrotask(() => setReducedMotion(mq.matches))

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
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
          className="relative bg-(--color-bg) rounded-xl shadow-xl 
                     max-w-3xl w-full p-6 text-left overflow-y-auto max-h-[85vh]
                     scrollbar-thin scrollbar-thumb-[var(--color-border)] scrollbar-track-transparent"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 text-(--color-text-muted) hover:text-accent
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) rounded"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-start gap-3 mb-3">
            <IconForService
              name={service.icon}
              className="w-7 h-7 text-accent shrink-0"
            />
            <div>
              <h2 className="text-xl font-semibold text-accent leading-tight">
                {service.title}
              </h2>
              {service.description && (
                <p className="text-sm text-(--color-text) leading-normal mt-0.5">
                  {service.description}
                </p>
              )}
            </div>
          </div>

          {/* Media */}
          {service.media?.length ? (
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.media.map((m, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-video rounded-lg overflow-hidden border border-(--color-border) shadow-sm"
                >
                  {!loadedMedia[i] && <Skeleton />}
                  {m.type === 'video' ? (
                    <video
                      src={m.src}
                      controls
                      preload="metadata"
                      onLoadedData={() =>
                        setLoadedMedia((p) => ({ ...p, [i]: true }))
                      }
                      className="absolute inset-0 w-full h-full object-cover"
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
                      onLoadingComplete={() =>
                        setLoadedMedia((p) => ({ ...p, [i]: true }))
                      }
                    />
                  )}
                </div>
              ))}
            </div>
          ) : null}

          {/* Overview */}
          {d?.overview && (
            <p className="text-sm text-(--color-text-muted) mb-4 leading-relaxed">
              {d.overview}
            </p>
          )}

          {/* Experience */}
          {d?.experience?.length ? (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 space-y-1"
            >
              <h3 className="text-base font-semibold text-accent-secondary">
                Experience Highlights
              </h3>
              <ul className="list-disc pl-5 text-sm text-(--color-text-muted) space-y-0.5">
                {d.experience.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </motion.section>
          ) : null}

          {/* Highlights */}
          {d?.highlights?.length ? (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-base font-semibold text-accent-secondary mb-1">
                Core Strengths
              </h3>
              <ul className="flex flex-wrap gap-2">
                {d.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="border border-(--color-border) rounded-full 
                               px-3 py-0.5 text-xs bg-(--color-bg-secondary)/50"
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </motion.section>
          ) : null}

          {/* Tools */}
          {d?.tools?.length ? (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-base font-semibold text-accent-secondary mb-1">
                Tools & Tech
              </h3>
              <p className="text-sm text-(--color-text-muted)">
                {d.tools.join(', ')}
              </p>
            </motion.section>
          ) : null}

          {/* Projects */}
          {d?.sampleProjects?.length ? (
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-1"
            >
              <h3 className="text-base font-semibold text-accent-secondary mb-1">
                Sample Projects
              </h3>
              <ul className="space-y-1 text-sm">
                {d.sampleProjects.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ExternalLink className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                    <div>
                      <p className="font-medium text-(--color-text) leading-snug">
                        {p.name}
                      </p>
                      {p.desc && (
                        <p className="text-(--color-text-muted) text-xs leading-snug">
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
