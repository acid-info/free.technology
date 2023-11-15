import styled from '@emotion/styled'

type Props = {
  children: React.ReactNode
}

const BUMenus = ({ children }: Props) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 180px;

  margin-bottom: 324px;
`

export default BUMenus
