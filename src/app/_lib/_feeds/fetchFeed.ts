// lib/feeds/fetchFeed.ts
import Parser from 'rss-parser'
import { FeedSource, Article } from '@/app/_lib/types'

// Reuse one parser instance for efficiency
const parser = new Parser()

/**
 * Fetch and parse a feed, returning normalized Article objects.
 * Modular: can be used for any RSS/Atom endpoint.
 */
export async function fetchFeed(source: FeedSource, limit = 10): Promise<Article[]> {
  const res = await fetch(source.url, { next: { revalidate: 1800 } }) // cache 30min
  if (!res.ok) throw new Error(`Failed to fetch feed: ${source.name}`)

  const text = await res.text()
  const feed = await parser.parseString(text)

  return feed.items.slice(0, limit).map((item, i) => ({
    id: item.guid ?? `${source.id}-${i}`,
    title: item.title ?? 'Untitled',
    summary: item.contentSnippet ?? '',
    link: item.link ?? '#',
    date: item.isoDate ?? new Date().toISOString(),
    author: item.creator ?? item.author ?? undefined,
    image: item.enclosure?.url ?? undefined,
    tags: item.categories ?? [],
  }))
}
