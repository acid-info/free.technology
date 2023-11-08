import { SEO } from '@/components/SEO'
import { SubPageLayout } from '../layouts/SubPageLayout'

const Page = ({ issues }: any) => {
  return (
    <>
      <SEO />
      <div>
        <h1>Open Issues</h1>
        {Object.entries(issues).map(([repoFullName, issuesList]: any) => (
          <div key={repoFullName}>
            <h2>Repository: {repoFullName}</h2>
            <ul>
              {issuesList.map((issue: any) => (
                <li key={issue.id}>
                  <a href={issue.url} target="_blank" rel="noopener noreferrer">
                    {issue.title}
                  </a>{' '}
                  - by {issue.author.login}
                  <div>
                    Labels:{' '}
                    {issue.labels.nodes
                      .map((label: any) => label.name)
                      .join(', ')}
                  </div>
                  <div>Comments: {issue.commentCount.totalCount}</div>
                  {/* Add any other issue details you want to render */}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <SubPageLayout>{page}</SubPageLayout>
}

export async function getStaticProps() {
  let issues = {}

  try {
    const res = await fetch('http://localhost:3000/api/challenges', {
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
