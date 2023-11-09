import { breakpoints, uiConfigs } from '@/configs/ui.configs'
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
      <Border />
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
      <Border />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: calc(${uiConfigs.navbarHeight}px + 24px);
`

const Title = styled.h3`
  color: #000;
  font-size: 52px;
  font-weight: 400;
  line-height: 130%; /* 67.6px */
  text-transform: capitalize;
  margin-bottom: 24px;
`

const BUs = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 16px 0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: calc(100vw - 32px);
    margin-left: -16px;
    padding: 16px;
  }
`

const Border = styled.hr`
  background: rgba(0, 0, 0, 0.18);
  border: 0;
  height: 1px;
  width: 100%;
  margin: 0;
`

const Tag = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => (active ? 'black' : 'white')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  font-size: 14px;
  line-height: 20px;
  height: 28px;
  border-radius: 14px;
  padding: 4px 14px;
  box-sizing: border-box;
  text-transform: capitalize;
  cursor: pointer;
  border: 1px solid black;
  white-space: nowrap;

  @media (max-width: ${breakpoints.md}px) {
    padding: 4px 10px;
  }
`

const NoJobs = styled.p`
  padding-top: 24px;
  font-size: 36px;
  color: black;
  text-decoration: none;
`

export default JobFilter
