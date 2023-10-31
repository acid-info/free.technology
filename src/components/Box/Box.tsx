import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
}

export const Box = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  height: 100%;
`

export default Box
