import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Image from 'next/image'
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
        <>
          <Content>
            <DataSection>
              <span>Participants</span>
              {challenge.commentCount.totalCount > 0 ? (
                <Participants>
                  {challenge.commentCount.totalCount}+
                  <AvatarContainer>
                    {challenge.commentsDetailed.nodes
                      .slice(0, 5)
                      .map((comment) => (
                        <Avatar
                          key={comment.id}
                          width={28}
                          height={28}
                          src={comment.author.avatarUrl}
                          alt={comment.author.login}
                          className="avatar"
                        />
                      ))}
                  </AvatarContainer>
                </Participants>
              ) : (
                'No Participants Yet'
              )}
            </DataSection>
            <DataSection>
              <span>Assignees</span>
              {challenge.commentCount.totalCount > 0 && (
                <Participants>
                  {challenge.assignees.nodes
                    .map((assignee) => assignee.login)
                    .join(', ')}
                  <AvatarContainer>
                    {challenge.assignees.nodes.slice(0, 5).map((assignee) => (
                      <Avatar
                        key={assignee.avatarUrl}
                        width={28}
                        height={28}
                        src={assignee.avatarUrl}
                        alt={assignee.login}
                        className="avatar"
                      />
                    ))}
                  </AvatarContainer>
                </Participants>
              )}
            </DataSection>
            <DataSection>
              <span>Labels</span>
              {challenge.labels.nodes.map((label) => (
                <Label key={label.name} className="label">
                  {label.name}
                </Label>
              ))}
            </DataSection>

            <DataSection>
              <span>Title</span>
            </DataSection>
            <DataSection>
              <span>Milestone</span>
              {challenge.milestone ? challenge.milestone.title : 'No Milestone'}
            </DataSection>
            <DataSection>
              <span>Projects</span>
              {challenge.projectCards.nodes.length > 0
                ? challenge.projectCards.nodes
                    .map((card) => card.name)
                    .join(', ')
                : 'None Yet'}
            </DataSection>
          </Content>
          <RewardContainer>
            <span>
              <CurrencyContainer>
                <Image src="/icons/dai.svg" alt="dai" width={37} height={37} />
              </CurrencyContainer>
              <RewardInfo>
                <p>Reward:</p>
                <p>1000 DAI</p>
              </RewardInfo>
            </span>
            <GithubButton href={challenge.url} target="_blank">
              See on Github
              <IconContainer>
                <ArrowUpRight />
              </IconContainer>
            </GithubButton>
          </RewardContainer>
        </>
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
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  & > div:not(:last-child):after {
    content: '';
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.18);
    margin-top: 20px;
  }
`

const DataSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 8px;
  align-items: flex-start;
  border-top: 1px solid rgba(0, 0, 0, 0.18);

  > span {
    color: rgba(0, 0, 0, 0.35);
    font-size: 18px;
    line-height: 22px;
  }

  @media (max-width: ${breakpoints.md}px) {
    > span {
      font-size: 14px;
      line-height: 130%;
    }
  }
`

const Participants = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  gap: 8px;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 14px;
  }
`

const Label = styled.span`
  font-size: 14px !important;
  line-height: 20px !important;
  padding: 4px 14px;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  color: black !important;
  box-sizing: border-box;
`

const AvatarContainer = styled.div`
  display: flex;
  gap: -4px;
`

const Avatar = styled(Image)`
  border-radius: 50%;
  border: 1px solid white;
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
  position: relative;

  span {
    justify-content: flex-end;
  }
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

  span {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column;
    padding: 16px;

    span {
      width: 100%;
      margin-bottom: 16px;
    }

    a {
      width: 100%;
    }
  }
`

const CurrencyContainer = styled.div`
  display: flex;
  width: 66px;
  height: 66px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

  border-radius: 999px;
  background: #000;
  color: white;
`

const RewardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > p:first-of-type {
    font-size: 18px;
    line-height: 22px;
    opacity: 0.5;
  }

  & > p:last-of-type {
    font-size: 22px;
    line-height: 26px;
  }
`

export default ChallengeItem
