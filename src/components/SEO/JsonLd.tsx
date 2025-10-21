import Head from 'next/head'

interface JsonLdProps {
  data: Record<string, any>
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  )
}

// Organization Schema
export const OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Institute of Free Technology',
  alternateName: 'IFT',
  description:
    'A mission-driven tech startup studio. We take ideas from the drawing board to market with financial, technical, legal, people operations, and brand-building support at every step.',
  url: 'https://free.technology',
  logo: 'https://free.technology/favicon.ico',
  foundingDate: '2023',
  founders: [
    {
      '@type': 'Person',
      name: 'Jarrad Hope',
      jobTitle: 'Co-founder',
    },
    {
      '@type': 'Person',
      name: 'Carl Bennetts',
      jobTitle: 'Co-founder',
    },
  ],
  industry: 'Technology',
  sector: 'Blockchain Technology',
  keywords: [
    'blockchain',
    'decentralization',
    'privacy',
    'digital rights',
    'web3',
    'startup studio',
  ],
  sameAs: ['https://x.com/InstituteFT'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'General Inquiries',
    url: 'https://free.technology',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Portfolio Projects',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Logos',
          description:
            'A movement supporting the development of the decentralised web.',
          url: 'https://free.technology/logos',
          applicationCategory: 'Movement',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Status',
          description:
            'A blockchain-based super app that combines private messaging, a wallet, a DApp browser, and tools for web3 community management.',
          url: 'https://free.technology/status',
          applicationCategory: 'Instant messaging, community management',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Status Network',
          description:
            'A gasless Ethereum L2 with a built-in public goods funding mechanism.',
          url: 'https://free.technology/status-network',
          applicationCategory: 'Ethereum Layer 2',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Keycard',
          description:
            'A discreet, convenient, affordable hardware security solution for crypto assets.',
          url: 'https://free.technology/keycard',
          applicationCategory: 'Hardware wallet',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Nimbus',
          description:
            'A lightweight Ethereum client implementation designed to reduce hardware requirements for solo stakers.',
          url: 'https://free.technology/nimbus',
          applicationCategory: 'Ethereum client',
        },
      },
    ],
  },
}

// Website Schema
export const WebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Institute of Free Technology',
  url: 'https://free.technology',
  description: 'Fostering innovation, defending digital liberties',
  publisher: {
    '@type': 'Organization',
    name: 'Institute of Free Technology',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://free.technology/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

// Breadcrumb Schema for homepage
export const HomeBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://free.technology',
    },
  ],
}

// Services Schema
export const ServicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Institute of Free Technology Services',
  description:
    'Comprehensive startup studio services including technical support, financial backing, legal guidance, people operations, and branding.',
  provider: {
    '@type': 'Organization',
    name: 'Institute of Free Technology',
    url: 'https://free.technology',
  },
  serviceType: 'Startup Studio Services',
  areaServed: 'Global',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IFT Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technical Support',
          description:
            'Vac is a principle-driven research and development group that provides technical support to each IFT startup. It comprises elite specialists in distributed systems, zero-knowledge proofs, and P2P networking.',
          serviceType: 'Technical Research & Development',
          provider: {
            '@type': 'Organization',
            name: 'Vac',
            url: 'https://vac.dev/',
          },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Financial Support',
          description:
            'Our startups benefit from IFT capital to fund their research and development efforts. We handle payment of fees to contributors and potential expenses via our in-house finance department.',
          serviceType: 'Financial Services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Legal Services',
          description:
            'A specialist and highly experienced legal department led by Dr Agata Ferreira helps our startups navigate the blockchain legal landscape while providing legal support to achieve project aims.',
          serviceType: 'Legal Consultation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'People Operations',
          description:
            'Our PeopleOps department ensures startups have highly engaged and productive contributors. We handle talent scouting, recruiting, onboarding, travel, and administrative support.',
          serviceType: 'Human Resources',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Branding and Awareness',
          description:
            'Ned Karlovich leads the IFT creative branding studio, Acid. The studio works with startups to deploy high-impact campaigns, raising brand awareness within web3 and beyond.',
          serviceType: 'Marketing & Branding',
          provider: {
            '@type': 'Organization',
            name: 'Acid',
            url: 'https://acid.info/',
          },
        },
      },
    ],
  },
}

// Services Page Breadcrumb Schema
export const ServicesBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://free.technology',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://free.technology/services',
    },
  ],
}
