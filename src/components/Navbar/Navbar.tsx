import { uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <Container>
      <span>
        <Link href="/">
          <p>HOME</p>
        </Link>
        <Link href="/services">
          <p>SERVICES</p>
        </Link>
        <Link href="/jobs">
          <p>JOB LIST</p>
        </Link>
        <Link href="/challenges">
          <p>CHALLENGES</p>
        </Link>
      </span>
    </Container>
  )
}

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  height: ${uiConfigs.navbarHeight}px;
  padding: 4px 16px;

  text-transform: uppercase;
  box-sizing: border-box;

  span {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: white;
  }
`

export default Navbar
