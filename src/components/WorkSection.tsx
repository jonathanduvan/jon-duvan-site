'use client'

import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'
import { gridStagger } from '@/lib/motion'

export default function WorkSection() {
  return (
    <SectionWrapper id="work" bg="bg-secondary">
        <h2 className="text-3xl md:text-4xl font-semibold text-accent mb-10 text-center md:text-left">
          Select Projects
        </h2>
        <p className="text-muted text-base md:text-lg mb-10 max-w-7xl mx-auto md:mx-0">
          Some of my latest projects I am currently working on.
        </p>

        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
    </SectionWrapper>
  )
}
