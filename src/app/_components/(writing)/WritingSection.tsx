// Server component: handles data fetching, calls the client component

import SectionWrapper from '@/app/_components/SectionWrapper'
import WritingSectionClient from '@/app/_components/(writing)/WritingSectionClient'
import { getFossilFoolsArticles } from '@/app/_lib/_feeds/fossilFoolsAdapter'

export default async function WritingSection() {
  const fossilFools = await getFossilFoolsArticles(6)

  return (
    <SectionWrapper id="writing" bg="bg-primary">
      <WritingSectionClient fossilFools={fossilFools} />
    </SectionWrapper>
  )
}
