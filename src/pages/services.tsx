import { Box } from '@/components/Box'
import { SEO } from '@/components/SEO'
import { ServiceFilter, ServiceList } from '@/components/Services'
import ServiceContact from '@/components/Services/ServiceContact'
import { ServiceType } from '@/components/Services/ServiceItem'
import { SubPageLayout } from '@/layouts/SubPageLayout'
import { useState } from 'react'

const Page = ({ services }: any) => {
  const [activeServices, setActiveServices] = useState<string[]>([])

  return (
    <>
      <SEO />
      <div>
        <Box>
          <ServiceFilter
            services={services}
            activeServices={activeServices}
            setActiveServices={setActiveServices}
          />
        </Box>
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
        "Vac is a principle-driven research and development group that provides technical support to each IFT startup. It comprises elite specialists in distributed systems, zero-knowledge proofs, and P2P networking, produces specifications for IFT startups, and undertakes comprehensive protocol testing. Like the IFT and the startups with which it works, a commitment to liberty, censorship resistance, security, privacy, decentralisation, and inclusivity guides Vac's R&D efforts.",
      button: {
        text: 'Discover Vac',
        url: 'https://vac.dev/',
      },
    },
    {
      id: '2',
      title: 'Financial',
      description:
        'Our startups benefit from IFT capital to fund their research and development efforts. Meanwhile, the IFT nurtures relationships with investors who share our values and commitment to world-changing tech. Besides funding and investment, the IFT handles compensation, bonus payments, and expenses incurred for all contributors working with us via our in-house finance department.',
    },
    {
      id: '3',
      title: 'Legal',
      description:
        'A specialist and highly experienced legal department led by Dr Agata Ferreira helps our startups navigate the often confusing and ever-changing blockchain legal landscape. Supporting Agata is a team of two with backgrounds in crypto finance and blockchain legal issues. The department ensures our startups remain sound from a legal perspective.',
    },
    {
      id: '4',
      title: 'HR',
      description:
        'Our PeopleOps department enables contributors across the IFT to focus on developing and supporting the innovations we incubate. The team of seven handles talent scouting, recruitment, onboarding, travel, career development, administrative support, and other initiatives to keep those working with us happy, engaged, and productive.',
    },
    {
      id: '5',
      title: 'Branding and awareness',
      description:
        'Ned Karlovich draws on experience as Creative Director at Nike Inc. and staat to lead the IFT’s creative branding studio, Acid. The studio works with our startups to deploy high-impact campaigns, raising brand awareness among their target markets both within the web3 ecosystem and beyond it. IFT startups enjoy full access to the studio, which comprises marketing, digital communications, design, web development, and events management specialists.',
    },
  ]

  return {
    props: {
      services,
    },
  }
}

export default Page
