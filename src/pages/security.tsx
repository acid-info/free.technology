import { RootPage } from '@/components/RootPage'
import { SEO } from '@/components/SEO'
import { SubPageLayout } from '../layouts/SubPageLayout'

const content = `# Security

We take security seriously at IFT and across the <a href="https://free.technology" target="_blank">Institute of Free Technology</a> and its affiliates. 

Please report any security vulnerabilities and incidents you encounter via <a href="mailto:security@free.technology">security@free.technology</a>. 

Participate in our bounty programme at <a href="https://hackenproof.com/status-dot-app" target="_blank">HackenProof</a> to help ensure our protocols remain secure.
`

const Page = () => {
  return (
    <>
      <SEO />
      <RootPage content={content} />
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <SubPageLayout>{page}</SubPageLayout>
}

export default Page
