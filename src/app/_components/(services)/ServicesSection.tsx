'use client'

import { useState } from 'react'
import ServiceModal from './ServiceModal'
import { motion } from 'framer-motion'
import { Service, services } from '@/app/_data/services'
import SectionWrapper from '../SectionWrapper'
import ServiceCard from './ServicesCard'

export default function ServicesSection() {
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <SectionWrapper id="services" bg="bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-accent mb-8 text-center md:text-left">
          Services & Offerings
        </h2>
        <p className="text-sm text-[var(--color-text)] mb-10 max-w-3xl">
          Hire me for software, data, and energy-focused projects.  
          Below are key areas where I can contribute immediately — from full-stack
          development to project management and renewable-energy consulting.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(s => (
            <ServiceCard key={s.id} service={s} onOpen={setSelected} />
          ))}
        </motion.div>
      </div>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </SectionWrapper>
  )
}
