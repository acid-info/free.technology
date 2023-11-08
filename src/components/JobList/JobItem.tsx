import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import ArrowUpRight from '../Icons/ArrowUpRight'

export type Job = {
  id: string
  internal_job_id: number
  title: string
  absolute_url: string
  location: {
    name: string
  }
  updated_at: string
  requisition_id: string
  metadata: any
  data_compliance: any
}

const JobItem = ({ job }: { job: Job }) => {
  return (
    <JobContainer>
      <JobHeader>
        <JobTitle>{job.title}</JobTitle>
        <JobInfo>{job.location.name}</JobInfo>
      </JobHeader>
      <ApplyButton
        href={job.absolute_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply
        <IconContainer>
          <ArrowUpRight />
        </IconContainer>
      </ApplyButton>
    </JobContainer>
  )
}

const JobContainer = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);

  &:last-child {
    border-bottom: none;
  }
`

const JobHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.md}px) {
    margin-bottom: 24px;
  }
`

const JobTitle = styled.div`
  font-size: 36px;
  color: black;
  text-decoration: none;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 16px;
    line-height: 130%;
  }
`

const JobInfo = styled.p`
  overflow: hidden;
  color: rgba(0, 0, 0, 0.54);
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 12px;
  }
`

const IconContainer = styled.span`
  position: absolute;
  top: 7px;
  right: 8px;
`

const ApplyButton = styled.a`
  width: 105px;
  height: 42px;
  font-size: 14px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.05);
  position: relative;
  color: black;
  padding: 0 18px;
  cursor: pointer;
  text-decoration: none;
`

export default JobItem
