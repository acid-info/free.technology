import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import { useState } from 'react'
import ArrowUpRight from '../Icons/ArrowUpRight'

type GitHubUser = {
  login: string
  avatarUrl: string
}

type GitHubLabel = {
  name: string
}

type GitHubComment = {
  id: string
  author: GitHubUser
  body: string
  createdAt: string
}

type Challenge = {
  id: string
  title: string
  url: string
  author: GitHubUser
  labels: {
    nodes: GitHubLabel[]
  }
  commentCount: {
    totalCount: number
  }
  commentsDetailed: {
    nodes: GitHubComment[]
  }
  assignees: {
    nodes: GitHubUser[]
  }
  milestone: any
  createdAt: string
  updatedAt: string
  projectCards: {
    nodes: any[] // Specify the type if project card structure is known
  }
}

const ChallengeItem = ({ challenge }: { challenge: Challenge }) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <ChallengeContainer>
      <ChallengeHeader onClick={handleClick}>
        <ChallengeTitle>{challenge.title}</ChallengeTitle>
        <Toggle>
          <ToggleButtonImage
            src={open ? '/icons/minus.svg' : '/icons/plus.svg'}
            alt={open ? 'minus' : 'plus'}
          />
        </Toggle>
      </ChallengeHeader>
      {open && (
        <Content>
          <table>
            <thead>
              <tr>
                <th>Participants</th>
                <th>Assignees</th>
                <th>Labels</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Participants>
                  {challenge.commentCount.totalCount}+
                  {challenge.assignees.nodes.map((assignee) => (
                    <img
                      key={assignee.login}
                      src={assignee.avatarUrl}
                      alt={assignee.login}
                      className="avatar"
                    />
                  ))}
                </Participants>
                <td>
                  {challenge.assignees.nodes
                    .map((assignee) => assignee.login)
                    .join(', ')}
                </td>
                <td>
                  {challenge.labels.nodes.map((label) => (
                    <span key={label.name} className="label">
                      {label.name}
                    </span>
                  ))}
                </td>
              </tr>
              <tr>
                <th>Title</th>
                <th>Milestone</th>
                <th>Projects</th>
              </tr>
              <tr>
                <td></td>
                <td>
                  {challenge.milestone
                    ? challenge.milestone.title
                    : 'No Milestone'}
                </td>
                <td>
                  {challenge.projectCards.nodes.length > 0
                    ? challenge.projectCards.nodes
                        .map((card) => card.name)
                        .join(', ')
                    : 'None Yet'}
                </td>
              </tr>
            </tbody>
          </table>
          <RewardContainer>
            <div>Reward:</div>
            <GithubButton href={challenge.url} target="_blank">
              See on Github
              <IconContainer>
                <ArrowUpRight />
              </IconContainer>
            </GithubButton>
          </RewardContainer>
        </Content>
      )}
    </ChallengeContainer>
  )
}

const ChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);

  &:last-child {
    border-bottom: none;
  }
`

const ChallengeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  cursor: pointer;
`

const ChallengeTitle = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  flex: 1 0 0;

  overflow: hidden;
  color: #000;

  text-overflow: ellipsis;

  font-size: 36px;
  font-weight: 400;
  line-height: 42px;

  overflow: hidden;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 16px;
    line-height: 130%;
  }
`

const Toggle = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`

const ToggleButtonImage = styled.img`
  width: 48px;
  height: 48px;

  @media (max-width: ${breakpoints.md}px) {
    width: 18px;
    height: 18px;
  }
`

const Content = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  th {
    color: rgba(0, 0, 0, 0.35);
    text-transform: capitalize;

    padding-top: 20px;
    padding-bottom: 8px;
    border-top: 1px solid rgba(0, 0, 0, 0.18) !important;
  }

  tr {
    display: flex;
    align-items: center;
  }

  table td,
  table th {
    width: calc(100% / 3);
    font-size: 18px;
    line-height: 22px;
  }

  table > tbody > tr:nth-child(2) {
    margin-top: 20px;
  }

  table th,
  table tr {
    border: none;
    font-weight: 400;
    text-align: left;
    font-size: 18px;
    line-height: 130%;
  }

  .avatar {
    border-radius: 50%;
    width: 28px;
    height: 28px;
  }

  .label {
    font-size: 14px;
    line-height: 20px;
    padding: 4px 14px;
    border-radius: 999px;
    border: 1px solid rgba(0, 0, 0, 0.18);
  }
`

const Participants = styled.td`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const GithubButton = styled.a`
  width: 160px;
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

const IconContainer = styled.span`
  position: absolute;
  top: 7px;
  right: 7px;
`

const RewardContainer = styled.div`
  display: flex;
  padding: 24px;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  border: 1px solid rgba(0, 0, 0, 0.18);
  margin-bottom: 20px;
`

export default ChallengeItem
