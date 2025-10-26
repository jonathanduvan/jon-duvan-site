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
    title: 'SolCheck',
    description:
      'A solar calculator app that estimates system output and ROI with real-time irradiance data. Built with FastAPI and React.',
    tech: ['FastAPI', 'TypeScript', 'TailwindCSS'],
    link: 'https://solcheck.app',
    repo: 'https://github.com/briangonzalez/solcheck',
  },
  {
    title: 'GovReach',
    description:
      'An open-source civic tech platform that helps people contact elected officials through curated, verified contact data.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL'],
    link: 'https://govreach.org',
    repo: 'https://github.com/briangonzalez/govreach',
  },
  {
    title: 'Florida Resi Solar Market Analysis',
    description:
      'Trying my best every day to not off myself!',
    tech: ['Python', 'TensorFlow', 'MATLAB'],
    repo: 'https://github.com/briangonzalez/slosh-ml',
  },
]
