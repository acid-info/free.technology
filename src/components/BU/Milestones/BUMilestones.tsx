import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import BUSection from '../BUSection'

type Props = {
  data: any
}

const BUMilestones = ({ data }: Props) => {
  const fullWidth = data?.length <= 2

  return (
    <Container>
      <BUSection
        title={'Milestones'}
        description={
          <ScrollableContainer>
            {data?.map((item: any, index: number) => (
              <Item key={'milestone-' + index}>
                <GreyBox
                  isFullWidth={fullWidth}
                  isTransparent={false}
                  key={item.milestone}
                >
                  <Year>{item.year}</Year>
                  <h3>{item.title}</h3>
                </GreyBox>
                <TimelineContainer>
                  <Step>
                    <StepNumber>{index + 1}</StepNumber>
                  </Step>
                  <Bar isFullWidth={fullWidth} />
                </TimelineContainer>
              </Item>
            ))}
            {data?.length === 1 && (
              <Item key={'milestone-placeholder'}>
                <GreyBox isFullWidth={true} isTransparent={true}>
                  <Year>{data[0].year + '+'}</Year>
                  <h3>{'More to come'}</h3>
                </GreyBox>
                <TimelineContainer>
                  <Step>
                    <StepNumber>{2}</StepNumber>
                  </Step>
                  <Bar isFullWidth={true} />
                </TimelineContainer>
              </Item>
            )}
          </ScrollableContainer>
        }
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  @media (max-width: ${breakpoints.md}px) {
    padding: 0 8px;
  }
`

const ScrollableContainer = styled.div`
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  gap: 16px;
  margin-bottom: 24px;
  margin-left: auto;
  width: 50vw;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: calc(100vw - 8px);
    margin-top: 8px;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  border-radius: 2px;

  &:last-of-type {
    hr {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.md}px) {
    gap: 16px;
  }
`

const GreyBox = styled.div<{ isFullWidth: boolean; isTransparent?: boolean }>`
  display: flex;
  width: ${({ isFullWidth }) => (isFullWidth ? 'calc(100% - 32px)' : '268px')};
  height: 356px;
  padding: 16px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 2px;
  background: ${({ isTransparent }) =>
    isTransparent ? 'transparent' : 'rgba(0, 0, 0, 0.03);'};
  border: ${({ isTransparent }) =>
    isTransparent ? '1px dashed rgba(0, 0, 0, 0.18)' : 'none'};
  flex-shrink: 0;

  h3 {
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    text-transform: capitalize;
    margin-bottom: 0;
  }

  @media (max-width: ${breakpoints.xl}px) {
    padding: 12px;

    h3 {
      font-size: 16px;
      line-height: 20px;
    }
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 216px;
    height: 284px;
    padding: 16px 40px 16px 16px;
  }
`

const Year = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`

const TimelineContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  position: relative;
`

const Bar = styled.hr<{ isFullWidth: boolean }>`
  background-color: #000;
  opacity: 0.2;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : '284px')};
  position: absolute;
  height: 1px;
  z-index: 0;
  left: 30px;

  @media (max-width: ${breakpoints.md}px) {
    width: 260px;
  }
`

const Step = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  display: flex;
  background-color: #fff;
  z-index: 1;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`

const StepNumber = styled.p`
  font-size: 14px !important;
  line-height: 24px;
`

export default BUMilestones
