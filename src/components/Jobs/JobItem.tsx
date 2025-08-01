import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Button } from '../Button'

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
      <Link
        href={job.absolute_url}
        target="_blank"
        rel="noopener noreferrer"
        passHref
      >
        <ApplyButton icon={true}>Apply</ApplyButton>
      </Link>
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

  @media (max-width: ${breakpoints.xl}px) {
    padding: 18px 0;
  }

  @media (max-width: ${breakpoints.md}px) {
    padding: 16px 0;
  }
`

const JobHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.md}px) {
    margin-bottom: 24px;
    gap: 8px;
  }
`

const JobTitle = styled.div`
  font-size: 36px;
  line-height: 42px;
  color: black;
  text-decoration: none;

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 27px;
    line-height: 32px;
  }

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
  line-height: 22px;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 12px;
  }
`

const IconContainer = styled.span`
  position: absolute;
  top: 7px;
  right: 7px;
`

const ApplyButton = styled(Button)`
  width: 105px;
  height: 42px;
  font-size: 14px;

  @media (max-width: ${breakpoints.xl}px) {
    width: 81px;
    height: 33px;
    font-size: 11px;
    padding: 0 14px;
  }
`

export default JobItem
