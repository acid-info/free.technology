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
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding-block: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  margin-block: 32px;

  p {
    font-size: 22px;
    line-height: normal;
  }
`

export default Description
