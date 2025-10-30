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
        <p className="text-sm text-(--color-text) mb-10 max-w-3xl">
          I build and scale technology that serves people and the planet. My work spans software engineering, data systems, and project leadership — from developing cloud-based platforms to hands-on renewable energy deployment. I aim to bridge the gap between code, infrastructure, and public good.
        </p>
        <p className="text-sm text-(--color-text) mb-10 max-w-3xl">
          Available for Opportunities!
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
