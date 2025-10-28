'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { timeline } from '@/app/_data/timeline'
import { useRef, useEffect, useState } from 'react'

type Point = { x: number; y: number }

export default function TimelineZigzag() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [points, setPoints] = useState<Point[]>([])

  /** === Measure connector points continuously === */
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const measure = () => {
      const dots = container.querySelectorAll('[data-dot]')
      const rect = container.getBoundingClientRect()
      const scrollX = container.scrollLeft

      const coords: Point[] = Array.from(dots).map((dot) => {
        const d = (dot as HTMLElement).getBoundingClientRect()
        return {
          x: d.left - rect.left + d.width / 2 + scrollX,
          y: d.top - rect.top + d.height / 2,
        }
      })
      setPoints(coords)
    }

    const loop = () => {
      measure()
      requestAnimationFrame(loop)
    }

    loop()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  /** === Shadow fading as user scrolls === */
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const atStart = container.scrollLeft <= 5
      const atEnd =
        container.scrollLeft + container.clientWidth >= container.scrollWidth - 5
      container.dataset.scroll = atStart ? 'start' : atEnd ? 'end' : ''
    }

    const loop = () => {
      handleScroll()
      requestAnimationFrame(loop)
    }
    loop()
  }, [])

  const polyPoints = points.map((p) => `${p.x},${p.y}`).join(' ')

  /** === Sync line draw with scroll progress === */
  const { scrollXProgress } = useScroll({ container: containerRef })
  // offset curve so it starts partially visible
  const visibleProgress = useSpring(
    useTransform(scrollXProgress, [0, 1], [0.25, 1.05]),
    { stiffness: 80, damping: 20 }
  )

  return (
    <div ref={containerRef} className="scroll-hint relative pb-10 pt-10">
      {/* SVG connector line */}
      {points.length > 1 && (
        <motion.svg
          className="absolute top-0 left-0 h-full min-w-8xl pointer-events-none"
          viewBox={`0 0 ${
            (points.at(-1)?.x ?? 0) + 50
          } ${Math.max(...points.map((p) => p.y + 80), 200)}`}
          preserveAspectRatio="xMinYMin slice"
        >
          <defs>
            <linearGradient id="zigzag-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-accent-secondary)" />
              <stop offset="100%" stopColor="var(--color-accent)" />
            </linearGradient>
          </defs>

          <motion.polyline
            key={polyPoints}
            points={polyPoints}
            fill="none"
            stroke="url(#zigzag-line)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              pathLength: visibleProgress, // now starts already 25% drawn
            }}
          />
        </motion.svg>
      )}

      {/* Timeline entries */}
      <div className="relative flex gap-16 px-12 md:gap-15 lg:px-20">
        {timeline.map((item, idx) => {
          const isTop = idx % 2 === 0
          return (
            <motion.div
              key={item.title}
              className={`relative flex flex-col items-center ${
                isTop ? 'justify-end pt-24' : 'justify-start pb-20'
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div
                className={`w-64 text-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/70 backdrop-blur-sm p-4 shadow-glow ${
                  isTop ? 'order-first mb-4' : 'order-last mt-4'
                }`}
              >
                <h4 className="text-lg font-semibold text-accent mb-1">
                  {item.title}
                </h4>
                {item.org && (
                  <p className="text-sm text-[var(--color-text-muted)] mb-2">
                    {item.org}
                  </p>
                )}
                <p className="text-sm text-muted mb-3">{item.description}</p>
                <p className="text-base font-semibold text-accent-secondary">
                  {item.year}
                </p>
              </div>

              <motion.div
                data-dot
                className="z-10 w-4 h-4 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-bg-secondary)] shadow-[0_0_12px_rgba(0,0,0,0.5)]"
                style={{ opacity: visibleProgress }}
              />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
