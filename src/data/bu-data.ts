const BU_DATA: any = {
  logos: {
    hero: {
      bu: 'logos',
      est: '2020',
      devStatus: 'In production',
      vertical: 'Decentralised communications',
      founders: 'Oskar Thorén',
      achievements: 'Integrated with Status, Railgun, and the Graph',
      description:
        'Waku is a family of protocols that enable privacy-preserving communications over a P2P network for web3 applications. Consistent with IFT principles of accessibility and upholding civil liberties, Waku is modular, network agnostic, and obscures message content and metadata in transit.',
      connect: [
        { link: 'https://docs.waku.org/', label: 'Docs' },
        { link: 'https://x.com/waku_org', label: 'X' },
        { link: 'https://discord.waku.org/', label: 'Discord' },
      ],
      website: 'https://waku.org/',
      github: 'https://github.com/waku-org',
      lead: 'Franck Royer',
    },
    about: {
      description: `The network facilitates human-to-human, machine-to-human, and machine-to-machine communication in both directions, giving it an enormous scope of potential applications — from internode communications to in-game messaging and everything in between. Currently, there are three Waku client implementations: nwaku (reference implementation in Nim), Go-Waku (for Go applications), and JS-Waku (for browsers).\n\nWaku v1 was a fork of the Whisper protocol, but persistent scalability issues forced an entire protocol rewrite, birthing Waku v2 in 2021. At a high level, Waku v2 implements Pub/Sub over libp2p, extending the networking framework’s capabilities to include retrieving historical messages for mostly offline devices, adaptive nodes, and bandwidth preservation for resource-restricted devices.\n\nKey to Waku’s design is its modularity. When integrating Waku with an app, developers can select which protocols to implement according to their use case and users’ hardware availability, enabling devices with limited resources to contribute as peers in the network. The Relay protocol is the foundation of Waku and handles Pub/Sub messaging. Among the other protocols complementing Relay are Store, which enables historic message retrieval; Filter, which preserves bandwidth for nodes with limited resources; and Light Push, which allows nodes with short connections and limited bandwidth to publish messages to the Waku network.`,
    },
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
        'Waku is a family of protocols that enable privacy-preserving communications over a P2P network for web3 applications. Consistent with IFT principles of accessibility and upholding civil liberties, Waku is modular, network agnostic, and obscures message content and metadata in transit.',
      connect: [
        { link: 'https://docs.waku.org/', label: 'Docs' },
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
      est: '2020',
      devStatus: 'In production',
      vertical: 'Decentralised communications',
      founders: 'Oskar Thorén',
      achievements: 'Integrated with Status, Railgun, and the Graph',
      description:
        'Waku is a family of protocols that enable privacy-preserving communications over a P2P network for web3 applications. Consistent with IFT principles of accessibility and upholding civil liberties, Waku is modular, network agnostic, and obscures message content and metadata in transit.',
      connect: [
        { link: 'https://docs.waku.org/', label: 'Docs' },
        { link: 'https://x.com/waku_org', label: 'X' },
        { link: 'https://discord.waku.org/', label: 'Discord' },
      ],
      website: 'https://waku.org/',
      github: 'https://github.com/waku-org',
      lead: 'Franck Royer',
    },
    about: {
      description: `The network facilitates human-to-human, machine-to-human, and machine-to-machine communication in both directions, giving it an enormous scope of potential applications — from internode communications to in-game messaging and everything in between. Currently, there are three Waku client implementations: nwaku (reference implementation in Nim), Go-Waku (for Go applications), and JS-Waku (for browsers).\n\nWaku v1 was a fork of the Whisper protocol, but persistent scalability issues forced an entire protocol rewrite, birthing Waku v2 in 2021. At a high level, Waku v2 implements Pub/Sub over libp2p, extending the networking framework’s capabilities to include retrieving historical messages for mostly offline devices, adaptive nodes, and bandwidth preservation for resource-restricted devices.\n\nKey to Waku’s design is its modularity. When integrating Waku with an app, developers can select which protocols to implement according to their use case and users’ hardware availability, enabling devices with limited resources to contribute as peers in the network. The Relay protocol is the foundation of Waku and handles Pub/Sub messaging. Among the other protocols complementing Relay are Store, which enables historic message retrieval; Filter, which preserves bandwidth for nodes with limited resources; and Light Push, which allows nodes with short connections and limited bandwidth to publish messages to the Waku network.`,
    },
  },
  nomos: {
    hero: {
      bu: 'nomos',
      est: '2020',
      devStatus: 'In production',
      vertical: 'Decentralised communications',
      founders: 'Oskar Thorén',
      achievements: 'Integrated with Status, Railgun, and the Graph',
      description:
        'Waku is a family of protocols that enable privacy-preserving communications over a P2P network for web3 applications. Consistent with IFT principles of accessibility and upholding civil liberties, Waku is modular, network agnostic, and obscures message content and metadata in transit.',
      connect: [
        { link: 'https://docs.waku.org/', label: 'Docs' },
        { link: 'https://x.com/waku_org', label: 'X' },
        { link: 'https://discord.waku.org/', label: 'Discord' },
      ],
      website: 'https://waku.org/',
      github: 'https://github.com/waku-org',
      lead: 'Franck Royer',
    },
    about: {
      description: `The network facilitates human-to-human, machine-to-human, and machine-to-machine communication in both directions, giving it an enormous scope of potential applications — from internode communications to in-game messaging and everything in between. Currently, there are three Waku client implementations: nwaku (reference implementation in Nim), Go-Waku (for Go applications), and JS-Waku (for browsers).\n\nWaku v1 was a fork of the Whisper protocol, but persistent scalability issues forced an entire protocol rewrite, birthing Waku v2 in 2021. At a high level, Waku v2 implements Pub/Sub over libp2p, extending the networking framework’s capabilities to include retrieving historical messages for mostly offline devices, adaptive nodes, and bandwidth preservation for resource-restricted devices.\n\nKey to Waku’s design is its modularity. When integrating Waku with an app, developers can select which protocols to implement according to their use case and users’ hardware availability, enabling devices with limited resources to contribute as peers in the network. The Relay protocol is the foundation of Waku and handles Pub/Sub messaging. Among the other protocols complementing Relay are Store, which enables historic message retrieval; Filter, which preserves bandwidth for nodes with limited resources; and Light Push, which allows nodes with short connections and limited bandwidth to publish messages to the Waku network.`,
    },
  },
  status: {
    hero: {
      bu: 'status',
      est: '2020',
      devStatus: 'In production',
      vertical: 'Decentralised communications',
      founders: 'Oskar Thorén',
      achievements: 'Integrated with Status, Railgun, and the Graph',
      description:
        'Waku is a family of protocols that enable privacy-preserving communications over a P2P network for web3 applications. Consistent with IFT principles of accessibility and upholding civil liberties, Waku is modular, network agnostic, and obscures message content and metadata in transit.',
      connect: [
        { link: 'https://docs.waku.org/', label: 'Docs' },
        { link: 'https://x.com/waku_org', label: 'X' },
        { link: 'https://discord.waku.org/', label: 'Discord' },
      ],
      website: 'https://waku.org/',
      github: 'https://github.com/waku-org',
      lead: 'Franck Royer',
    },
    about: {
      description: `The network facilitates human-to-human, machine-to-human, and machine-to-machine communication in both directions, giving it an enormous scope of potential applications — from internode communications to in-game messaging and everything in between. Currently, there are three Waku client implementations: nwaku (reference implementation in Nim), Go-Waku (for Go applications), and JS-Waku (for browsers).\n\nWaku v1 was a fork of the Whisper protocol, but persistent scalability issues forced an entire protocol rewrite, birthing Waku v2 in 2021. At a high level, Waku v2 implements Pub/Sub over libp2p, extending the networking framework’s capabilities to include retrieving historical messages for mostly offline devices, adaptive nodes, and bandwidth preservation for resource-restricted devices.\n\nKey to Waku’s design is its modularity. When integrating Waku with an app, developers can select which protocols to implement according to their use case and users’ hardware availability, enabling devices with limited resources to contribute as peers in the network. The Relay protocol is the foundation of Waku and handles Pub/Sub messaging. Among the other protocols complementing Relay are Store, which enables historic message retrieval; Filter, which preserves bandwidth for nodes with limited resources; and Light Push, which allows nodes with short connections and limited bandwidth to publish messages to the Waku network.`,
    },
  },
  keycard: {
    hero: {
      bu: 'keycard',
      est: '2020',
      devStatus: 'In production',
      vertical: 'Decentralised communications',
      founders: 'Oskar Thorén',
      achievements: 'Integrated with Status, Railgun, and the Graph',
      description:
        'Waku is a family of protocols that enable privacy-preserving communications over a P2P network for web3 applications. Consistent with IFT principles of accessibility and upholding civil liberties, Waku is modular, network agnostic, and obscures message content and metadata in transit.',
      connect: [
        { link: 'https://docs.waku.org/', label: 'Docs' },
        { link: 'https://x.com/waku_org', label: 'X' },
        { link: 'https://discord.waku.org/', label: 'Discord' },
      ],
      website: 'https://waku.org/',
      github: 'https://github.com/waku-org',
      lead: 'Franck Royer',
    },
    about: {
      description: `The network facilitates human-to-human, machine-to-human, and machine-to-machine communication in both directions, giving it an enormous scope of potential applications — from internode communications to in-game messaging and everything in between. Currently, there are three Waku client implementations: nwaku (reference implementation in Nim), Go-Waku (for Go applications), and JS-Waku (for browsers).\n\nWaku v1 was a fork of the Whisper protocol, but persistent scalability issues forced an entire protocol rewrite, birthing Waku v2 in 2021. At a high level, Waku v2 implements Pub/Sub over libp2p, extending the networking framework’s capabilities to include retrieving historical messages for mostly offline devices, adaptive nodes, and bandwidth preservation for resource-restricted devices.\n\nKey to Waku’s design is its modularity. When integrating Waku with an app, developers can select which protocols to implement according to their use case and users’ hardware availability, enabling devices with limited resources to contribute as peers in the network. The Relay protocol is the foundation of Waku and handles Pub/Sub messaging. Among the other protocols complementing Relay are Store, which enables historic message retrieval; Filter, which preserves bandwidth for nodes with limited resources; and Light Push, which allows nodes with short connections and limited bandwidth to publish messages to the Waku network.`,
    },
  },
  nimbus: {
    hero: {
      bu: 'nimbus',
      est: '2020',
      devStatus: 'In production',
      vertical: 'Decentralised communications',
      founders: 'Oskar Thorén',
      achievements: 'Integrated with Status, Railgun, and the Graph',
      description:
        'Waku is a family of protocols that enable privacy-preserving communications over a P2P network for web3 applications. Consistent with IFT principles of accessibility and upholding civil liberties, Waku is modular, network agnostic, and obscures message content and metadata in transit.',
      connect: [
        { link: 'https://docs.waku.org/', label: 'Docs' },
        { link: 'https://x.com/waku_org', label: 'X' },
        { link: 'https://discord.waku.org/', label: 'Discord' },
      ],
      website: 'https://waku.org/',
      github: 'https://github.com/waku-org',
      lead: 'Franck Royer',
    },
    about: {
      description: `The network facilitates human-to-human, machine-to-human, and machine-to-machine communication in both directions, giving it an enormous scope of potential applications — from internode communications to in-game messaging and everything in between. Currently, there are three Waku client implementations: nwaku (reference implementation in Nim), Go-Waku (for Go applications), and JS-Waku (for browsers).\n\nWaku v1 was a fork of the Whisper protocol, but persistent scalability issues forced an entire protocol rewrite, birthing Waku v2 in 2021. At a high level, Waku v2 implements Pub/Sub over libp2p, extending the networking framework’s capabilities to include retrieving historical messages for mostly offline devices, adaptive nodes, and bandwidth preservation for resource-restricted devices.\n\nKey to Waku’s design is its modularity. When integrating Waku with an app, developers can select which protocols to implement according to their use case and users’ hardware availability, enabling devices with limited resources to contribute as peers in the network. The Relay protocol is the foundation of Waku and handles Pub/Sub messaging. Among the other protocols complementing Relay are Store, which enables historic message retrieval; Filter, which preserves bandwidth for nodes with limited resources; and Light Push, which allows nodes with short connections and limited bandwidth to publish messages to the Waku network.`,
    },
  },
}

export default BU_DATA
