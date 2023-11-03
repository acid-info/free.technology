import { SEO } from '@/components/SEO'
import { SubPageLayout } from '../layouts/SubPageLayout'

const Page = ({ issues }: any) => {
  return (
    <>
      <SEO />
      <div>
        <h1>Open Issues</h1>
        <ul>
          {issues.map((issue: any) => (
            <li key={issue.id}>
              <a href={issue.url}>{issue.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <SubPageLayout>{page}</SubPageLayout>
}

export async function getStaticProps() {
  let issues = []

  try {
    const res = await fetch('http://localhost:3000/api/challenges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        owner: 'waku-org',
        repo: 'bounties',
      }),
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch issues, status: ${res.status}`)
    }

    const data = await res.json()
    issues = data
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
