import styled from '@emotion/styled'
import React from 'react'
import { GIFContainer } from './GIFContainer'

export type HomePageProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Home: React.FC<HomePageProps> = ({ children, ...props }) => {
  return (
    <Root {...props}>
      <Content>{children}</Content>
      <GIFContainer />
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
`

const Content = styled.div`
  width: 50vw;
  margin-top: 48px;
  padding: 16px;
  box-sizing: border-box;
`
