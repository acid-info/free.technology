import { breakpoints } from '@/configs/ui.configs'
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

  & > section {
    margin-bottom: 180px;
  }

  @media (max-width: ${breakpoints.md}px) {
    margin-bottom: 18px;

    & > section {
      margin-bottom: 80px;
    }
  }
`

export default BUMenus
