import { breakpoints } from '@/configs/ui.configs'
import styled from '@emotion/styled'
import Link from 'next/link'
import { Tag } from '../Tag'

type Props = {
  menus: string[]
  activeMenus: string[]
  setActiveMenus: React.Dispatch<React.SetStateAction<string[]>>
}

const BUSectionPicker = ({ menus, activeMenus, setActiveMenus }: Props) => {
  const toggleMenu = (menu: string) => {
    if (activeMenus.includes(menu)) {
      setActiveMenus((preveMenus) => preveMenus.filter((item) => item !== menu))
    } else {
      setActiveMenus([menu])
    }
  }

  return (
    <Container>
      <Border />
      <Menus>
        {menus.map((menu: string) => (
          <CustomLink key={menu + '-tag'} href={`#${menu.toLowerCase()}`}>
            <Tag
              active={activeMenus.includes(menu)}
              onClick={() => toggleMenu(menu)}
            >
              {menu}
            </Tag>
          </CustomLink>
        ))}
      </Menus>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 16px;

  @media (max-width: ${breakpoints.md}px) {
    padding-inline: 8px;
  }
`

const Menus = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 16px 0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: ${breakpoints.md}px) {
    width: calc(100vw - 16px);
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

const CustomLink = styled(Link)`
  text-decoration: none;
`

export default BUSectionPicker
