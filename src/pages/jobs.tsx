import { Box } from '@/components/Box'
import { JobFilter, JobList } from '@/components/Jobs'
import { SEO } from '@/components/SEO'
import { breakpoints } from '@/configs/ui.configs'
import { SubPageLayout } from '@/layouts/SubPageLayout'
import styled from '@emotion/styled'
import { useState } from 'react'
import { getJobs } from '../../utils/getJobs'

const CustomBox = styled(Box)`
  @media (max-width: ${breakpoints.xl}px) {
    margin-bottom: 130px;
  }
`

const Page = ({ jobs }: any) => {
  const [activeBUs, setActiveBUs] = useState<string[]>([])

  return (
    <>
      <SEO />
      <div>
        <CustomBox marginBottom="180px">
          <JobFilter
            data={jobs}
            activeBUs={activeBUs}
            setActiveBUs={setActiveBUs}
          />
        </CustomBox>
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
