import styled from '@emotion/styled'
import ArrowUpRight from '../Icons/ArrowUpRight'

const JobItem = ({ job }: any) => {
  return (
    <JobContainer>
      <JobHeader>
        <JobTitle
          href={job.absolute_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {job.title}
        </JobTitle>
        <JobInfo>{job.location.name}</JobInfo>
      </JobHeader>
      <ApplyButton>
        Apply{' '}
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
`

const JobTitle = styled.a`
  font-size: 36px;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const JobInfo = styled.p`
  overflow: hidden;
  color: rgba(0, 0, 0, 0.54);
  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: 400;
`

const IconContainer = styled.span`
  position: absolute;
  top: 7px;
  right: 8px;
`

const ApplyButton = styled.button`
  width: 105px;
  height: 42px;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  background-color: white;
  position: relative;
  color: black;
  padding: 0 18px;
  border: 1px solid black;
  cursor: pointer;
`

export default JobItem
