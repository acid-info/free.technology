import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'

const BUVideo: React.FC = () => {
  return (
    <Container>
      <Image src="right-side.gif" alt="bu-video" />
    </Container>
  )
}

const Container = styled.div`
  background-size: 100%;
  box-sizing: border-box;
  width: 100%;
`

const Image = styled.img`
  position: relative;
  top: ${uiConfigs.navbarHeight}px;
  height: 142px;
  top: 0px;
  width: 100%;
  box-sizing: border-box;
  object-fit: cover;

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 84px;
  }
`

export default BUVideo
