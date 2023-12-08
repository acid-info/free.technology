import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Image from 'next/image'
import { useState } from 'react'

interface Props {
  children: React.ReactNode
  title: string
  mark: string
}

export const PortfolioItem = ({ title, mark, children }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Container isOpen={open}>
      <Header onClick={handleClick}>
        <Title>
          <Image src={mark} width={34} height={34} alt={title + '-logo'} />
          <TitleText>{title}</TitleText>
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

const Container = styled.div<{ isOpen: boolean }>`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  transition: background-color 0.3s ease, color 0.3s ease;

  button {
    transition: transform 0.3s ease;
  }

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

  &:hover {
    background: ${({ isOpen }) =>
      isOpen ? 'transparent' : 'rgba(0, 0, 0, 0.05)'};

    button {
      transform: ${({ isOpen }) => (!isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
  }

  @media (max-width: ${breakpoints.xl}px) {
    table {
      margin-bottom: 15px;
    }

    table th,
    table tr {
      font-size: 13px;
      line-height: 18px;
      padding: 15px 0 6px 0;
    }

    p {
      font-size: 16px;
      line-height: 122%;
      margin-top: 30px;
      margin-bottom: 24px;
    }
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
  cursor: pointer;

  @media (max-width: ${breakpoints.xl}px) {
    padding-block: 18px;
  }

  @media (max-width: ${breakpoints.md}px) {
    padding-block: 16px;
  }
`

const Toggle = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;

  user-select: none;
  -webkit-user-select: none;
`

const Title = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;

  @media (max-width: ${breakpoints.md}px) {
    gap: 12px;
  }
`

const TitleText = styled.h3`
  font-size: 22px;
  line-height: 26px;

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 16px;
    line-height: 20px;
  }
`

const Content = styled.div`
  width: 100%;
  padding-bottom: 40px;

  button {
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  @media (max-width: ${breakpoints.xl}px) {
    padding-bottom: 30px;
  }

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

  @media (max-width: ${breakpoints.xl}px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: 18px;
    height: 18px;
  }
`

export default PortfolioItem
