import { Box } from '@/components/Box'
import { SEO } from '@/components/SEO'
import { ServiceList, ServicePicker } from '@/components/Services'
import ServiceContact from '@/components/Services/ServiceContact'
import { ServiceType } from '@/components/Services/ServiceItem'
import { breakpoints } from '@/configs/ui.configs'
import { SubPageLayout } from '@/layouts/SubPageLayout'
import styled from '@emotion/styled'
import { useState } from 'react'

const CustomBox = styled(Box)`
  @media (max-width: ${breakpoints.xl}px) {
    margin-bottom: 130px;
  }
`

const Page = ({ services }: any) => {
  const [activeServices, setActiveServices] = useState<string[]>([])

  return (
    <>
      <SEO />
      <div>
        <CustomBox marginBottom="180px">
          <ServicePicker
            services={services}
            activeServices={activeServices}
            setActiveServices={setActiveServices}
          />
        </CustomBox>
        <Box>
          <ServiceList services={services} activeServices={activeServices} />
          <ServiceContact />
        </Box>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <SubPageLayout>{page}</SubPageLayout>
}

export async function getStaticProps() {
  const services: ServiceType[] = [
    {
      id: '1',
      title: 'Technical',
      description:
        'Vac is a principle-driven research and development group that provides technical support to each IFT startup. It comprises elite specialists in distributed systems, zero-knowledge proofs, and P2P networking, produces specifications for IFT startups, and undertakes comprehensive protocol testing. Like the IFT and the startups with which it works, a commitment to liberty, censorship resistance, security, privacy, decentralisation, and inclusivity guides Vac’s R&D efforts.',
      button: {
        text: 'Discover Vac',
        url: 'https://vac.dev/',
      },
    },
    {
      id: '2',
      title: 'Financial',
      description:
        'Our startups benefit from IFT capital to fund their research and development efforts. Meanwhile, the IFT nurtures relationships with investors who share our values and commitment to world-changing tech. Besides funding and investment, the IFT handles payment of fees to contributors, and potential expenses incurred by the contributors working with us via our in-house finance department.',
    },
    {
      id: '3',
      title: 'Legal',
      description:
        'A specialist and highly experienced legal department led by Dr Agata Ferreira helps our startups navigate the often confusing and ever-changing blockchain legal landscape while providing the legal support to allow them to achieve their project aims. Supporting Agata is a team of two with backgrounds in a wide range of legal areas, including, among others, crypto finance and blockchain. The department assists our startups identify and prevent or mitigate potential (legal) risks.',
    },
    {
      id: '4',
      title: 'People Operations',
      description:
        'Our PeopleOps department ensures that our startups have the most valuable asset they need — highly engaged and productive contributors — to focus on developing and supporting the innovations we incubate. The team of seven handles talent scouting, recruiting, onboarding, travel, administrative support, and other initiatives to keep those working with us happy, engaged, and productive.',
    },
    {
      id: '5',
      title: 'Branding and awareness',
      description:
        'Ned Karlovich draws on experience as Creative Director at Nike Inc. and staat to lead the IFT’s creative branding studio, Acid. The studio works with our startups to deploy high-impact campaigns, raising brand awareness among their target markets both within the web3 ecosystem and beyond it. IFT startups enjoy full access to the studio, which comprises marketing, digital communications, design, web development, and events management specialists.',
      button: {
        text: 'Discover Acid',
        url: 'https://acid.info/',
      },
    },
  ]

  return {
    props: {
      services,
    },
  }
}

export default Page
