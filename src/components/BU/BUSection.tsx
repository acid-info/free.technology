import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'

type Props = {
  title: string
  description: React.ReactNode
}

const BUSection = ({ title, description }: Props) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Content>{description}</Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  box-sizing: border-box;

  @media (max-width: ${breakpoints.md}px) {
    margin-top: 60px;
    flex-direction: column;
  }
`

const Content = styled.div`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 32px;

  h3 {
    font-size: 36px;
    font-weight: 400;
    line-height: 42px;
    margin-bottom: 32px;
  }

  p {
    font-size: 22px;
    font-weight: 400;
    line-height: 122%;
    white-space: pre-wrap;
    max-width: 817px;
  }
`

const TitleContainer = styled.div`
  width: 100%;
  padding-top: 24px;

  @media (max-width: ${breakpoints.md}px) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  }
`

const Title = styled.h3`
  font-size: 52px;
  font-weight: 400;
  line-height: 60px;
  text-transform: capitalize;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 22px;
    line-height: 122%;
    padding-block: 16px;
  }
`

export default BUSection
