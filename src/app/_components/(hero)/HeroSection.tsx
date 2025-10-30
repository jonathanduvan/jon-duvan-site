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

        <h1 className="font-[var(--font-heading)] text-5xl md:text-6xl tracking-tight mb-2 leading-tight">
          <span className="bg-gradient-to-r from-[var(--color-jon-hair)] to-[var(--color-accent-secondary)] bg-clip-text text-transparent">
            Jon
          </span>
          <span>athan </span>
          <span className="bg-gradient-to-r from-[var(--color-accent-secondary)] to-[var(--color-jon-hair)] bg-clip-text text-transparent">
            Duvan
          </span>{' '}
          Gonzalez
        </h1>
        <p
          className="text-base md:text-lg text-[var(--color-text)] text-center 
                     leading-relaxed max-w-2xl mb-6"
        >
          Building systems where software, data, and people meet — from energy
          and civic tech to cloud architecture and product design.
        </p>
        
        <div className="flex justify-center">
            <CredentialBadges />
        </div>
      </motion.div>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
