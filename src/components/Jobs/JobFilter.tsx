import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { calculatElementCount } from '../../../utils/count'
import { FilterTitle } from '../Filter'
import { Tag } from '../Tag'
import { Job } from './JobItem' // adjust path accordingly

export interface BoardJobs {
  [key: string]: Job[]
}

type Props = {
  data: BoardJobs
  activeBUs: string[]
  setActiveBUs: React.Dispatch<React.SetStateAction<string[]>>
}

const JobFilter = ({ data, activeBUs, setActiveBUs }: Props) => {
  if (data == null) {
    return <div>Something went wrong</div>
  }

  const businessUnits = Object.keys(data)

  const toggleBU = (bu: string) => {
    if (activeBUs.includes(bu)) {
      setActiveBUs((prevBUs) => prevBUs.filter((item) => item !== bu))
    } else {
      setActiveBUs((prevBUs) => [...prevBUs, bu])
    }
  }

  return (
    <Container>
      <FilterTitle title="Open Vacancies" length={calculatElementCount(data)} />
      <Border />
      <BUs>
        <Tag active={activeBUs.length === 0} onClick={() => setActiveBUs([])}>
          All Jobs
        </Tag>
        {businessUnits?.length
          ? businessUnits.map((bu: string) => (
              <Tag
                active={activeBUs.includes(bu)}
                key={bu + '-tag'}
                onClick={() => toggleBU(bu)}
              >
                {bu}
              </Tag>
            ))
          : null}
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
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.xl}px) {
    margin-top: calc(${uiConfigs.navbarHeight}px + 18px);
  }
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

export default JobFilter
