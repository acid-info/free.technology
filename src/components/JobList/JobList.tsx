import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import JobItem, { Job } from './JobItem' // adjust path accordingly

interface BoardJobs {
  [key: string]: Job[]
}

type Props = {
  jobs: BoardJobs
  activeBUs: string[]
}

const JobList = ({ jobs, activeBUs }: Props) => {
  if (jobs == null) {
    return <div>Something went wrong</div>
  }

  return Object.entries(jobs)
    .filter(([businessUnit, _]) =>
      !activeBUs?.length ? true : activeBUs.includes(businessUnit),
    )
    .map(([businessUnit, jobList]) => (
      <Container key={businessUnit + '-jobs'}>
        <Title>{businessUnit}</Title>
        <Jobs>
          {jobList?.length ? (
            jobList.map((job: any) => <JobItem key={job.id} job={job} />)
          ) : (
            <NoJobs>No Open Positions</NoJobs>
          )}
        </Jobs>
      </Container>
    ))
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

const Jobs = styled.div`
  width: 100%;
`

const Title = styled.h3`
  padding-top: 24px;
  width: 100%;
  color: #000;
  font-size: 52px;
  font-weight: 400;
  line-height: 130%;
  text-transform: capitalize;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 22px;
    line-height: 122%;
    padding-block: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  }
`

const NoJobs = styled.p`
  padding-top: 24px;
  font-size: 36px;
  color: black;
  text-decoration: none;
`

export default JobList
