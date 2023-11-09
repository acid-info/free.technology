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
  margin-top: 268px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;

  &:last-child {
    border-bottom: none;
  }
`

const Header = styled.div`
  display: flex;
  font-size: 22px;
  font-weight: 400;
  padding: 24px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  margin-bottom: 24px;

  @media (max-width: ${breakpoints.md}px) {
    margin-bottom: 24px;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 56px;

  @media (max-width: ${breakpoints.md}px) {
    gap: 8px;
    margin-bottom: 40px;
  }
`

const Title = styled.h3`
  font-size: 52px;
  color: black;

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

  @media (max-width: ${breakpoints.md}px) {
    font-size: 12px;
  }
`

const EmailButton = styled.button`
  height: 42px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 2px;
  background: black;
  position: relative;
  color: black;
  color: white;
  text-align: center;
  padding: 10px 49px 10px 18px;
  cursor: pointer;
  border: none;
`

export default ServiceContact
