import { uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'

export const Navbar = () => {
  return (
    <Container>
      <span>
        <p>Program details</p>
        <p>Contact</p>
      </span>
      <span>
        <p>News</p>
        <p>Other</p>
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
    gap: 16px;
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
