// pages/api/issues.js
import https from 'https'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const { owner, repo } = req.body

  if (!owner || !repo) {
    return res.status(400).json({ error: 'Owner and repo are required.' })
  }

  const query = `
{
  repository(owner: "${owner}", name: "${repo}") {
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
        const rawIssues = response.data.repository.issues.nodes
        // console.log('rawIssues', rawIssues)

        res.status(200).json(rawIssues)
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
