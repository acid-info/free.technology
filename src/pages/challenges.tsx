import { Box } from '@/components/Box'
import { ChallengeFilter, ChallengeList } from '@/components/Challenges'
import { SEO } from '@/components/SEO'
import { useState } from 'react'
import { SubPageLayout } from '../layouts/SubPageLayout'

const Page = ({ issues }: any) => {
  const [activeBUs, setActiveBUs] = useState<string[]>([])

  return (
    <>
      <SEO />
      <div>
        <Box>
          <ChallengeFilter
            data={issues}
            activeBUs={activeBUs}
            setActiveBUs={setActiveBUs}
          />
        </Box>
        <ChallengeList challenges={issues} activeBUs={activeBUs} />
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <SubPageLayout>{page}</SubPageLayout>
}

export async function getStaticProps() {
  let issues = {}

  const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  try {
    const res = await fetch(`${site}/api/challenges`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        { owner: 'waku-org', repo: 'bounties' },
        { owner: 'acid-info', repo: 'lsd' },
      ]),
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch issues, status: ${res.status}`)
    }

    issues = await res.json()
  } catch (error) {
    console.error('Error fetching issues:', error)
  }

  return {
    props: {
      issues,
    },
    revalidate: 3600, // In seconds. Adjust to your needs.
  }
}

export default Page
