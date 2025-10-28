// lib/getArticles.ts

import { Article } from "@/app/_lib/types"

// Centralized helper to fetch article metadata from your CMS / Substack / etc.
export async function getArticles(
  source: 'fossilFools' | 'shoeGum',
  limit = 4
): Promise<Article[]> {
  const endpoint =
    source === 'fossilFools'
      ? 'https://fossilfools.substack.com/api/v1/archive?limit=' + limit
      : 'https://shoe-gum-data-reporting.example.com/api/v1/articles?limit=' + limit

  try {
    const res = await fetch(endpoint, {
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!res.ok) throw new Error(`Failed to fetch ${source} articles`)

    const data = await res.json()

    // 🔧 Normalize data to match Article type
    return data.items.map((item: any, i: number) => ({
      id: item.id ?? String(i),
      title: item.title ?? 'Untitled',
      summary: item.description ?? item.subtitle ?? '',
      subtitle: item.subtitle ?? undefined,
      link: item.url ?? item.canonical_url ?? '#',
      date: item.date || item.published_at || new Date().toISOString(),
      tags: item.tags ?? [],
    })) as Article[]
  } catch (err) {
    console.error(err)
    return []
  }
}
