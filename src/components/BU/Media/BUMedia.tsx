import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import BUSection from '../BUSection'

const media = [
  {
    title: 'Meetup',
    imageUrl: '/photos/meetup.png',
    colSpan: 2,
    rowSpan: 2,
  },
  {
    title: 'Meetup',
    imageUrl: '/photos/meetup.png',
  },
  {
    title: 'Meetup',
    imageUrl: '/photos/meetup.png',
  },
]

const BUTeam = () => {
  return (
    <Container>
      <BUSection
        title={'Media'}
        description={
          <>
            <h3>
              We are powering the data storage layer of the Logos Network State.
            </h3>
            <p>
              Logos is a grassroots movement to provide trust-minimized,
              corruption-resistant governing services and social institutions to
              peaceful people worldwide. Learn more about our ambitious vision.
            </p>
          </>
        }
      />
      <GridContainer>
        <Section>
          {media.map((image, index) => (
            <GridItem
              key={index}
              colSpan={image?.colSpan ?? 1}
              rowSpan={image?.rowSpan ?? 1}
            >
              <img
                src={image.imageUrl}
                alt={image.title}
                style={{ width: '100%', height: 'auto' }}
              />
              <p>{image.title}</p>
            </GridItem>
          ))}
        </Section>
      </GridContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  @media (max-width: ${breakpoints.md}px) {
    & > div > div {
      border-bottom: 0;
      margin-bottom: 8px;
    }

    & > div > div:nth-of-type(2) {
      padding-bottom: 24px;
    }

    h3 {
      font-size: 22px;
      line-height: 122%;
    }
  }
`

const GridContainer = styled.div`
  margin-top: 140px;
  padding-top: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.18);

  @media (max-width: ${breakpoints.md}px) {
    margin-top: 0;
  }
`

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  gap: 16px;
`

const GridItem = styled.div<{ colSpan: number; rowSpan: number }>`
  grid-column: span ${(props) => props?.colSpan || 1};
  grid-row: span ${(props) => props?.rowSpan || 1};

  p {
    margin-top: 16px;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    text-transform: capitalize;
  }
`

export default BUTeam
