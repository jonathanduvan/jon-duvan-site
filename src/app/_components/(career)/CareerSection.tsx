'use client'

import SectionWrapper from '@/app/_components/SectionWrapper'
import TimelineZigzag from './TImelineZigZag'
import ResumeModal from './ResumeModal'

export default function CareerSection() {
  return (
    <SectionWrapper id="career" bg="bg-primary">
        <h2 className="text-3xl md:text-4xl font-semibold text-accent mb-6 text-center md:text-left">
          Career Timeline
        </h2>

        <p className="colored-text text-base md:text-lg mb-8 max-w-7xl mx-auto md:mx-0">
          I’ve worked across the spectrum — analytics at IBM, modernizing billing
          and ops in solar, and hands-on installation in the field. I’m obsessed
          with making real systems more honest, resilient, and human.
        </p>

        <div className="flex justify-center mb-10">
          <ResumeModal />
        </div>
        <div className="w-full max-w-8xl">
          <TimelineZigzag />
        </div>
    </SectionWrapper>
  )
}
