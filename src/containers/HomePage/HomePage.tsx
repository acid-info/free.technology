import styled from '@emotion/styled'
import React from 'react'

export type HomePageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const HomePage: React.FC<HomePageProps> = ({ children, ...props }) => {
  return <Root {...props}>{children}</Root>
}

const Root = styled.div`
  width: 100%;
  padding: 16px;
`
