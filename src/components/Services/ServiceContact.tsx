import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'

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
          please <a href="#">get in touch</a>.
        </Description>
      </Content>
      <EmailButton>Email us</EmailButton>
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

  @media (max-width: ${breakpoints.md}px) {
    gap: 8px;
    margin: 0 auto 40px auto;
  }
`

const Title = styled.h3`
  font-size: 52px;
  color: black;
  text-align: center;

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
`

export default ServiceContact
