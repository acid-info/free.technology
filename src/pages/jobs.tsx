import { Box } from '@/components/Box'
import { JobFilter, JobList } from '@/components/JobList'
import { SEO } from '@/components/SEO'
import { SubPageLayout } from '@/layouts/SubPageLayout'
import { useState } from 'react'
import { getJobs } from '../../utils/getJobs'

const Page = ({ jobs }: any) => {
  const [activeBUs, setActiveBUs] = useState<string[]>([])

  return (
    <>
      <SEO />
      <div>
        <Box>
          <JobFilter
            data={jobs}
            activeBUs={activeBUs}
            setActiveBUs={setActiveBUs}
          />
        </Box>
        <JobList jobs={jobs} activeBUs={activeBUs} />
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <SubPageLayout>{page}</SubPageLayout>
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
