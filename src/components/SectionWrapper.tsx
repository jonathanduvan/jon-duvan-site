'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  id: string
  bg?: string
  children: ReactNode
  variant?: Variants
}

const defaultVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function SectionWrapper({
  id,
  bg = 'bg-primary',
  children,
  variant = defaultVariant,
}: Props) {
  return (
    <section
      id={id}
      className={`${bg} flex min-h-screen flex-col items-center justify-center`}
    >
      {/* 
        "container" keeps content centered.
        "mx-auto" centers horizontally.
        Responsive padding ensures breathing room on all screens.
        "max-w-screen-2xl" = ~1536px cap (fluid on wide monitors).
      */}
      <motion.div
        variants={variant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 max-w-screen-2xl w-full"
      >
        {children}
      </motion.div>
    </section>
  )
}
