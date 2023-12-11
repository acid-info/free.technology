import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Button } from '../Button'

export type ServiceType = {
  id: string
  title: string
  description: string
  button?: {
    text: string
    url: string
  }
}

const ServiceItem = ({ service }: { service: ServiceType }) => {
  return (
    <ServiceContainer>
      <ServiceHeader>
        <Description>{service.description}</Description>
      </ServiceHeader>
      {service?.button && (
        <ServiceButtonLink
          href={service.button.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ServiceButton color="white" icon>
            {service.button.text}
          </ServiceButton>
        </ServiceButtonLink>
      )}
    </ServiceContainer>
  )
}

const ServiceContainer = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: ${breakpoints.xl}px) {
    padding: 18px 0;
  }
`

const ServiceHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.md}px) {
    margin-bottom: 24px;
  }
`

const Description = styled.p`
  overflow: hidden;
  color: #000;
  font-size: 22px;
  line-height: 122%;
  font-weight: 400;
  max-width: 817px;

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.md}px) {
    font-size: 14px;
  }
`

const ServiceButtonLink = styled(Link)`
  text-decoration: none;
`

const ServiceButton = styled(Button)`
  width: 150px;
  height: 40px;
  font-size: 14px;
`

export default ServiceItem
