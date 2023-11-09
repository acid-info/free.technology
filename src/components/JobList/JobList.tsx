import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Image from 'next/image'
import JobItem, { Job } from './JobItem'

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

  const businessUnitMark = (businessUnit: string) => {
    switch (businessUnit) {
      case 'logos':
        return '/icons/bu/logos.svg'
      case 'codex':
        return '/icons/bu/codex.svg'
      case 'status':
        return '/icons/bu/status.svg'
      case 'waku':
        return '/icons/bu/waku.svg'
      case 'nimbus':
        return '/icons/bu/nimbus.svg'
      case 'nomos':
        return '/icons/bu/nomos.svg'
      case 'vac':
        return '/icons/bu/vac.svg'
      case 'keycard':
        return ''
      default:
        return ''
    }
  }

  return Object.entries(jobs)
    .filter(([businessUnit, _]) =>
      !activeBUs?.length ? true : activeBUs.includes(businessUnit),
    )
    .map(([businessUnit, jobList]) => (
      <Container key={businessUnit + '-jobs'}>
        <TitleContainer>
          {businessUnitMark(businessUnit)?.length ? (
            <Mark
              width={50}
              height={50}
              src={businessUnitMark(businessUnit)}
              alt={businessUnit + '-mark'}
            />
          ) : null}
          <Title>{businessUnit}</Title>
        </TitleContainer>

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
  margin-bottom: 204px;
  border-top: 1px solid rgba(0, 0, 0, 0.18);

  @media (max-width: ${breakpoints.md}px) {
    margin-top: 60px;
    margin-bottom: 74px;
    flex-direction: column;
  }
`

const Jobs = styled.div`
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
  line-height: 130%;
  text-transform: capitalize;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 22px;
    line-height: 122%;
  }
`

const NoJobs = styled.p`
  padding-top: 24px;
  font-size: 36px;
  color: black;
  text-decoration: none;
`

const Mark = styled(Image)`
  @media (max-width: ${breakpoints.md}px) {
    display: none;
  }
`

export default JobList
