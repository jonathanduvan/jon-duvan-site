// app/api/feeds/fossil-fools/route.ts
import { getFossilFoolsArticles } from '@/app/_lib/_feeds/fossilFoolsAdapter'
import { NextResponse } from 'next/server'

export const revalidate = 1800 // seconds = 30 minutes

export async function GET() {
  try {
    const articles = await getFossilFoolsArticles(6)
    return NextResponse.json(articles, { status: 200 })
  } catch (error) {
    console.error('Error fetching Fossil Fools feed:', error)
    return NextResponse.json({ error: 'Failed to load feed' }, { status: 500 })
  }
}
