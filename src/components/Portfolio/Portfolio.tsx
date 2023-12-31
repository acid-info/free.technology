import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Portfolio = ({ children, ...props }: Props) => {
  return (
    <Container {...props}>
      <Header>
        <Title>Portfolio</Title>
      </Header>
      {children}
    </Container>
  )
}

const Container = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.18);
`

const Header = styled.div`
  display: flex;
  padding-block: 24px;
  margin-bottom: 56px;

  @media (max-width: ${breakpoints.xl}px) {
    padding-block: 18px;
    margin-bottom: 42px;
  }

  @media (max-width: ${breakpoints.md}px) {
    padding-block: 16px;
    margin-bottom: 48px;

    sup {
      font-size: 12px;
      margin-left: 0px;
    }
  }
`

const Title = styled.p`
  font-size: 36px;
  font-weight: 400;
  line-height: 130%;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 27px;
    line-height: 32px;
  }

  @media (max-width: ${breakpoints.md}px) {
    font-size: 22px;
    line-height: 122%;
  }
`

export default Portfolio
