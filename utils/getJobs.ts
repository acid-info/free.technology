const boardMappings: any = {
  // acidtest: "testacidinfo",
  logos: 'logos',
  status: 'status72',
  nimbus: 'nimbus',
  codex: 'codex',
  nomos: 'nomos',
  // statusnetwork: "thestatusnetwork",
  // ift: "instituteoffreetechnologies",
  vac: 'vac',
  waku: 'waku',
}

export async function getJobs(boardsArg: string[], titleFilter: string) {
  async function fetchJobsForBoard(boardName: string) {
    try {
      const response = await fetch(
        `https://boards-api.greenhouse.io/v1/boards/${boardName}/jobs`,
      )
      const data = await response.json()
      return data.jobs
    } catch (error) {
      throw error
    }
  }

  const boards = boardsArg
  const resultsPerBoard = {}

  for (let board of boards) {
    if (board === 'all') {
      const promises = Object.entries(boardMappings).map(([key, boardName]) =>
        fetchJobsForBoard(boardName as string).then((jobs) => ({
          [key]: jobs,
        })),
      )
      const allResults: { [key: string]: any } = {}
      const results = await Promise.all(promises)
      results.forEach((result) => {
        Object.assign(allResults, result)
      })
      return allResults
    } else {
      const results = await fetchJobsForBoard(boardMappings[board])
      return { [board]: results }
    }
  }

  // Only apply titleFilter if it's provided
  if (titleFilter) {
    for (let board in resultsPerBoard) {
      // @ts-ignore
      resultsPerBoard[board] = resultsPerBoard[board].filter(
        (job: any) => job.title && job.title.includes(titleFilter),
      )
    }
  }

  return resultsPerBoard
}
