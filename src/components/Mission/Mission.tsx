import styled from '@emotion/styled'
import { Button } from '../Button'

interface Props {
  children: React.ReactNode
  title: string
}

export const Mission = ({ title, children }: Props) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Button color="white">Learn more</Button>
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
  border-top: 1px solid rgba(0, 0, 0, 0.28);
  margin-bottom: 70px;

  h2 {
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 24px;
  }

  & > div > div {
    display: flex;
    margin-top: 32px;
    margin-bottom: 40px;
  }

  p {
    text-overflow: ellipsis;
    font-size: 22px;
    font-weight: 400;
    line-height: 122%;
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
`

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h3`
  font-size: 34px;
  line-height: 130%;
  width: 100%;
  padding-block: 16px;
`

const Content = styled.div`
  width: 100%;
`

export default Mission
