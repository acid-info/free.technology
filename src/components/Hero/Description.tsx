import styled from '@emotion/styled'

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export const Description: React.FC = ({ children, ...props }: Props) => {
  return <Container {...props}>{children}</Container>
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding-block: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 30px;

  h3 {
    font-size: 22px;
    line-height: normal;
  }
`

export default Description
