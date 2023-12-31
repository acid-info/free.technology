import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
  title: string
}

export const Mission = ({ title, children }: Props) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  margin-top: 200px;
  margin-bottom: 200px;

  h2 {
    font-size: 36px;
    font-weight: 400;
    line-height: 42px;
    margin-top: 24px;
  }

  & > div > div {
    display: flex;
    margin-top: 32px;
    margin-bottom: 40px;
    gap: 16px;

    @media (max-width: ${breakpoints.md}px) {
      gap: 8px;
    }
  }

  p {
    text-overflow: ellipsis;
    font-size: 22px;
    font-weight: 400;
    line-height: 122%;
    width: 50%;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  th {
    color: rgba(0, 0, 0, 0.35);
  }

  table td,
  table th {
    width: calc(100% / 2);
    vertical-align: baseline;
  }

  table thead {
    border-top: 1px solid rgba(0, 0, 0, 0.18);
  }

  table th,
  table tr {
    border: none;
    font-weight: 400;
    text-align: left;
    font-size: 18px;
    line-height: 130%;
    padding: 20px 0 8px 0;
  }

  @media (max-width: ${breakpoints.xl}px) {
    margin-top: 165px;
    margin-bottom: 111px;

    h2 {
      font-size: 27px;
      line-height: 32px;
    }

    p {
      font-size: 16px;
      line-height: 122%;
    }
  }

  @media (max-width: ${breakpoints.md}px) {
    h2 {
      font-size: 22px;
      line-height: 122%;
    }

    p {
      font-size: 14px;
      line-height: 126%;
    }
  }
`

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.md}px) {
    button {
      padding: 6px 14px;
    }
  }
`

const Title = styled.h3`
  font-size: 34px;
  line-height: 130%;
  width: 100%;
  padding-block: 16px;

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 27px;
    line-height: 32px;
  }
`

const Content = styled.div`
  width: 100%;
`

export default Mission
