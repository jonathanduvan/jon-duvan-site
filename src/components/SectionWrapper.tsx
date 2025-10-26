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
      className={`${bg} flex min-h-screen flex-col items-center justify-center px-6`}
    >
      <motion.div
        variants={variant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-4xl"
      >
        {children}
      </motion.div>
    </section>
  )
}
