import styled from '@emotion/styled'

interface Props {
  children: React.ReactNode
  marginTop?: string
  marginBottom?: string
}

export const Box = ({ children, marginTop, marginBottom, ...props }: Props) => {
  return (
    <Container marginTop={marginTop} marginBottom={marginBottom} {...props}>
      {children}
    </Container>
  )
}

const Container = styled.section<{ marginTop?: string; marginBottom?: string }>`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  height: 100%;
  margin-top: ${(props) => props.marginTop || '0'};
  margin-bottom: ${(props) => props.marginBottom || '0'};
`

export default Box
