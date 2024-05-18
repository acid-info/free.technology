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
        'A movement supporting the development of the decentralised web. Logos technologies lay the foundations for a freer internet upon which communities can evolve into network states. Each protocol in the Logos stack seeks to empower its users while upholding civil liberties and fundamental freedoms.',
      connect: [
        { link: 'http://forum.logos.co', label: 'Forum' },
        { link: 'https://x.com/Logos_state', label: 'X' },
        { link: 'http://www.discord.gg/logos-state', label: 'Discord' },
      ],
      website: 'https://logos.co/',
      github: 'https://github.com/logos-co',
      lead: 'Dr Corey Petty',
    },
    about: {
      description:
        'Logos is a collective of technologists, creatives, legal experts, business strategists, and activists who support the development, sustainability, and promotion of protocols furthering the decentralised web movement. These protocols lay the foundations for a freer internet upon which communities can evolve into network states. Each is built to empower users while upholding civil liberties and fundamental freedoms.\n\nInitially, the Logos tech stack comprises the P2P communications protocols (Waku), decentralised data storage engine (Codex), and the trustless agreements layer (Nomos). This trifecta mirrors Ethereum’s early roadmap for the decentralised web. However, Logos places greater importance on individual liberty, privacy, and self-sovereignty, and the design of its protocols reflects these values.\n\nAlongside developing infrastructure, Logos supports the advancement of the network state narrative. Among its initiatives to do so is the Logos Press Engine — an educational resource that hosts content from in-house activists, writers, and thinkers, as well as guest thought leaders on related topics.',
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
  waku: {
    hero: {
      bu: 'waku',
      est: '2020',
      devStatus: 'In production',
      vertical: 'Decentralised communications',
      founders: 'Oskar Thorén',
      achievements: 'Integrated with Status, Railgun, and the Graph',
      description:
        'A family of generalised P2P communications protocols. The messaging layer of the Logos stack. Waku is private, censorship resistant, modular, and scalable by design. This combination of features makes Waku suitable to run in a wide range of environments, including phones and browsers, while upholding its users’ rights to private communications.',
      connect: [
        // { link: 'https://docs.waku.org/', label: 'Docs' },
        { link: 'https://x.com/waku_org', label: 'X' },
        { link: 'https://discord.waku.org/', label: 'Discord' },
      ],
      website: 'https://waku.org/',
      github: 'https://github.com/waku-org',
      lead: 'Franck Royer',
    },
    testimonials: [
      {
        project: 'Status',
        icon: '/marks/status.svg',
        quote:
          "'Waku v2 has been instrumental in helping us scale the Status application securely while maintaining the decentralised nature of our network. The Waku team has been invaluable in providing practical solutions during the development of the Waku v2 protocol, enabling us to deliver essential Status Communities feature'",
      },
      {
        project: 'The Graph',
        icon: '/marks/the-graph.svg',
        quote:
          "'Our experience with Waku has been transformative, proving to be a valuable tool that reveals the potential of peer-to-peer communication technologies. We are excited to continue using Waku's advanced features and contribute to the growth of Graphcast and the broader Graph ecosystem.'",
      },
      {
        project: 'Railgun',
        icon: '/marks/railgun.svg',
        quote:
          "'RAILGUN contributors selected Waku to run its relayer network as an early-stage but promising product of the privacy-centric Status.im ecosystem. We have not been disappointed. The developers are extremely professional and responsive and continue to strive to understand and meet our needs as a communication layer for relaying private transactions.'",
      },
    ],
    about: {
      description: `The network facilitates human-to-human, machine-to-human, and machine-to-machine communication in both directions, giving it an enormous scope of potential applications — from internode communications to in-game messaging and everything in between. Currently, there are three Waku client implementations: nwaku (reference implementation in Nim), Go-Waku (for Go applications), and JS-Waku (for browsers).\n\nWaku v1 was a fork of the Whisper protocol, but persistent scalability issues forced an entire protocol rewrite, birthing Waku v2 in 2021. At a high level, Waku v2 implements Pub/Sub over libp2p, extending the networking framework’s capabilities to include retrieving historical messages for mostly offline devices, adaptive nodes, and bandwidth preservation for resource-restricted devices.\n\nKey to Waku’s design is its modularity. When integrating Waku with an app, developers can select which protocols to implement according to their use case and users’ hardware availability, enabling devices with limited resources to contribute as peers in the network. The Relay protocol is the foundation of Waku and handles Pub/Sub messaging. Among the other protocols complementing Relay are Store, which enables historic message retrieval; Filter, which preserves bandwidth for nodes with limited resources; and Light Push, which allows nodes with short connections and limited bandwidth to publish messages to the Waku network.`,
    },
    milestones: [
      {
        year: '2023',
        title: 'Scaling to support 10,000 and 1 million nodes',
      },
      {
        year: '2023',
        title: 'Autosharding, DoS protection, bandwidth capping',
      },
      {
        year: '2024',
        title: 'Node operator incentivisation',
      },
      {
        year: '2024+',
        title: 'Use case-specific SDKs',
      },
    ],
  },
  codex: {
    hero: {
      bu: 'codex',
      est: '2021',
      devStatus: 'Proof of concept',
      vertical: 'Decentralised storage',
      founders: 'Dmitriy Ryajov',
      achievements:
        'First proof-of-concept client delivered, awarded Ethereum Foundation data availability sampling research grant',
      description:
        'A decentralised storage engine with strong censorship resistance and durability guarantees. The data archiving layer of the Logos stack. Codex leverages a novel combination of cutting-edge features, including erasure coding, a lazy repair system, ZK-based remote auditing, and incentivisation mechanisms to ensure reliability, data durability, efficiency, and cost effectiveness.',
      connect: [
        // { link: 'https://docs.codex.storage/', label: 'Docs' },
        { link: 'https://blog.codex.storage/', label: 'Blog' },
        { link: 'https://x.com/Codex_storage', label: 'X' },
        { link: 'https://discord.gg/2NXGrsqmDq', label: 'Discord' },
      ],
      website: 'https://codex.storage/',
      github: 'https://github.com/codex-storage',
      lead: 'Dmitriy Ryajov',
    },
    about: {
      description:
        'Codex is a P2P storage engine with exceptional data durability and censorship resistance guarantees. Like the other startups the IFT incubates, Codex aims to be accessible in terms of hardware demands and usage cost while ensuring enduring, disintermediated access to stored data. Codex demoed proof-of-concept clients in 2022 and 2023 and is looking to deploy its MVP testnet in early 2024. Following the integrations of its incentive and repair schemes later in 2024, the team aims for its mainnet release in 2025. \n\nThe network leverages four key features, which combine to differentiate it from other projects in the decentralised storage niche: erasure coding and ZK-based proof of retrievability provide efficient data durability guarantees, a lazy repair system reduces resource requirements during data reconstruction, and incentivisation mechanisms encourage rational behaviour and a wide distribution of network participants.\n\nAs per its current architectural design, Codex comprises multiple node types with different resource demands, enabling those operating a wide array of devices to participate. Storage nodes stake collateral to accept a storage contract initiated by a user uploading a file, aggregator nodes contribute resources for more intensive operations, and client nodes request other nodes to store, find, and retrieve data. \n',
    },
    milestones: [
      {
        year: '2023',
        title: 'PoC-3 client',
      },
      {
        year: '2024',
        title: 'Codex MVP testnet',
      },
      {
        year: '2024',
        title: 'Implement incentive and repair mechanisms',
      },
      {
        year: '2025',
        title: 'Public mainnet launch',
      },
    ],
    profiles: [
      {
        name: 'Dmitriy',
      },
      {
        name: 'Slava',
      },
      {
        name: 'Ben',
      },
      {
        name: 'Jaremy',
      },
      {
        name: 'Tomasz',
      },
      {
        name: 'Mark',
      },
      {
        name: 'Eric',
      },
      {
        name: 'Adam',
      },
      {
        name: 'Csaba',
      },
      {
        name: 'Leo',
      },
      {
        name: 'Balazs',
      },
      {
        name: 'Jessie',
      },
      {
        name: 'Giuliano',
      },
    ],
  },
  nomos: {
    hero: {
      bu: 'nomos',
      est: '2022',
      devStatus: 'Research',
      vertical: 'Layer-1',
      founders: 'Jarrad Hope, Carl Bennetts',
      achievements:
        'Whitepaper and Architecture, working on specifications and first implementation',
      description:
        'A sovereign, modular, zk-encrypted network of blockchains. The trustless agreements layer of the Logos stack. The forthcoming Nomos network will provide a common infrastructure layer upon which communities and aspiring network states can build social, governance, and financial services that uphold their community members’ fundamental rights and values.',
      connect: [
        { link: 'https://x.com/Nomos_tech', label: 'X' },
        { link: 'https://discord.gg/NYDm83h46b', label: 'Discord' },
      ],
      website: 'https://nomos.tech/',
      github: 'https://github.com/logos-co',
      lead: '-',
    },
    about: {
      description:
        'Nomos is a network of blockchains that leverages a novel architecture and cutting-edge privacy-preserving mechanisms to protect users from the validator level upward while upholding individual sovereignty. The network aims to enable ecosystems with differing rulesets and performance expectations to coexist while benefiting from the security of a shared set of validators.\n\nAlthough still to be formally defined, Nomos’ planned architecture currently comprises three layers: a base layer, a coordination layer, and execution zones. The base layer aims to provide stable, secure, scalable foundations and focuses exclusively on consensus and data availability with no execution or validation performed.\n\nThe coordination layer supports a minimal set of functions, including  ZK-proof verification, message passing between execution zones, and operations relating to the creation of execution zones. This layer aims to ensure a user can always ‘exit’ an execution zone by submitting transactions directly to the coordination layer.\n\nAbove the base layer and coordination layer are execution zones, which enable those building applications and institutions on Nomos to experiment with different performance, privacy, and other tradeoffs. \n\nGiven its ambitious goals and the cutting-edge architecture proposed, Nomos is still in the early stages of research and design. The team aims to define the specifications for the base and coordination layers in 2024, with the network’s mainnet launch planned for the following year.',
    },
    milestones: [
      {
        year: '2024',
        title: 'Full specification of the base layer',
      },
      {
        year: '2024',
        title: 'Base layer testnet implementation',
      },
      {
        year: '2024',
        title: 'Coordination layer full spec',
      },
      {
        year: '2025',
        title: 'Coordination layer implementation',
      },
      {
        year: '2025',
        title: 'Mainnet base and coordination layer launch',
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
        'A blockchain-based super app that combines private messaging, a wallet, a DApp browser, and tools for web3 community management. Status aims to be a truly decentralised communication tool and, since its founding in 2017, has been progressively removing reliance on centralised infrastructure. The application leverages Waku and other technologies developed under the IFT umbrella.',
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
        'Status is a blockchain-based super application built to uphold users’ rights to a private conversation while providing convenient tools to navigate web3. Launched in 2020, its first version suffered from poor user experience owing to the shortcomings of existing decentralised messaging infrastructure. The team responded by allocating resources toward developing the underlying technologies required to disintermediate services like instant messaging, eventually leading to the founding of the Institute of Free Technology in 2023.\n\nWith recent optimisations to Waku, Status relaunched its applications in 2023. Status v2 features a dramatically improved user experience and scalability while remaining efficient in terms of resource consumption. The relaunched apps also feature web3 community tools, enabling users to set up and establish token-gated groups without relying on centralised alternatives, such as Discord or Telegram. Alongside its instant messaging and community features, Status offers a multichain crypto wallet and DApp browser, making it a one-stop shop for web3 navigation.\n\nConsistently principled, Status also encourages community participation in its development journey. Its native ERC-20 token, SNT, empowers holders to determine which features contributors should prioritise, and there are plans to involve users further with similar initiatives.',
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
        { link: 'https://keycard.tech/docs/', label: 'Docs' },
        { link: 'https://twitter.com/Keycard_', label: 'X' },
      ],
      website: 'https://keycard.tech/',
      github: 'https://github.com/status-im/status-keycard',
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
