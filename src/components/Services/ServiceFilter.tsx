import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { FilterTitle } from '../Filter'
import { Tag } from '../Tag'
import { ServiceType } from './ServiceItem'

type Props = {
  services: ServiceType[]
  activeServices: string[]
  setActiveServices: React.Dispatch<React.SetStateAction<string[]>>
}

const ServiceFilter = ({
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
      setActiveServices((prevServicesContainer) => [
        ...prevServicesContainer,
        service,
      ])
    }
  }

  return (
    <Container>
      <FilterTitle title="Our Services" length={services.length} />
      <Border />
      <ServicesContainer>
        {services?.length ? (
          services.map((service) => (
            <Tag
              active={activeServices.includes(service.title)}
              key={service.title + '-tag'}
              onClick={() => toggleService(service.title)}
            >
              {service.title}
            </Tag>
          ))
        ) : (
          <NoServices>No Open Positions</NoServices>
        )}
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

  @media (max-width: ${breakpoints.md}px) {
    margin-top: calc(${uiConfigs.navbarHeight}px + 16px);
  }
`

const Title = styled.h3`
  color: #000;
  font-size: 52px;
  font-weight: 400;
  line-height: 130%;
  text-transform: capitalize;
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 22px;
    line-height: 122%;
    margin-bottom: 16px;
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

const NoServices = styled.p`
  padding-top: 24px;
  font-size: 36px;
  color: black;
  text-decoration: none;
`

export default ServiceFilter
