'use client'

import SectionWrapper from '@/components/SectionWrapper'
import TimelineZigzag from './TImelineZigZag'

export default function AboutSection() {
  return (
    <SectionWrapper id="about" bg="bg-secondary">
        <h2 className="text-3xl md:text-4xl font-semibold text-accent mb-6 text-center md:text-left">
          About Me
        </h2>

        <p className="text-muted text-base md:text-lg mb-10 max-w-7xl mx-auto md:mx-0">
          I’ve worked across the spectrum — analytics at IBM, modernizing billing
          and ops in solar, and hands-on installation in the field. I’m obsessed
          with making real systems more honest, resilient, and human.
        </p>
        <a className="text-2xl">View Full Resume</a>

        <div className="w-full max-w-8xl">
          <TimelineZigzag />
        </div>
    </SectionWrapper>
  )
}
