import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { businessUnitMark } from '../../../utils/bu'
import { Badge } from '../Badge'
import { Button } from '../Button'

interface Props {
  data: any
}

export const BUHero = ({ data }: Props) => {
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
              <TitleText>{data?.bu}</TitleText>
            </BUTitle>
            <Badge>est. {data?.est}</Badge>
          </Title>
        </Header>
        <Content>
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
                <th>Achievements</th>
                <th>Founders</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data?.achievements}</td>
                <td>{data?.founders}</td>
              </tr>
            </tbody>
          </table>
          <Description>{data?.description}</Description>
          <table>
            <thead>
              <tr>
                <th>Connect:</th>
                <th>Programme lead:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {data?.connect?.map((item: any) => (
                    <Link
                      key={item.label + '-link'}
                      href={item.link}
                      target="_blank"
                    >
                      {item?.label}
                    </Link>
                  ))}
                </td>
                <td>{data?.lead}</td>
              </tr>
            </tbody>
          </table>
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
                  color="grey"
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

  @media (max-width: ${breakpoints.md}px) {
    padding: 0 8px;
  }
`

const MarkContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 520px;
  height: 520px;
  padding: 150px;

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

const TitleText = styled.h3`
  font-size: 90px;
  line-height: 103px;
  text-transform: capitalize;

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
    vertical-align: baseline;
  }

  tr > td > a {
    font-size: 18px;
    line-height: 22px;

    &:not(:last-child) {
      &:after {
        fill: rgba(0, 0, 0, 0.35);
        content: '•';
        margin-inline: 8px;
        text-decoration: none;
        display: inline-block;
      }
    }
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
      margin-bottom: 0;
    }

    table th,
    table tr {
      font-size: 14px;
      padding: 16px 0 8px 0;
    }
  }

  @media (max-width: ${breakpoints.md}px) {
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

  @media (max-width: ${breakpoints.md}px) {
    width: 100%;
    height: 40px;
  }
`

const MobileMark = styled(Image)`
  @media (min-width: ${breakpoints.md}px) {
    display: none;
  }
`

export default BUHero
