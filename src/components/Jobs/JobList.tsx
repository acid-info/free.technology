import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { Box } from '../Box'
import JobItem, { Job } from './JobItem'

interface BoardJobs {
  [key: string]: Job[]
}

type Props = {
  jobs: BoardJobs
  activeBUs: string[]
  marginTop?: string
  marginBottom?: string
  title?: string
}

const JobList = ({
  jobs,
  activeBUs,
  marginTop = '0',
  marginBottom = '238px',
  title,
}: Props) => {
  if (jobs == null) {
    return <div>Something went wrong</div>
  }

  return (
    <CustomBox marginTop={marginTop} marginBottom={marginBottom}>
      {Object.entries(jobs).map(([businessUnit, jobList]) => (
        <Container id={businessUnit} key={businessUnit + '-jobs'}>
          <TitleContainer>
            <Title>{title ?? businessUnit}</Title>
          </TitleContainer>
          <Jobs>
            {jobList?.length ? (
              jobList.map((job: any) => <JobItem key={job.id} job={job} />)
            ) : (
              <NoJobs>
                No Open Positions
                {/* <p>Please get in touch on our Discord.</p> */}
              </NoJobs>
            )}
          </Jobs>
        </Container>
      ))}
    </CustomBox>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  scroll-margin-top: 24px;

  @media (max-width: ${breakpoints.md}px) {
    margin-top: 60px;
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
  padding-block: 24px;

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

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 38px;
    line-height: 45px;
  }

  @media (max-width: ${breakpoints.md}px) {
    font-size: 22px;
    line-height: 122%;
  }
`

const NoJobs = styled.p`
  font-size: 36px;
  color: black;
  text-decoration: none;
  /* padding-top: 24px; */

  display: flex;
  height: 100%;
  align-items: center;

  p {
    color: rgba(0, 0, 0, 0.54);
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    margin-top: 8px;

    @media (max-width: ${breakpoints.md}px) {
      font-size: 12px;
    }
  }

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 27px;
    line-height: 32px;
  }

  @media (max-width: ${breakpoints.md}px) {
    font-size: 16px;
    line-height: 130%;
  }
`

const CustomBox = styled(Box)`
  @media (max-width: ${breakpoints.md}px) {
    padding: 0 8px;
  }
`

export default JobList
