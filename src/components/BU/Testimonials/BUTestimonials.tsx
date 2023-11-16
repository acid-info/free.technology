import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Image from 'next/image'

interface Props {
  data: any
}

const BUTestimonials = ({ data }: Props) => {
  return (
    <Container>
      <ItemContainer>
        {data?.map((item: any) => (
          <Item key={item.project + '-testimonal'}>
            <Header>
              <Icon>
                <Image src={item.icon} alt={item.icon} width={28} height={28} />
              </Icon>
            </Header>
            <FlexContainer>
              <Paragraph>{item.quote}</Paragraph>
              <Title>{item.project}</Title>
            </FlexContainer>
          </Item>
        ))}
      </ItemContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 16px;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;
`

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: ${breakpoints.md}px) {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

const Item = styled.section`
  flex-shrink: 0;

  @media (max-width: ${breakpoints.md}px) {
    width: 216px;
  }
`

const Header = styled.div`
  width: 100%;
  padding-block: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
`

const Icon = styled.div`
  border-radius: 6px;
  background: #000;
  display: flex;
  width: 28px;
  height: 28px;
  padding: 5px;
  justify-content: center;
  align-items: center;
`

const Paragraph = styled.p`
  font-family: Helvetica;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

const Title = styled.h2`
  font-family: Helvetica;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 42px;
  padding-top: 24px;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  margin-top: auto;
`

const FlexContainer = styled.div`
  display: flex;
  height: 226px;
  padding-top: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  @media (max-width: ${breakpoints.md}px) {
    height: 358px;
  }
`

export default BUTestimonials
