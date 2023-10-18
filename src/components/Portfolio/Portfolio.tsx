import styled from '@emotion/styled'

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Portfolio = ({ children, ...props }: Props) => {
  return (
    <Container {...props}>
      <Title>Portfolio</Title>
      {children}
    </Container>
  )
}

const Container = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.28);
`

const Title = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 130%;
  padding-block: 16px;
`

export default Portfolio
