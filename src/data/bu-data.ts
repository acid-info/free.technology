const BU_DATA: any = {
  logos: {
    hero: {
      bu: 'logos',
      est: '2022',
      devStatus: 'In development',
      vertical: 'Movement',
      founders: 'Jarrad Hope, Carl Bennetts',
      achievements: 'Public launch, founded Logos Press Engine',
      description:
        'Logos is a movement of technologists, creatives, strategists, and activists working together to build a sovereign, people-owned technology stack that revitalises civil society and protects digital liberties at scale.',
      connect: [
        { link: 'http://forum.logos.co', label: 'Forum' },
        { link: 'https://x.com/Logos_network', label: 'X' },
        { link: 'https://discord.com/invite/logosnetwork', label: 'Discord' },
      ],
      website: 'https://logos.co/',
      github: 'https://github.com/logos-co',
      lead: 'Dr Corey Petty',
    },
    about: {
      description:
        'Our mission is simple: to rebuild the systems society depends on so they are free, fair, and usable for everyone. Today’s digital infrastructure was built to serve platforms, institutions, and states, not people. Logos changes that. We’re building technology for the self-determination of individuals and communities alike. \n\nThree core components under one identity and one mission form the Logos technology stack:\n\n - Messaging: a peer-to-peer communications protocol for private, censorship-resistant messaging. \n\n - Storage: a decentralised data storage engine designed for resilience, security, and autonomy. \n\n - Blockchain: a trustless agreements layer enabling private, decentralised coordination and computation. \n\n Together, these protocols deliver a complete toolkit for building and operating sovereign digital infrastructure. Private by default and decentralised, the Logos stack is the foundation for restoring civil society and a freer internet. ',
    },
    milestones: [
      {
        year: '2023',
        title: 'Public Launch',
      },
      {
        year: '2023',
        title: 'Logos Press Engine launch',
      },
    ],
  },
  status: {
    hero: {
      bu: 'status',
      est: '2017',
      devStatus: 'In production',
      vertical: 'Instant messaging, community management',
      founders: 'Jarrad Hope, Carl Bennetts',
      achievements:
        'Status v1 launched for desktop and mobile, Status v2 in development',
      description:
        'A blockchain-based super app that combines private messaging, a wallet, a DApp browser, and tools for web3 community management. Status aims to be a truly decentralised communication tool and, since its founding in 2017, has been progressively removing reliance on centralised infrastructure. The application leverages Logos Messaging and other technologies developed under the IFT umbrella.',
      connect: [
        { link: 'https://status.im/docs/', label: 'Docs' },
        { link: 'https://x.com/ethstatus', label: 'X' },
      ],
      website: 'https://status.im/',
      github: 'https://github.com/status-im',
      lead: 'John',
    },
    about: {
      description:
        "Status is a blockchain-based super application built to uphold users' rights to a private conversation while providing convenient tools to navigate web3. Launched in 2020, its first version suffered from poor user experience owing to the shortcomings of existing decentralised messaging infrastructure. The team responded by allocating resources toward developing the underlying technologies required to disintermediate services like instant messaging, eventually leading to the founding of the Institute of Free Technology in 2023.\n\nWith recent optimisations to Logos Messaging, Status relaunched its applications in 2023. Status v2 features a dramatically improved user experience and scalability while remaining efficient in terms of resource consumption. The relaunched apps also feature web3 community tools, enabling users to set up and establish token-gated groups without relying on centralised alternatives, such as Discord or Telegram. Alongside its instant messaging and community features, Status offers a multichain crypto wallet and DApp browser, making it a one-stop shop for web3 navigation.\n\nConsistently principled, Status also encourages community participation in its development journey. Its native ERC-20 token, SNT, empowers holders to determine which features contributors should prioritise, and there are plans to involve users further with similar initiatives.",
    },
    milestones: [
      {
        year: '2020',
        title: 'Status Mobile & Status Desktop v1 launched',
      },
      {
        year: '2023',
        title: 'Status v2 relaunch',
      },
    ],
  },
  keycard: {
    hero: {
      bu: 'keycard',
      est: '2017',
      devStatus: 'In production',
      vertical: 'Hardware wallet',
      founders: 'Jarrad Hope, Carl Bennetts',
      achievements: 'Keycard launched, Status integration',
      description:
        'A discreet, convenient, affordable hardware security solution for crypto assets. Taking the form of a credit card, Keycard offers comparable crypto security at a fraction of the cost of others in the hardware wallet niche. Keycard is in production, and the team is working on a full hardware wallet, which will be entirely open-source and compatible with existing Keycards while offering a familiar user experience.',
      connect: [
        { link: 'https://docs.keycard.tech/', label: 'Docs' },
        { link: 'https://twitter.com/Keycard_', label: 'X' },
      ],
      website: 'https://keycard.tech/',
      github: 'https://github.com/keycard-tech/',
      lead: 'Guy-Louis Grau',
    },
    about: {
      description:
        'Keycard is a hardware crypto security solution that stores private keys in an air-gapped secure element housed in a smart card. Users initiate a transaction in a Keycard-integrated wallet application on a device with NFC support and tap the card against their phone or card reader to sign it over a secure channel. The product is integrated with Status to add another layer of protection against phishing and other attacks, and an open-source SDK enables quick Keycard integration with other crypto wallet applications.\n\nA second Keycard product — Keycard Pro — is under development and will provide additional security for crypto assets and new functionality for the original smart card. Keycard Pro will feature a screen and onboard navigation buttons to initiate transactions on the device and will be compatible with Keycard.\n\nKeycard’s focus on accessibility, affordability, transparency, convenience, and discreetness aligns with the IFT’s values, positioning it well within our portfolio. The team builds in the open, and all accompanying software and its forthcoming Keycard Pro hardware wallet will always be fully open source.',
    },
    milestones: [
      {
        year: '2024',
        title: 'Release Keycard Pro',
      },
    ],
  },
  nimbus: {
    hero: {
      bu: 'nimbus',
      est: '2020',
      devStatus: 'In production',
      vertical: 'Ethereum client',
      founders: 'Jarrad Hope, Carl Bennetts',
      achievements:
        'Nimbus consensus client released, staking protocol partnerships established, Ethereum Foundation grant received',
      description:
        'A lightweight Ethereum client implementation designed to reduce hardware requirements for solo stakers and increase efficiency for institutional staking service operators.\n\nNimbus’ mission is to make staking accessible, thus promoting maximum network decentralisation. The Nimbus consensus client is in production, and an execution client is in development. By offering lightweight implementations for both consensus and execution layers, Nimbus simplifies operating an Ethereum node for hobbyists and institutional stakers alike.\n',
      connect: [
        { link: 'https://nimbus.guide/index.html', label: 'Docs' },
        { link: 'https://x.com/ethnimbus', label: 'X' },
        { link: 'https://discord.gg/XRxWahP', label: 'Discord' },
      ],
      website: 'https://nimbus.team/',
      github: 'https://github.com/status-im/nimbus',
      lead: 'Dustin Brody, Jacek Sieka',
    },
    about: {
      description:
        'Nimbus is an Ethereum client implementation built by a team committed to maximising the network’s censorship resistance and minimising vulnerabilities through decentralisation. Nimbus strives to make its clients as lightweight and, therefore, accessible as possible, reducing hardware demands for solo stakers while freeing system resources for larger and institutional operators. Nimbus clients are written in the efficient, general-purpose programming language Nim, and the team contains several leading contributors to the language itself.\n\nNimbus was founded in 2018 and released its consensus client in preparation for Ethereum’s switch to proof-of-stake in 2020. The team is also developing an execution layer client, which will further simplify the validator onboarding experience as the Nimbus clients are optimised to function together. With the two paired, operators will also benefit from a single source of tailored support rather than managing relationships with multiple client teams.\n\nBeyond its consensus and execution layer clients, Nimbus is involved in the Portal Network’s light client initiative. Nimbus Portal — the name of its forthcoming light client implementation — will empower non-node-operating users with data directly from the blockchain, reducing the ecosystem’s reliance on centralised infrastructure, like the RPC endpoints of Alchemy, Infura, and others. Additionally, Nimbus is involved with other initiatives to promote Ethereum decentralisation. These include Develp, which leverages the Nimbus team’s expertise and experience to partner with liquid staking protocols and other service providers to encourage greater use of minority clients in the network.',
    },
    testimonials: [
      {
        project: 'DSRV',
        icon: '/marks/status.svg',
        quote:
          "‘DSRV has been keen to improve client diversity, and we've been running Nimbus with close to 2000 validators over the last 16 months, including Ethereum mainnet. We found Nimbus consensus client to be both reliable and easy to operate while requiring fewer resources, making it worth recommending to every validator– not just solo stakers.’",
      },
      {
        project: 'Diva',
        icon: '/marks/the-graph.svg',
        quote:
          '‘Happy to collaborate with the great minds from Nimbus to push the boundaries of staking & DVT!’',
      },
      {
        project: 'Ethereum Phone',
        icon: '/marks/railgun.svg',
        quote:
          '’We’re thankful that Nimbus is building infrastructure that extends Ethereum and is additive to a crypto-first mobile OS like ethOS. We know firsthand that Nimbus is incredibly easy to work with, and boasts great dev support from the team.’',
      },
    ],
    milestones: [
      {
        year: '2020',
        title: 'Consensus client released',
      },
      {
        year: '2024',
        title: 'Execution client release',
      },
      {
        year: '2024',
        title: 'Light client release',
      },
    ],
  },
}

export default BU_DATA
