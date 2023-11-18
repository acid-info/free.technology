import styled from '@emotion/styled'
import BUSection from '../BUSection'

type Props = {
  data: any
}

const BUAbout = ({ data }: Props) => {
  return (
    <Container>
      <BUSection
        title={'About'}
        description={
          <>
            <p>{data?.description}</p>
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

  p {
    padding-top: 24px;
  }
`

export default BUAbout
