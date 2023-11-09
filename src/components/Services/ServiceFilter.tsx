import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
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

  const toggleBU = (bu: string) => {
    if (activeServices.includes(bu)) {
      setActiveServices((prevServicesContainer) =>
        prevServicesContainer.filter((item) => item !== bu),
      )
    } else {
      setActiveServices((prevServicesContainer) => [
        ...prevServicesContainer,
        bu,
      ])
    }
  }

  return (
    <Container>
      <Title>Our Services</Title>
      <Border />
      <ServicesContainer>
        {services?.length ? (
          services.map((service) => (
            <Tag
              active={activeServices.includes(service.title)}
              key={service.title + '-tag'}
              onClick={() => toggleBU(service.title)}
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
  margin-bottom: 56px;
`

const Title = styled.h3`
  color: #000;
  font-size: 52px;
  font-weight: 400;
  line-height: 130%; /* 67.6px */
  text-transform: capitalize;
  margin-bottom: 24px;
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

const Tag = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? 'black' : 'white')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  font-size: 14px;
  line-height: 20px;
  height: 28px;
  border-radius: 14px;
  padding: 4px 14px;
  box-sizing: border-box;
  text-transform: capitalize;
  cursor: pointer;
  border: 1px solid black;
  white-space: nowrap;

  @media (max-width: ${breakpoints.md}px) {
    padding: 4px 10px;
  }
`

const NoServices = styled.p`
  padding-top: 24px;
  font-size: 36px;
  color: black;
  text-decoration: none;
`

export default ServiceFilter
