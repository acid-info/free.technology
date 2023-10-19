import { uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import React from 'react'

export const GIFContainer: React.FC = () => {
  return (
    <Container>
      <Image src="right-side.gif" alt="right-side" />
    </Container>
  )
}

const Container = styled.div`
  width: 50vw;
  background-color: black;
  background-size: 100%;
`

const Image = styled.img`
  position: fixed;
  top: ${uiConfigs.navbarHeight}px;
  right: 0;
  height: calc(100vh - 28px);
  width: 50vw;
`
