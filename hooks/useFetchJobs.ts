import { useState } from 'react'

const boardMappings: { [key: string]: string } = {
  acidtest: 'testacidinfo',
  logos: 'logos',
  status: 'status72',
  nimbus: 'nimbus',
  codex: 'codex',
  nomos: 'nomos',
  statusnetwork: 'thestatusnetwork',
  ift: 'instituteoffreetechnologies',
  vac: 'vac',
  waku: 'waku',
}

interface Job {
  title?: string
  [key: string]: any // Additional fields you might expect from the job object
}

interface FetchJobsResponse {
  jobs: Job[]
  meta: {
    total: number
  }
}

function useFetchJobs() {
  const [data, setData] = useState<FetchJobsResponse | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchJobs = async (selectedBoards: string[], titleFilter?: string) => {
    setIsLoading(true)

    try {
      const resultsPerBoard: { [key: string]: Job[] } = {}

      for (let board of selectedBoards) {
        if (board === 'all') {
          const promises = Object.entries(boardMappings).map(
            ([key, boardName]) =>
              fetch(
                `https://boards-api.greenhouse.io/v1/boards/${boardName}/jobs`,
              ).then((response) => response.json()),
          )
          const allResults = await Promise.all(promises)
          allResults.forEach((result, index) => {
            const boardKey = Object.keys(boardMappings)[index]
            resultsPerBoard[boardKey] = result.jobs
          })
          break
        } else {
          const response = await fetch(
            `https://boards-api.greenhouse.io/v1/boards/${boardMappings[board]}/jobs`,
          )
          const jobData = await response.json()
          resultsPerBoard[board] = jobData.jobs
        }
      }

      let allJobs = Object.values(resultsPerBoard).flat()

      if (titleFilter) {
        allJobs = allJobs.filter(
          (job) => job.title && job.title.includes(titleFilter),
        )
      }
      setData({ jobs: allJobs, meta: { total: allJobs.length } })
    } catch (err: any) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  return { data, error, isLoading, fetchJobs }
}

export default useFetchJobs
