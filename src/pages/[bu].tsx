import {
  BUAbout,
  BUHero,
  BUMenus,
  BUMilestones,
  // BUMedia,
  BUSectionPicker,
  BUTestimonials,
} from '@/components/BU'
// import { ChallengeList } from '@/components/Challenges'
import { JobList } from '@/components/Jobs'
import { SEO } from '@/components/SEO'
import BU_DATA from '@/data/bu-data'
import { SubPageLayout } from '@/layouts/SubPageLayout'
import styled from '@emotion/styled'
import { useState } from 'react'
import { JOB_BOARD_MAPPING, getJobs } from '../../utils/getJobs'

const Section = styled.section`
  scroll-margin-top: 90px;
`

const Page = ({ bu, jobs }: any) => {
  const [activeMenus, setActiveMenus] = useState<string[]>([])

  const BUMenuBar = ['About', 'Milestones', 'Jobs']

  if (BU_DATA[bu]?.testimonials?.length) {
    BUMenuBar.unshift('Feedback')
  }

  if (!Object.keys(jobs)?.length) {
    const jobsIndex = BUMenuBar.indexOf('Jobs')

    if (jobsIndex !== -1) {
      BUMenuBar.splice(jobsIndex, 1)
    }
  }

  return (
    <>
      <SEO />
      {/* <BUVideo /> */}
      <div>
        <BUHero data={BU_DATA[bu]?.hero} />
        <BUSectionPicker
          menus={BUMenuBar}
          activeMenus={activeMenus}
          setActiveMenus={setActiveMenus}
        />
        <BUMenus>
          {BU_DATA[bu]?.testimonials?.length ? (
            <Section id="feedback">
              <BUTestimonials data={BU_DATA[bu]?.testimonials} />
            </Section>
          ) : null}

          <Section id="about">
            <BUAbout data={BU_DATA[bu]?.about} />
          </Section>
          <Section id="milestones">
            <BUMilestones data={BU_DATA[bu]?.milestones} />
          </Section>
          {/* {activeMenus.length === 0 && BU_DATA[bu]?.profiles?.length || activeMenus.includes('Team') && BU_DATA[bu]?.profiles?.length ? (
            <BUTeam profiles={BU_DATA[bu]?.profiles} />
          ) : null} */}
          <Section id="jobs">
            <JobList
              title="Jobs"
              jobs={jobs}
              activeBUs={[bu]}
              marginTop="0"
              marginBottom="0"
            />
          </Section>
          {/* {activeMenus.length === 0 || activeMenus.includes('Challenges') ? (
            <ChallengeList
              title="Challenges"
              challenges={issues}
              activeBUs={[]}
              marginTop="0"
              marginBottom="0"
            />
          ) : null} */}
          {/* {activeMenus.length === 0 || activeMenus.includes('Media') ? (
            <BUMedia />
          ) : null} */}
        </BUMenus>
      </div>
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <SubPageLayout>{page}</SubPageLayout>
}

export async function getStaticPaths() {
  const paths: any = []

  const BUs = [
    'waku',
    'codex',
    'nomos',
    'status',
    'keycard',
    'keycard',
    'logos',
    'nimbus',
  ]

  for (const bu of BUs) {
    paths.push({ params: { bu } })
  }

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const { bu } = params

  let jobs: any = []
  let issues = {}

  // const site = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  try {
    if (Object.keys(JOB_BOARD_MAPPING).includes(bu)) {
      jobs = await getJobs([bu], '')
    }

    // if (bu === 'waku') {
    //   const res = await fetch(`${site}/api/challenges`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify([{ owner: 'waku-org', repo: 'bounties' }]),
    //   })

    //   if (!res.ok) {
    //     throw new Error(`Failed to fetch issues, status: ${res.status}`)
    //   }

    //   issues = await res.json()
    // }

    return {
      props: {
        bu,
        jobs,
        issues,
      },
      revalidate: 3600,
    }
  } catch (error) {
    return {
      props: {
        jobs: [],
        issues: {},
      },
      revalidate: 3600,
    }
  }
}

export default Page
