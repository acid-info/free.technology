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
  top: 0;
  right: 0;
  height: 100vh;
  width: 50vw;
`
