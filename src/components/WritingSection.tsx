'use client'

import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import WritingCard from './WritingCard'
import { fossilFools, shoeGum } from '@/data/writing'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export default function WritingSection() {
  return (
    <SectionWrapper id="writing" bg="bg-primary">
      <div className="max-w-6xl px-6 mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-accent mb-8 text-center md:text-left">
          Writing & Data Science
        </h2>

        {/* Fossil Fools & Green Dreams */}
        <section className="sub-section">
          <h3 className="text-2xl font-semibold text-accent-secondary mb-2">
            Fossil Fools & Green Dreams
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] mb-6 max-w-3xl">
            Essays and commentary exploring how energy, labor, and politics intersect —
            asking uncomfortable questions about power and the systems that shape it.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                       sm:overflow-visible overflow-x-auto sm:scroll-auto scroll-smooth
                       snap-x snap-mandatory pb-2 -mx-4 sm:mx-0 px-4 sm:px-0"
          >
            {fossilFools.slice(0, 4).map((entry) => (
              <motion.div
                key={entry.title}
                className="min-w-[85%] sm:min-w-0 snap-center flex-shrink-0"
              >
                <WritingCard entry={entry} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Shoe-Gum Data Reporting */}
        <section className="sub-section">
          <h3 className="text-2xl font-semibold text-accent-secondary mb-2">
            Shoe-Gum Data Reporting
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] mb-6 max-w-3xl">
            Data-driven investigations into the material realities behind
            the energy transition — open-source analyses, visualization experiments,
            and field research written for the public good.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                       sm:overflow-visible overflow-x-auto sm:scroll-auto scroll-smooth
                       snap-x snap-mandatory pb-2 -mx-4 sm:mx-0 px-4 sm:px-0"
          >
            {shoeGum.slice(0, 4).map((entry) => (
              <motion.div
                key={entry.title}
                className="min-w-[85%] sm:min-w-0 snap-center flex-shrink-0"
              >
                <WritingCard entry={entry} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </SectionWrapper>
  )
}
