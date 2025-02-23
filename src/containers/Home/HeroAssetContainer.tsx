import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'

export const HeroAssetContainer: React.FC = () => {
  return (
    <Container>
      <Video autoPlay loop muted playsInline poster={'/videos/poster.jpeg'}>
        <source src={'/videos/output.mp4'} type={'video/mp4'} />
        <source src={'/videos/output.webm'} type={'video/webm'} />
        <source src={'/videos/output.ogv'} type={'video/ogv'} />
      </Video>
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

const Video = styled.video`
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
