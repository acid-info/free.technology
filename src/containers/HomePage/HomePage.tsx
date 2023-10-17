import styled from '@emotion/styled'
import React from 'react'

export type HomePageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const HomePage: React.FC<HomePageProps> = ({ ...props }) => {
  return <Root {...props}>IFT</Root>
}

const Root = styled.div`
  width: 100%;
`
