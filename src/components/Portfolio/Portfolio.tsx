import styled from '@emotion/styled'
import React from 'react'

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Portfolio = ({ children, ...props }: Props) => {
  const childrenArray = React.Children.toArray(children)

  return (
    <Container {...props}>
      <Title>Portfolio ({childrenArray?.length})</Title>
      {children}
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
  margin-bottom: 56px;
`

export default Portfolio
