export const businessUnitMark = (businessUnit: string) => {
  switch (businessUnit) {
    case 'logos':
      return '/icons/bu/logos.svg'
    case 'codex':
      return '/icons/bu/codex.svg'
    case 'status':
      return '/icons/bu/status.svg'
    case 'waku':
      return '/icons/bu/waku.svg'
    case 'nimbus':
      return '/icons/bu/nimbus.svg'
    case 'nomos':
      return '/icons/bu/nomos.svg'
    case 'vac':
      return '/icons/bu/vac.svg'
    case 'keycard':
      return ''
    default:
      return ''
  }
}
