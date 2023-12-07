import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Image from 'next/image'

interface Props {
  children: React.ReactNode
  img?: string
}

export const Member = ({ img = '', children }: Props) => {
  return (
    <Container>
      {img?.length ? (
        <ImageContainer>
          <MemberImage src={img} alt={img} fill />{' '}
        </ImageContainer>
      ) : null}
      <Content>{children}</Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.18);

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

  @media (max-width: ${breakpoints.xl}px) {
    padding-top: 16px;
    padding-bottom: 8px;

    h3 {
      font-size: 16px;
      line-height: 20px;
    }

    p {
      font-size: 13px;
      line-height: 18px;
    }
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 16px;
  aspect-ratio: 1;

  @media (max-width: ${breakpoints.xl}px) {
    margin-bottom: 12px;
  }
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
