import { breakpoints, footerBUs, footerSocial } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Image from 'next/image'

export const HomeFooter = () => {
  const handleGoToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Container>
      <Header>
        <GoToTop onClick={handleGoToTop}>
          <Image
            src="/icons/chevron.svg"
            width={14}
            height={14}
            alt="go to top"
          />
        </GoToTop>
      </Header>
      <h2>Get In Touch</h2>
      <Description>
        <p>
          Share our mission and want to work with us?
          <br />
          Contact the IFT to see what we can do for you and your startup.
        </p>
        <button>Email us</button>
      </Description>
      <Links>
        <LinksColumn>
          <h3>Infrastructure</h3>
          {footerBUs.map((bu) => (
            <a key={bu.name} href={bu.link} target="_blank">
              {bu.name}
            </a>
          ))}
        </LinksColumn>
        <LinksColumn>
          <h3>Social</h3>
          {footerSocial.map((item) => (
            <a key={item.name} href={item.link} target="_blank">
              {item.name}
            </a>
          ))}
        </LinksColumn>
      </Links>
      <Bottom>
        <p>
          Institute of Free Technology.
          <br />©{new Date().getFullYear()}
        </p>
        <p>All Rights Reserved.</p>
      </Bottom>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  box-sizing: border-box;
  background-color: black;
  flex-direction: column;
  color: white;
  width: 50vw;
  padding: 16px 16px 0 16px;
  margin-top: 204px;

  h2 {
    padding-block: 24px;
    font-size: 34px;
    font-weight: 400;
    line-height: 130%;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    margin-top: 74px;
    padding: 16px 8px 0 8px;

    h2 {
      font-size: 22px;
      line-height: 122%;
      padding-block: 16px;
    }
  }
`

const Header = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
`

const GoToTop = styled.button`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  background-color: transparent;
  cursor: pointer;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 32px;
  margin-bottom: 64px;

  p {
    font-size: 36px;
    line-height: 122%;
  }

  button {
    display: flex;
    width: 150px;
    padding: 10px 34px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    margin-top: 24px;
    margin-bottom: 32px;

    p {
      font-size: 22px;
      line-height: 122%;
    }
  }
`

const Links = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 64px;
  border-top: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: ${breakpoints.md}px) {
    padding-bottom: 48px;
  }
`

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 50%;

  h3 {
    color: rgba(255, 255, 255, 0.35);
    font-size: 16px;
  }

  a {
    font-size: 16px;
    font-weight: 400;
    line-height: 130%;
    color: white;
  }

  @media (max-width: ${breakpoints.md}px) {
    h3 {
      font-size: 12px;
    }

    a {
      font-size: 12px;
      line-height: 130%;
    }
  }
`

const Bottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  display: border-box;
  padding-block: 20px;

  p {
    width: 50%;
  }

  @media (max-width: ${breakpoints.md}px) {
    p {
      font-size: 12px;
      line-height: 130%;
    }
  }
`

export default HomeFooter
