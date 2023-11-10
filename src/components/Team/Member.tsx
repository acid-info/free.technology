import styled from '@emotion/styled'
import Image from 'next/image'

interface Props {
  children: React.ReactNode
  img: string
}

export const Member = ({ img, children }: Props) => {
  return (
    <Container>
      <ImageContainer>
        <MemberImage src={img} alt={img} fill />
      </ImageContainer>
      <Content>{children}</Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    text-overflow: ellipsis;
    font-size: 22px;
    font-weight: 400;
    line-height: 130%;
  }

  p {
    color: #000;
    font-size: 18px;
    font-weight: 400;
    text-transform: capitalize;
    opacity: 0.5;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  aspect-ratio: 1;
`

const MemberImage = styled(Image)`
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`

export default Member
