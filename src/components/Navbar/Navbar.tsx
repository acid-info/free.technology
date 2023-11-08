import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const isTransparent = router.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container scrolled={scrolled} isTransparent={isTransparent}>
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

const Container = styled.nav<{ scrolled: boolean; isTransparent: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  background: black;
  height: ${uiConfigs.navbarHeight}px;
  padding: 4px 16px;

  text-transform: uppercase;
  box-sizing: border-box;

  span {
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
  }

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: white;
    white-space: nowrap;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.md}px) {
    background-color: transparent;
    background-color: ${({ isTransparent, scrolled }) =>
      !scrolled && isTransparent ? 'transparent' : 'black'};

    span {
      gap: 10px 20px;
    }

    p {
      font-size: 12px;
      line-height: 20px;
    }
  }
`

export default Navbar
