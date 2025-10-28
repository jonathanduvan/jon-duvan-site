// lib/types.ts

export type Article = {
  id: string
  title: string
  summary: string
  link: string
  date: string
  subtitle?: string
  tags?: string[]
  author?: string
  image?: string
}

export type FeedSource = {
  id: string
  name: string
  url: string
  type: 'rss' | 'json' | 'api'
}
