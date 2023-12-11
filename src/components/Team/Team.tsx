import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Team = ({ children, ...props }: Props) => {
  return (
    <Container {...props}>
      <Title>Who We Are</Title>
      <Grid>{children}</Grid>
    </Container>
  )
}

const Container = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.18);
`

const Title = styled.p`
  font-size: 36px;
  font-weight: 400;
  line-height: 130%;
  padding-block: 24px;
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 16px;
    line-height: 20px;
    padding-block: 18px;
  }

  @media (max-width: ${breakpoints.md}px) {
    font-size: 22px;
    line-height: 122%;
    padding-block: 16px;
    margin-bottom: 24px;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: ${breakpoints.xl}px) {
    gap: 12px;
  }

  @media (max-width: ${breakpoints.md}px) {
    gap: 8px;
  }
`

export default Team
