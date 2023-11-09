import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import ServiceItem, { ServiceType } from './ServiceItem' // adjust path accordingly

type Props = {
  services: ServiceType[]
  activeServices: string[]
}

const ServiceList = ({ services, activeServices }: Props) => {
  if (services == null) {
    return <div>Something went wrong</div>
  }

  return services
    .filter((service) =>
      !activeServices?.length ? true : activeServices.includes(service.title),
    )
    .map((service, idx) => (
      <Container key={idx + '-services'}>
        <TitleContainer>
          <Title>{service.title}</Title>
        </TitleContainer>
        <Service>
          <ServiceItem key={service.id} service={service} />
        </Service>
      </Container>
    ))
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 180px;
  border-top: 1px solid rgba(0, 0, 0, 0.18);

  @media (max-width: ${breakpoints.md}px) {
    margin-top: 60px;
    flex-direction: column;
  }
`

const Service = styled.div`
  width: 100%;
`

const TitleContainer = styled.div`
  width: 100%;
`

const Title = styled.h3`
  padding-top: 24px;
  width: 360px;
  color: #000;
  font-size: 52px;
  font-weight: 400;
  line-height: 60px;
  text-transform: capitalize;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 22px;
    line-height: 122%;
    padding-block: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  }
`

export default ServiceList
