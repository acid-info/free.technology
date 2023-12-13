import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'

export const HeroAssetContainer: React.FC = () => {
  return (
    <Container>
      <Image src="right-side.gif" alt="right-side" />
    </Container>
  )
}

const Container = styled.div`
  width: 50%;
  background-size: 100%;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
  }
`

const Image = styled.img`
  position: fixed;
  top: ${uiConfigs.navbarHeight}px;
  right: 0px;
  width: 50vw;
  height: calc(100vh - 28px);
  box-sizing: border-box;
  object-fit: cover;

  @media (max-width: ${breakpoints.md}px) {
    position: relative;
    top: 0px;
    width: 100%;
    height: 84px;
  }
`
