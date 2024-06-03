import { RootPage } from '@/components/RootPage'
import { SEO } from '@/components/SEO'
import { SubPageLayout } from '../layouts/SubPageLayout'

const content = `# Security

We take security seriously at IFT and across the Institute of Free Technology and its affiliates. 

Please report any security incidents via <a href="mailto:security@free.technology">security@free.technology</a>. 

Please report any discovered vulnerabilities in our bounty programme at <a href="https://hackenproof.com/ift" target="_blank">HackenProof</a> to help ensure our protocols and software remain secure.
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
