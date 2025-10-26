import SectionWrapper from '@/components/SectionWrapper';

export default function AboutSection() {
  return (
    <SectionWrapper id="about" bg="bg-secondary">
      <div className="max-w-3xl px-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-accent mb-6">
          About Me
        </h2>

        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto md:mx-0">
          I’ve worked across the spectrum — analytics work at IBM, modernizing
          billing and ops in solar, and hands-on installation in the field.
          I’m obsessed with making real systems more honest, resilient, and
          human.
        </p>
      </div>
    </SectionWrapper>
  )
}
