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
  font-size: 22px;
  font-weight: 400;
  line-height: 130%;
  padding-block: 20px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`

export default Team
