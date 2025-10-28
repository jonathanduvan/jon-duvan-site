'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const activeCreds = [
  {
    name: 'PMP Certified',
    img: '/certs/pmp.png',
    link: 'https://www.credly.com/badges/2a2e9e1c-b960-4111-a020-f63260e4aaef/public_url',
  },
  {
    name: `Photovoltaic Associate\nPVA-071725-017422`,
    img: '/certs/nabcep_pva_logo.png',
    link: '/certs/nabcep_pva.pdf', // hosted PDF version
  },
]

const inProgress = [
  {
    name: 'MITx Future Energy Systems',
    link: 'https://www.edx.org/xseries/mitx-future-energy-systems',
  },
  {
    name: 'DelftX Intelligent & Integrated Energy Systems',
    link: 'https://www.edx.org/certificates/professional-certificate/delftx-intelligent-and-integrated-energy-systems?index=product&queryId=b3b9d38c423038dc96ecd0eaa88e6f1e&position=1',
  },
]

export default function CredentialBadges() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-center gap-12 mt-8 text-center w-full">
      {/* === Active Credentials === */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-accent mb-4">
          Active Credentials
        </h3>
        <div className="flex flex-wrap justify-center gap-10">
          {activeCreds.map((cred) => (
            <motion.a
              key={cred.name}
              href={cred.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md
                           ring-1 ring-[var(--color-border)] group-hover:ring-[var(--color-accent)]
                           transition-all duration-200"
              >
                <Image
                  src={cred.img}
                  alt={cred.name}
                  fill
                  sizes="96px"
                  className="object-cover rounded-full
                             group-hover:shadow-[0_0_20px_rgba(0,255,255,0.25)]
                             transition-shadow"
                />
              </div>
              <p className="whitespace-pre-line text-xs md:text-sm text-[var(--color-text)] mt-2 w-32 leading-snug">
                {cred.name}
              </p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* === Divider (for large screens only) === */}
      <div className="hidden lg:block h-24 w-px bg-[var(--color-border)]" />

      {/* === In-Progress Credentials === */}
      <div className="flex-1">
        <h3 className="text-[var(--color-text-muted)] text-lg font-semibold italic mb-4">
          Creds In Progress
        </h3>
        <ul className="flex flex-col items-center justify-center gap-2">
          {inProgress.map((cred) => (
            <motion.li
              key={cred.name}
              whileHover={{ scale: 1.03 }}
              className="text-sm md:text-base text-[var(--color-text-muted)] hover:text-[var(--color-accent-secondary)] transition-colors"
            >
              <a
                href={cred.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {cred.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}
