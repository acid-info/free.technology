import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  children: React.ReactNode
  title: string
  mark: string
  est: string
}

export const PortfolioItem = ({ title, mark, est, children }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <Container onClick={handleClick}>
      <Header>
        <Title>
          <Image src={mark} width={34} height={34} alt={title + '-logo'} />
          <TitleText>{title}</TitleText>
          <Tag>est. {est}</Tag>
        </Title>
        <Toggle>
          <ToggleButtonImage
            src={open ? '/icons/minus.svg' : '/icons/plus.svg'}
            alt={open ? 'minus' : 'plus'}
          />
        </Toggle>
      </Header>
      {open && <Content>{children}</Content>}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  cursor: pointer;

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

    table th,
    table tr {
      font-size: 14px;
      padding: 16px 0 8px 0;
    }
  }
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-block: 24px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.md}px) {
    padding-block: 16px;
  }
`

const Toggle = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`

const Title = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
`

const TitleText = styled.h3`
  font-size: 26px;
  line-height: 130%;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 16px;
  }
`

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  font-size: 12px;
  line-height: 16px;
  height: 24px;
  border-radius: 12px;
  padding: 4px 9px;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid black;

  @media (max-width: ${breakpoints.md}px) {
    font-size: 11px;
  }
`

const Content = styled.div`
  width: 100%;
  padding-bottom: 40px;

  @media (max-width: ${breakpoints.md}px) {
    padding-bottom: 16px;

    button {
      width: 100%;
    }
  }
`

const ToggleButtonImage = styled.img`
  width: 48px;
  height: 48px;

  @media (max-width: ${breakpoints.md}px) {
    width: 18px;
    height: 18px;
  }
`

export default PortfolioItem
