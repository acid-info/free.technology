import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'
import { toBuInUrl } from '../../../utils/bu'
import { FilterTitle } from '../Filter'
import { Tag } from '../Tag'
import { ServiceType } from './ServiceItem'

type Props = {
  services: ServiceType[]
  activeServices: string[]
  setActiveServices: React.Dispatch<React.SetStateAction<string[]>>
}

const ServicePicker = ({
  services,
  activeServices,
  setActiveServices,
}: Props) => {
  if (services == null) {
    return <div>Something went wrong</div>
  }

  const toggleService = (service: string) => {
    if (activeServices.includes(service)) {
      setActiveServices((prevServicesContainer) =>
        prevServicesContainer.filter((item) => item !== service),
      )
    } else {
      setActiveServices([service])
    }
  }

  return (
    <Container>
      <FilterTitle title="Our Services" length={services.length} />
      <Border />
      <ServicesContainer>
        {services?.length
          ? services.map((service) => (
              <CustomLink
                key={service.title + '-tag'}
                href={`#${toBuInUrl(service.title)}`}
              >
                <Tag
                  active={activeServices.includes(service.title)}
                  onClick={() => toggleService(service.title)}
                >
                  {service.title}
                </Tag>
              </CustomLink>
            ))
          : null}
      </ServicesContainer>
      <Border />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: calc(${uiConfigs.navbarHeight}px + 24px);
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.xl}px) {
    margin-top: calc(${uiConfigs.navbarHeight}px + 18px);
  }

  @media (max-width: ${breakpoints.md}px) {
    margin-top: calc(${uiConfigs.navbarHeight}px + 16px);
  }
`

const ServicesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 16px 0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: calc(100vw - 32px);
    margin-left: -16px;
    padding: 16px;
  }
`

const Border = styled.hr`
  background: rgba(0, 0, 0, 0.18);
  border: 0;
  height: 1px;
  width: 100%;
  margin: 0;
`

const CustomLink = styled(Link)`
  text-decoration: none;
`

export default ServicePicker
