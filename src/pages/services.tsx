import { SEO } from '@/components/SEO'
import { DefaultLayout } from '../layouts/DefaultLayout'

const Page = () => {
  return (
    <>
      <SEO />
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getStaticProps() {
  try {
    return {
      props: {},
    }
  } catch (error) {
    return {
      props: {},
    }
  }
}

export default Page
