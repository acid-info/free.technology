import { uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { Job } from './JobItem' // adjust path accordingly

interface BoardJobs {
  [key: string]: Job[]
}

type Props = {
  jobs: BoardJobs
  activeBUs: string[]
  setActiveBUs: React.Dispatch<React.SetStateAction<string[]>>
}

const JobFilter = ({ jobs, activeBUs, setActiveBUs }: Props) => {
  if (jobs == null) {
    return <div>Something went wrong</div>
  }

  const businessUnits = Object.keys(jobs)

  const toggleBU = (bu: string) => {
    if (activeBUs.includes(bu)) {
      // If the bu is already active, remove it from activeBUs
      setActiveBUs((prevBUs) => prevBUs.filter((item) => item !== bu))
    } else {
      // Otherwise, add it to activeBUs
      setActiveBUs((prevBUs) => [...prevBUs, bu])
    }
  }

  return (
    <Container>
      <Title>Open Vacancies</Title>
      <BUs>
        <Tag active={activeBUs.length === 0} onClick={() => setActiveBUs([])}>
          All Jobs
        </Tag>
        {businessUnits?.length ? (
          businessUnits.map((bu: string) => (
            <Tag
              active={activeBUs.includes(bu)}
              key={bu + '-tag'}
              onClick={() => toggleBU(bu)}
            >
              {bu}
            </Tag>
          ))
        ) : (
          <NoJobs>No Open Positions</NoJobs>
        )}
      </BUs>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  margin-top: calc(${uiConfigs.navbarHeight}px + 24px);
`

const Title = styled.h3`
  color: #000;
  font-size: 52px;
  font-weight: 400;
  line-height: 130%; /* 67.6px */
  text-transform: capitalize;
`

const BUs = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.28);
  border-bottom: 1px solid rgba(0, 0, 0, 0.28);
  padding: 16px 0;
`

const Tag = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? 'black' : 'white')};
  color: ${({ active }) => (active ? 'white' : '#black')};
  font-size: 14px;
  line-height: 20px;
  height: 28px;
  border-radius: 14px;
  padding: 0 14px;
  box-sizing: border-box;
  text-transform: capitalize;
  cursor: pointer;
  border: 1px solid black;
`

const NoJobs = styled.p`
  padding-top: 24px;
  font-size: 36px;
  color: black;
  text-decoration: none;
`

export default JobFilter
