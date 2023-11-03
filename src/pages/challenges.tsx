import { SEO } from '@/components/SEO'
import { getJobs } from '../../utils/getJobs'
import { DefaultLayout } from '../layouts/DefaultLayout'

const Page = () => {
  return (
    <>
      <SEO />
      <div></div>
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
