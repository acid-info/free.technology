import styled from '@emotion/styled'
import BUSection from '../BUSection'
import ProfileCard from './ProfileCard'

const profiles = [
  {
    name: 'Alex Johnson',
    position: 'Software Engineer',
    imageUrl: '/photos/mock.png',
  },
  {
    name: 'Samantha Bloom',
    position: 'Product Manager',
    imageUrl: '/photos/mock.png',
  },
  {
    name: 'Michael Reeves',
    position: 'UX Designer',
    imageUrl: '/photos/mock.png',
  },
  {
    name: 'Jessica Tan',
    position: 'Data Scientist',
    imageUrl: '/photos/mock.png',
  },
  {
    name: 'Raj Patel',
    position: 'DevOps Specialist',
    imageUrl: '/photos/mock.png',
  },
  {
    name: 'Alex Johnson',
    position: 'Software Engineer',
    imageUrl: '/photos/mock.png',
  },
]

const BUTeam = () => {
  return (
    <Container>
      <BUSection
        title={'Team'}
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
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              position={profile.position}
              imageUrl={profile.imageUrl}
            />
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
`

const GridContainer = styled.div`
  margin-top: 140px;
  padding-top: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.18);
`

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(222px, 1fr));
  gap: 16px;
`

export default BUTeam
