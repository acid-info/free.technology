import { breakpoints, footerBUs, footerSocial } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Image from 'next/image'

export const Footer = () => {
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
      <FooterInto>
        <FooterInfoItem>
          <h2>IFT</h2>
        </FooterInfoItem>
        <FooterInfoItem>
          <h2>Get in touch</h2>
          <Description>
            <p>
              Share our mission and want to work with us?
              <br />
              Contact the IFT to see what we can do for you and your startup.
            </p>
            <button>Email us</button>
          </Description>
        </FooterInfoItem>
      </FooterInto>
      <Bottom>
        <Org>
          <p>
            Institute of Free Technology.
            <br />
            <span>©</span>
            {new Date().getFullYear()}
          </p>
          <p>All Rights Reserved.</p>
        </Org>
        <Links>
          <LinksContainer>
            <h3>Infrastructure</h3>
            <LinkItems>
              {footerBUs.map((bu) => (
                <a key={bu.name} href={bu.link} target="_blank">
                  {bu.name}
                </a>
              ))}
            </LinkItems>
          </LinksContainer>
          <LinksContainer>
            <h3>Social</h3>
            <LinkItems>
              {footerSocial.map((item) => (
                <a key={item.name} href={item.link} target="_blank">
                  {item.name}
                </a>
              ))}
            </LinkItems>
          </LinksContainer>
        </Links>
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
  padding: 16px 16px 44px 16px;

  h2 {
    padding-block: 24px;
    font-size: 36px;
    font-weight: 400;
    line-height: 130%;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
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

const FooterInto = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: ${breakpoints.md}px) {
    & > div:first-of-type {
      display: none;
    }
  }
`

const FooterInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  line-height: 122%;

  h2 {
    font-size: 36px;
    font-weight: 400;
    line-height: 42px;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;

    h2 {
      font-size: 22px;
    }
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 60px;

  p {
    font-size: 18px;
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
    margin-bottom: 48px;

    p {
      font-size: 22px;
      line-height: 122%;
    }
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    padding-bottom: 20px;
    flex-direction: row;
    gap: 8px;
  }
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  padding-block: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.18);

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

const LinkItems = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column;
  }
`

const Org = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-top: 1px solid rgba(255, 255, 255, 0.18);

  p:first-of-type {
    padding-top: 20px;

    span {
      display: inline-block;
      transform: rotate(180deg);
    }
  }

  p:nth-of-type(2) {
    margin-top: auto;
    padding-bottom: 20px;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    flex-direction: row;

    p {
      width: 50%;
      font-size: 12px;
    }

    p:nth-of-type(2) {
      padding-top: 20px;
      padding-bottom: unset;
      margin-top: unset;
      margin-bottom: auto;
    }
  }
`

const Bottom = styled.div`
  display: flex;
  display: border-box;
  padding-block: 20px;
  gap: 16px;

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column-reverse;
  }
`

export default Footer
