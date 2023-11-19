import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useState } from 'react'
import BUSection from '../BUSection'

type Props = {
  data: any
}

const BUAbout = ({ data }: Props) => {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <Container>
      <BUSection
        title={'About'}
        description={
          <>
            <Paragraph showMore={showMore}>{data?.description}</Paragraph>
            <ShowMore onClick={handleShowMore}>
              <img src={'/icons/show-more.svg'} alt={'show-more'} />
            </ShowMore>
          </>
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

const Paragraph = styled.p<{ showMore: boolean }>`
  @media (max-width: ${breakpoints.md}px) {
    padding-top: 24px;
    display: ${({ showMore }) => (showMore ? 'block' : '-webkit-box')};
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    overflow: hidden;
  }
`

const ShowMore = styled.button`
  background: transparent;
  margin-top: 12px;
  display: flex;
  padding: 9px 12px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  background: #f2f2f2;
  border: none;

  @media (min-width: ${breakpoints.md}px) {
    display: none;
  }
`

export default BUAbout
