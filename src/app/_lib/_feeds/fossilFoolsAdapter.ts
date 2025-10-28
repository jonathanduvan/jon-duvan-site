// lib/feeds/fossilFoolsAdapter.ts
import { Article, FeedSource } from '../types'
import { fetchFeed } from './fetchFeed'

const fossilFoolsFeed: FeedSource = {
  id: 'fossil-fools',
  name: 'Fossil Fools & Green Dreams',
  url: 'https://fossilfools.substack.com/feed',
  type: 'rss',
}

/**
 * Wrapper for Fossil Fools feed.
 * If Substack changes its schema later, only this adapter changes.
 */
export async function getFossilFoolsArticles(limit = 6): Promise<Article[]> {
  return await fetchFeed(fossilFoolsFeed, limit)
}
