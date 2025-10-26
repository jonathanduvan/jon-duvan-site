import SectionWrapper from './SectionWrapper'
import { projects } from '@/data/projects'

export default function WorkSection() {
  return (
    <SectionWrapper id="work" bg="bg-secondary">
      <div>
        <h2 className="text-4xl font-bold text-accent mb-8 text-center md:text-left">
          Selected Work
        </h2>
        <ul className="space-y-8">
          {projects.map((p) => (
            <li key={p.title} className="border-b border-subtle pb-4">
              <h3 className="text-2xl font-semibold text-accent-hover">
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  {p.title}
                </a>
              </h3>
              <p className="text-muted">{p.description}</p>
              <p className="mt-2 text-sm text-muted">
                {p.tech.join(' • ')}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
