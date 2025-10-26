export type Entry = {
  title: string
  subtitle?: string
  summary: string
  date: string
  tags?: string[]
  link: string
}

export const fossilFools: Entry[] = [
  {
    title: 'The Grid Is a Commons',
    summary:
      'Why public ownership of the grid may be the most pragmatic step toward a just energy transition.',
    date: '2025-09-18',
    tags: ['Energy', 'Policy', 'Equity'],
    link: 'https://fossilfoolsandgreendreams.substack.com/p/the-grid-is-a-commons',
  },
  {
    title: 'Solar’s Class Divide',
    summary:
      'Exploring how tax-credit structures reinforce class barriers in residential solar adoption.',
    date: '2025-07-03',
    tags: ['Solar', 'Economics', 'Justice'],
    link: 'https://fossilfoolsandgreendreams.substack.com/p/solars-class-divide',
  },
]

export const shoeGum: Entry[] = [
  {
    title: 'Mapping Energy Poverty in Florida',
    summary:
      'A small-area statistical model identifying heat-burdened households from open data sources.',
    date: '2025-08-12',
    tags: ['Python', 'Data', 'Mapping'],
    link: 'https://shoegumdata.substack.com/p/mapping-energy-poverty',
  },
  {
    title: 'Utility Rate Cluster Analysis',
    summary:
      'Using K-means clustering to group utilities by customer rate patterns across the Southeast.',
    date: '2025-06-01',
    tags: ['Clustering', 'Pandas', 'Energy'],
    link: 'https://shoegumdata.substack.com/p/utility-rate-clustering',
  },
]
