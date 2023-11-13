import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { Box } from '../Box'
import ChallengeItem from './ChallengeItem'

interface BoardChallenges {
  [key: string]: any[]
}

type Props = {
  challenges: BoardChallenges
  activeBUs: string[]
}

function extractOrgName(repoIdentifier: string): string {
  const orgPart = repoIdentifier.split('/')[0]
  return orgPart.replace(/-.*/, '')
}

const ChallengeList = ({ challenges, activeBUs }: Props) => {
  if (challenges == null) {
    return <div>Something went wrong</div>
  }

  return (
    <CustomBox>
      {Object.entries(challenges)
        .filter(([businessUnit, _]) =>
          !activeBUs?.length ? true : activeBUs.includes(businessUnit),
        )
        .map(([businessUnit, challengeList]) => (
          <Container key={businessUnit + '-challenges'}>
            <TitleContainer>
              <Title>{extractOrgName(businessUnit)}</Title>
            </TitleContainer>

            <Challenges>
              {challengeList?.length ? (
                challengeList.map((challenge: any) => (
                  <ChallengeItem key={challenge.id} challenge={challenge} />
                ))
              ) : (
                <NoChallenges>No Open Positions</NoChallenges>
              )}
            </Challenges>
          </Container>
        ))}
    </CustomBox>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 180px;
  border-top: 1px solid rgba(0, 0, 0, 0.18);

  @media (max-width: ${breakpoints.md}px) {
    margin-top: 60px;
    flex-direction: column;
  }
`

const Challenges = styled.div`
  width: 100%;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: fit-content;
  padding-top: 24px;

  @media (max-width: ${breakpoints.md}px) {
    padding-block: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  }
`

const Title = styled.h3`
  color: #000;
  font-size: 52px;
  font-weight: 400;
  line-height: 60px;
  text-transform: capitalize;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 22px;
    line-height: 122%;
  }
`

const NoChallenges = styled.p`
  padding-top: 24px;
  font-size: 36px;
  color: black;
  text-decoration: none;
`

// const Mark = styled(Image)`
//   @media (max-width: ${breakpoints.md}px) {
//     display: none;
//   }
// `

const CustomBox = styled(Box)`
  margin-bottom: 238px;

  @media (max-width: ${breakpoints.md}px) {
    margin-bottom: 195px;
  }
`

export default ChallengeList
