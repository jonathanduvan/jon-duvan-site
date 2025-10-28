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
    title: 'Software & AI Development',
    pill: 'Software/AI',
    icon: 'Code',
    short: 'Full-stack, data, and ML solutions.',
    description:
      'Building reliable, scalable applications with modern stacks (Next.js, FastAPI, PostgreSQL, and cloud).',
    tags: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'ML'],
    media: [
      { src: '/media/software_dashboard.png', alt: 'Sample dashboard UI' },
    ],
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
      sampleProjects: [
        {
          name: 'Argo Dispatch',
          desc: 'News aggregation app emphasizing viewpoint diversity.',
        },
        {
          name: 'SLOSH-ML',
          desc: 'Reduced-order slosh modeling tool used in lunar vehicle research.',
        },
      ],
    },
  },
  {
    id: 'management',
    title: 'Project & Product Management',
    pill: 'Product & Project Mgmt',
    icon: 'ClipboardCheck',
    short: 'Strategic execution & agile delivery.',
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
    title: 'Data Analytics & Visualization',
    pill: 'Data Analytics',
    icon: 'BarChart3',
    short: 'Insightful dashboards & data strategy.',
    description:
      'Transforming messy datasets into clarity using SQL, Pandas, Power BI, and interactive dashboards.',
    tags: ['Python', 'Pandas', 'SQL', 'Power BI', 'Plotly'],
  },
  {
    id: 'energy',
    title: 'Energy & Renewables',
    icon: 'Sun',
    short: 'Sustainable systems & solar consulting.',
    description:
      'Hands-on solar, NABCEP PV Associate certified, with experience in system sizing, interconnection, and transition strategy.',
    tags: ['Solar PV', 'Energy Modeling', 'NABCEP', 'Sustainability'],
    media: [
      {
        src: '/media/solar_array.jpg',
        alt: 'Solar array installation',
        type: 'image',
      },
      {
        src: '/media/energy_transition_diagram.png',
        alt: 'Energy transition model',
        type: 'image',
      },
    ],
    details: {
      overview:
        'Field and design experience with community and residential solar systems. Focused on integrating renewable infrastructure with fair labor and accessibility principles.',
      experience: [
        'Delivered 650+ residential PV installs ahead of federal incentive deadlines.',
        'Developed SolCheck app to automate residential solar yield estimates.',
      ],
      highlights: [
        'System sizing',
        'Interconnection design',
        'Energy transition policy',
      ],
      tools: ['HelioScope', 'PVsyst', 'Python', 'Excel', 'GIS'],
      sampleProjects: [
        {
          name: 'SolCheck',
          desc: 'Open-source solar calculator for installers and homeowners.',
        },
      ],
    },
  },
  {
    id: 'tutoring',
    title: 'Tutoring & Mentorship',
    icon: 'BookOpen',
    short: 'Personalized instruction in math, coding, and technology for learners of all levels.',
    description: 'I provide one-on-one and small-group tutoring that helps students and professionals build lasting confidence in problem-solving, coding, and technical literacy.',
    tags: ['algebra', 'coding', 'calculus', 'ESOL', 'mentorship', 'STEM'],
    details: {
      overview: "I work with students from 5th grade through adulthood to make complex concepts approachable and practical. My teaching blends structured skill-building with real-world examples drawn from my experience in software development and analytics. Whether it’s algebra, calculus, or introductory programming, I focus on helping learners understand the 'why' behind the methods so they can apply knowledge independently.",
      experience: [
        "Tutored students in algebra, calculus, and computer science from 5th grade through college level.",
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
