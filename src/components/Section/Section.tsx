import styled from '@emotion/styled'

export type MainProps = Partial<React.ComponentProps<typeof Container>> & {}

export const Section = ({ children, ...props }: MainProps) => {
  return <Container {...props}>{children}</Container>
}

const Container = styled.section`
  border-top: 1px solid rgba(0, 0, 0, 0.28);
  padding-top: 16px;
  margin-bottom: 160px;

  h2 {
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  table {
    margin-block: 32px;
    border-spacing: 10px;
    padding-right: 12px;
  }
`

export default Section
