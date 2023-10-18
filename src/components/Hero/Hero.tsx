import styled from '@emotion/styled'

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Hero: React.FC = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>
}

const Container = styled.div`
  h1 {
    text-transform: uppercase;
  }

  h3 {
    margin-bottom: 32px;
  }

  padding-bottom: 234px;
`

export default Hero
