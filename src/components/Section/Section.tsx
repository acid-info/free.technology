import styled from '@emotion/styled'

export type Props = {
  flexDirection?: 'row' | 'column'
  gap?: number
  children: React.ReactNode
}

export const Section = ({
  flexDirection = 'row',
  gap = 32,
  children,
  ...props
}: Props) => {
  return (
    <Container gap={gap} flexDirection={flexDirection} {...props}>
      {children}
    </Container>
  )
}

const Container = styled.section<{
  flexDirection: 'row' | 'column'
  gap: number
}>`
  display: ${({ flexDirection }) => (flexDirection ? 'flex' : 'block')};
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  padding-top: 16px;
  margin-bottom: 160px;
  gap: ${({ gap }) => gap}px;

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
