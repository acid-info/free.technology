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
            </FlexContainer>
            <Title>{item.project}</Title>
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

  @media (max-width: ${breakpoints.md}px) {
    padding: 0 8px;
  }
`

const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: ${breakpoints.md}px) {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    gap: 8px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

const Item = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.03);
  padding: 16px;
  height: auto;

  @media (max-width: ${breakpoints.md}px) {
    width: 275px;
    min-height: 384px;
  }
`

const Header = styled.div`
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
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
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  opacity: 0.54;
  margin-block: 16px;

  @media (max-width: ${breakpoints.lg}px) {
    line-height: 126%;
  }

  @media (max-width: ${breakpoints.md}px) {
    font-size: 14px;
  }
`

const Title = styled.h2`
  font-size: 22px;
  font-weight: 400;
  line-height: 42px;
  padding-top: 16px;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  margin-top: auto;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 22px;
  }
`

const FlexContainer = styled.div`
  display: flex;
  min-height: 226px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;

  @media (max-width: ${breakpoints.md}px) {
    min-height: 282px;
  }
`

export default BUTestimonials
