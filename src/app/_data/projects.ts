export type Project = {
  title: string
  description: string
  tech: string[]
  image?: string
  link?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'GovReach',
    description:
      'An open-source civic tech platform that helps people contact elected officials through curated, verified contact data.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL'],
    repo: 'https://github.com/briangonzalez/govreach',
  },
  {
    title: 'SolCheck',
    description:
      'A solar calculator app that estimates system output and ROI with real-time irradiance data. Built with FastAPI and React.',
    tech: ['FastAPI', 'TypeScript', 'TailwindCSS'],
    repo: 'https://github.com/briangonzalez/solcheck',
  },
]
