import { Box } from '@/components/Box'
import { JobList } from '@/components/JobList'
import { Navbar } from '@/components/Navbar'
import { SEO } from '@/components/SEO'

import { DefaultLayout } from '../layouts/DefaultLayout'

const Page = () => {
  return (
    <>
      <SEO />
      <div>
        <Navbar />

        <Box>
          <JobList unit={'codex'} />
          <JobList unit={'status'} />
          <JobList unit={'waku'} />
          <JobList unit={'nimbus'} />
          <JobList unit={'nomos'} />
        </Box>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getStaticProps() {
  return { props: {} }
}

export default Page
