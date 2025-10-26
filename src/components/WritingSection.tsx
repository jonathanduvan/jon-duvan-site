import SectionWrapper from '@/components/SectionWrapper'
import { fadeLeft } from '@/lib/motion'

export default function WritingSection() {
  return (
    <SectionWrapper id="writing" bg="bg-primary" variant={fadeLeft}>
      <div className="max-w-3xl px-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-accent mb-6">
          Writing & Reflections
        </h2>

        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto md:mx-0 mb-8">
          I write to make sense of the systems we build — energy, code, and
          community. My goal is to connect technical insight with real human
          outcomes, and to share what I learn in public.
        </p>

        <div className="flex flex-col items-center md:items-start gap-3">
          <a
            href="https://fossilfoolsandgreendreams.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover underline-offset-4 hover:underline text-lg"
          >
            Visit my Substack
          </a>
          <a
            href="/articles"
            className="text-accent-secondary hover:text-accent-hover underline-offset-4 hover:underline text-lg"
          >
            Read Articles in-App
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
