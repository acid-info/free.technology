import { breakpoints, uiConfigs } from '@/configs/ui.configs'
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

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column-reverse;
    width: 100%;
  }
`

const Content = styled.div`
  width: 50%;
  margin-top: ${uiConfigs.navbarHeight}px;
  padding: 16px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    margin-top: 0;
  }
`
