import styled from '@emotion/styled'

export const Footer = () => {
  return (
    <Container>
      <div>
        <p>Institute of Free Technology. ©{new Date().getFullYear()}</p>
        <p>IFT@contact.com</p>
      </div>
      <span>
        <p>LinkedIn</p>
        <p>Vimeo</p>
        <p>Youtube</p>
      </span>
    </Container>
  )
}

const Container = styled.nav`
  display: flex;
  padding-top: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.28);
  margin-top: 140px;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  div {
    width: 50%;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
  }
`

export default Footer
