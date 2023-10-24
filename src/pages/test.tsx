import { SEO } from '@/components/SEO'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect } from 'react'
import useFetchJobs from '../../hooks/useFetchJobs'
import { DefaultLayout } from '../layouts/DefaultLayout'

interface Props {
  mdxSource: MDXRemoteSerializeResult
}

const Page = ({ mdxSource }: Props) => {
  const { data, error, isLoading, fetchJobs } = useFetchJobs()

  useEffect(() => {
    // Fetching jobs from all job boards and with no title filter on component mount
    fetchJobs(['logos'], '')
  }, [])

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
    <>
      <SEO />
      <div>
        <h1>Job Listings</h1>
        <ul>
          {data.jobs.map((job: any) => (
            <li key={job.id}>
              <a
                href={job.absolute_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {job.title}
              </a>
              <p>{job.location?.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <MDXRemote {...mdxSource} />
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export async function getStaticProps() {
  const source = '**mdx** example'
  const mdxSource = await serialize(source)
  return { props: { mdxSource } }
}

export default Page
