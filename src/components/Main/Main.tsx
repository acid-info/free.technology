import styled from '@emotion/styled'

export type MainProps = Partial<React.ComponentProps<typeof Container>> & {}

export const Main = ({ children, ...props }: MainProps) => {
  return <Container {...props}>{children}</Container>
}

const Container = styled.main``

export default Main
