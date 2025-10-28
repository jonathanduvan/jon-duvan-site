'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import CredentialBadges from './CredentialBadges'
import { Service, services } from '@/app/_data/services'
import ServiceModal from '../(services)/ServiceModal'

export default function HeroSection() {
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center max-w-3xl w-full"
      >
        <div className="relative w-40 h-44 md:w-60 md:h-60 mb-6">
          <Image
            src="/jon_duvan.png"
            alt="Illustration of Jonathan Duvan Gonzalez"
            fill
            priority
            className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          />
        </div>

        <h1 className="font-[var(--font-heading)] text-5xl md:text-6xl text-accent tracking-tight mb-2 leading-tight">
          Jonathan Duvan Gonzalez
        </h1>

        {/* === Quick Services Buttons === */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {services.map(s => (
            <motion.button
              key={s.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(s)}
              className="px-4 py-2 border border-[var(--color-border)] rounded-full text-sm 
                         text-[var(--color-text)] hover:text-accent hover:border-[var(--color-accent)] 
                         transition backdrop-blur-sm"
            >
              {s.pill ?? s.title.split(' ')[0]}
            </motion.button>
          ))}
        </div>
        
        <div className="flex justify-center">
            <CredentialBadges />
        </div>
      </motion.div>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
