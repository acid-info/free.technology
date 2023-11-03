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
  flex-direction: column;
  background-color: black;
  color: white;
  padding: 16px;
`

export default Footer
