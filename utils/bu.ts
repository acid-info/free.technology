export const businessUnitMark = (businessUnit: string) => {
  switch (businessUnit) {
    case 'logos':
      return '/icons/bu/logos.svg'
    case 'status-network':
      return '/icons/bu/status-network.svg'
    case 'status':
      return '/icons/bu/status.svg'
    case 'nimbus':
      return '/icons/bu/nimbus.svg'
    case 'vac':
      return '/icons/bu/vac.svg'
    case 'keycard':
      return '/icons/bu/keycard.svg'
    default:
      return ''
  }
}

export function toBuInUrl(bu: string) {
  return bu
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}
