import { Box } from '@/components/Box'
import { JobFilter, JobList } from '@/components/JobList'
import { useState } from 'react'
import { getJobs } from '../../utils/getJobs'
import { DefaultLayout } from '../layouts/DefaultLayout'

const Page = ({ jobs }: any) => {
  const [activeBUs, setActiveBUs] = useState<string[]>([])

  return (
    <>
      <div>
        <Box>
          <JobFilter
            jobs={jobs}
            activeBUs={activeBUs}
            setActiveBUs={setActiveBUs}
          />
        </Box>
        <Box>
          <JobList jobs={jobs} activeBUs={activeBUs} />
        </Box>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getStaticProps() {
  try {
    const jobs = await getJobs(['all'], '')

    return {
      props: {
        jobs,
      },
      revalidate: 3600, // In seconds
    }
  } catch (error) {
    return {
      props: {
        jobs: [],
      },
      revalidate: 3600,
    }
  }
}

export default Page
