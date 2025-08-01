import { breakpoints, uiConfigs } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { businessUnitMark } from '../../../utils/bu'
import { Button } from '../Button'

interface Props {
  data: any
}

export const BUHero = ({ data }: Props) => {
  const renderSocialIcon = (label: string) => {
    switch (label) {
      case 'X':
        return <SocialIcon src="/icons/x.svg" width={24} height={24} alt="X" />
      case 'Discord':
        return (
          <SocialIcon
            src="/icons/discord.svg"
            width={24}
            height={24}
            alt="Discord"
          />
        )
      case 'Docs':
        return (
          <SocialIcon src="/icons/docs.svg" width={24} height={24} alt="Docs" />
        )
      case 'Forum':
        return (
          <SocialIcon
            src="/icons/forum.svg"
            width={24}
            height={24}
            alt="Forum"
          />
        )
      case 'Blog':
        return (
          <SocialIcon src="/icons/blog.svg" width={24} height={24} alt="Blog" />
        )
      default:
        return (
          <SocialIcon src="/icons/docs.svg" width={24} height={24} alt="Docs" />
        )
    }
  }

  return (
    <Container>
      <Left>
        <MarkContainer>
          <Mark
            fill
            src={businessUnitMark(data?.bu)}
            alt={data?.bu + '-mark'}
          />
        </MarkContainer>
      </Left>
      <BUInfo>
        <Header>
          <Title>
            <BUTitle>
              <MobileMark
                width={40}
                height={40}
                src={businessUnitMark(data?.bu)}
                alt={data?.bu + '-mark'}
              />
              <TitleText>{data?.bu?.replace(/-/g, ' ')}</TitleText>
            </BUTitle>
          </Title>
        </Header>
        <Content>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Development status</th>
                  <th>Vertical</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data?.devStatus}</td>
                  <td>{data?.vertical}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Founded</th>
                  <th>Achievements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data?.est}</td>
                  <td>{data?.achievements}</td>
                </tr>
              </tbody>
            </table>
            <Description>{data?.description}</Description>
            <table>
              <thead>
                <tr>
                  <CustomTh>Connect:</CustomTh>
                  <CustomTh>Programme lead:</CustomTh>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Links>
                    {data?.connect?.map((item: any) => (
                      <CustomLink
                        key={item.label + '-link'}
                        href={item.link}
                        target="_blank"
                      >
                        {renderSocialIcon(item?.label)}
                      </CustomLink>
                    ))}
                  </Links>
                  <td>{data?.lead}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Buttons>
            {data?.website && (
              <Link href={data?.website} target="_blank">
                <LinkButton
                  color="black"
                  width="162px"
                  height="54px"
                  padding="0 0 0 18px"
                  icon
                >
                  Website
                </LinkButton>
              </Link>
            )}
            {data?.github && (
              <Link href={data?.github} target="_blank">
                <LinkButton
                  color="white"
                  width="162px"
                  height="54px"
                  padding="0 0 0 18px"
                  icon
                >
                  Github
                </LinkButton>
              </Link>
            )}
          </Buttons>
        </Content>
      </BUInfo>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 16px;
  margin-top: calc(${uiConfigs.navbarHeight}px);

  @media (max-width: ${breakpoints.md}px) {
    padding: 0 8px;
  }
`

const MarkContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 520px;
  height: 520px;
  margin-left: 100px;

  @media (max-width: ${breakpoints.xl}px) {
    width: 390px;
    height: 390px;
    margin-left: 50px;
  }

  @media (max-width: ${breakpoints.md}px) {
    display: none;
  }
`

const Mark = styled(Image)`
  @media (max-width: ${breakpoints.md}px) {
    display: none;
  }
`

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  box-sizing: border-box;
`

const BUInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 32px 0 48px 16px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.xl}px) {
    padding: 24px 0 36px 12px;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    padding: 0;
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding-bottom: 32px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.xl}px) {
    padding-bottom: 24px;
  }

  @media (max-width: ${breakpoints.md}px) {
    padding-block: 16px;
  }
`

const Title = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
`

const BUTitle = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${breakpoints.md}px) {
    gap: 8px;
  }
`

const TitleText = styled.h1`
  font-size: 90px;
  line-height: 103px;
  text-transform: capitalize;

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 66px;
    line-height: 78px;
  }

  @media (max-width: ${breakpoints.md}px) {
    font-size: 40px;
    line-height: 122%;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    text-overflow: ellipsis;
    font-size: 22px;
    font-weight: 400;
    line-height: 122%;
    margin-top: 40px;
    margin-bottom: 32px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  th {
    color: rgba(0, 0, 0, 0.35);
  }

  table td,
  table th {
    width: calc(100% / 2);
    vertical-align: top;
  }

  tr > td > a {
    font-size: 18px;
    line-height: 22px;
  }

  table thead {
    border-top: 1px solid rgba(0, 0, 0, 0.18);
  }

  table th,
  table tr {
    border: none;
    font-weight: 400;
    text-align: left;
    font-size: 18px;
    line-height: 130%;
    padding: 20px 0 8px 0;
  }

  @media (max-width: ${breakpoints.xl}px) {
    p {
      margin-top: 36px;
      margin-bottom: 18px;
      font-size: 16px;
    }

    table {
      margin-bottom: 15px;
    }

    table th,
    table tr {
      font-size: 13px;
      line-height: 18px;
      padding: 15px 0 6px 0;
    }

    tr > td > a {
      font-size: 13px;
    }
  }

  @media (max-width: ${breakpoints.md}px) {
    flex-direction: column-reverse;

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 126%;
      margin-top: 24px;
      margin-bottom: 24px;
    }

    table {
      margin-bottom: 16px;
    }

    table:last-of-type {
      margin-bottom: 0;
    }

    table th,
    table tr {
      font-size: 14px;
      padding: 16px 0 8px 0;
    }

    tbody {
    }

    padding-bottom: 80px;

    button {
      width: 100%;
    }
  }
`

const Description = styled.p`
  max-width: 817px;
  font-size: 22px;
  line-height: 122%;
  margin-top: 8px;
`

const Buttons = styled.div`
  display: flex;
  gap: 16px;
  padding-top: 24px;

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    gap: 8px;
    padding-block: 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.18);

    a {
      width: 100%;
    }
  }
`

const LinkButton = styled(Button)`
  width: 162px;

  @media (max-width: ${breakpoints.xl}px) {
    width: 120px;
    height: 43px;
    font-size: 11px;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 40px;
    font-size: 14px;
  }
`

const MobileMark = styled(Image)`
  @media (min-width: ${breakpoints.md}px) {
    display: none;
  }
`

const Links = styled.td`
  display: flex;
  gap: 16px;
`

const CustomLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;

    div {
      visibility: visible;
      display: unset;
    }
  }
`

const SocialIcon = styled(Image)`
  width: 24px;
  height: 24px;

  @media (max-width: ${breakpoints.sm}px) {
    width: 18px;
    height: 18px;
  }
`

const CustomTh = styled.th`
  padding-top: 20px !important;
  padding-bottom: 16px !important;

  @media (max-width: ${breakpoints.sm}px) {
    padding-top: 16px !important;
    padding-bottom: 16px !important;
  }
`

export default BUHero
