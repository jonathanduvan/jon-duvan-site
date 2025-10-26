import SectionWrapper from "./SectionWrapper";

export default function HeroSection() {
  return (
    <SectionWrapper id="hero" bg="bg-primary">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-accent mb-4">
          Jonathan Duvan Gonzalez
        </h1>
        <p className="md:text-3xl font-light text-accent-secondary mb-4">
          (<span className="italic">Jon Duvan</span>)
        </p>
        <p className="text-lg md:text-xl text-muted">
          Impact-driven human bridging technology, energy, and systems design.
        </p>
      </div>
    </SectionWrapper>
  )
}
