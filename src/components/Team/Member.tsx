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

  h3,
  p {
    text-overflow: ellipsis;
    font-size: 22px;
    font-weight: 400;
    line-height: 130%;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  aspect-ratio: 4/3;
`

const MemberImage = styled(Image)`
  width: 100%;
  height: 100%;
`

const Content = styled.div`
  width: 100%;
`

export default Member