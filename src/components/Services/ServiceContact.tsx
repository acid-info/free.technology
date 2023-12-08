import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'

const ServiceContact = () => {
  return (
    <Container>
      <Header>Work with us!</Header>
      <Content>
        <Title>
          We&apos;d love to hear from you if you&apos;re building or investing
          in technologies to uphold users&apos; rights and freedoms.
        </Title>
        <Description>
          If our mission, the ideas we incubate, or our services interest you,
          please get in touch.
        </Description>
      </Content>
      <CustomLink href="mailto:info@free.technology">
        <EmailButton>Email us</EmailButton>
      </CustomLink>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 207px;
  margin-bottom: 56px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: ${breakpoints.xl}px) {
    margin-top: 187px;
    margin-bottom: 42px;
  }

  @media (max-width: ${breakpoints.md}px) {
    margin-bottom: 32px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  font-size: 52px;
  font-weight: 400;
  padding: 24px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.18);

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 38px;
  }

  @media (max-width: ${breakpoints.md}px) {
    font-size: 22px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  margin-bottom: 56px;
  max-width: 1300px;
  margin: 0 auto 56px auto;

  @media (max-width: ${breakpoints.xl}px) {
    margin: 0 auto 42px auto;
    gap: 18px;
  }

  @media (max-width: ${breakpoints.md}px) {
    gap: 8px;
    margin: 0 auto 40px auto;
  }
`

const Title = styled.h3`
  font-size: 52px;
  color: black;
  text-align: center;

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 38px;
  }

  @media (max-width: ${breakpoints.md}px) {
    font-size: 22px;
    line-height: 122%;
  }
`

const Description = styled.p`
  overflow: hidden;
  color: #000;
  font-size: 22px;
  line-height: 122%;
  font-weight: 400;
  max-width: 520px;
  margin: 0 auto;
  text-align: center;
  max-width: 528px;

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 16px;
    line-height: 122%;
    max-width: 396px;
  }

  @media (max-width: ${breakpoints.md}px) {
    font-size: 14px;
  }
`

const EmailButton = styled.button`
  width: 185px;
  height: 76px;
  margin: 0 auto;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: black;
  position: relative;
  color: black;
  color: white;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 2px;

  user-select: none;
  -webkit-user-select: none;

  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: black;
  }

  @media (max-width: ${breakpoints.xl}px) {
    width: 139px;
    height: 57px;
    padding: 18.75px 36px;
    font-size: 16.5px;
    line-height: 19.5px;
  }
`

const CustomLink = styled(Link)`
  text-decoration: none;
`

export default ServiceContact
