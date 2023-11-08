import https from 'https'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const repositories = req.body

  if (
    !Array.isArray(repositories) ||
    repositories.some((repo) => !repo.owner || !repo.repo)
  ) {
    return res.status(400).json({
      error: 'Each item in the array must have an owner and repo key.',
    })
  }

  const query = `
query {
  ${repositories
    .map(
      (repository, index) => `
    repo${index}: repository(owner: "${repository.owner}", name: "${repository.repo}") {
      issues(first: 100, states: OPEN) {
        nodes {
          id
          title
          url
          author {
            login
            avatarUrl
          }
          labels(first: 10) {
            nodes {
              name
            }
          }
          commentCount: comments {
            totalCount
          }
          commentsDetailed: comments(first: 10) {
            nodes {
              id
              author {
                login
              }
              body
              createdAt
            }
          }
          assignees(first: 10) {
            nodes {
              login
              avatarUrl
            }
          }
          milestone {
            title
          }
          createdAt
          updatedAt
          projectCards(first: 10) {
            nodes {
              project {
                name
                url
              }
            }
          }
        }
      }
    }
  `,
    )
    .join('')}
}
`

  const options = {
    hostname: 'api.github.com',
    path: '/graphql',
    method: 'POST',
    headers: {
      'User-Agent': 'NodeJS-Script',
      Authorization: `bearer ${process.env.NEXT_GITHUB_PERSONAL_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
  }

  const graphqlReq = https.request(options, (graphqlRes) => {
    let data = ''

    graphqlRes.on('data', (chunk) => {
      data += chunk
    })

    graphqlRes.on('end', () => {
      try {
        const response = JSON.parse(data)

        const issuesByRepo = repositories.reduce(
          (accumulator, repository, index) => {
            const repoAlias = `repo${index}`
            accumulator[`${repository.owner}/${repository.repo}`] =
              response.data[repoAlias].issues.nodes
            return accumulator
          },
          {},
        )

        res.status(200).json(issuesByRepo)
      } catch (error) {
        console.error('Failed to parse response:', error)
        res.status(500).json({ error: 'Failed to parse response' })
      }
    })
  })

  graphqlReq.on('error', (error) => {
    console.error(`Got an error: ${error.message}`)
    res.status(500).json({ error: error.message })
  })

  graphqlReq.write(JSON.stringify({ query }))
  graphqlReq.end()
}
