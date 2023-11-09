import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'

type Props = {
  title: string
  length: number
}

const FilterTitle = ({ title, length }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <sup>({length})</sup>
    </Container>
  )
}

const Container = styled.div`
  display: flex;

  sup {
    vertical-align: super;
    font-size: 28px;
    font-weight: 400;
    margin-left: 8px;
    box-sizing: border-box;
  }

  @media (max-width: ${breakpoints.md}px) {
    font-size: 22px;
    line-height: 122%;

    sup {
      font-size: 12px;
      margin-left: 0px;
    }
  }
`

const Title = styled.h3`
  color: #000;
  font-size: 52px;
  font-weight: 400;
  line-height: 130%;
  text-transform: capitalize;
  margin-bottom: 24px;
`

export default FilterTitle
