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
    <Container>
      <Header>
        <Title>
          <Image src={mark} width={34} height={34} alt={title + '-logo'} />
          <TitleText>{title}</TitleText>
          <Tag>est. {est}</Tag>
        </Title>
        <Toggle onClick={handleClick}>
          <Image
            src={open ? '/icons/minus.svg' : '/icons/plus.svg'}
            width={48}
            height={48}
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
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-block: 24px;
`

const Toggle = styled.div`
  cursor: pointer;
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
`

const Content = styled.div`
  width: 100%;
  padding-bottom: 40px;
`

export default PortfolioItem
