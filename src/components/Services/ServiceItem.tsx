import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'
import ArrowUpRight from '../Icons/ArrowUpRight'

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
          <ServiceButton>
            {service.button.text}
            <IconContainer>
              <ArrowUpRight />
            </IconContainer>
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

const ServiceButton = styled.button`
  height: 42px;
  font-size: 14px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.05);
  position: relative;
  color: black;
  padding: 10px 49px 10px 18px;
  cursor: pointer;
  border: none;

  user-select: none;
  -webkit-user-select: none;
`

const IconContainer = styled.span`
  position: absolute;
  top: 7px;
  right: 7px;
`

export default ServiceItem
