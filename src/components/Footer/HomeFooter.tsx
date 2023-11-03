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
      <div>
        <p>
          Institute of Free Technology.
          <br />©{new Date().getFullYear()}
        </p>
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
  box-sizing: border-box;
  background-color: black;
  flex-direction: column;
  color: white;
  width: 50vw;
  padding: 16px;
  margin-top: 204px;

  h2 {
    padding-block: 24px;
    font-size: 34px;
    font-weight: 400;
    line-height: 130%;
  }
`

const Header = styled.div`
  padding-bottom: 16px;
  margin-bottom: 16px;
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
`

export default HomeFooter
