// /data/services.ts

// 1. Enumerate icons we actually support in UI
export type IconName =
  | 'Code'
  | 'ClipboardCheck'
  | 'BarChart3'
  | 'Sun'
  | 'BookOpen'

// 2. Core shape of a service card
export type Service = {
  id: string
  pill?: string
  title: string
  icon: IconName
  short: string
  description: string
  tags: string[]
  media?: { src: string; alt: string; type?: 'image' | 'video' }[]
  details?: {
    overview?: string
    experience?: string[]
    highlights?: string[]
    tools?: string[]
    sampleProjects?: { name: string; link?: string; desc?: string }[]
  }
}

// 3. Your services (same content as before, just using typed icon keys)

export const services: Service[] = [
  {
    id: 'software',
    title: 'Software & Systems Engineering',
    pill: 'Software/AI',
    icon: 'Code',
    short: 'Full-stack and ML solutions.',
    description:
      'Hands-on developer and technical problem solver.',
    tags: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'ML'],
    details: {
      overview:
        '7 years of professional software experience—from IBM enterprise systems to clean-energy platforms at Nexamp. Skilled at building performant, accessible, and secure applications end-to-end.',
      experience: [
        'Led modernization of Django-based solar billing systems processing $25M+ annual credit flow.',
        'Developed ML pipelines for workforce optimization and logistics analytics at IBM.',
      ],
      highlights: [
        'Event-driven architecture design',
        'API / microservice orchestration',
        'Performance monitoring & SLA automation',
      ],
      tools: [
        'Python',
        'TypeScript',
        'PostgreSQL',
        'Docker',
        'AWS',
        'FastAPI',
        'Next.js',
      ],
      sampleProjects: [],
    },
  },
  {
    id: 'management',
    title: 'Project, Product & Program Leadership',
    pill: 'Project/Program Leadership',
    icon: 'ClipboardCheck',
    short: 'Deliver results across people, process, and technology.',
    description:
      'Certified PMP with proven track record translating complex requirements into deliverables.',
    tags: ['PMP', 'Agile', 'Risk Mgmt'],
    details: {
      overview:
        'Blending technical literacy and strategic communication to lead interdisciplinary teams. Partnered with executives to design SLAs, risk registers, and executive dashboards.',
      experience: [
        'Managed 5 software teams across IBM Analytics division (40 developers).',
        'Implemented agile workflows improving sprint velocity by 27%.',
      ],
      highlights: [
        'Cross-functional leadership',
        'Budget / scope alignment',
        'KPI reporting',
      ],
      tools: ['Jira', 'Asana', 'Confluence', 'Notion', 'Power BI'],
    },
  },
  {
    id: 'analytics',
    title: 'Data, Analytics & Modeling',
    pill: 'Data Analytics',
    icon: 'BarChart3',
    short: 'Engineer insights and decision systems from data.',
    description:
      'Transforming messy datasets into clarity using SQL, Pandas, Power BI, and interactive dashboards.',
    tags: ['Python', 'Pandas', 'SQL', 'Power BI', 'Plotly'],
  },
  {
    id: 'solutions',
    title: 'Product & Solutions Engineering',
    pill: 'Product & Systems Design',
    icon: 'ClipboardCheck',
    short: 'Translate business needs into technical systems.',
    description:
      'Turning complex systems into scalable, user-centered solutions that align engineering reality with business intent.',
    tags: ['Architecture', 'Systems Thinking', 'Product Design', 'APIs', 'Strategy'],
    details: {
      overview:
        'I specialize in designing end-to-end systems that merge technical feasibility with user and business goals. My focus lies in translating abstract requirements into reliable architectures, optimizing developer workflows, and creating product strategies grounded in engineering realities.',
      experience: [
        'Led full-stack solution design for cross-sector data integration at IBM, scaling to millions of daily transactions.',
        'Architected solar billing and credit allocation pipelines at Nexamp, optimizing reliability and traceability across cloud environments.',
        'Advised on product architecture for civic tech tools improving engagement analytics and accessibility.',
      ],
      highlights: [
        'Product systems design',
        'API-first architecture',
        'UX–Engineering collaboration',
        'Platform reliability strategy',
        'Data-driven decision making',
      ],
      tools: [
        'FastAPI',
        'Next.js',
        'PostgreSQL',
        'AWS',
        'Terraform',
        'Figma',
        'Notion',
      ],
    },
  },
  {
    id: 'tutoring',
    title: 'Education, Mentorship & Tech-for-Good',
    icon: 'BookOpen',
    short: 'Empower others through technology and learning',
    description: 'I provide one-on-one and small-group tutoring that helps students and professionals build lasting confidence in problem-solving, coding, and technical literacy.',
    tags: ['tutoring', 'algebra', 'coding', 'calculus', 'ESOL', 'mentorship'],
    details: {
      overview: `I work with students from 5th grade through adulthood to make complex concepts approachable and practical. My teaching blends structured skill-building with real-world examples drawn from my experience in software development and analytics. Whether it’s algebra, calculus, or introductory programming, I focus on helping learners understand the 'why' behind the methods so they can apply knowledge independently.\n
      Comfortable with tutoring high-achieving children, and adults.`,
      experience: [
        "1-on-1 tutoring with a advanced 5th grader in math has led to her having a deeper understanding of applied math and breaking down word problems independently.",
        "Mentored teachers and professionals on integrating digital tools and AI responsibly in classrooms and workplaces.",
        "Led technical workshops and office hours for developers and data analysts at Nexamp and IBM, fostering hands-on learning and team growth.",
        "Volunteered as an ESOL tutor for adult learners, supporting language and digital skill development."
      ],
      highlights: [
        "Algebra, Calculus, & Applied Math",
        "Programming Fundamentals",
        "Project-based learning and mentorship",
        "Teacher tech coaching",
        "Bilingual instruction (English/Spanish)"
      ],
      sampleProjects: [
        {
          name: "Teacher Tech Support Program",
          desc: "Guided local educators in adopting classroom technology and responsible AI tools."
        },
        {
          name: "STEM Tutoring Series",
          desc: "Delivered in-person algebra, calculus, and coding sessions emphasizing conceptual understanding and problem-solving."
        }
      ]
    }
  }

]
