import styled from '@emotion/styled'
import { useEffect } from 'react'
import useFetchJobs from '../../../hooks/useFetchJobs'
import JobItem from './JobItem' // adjust path accordingly

interface Props {
  unit: string
}

const JobList = ({ unit }: Props) => {
  const { data, error, isLoading, fetchJobs } = useFetchJobs()

  useEffect(() => {
    fetchJobs([unit], '')
  }, [unit])

  if (isLoading) {
    return <div>Loading jobs...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!data || data.jobs.length === 0) {
    return <div>No jobs found</div>
  }

  return (
    <Container>
      <Title>{unit}</Title>
      <Jobs>
        {data?.jobs?.map((job: any) => (
          <JobItem key={job.id} job={job} />
        ))}
      </Jobs>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 180px;
  border-top: 1px solid rgba(0, 0, 0, 0.28);
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
  line-height: 130%; /* 67.6px */
  text-transform: capitalize;
`

export default JobList
