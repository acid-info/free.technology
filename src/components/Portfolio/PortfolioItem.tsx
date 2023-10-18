import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
  title: string
}

export const PortfolioItem = ({ title, children }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
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
  padding: 16px 0;

  p {
    text-overflow: ellipsis;
    font-size: 22px;
    font-weight: 400;
    line-height: 122%;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-block: 38px;
  }

  table td,
  table th {
    width: calc(100% / 2);
  }

  table thead {
    border-top: 1px solid rgba(0, 0, 0, 0.28);
    border-bottom: 1px solid rgba(0, 0, 0, 0.28);
  }

  table th,
  table tr {
    border: none;
    font-weight: 400;
    text-align: left;
    font-size: 18px;
    line-height: 130%;
    padding: 6px 0;
  }
`

const Title = styled.h2`
  width: 50%;
`

const Content = styled.div`
  width: 50%;
`

export default PortfolioItem
