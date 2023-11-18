import { breakpoints } from '@/configs/ui.configs'
import { BUMenuBar } from '@/pages/[bu]'
import styled from '@emotion/styled'
import { Tag } from '../Tag'

type Props = {
  activeMenus: string[]
  setActiveMenus: React.Dispatch<React.SetStateAction<string[]>>
}

const BUMenuFilter = ({ activeMenus, setActiveMenus }: Props) => {
  const toggleMenu = (menu: string) => {
    if (activeMenus.includes(menu)) {
      setActiveMenus((preveMenus) => preveMenus.filter((item) => item !== menu))
    } else {
      setActiveMenus((preveMenus) => [...preveMenus, menu])
    }
  }

  return (
    <Container>
      <Border />
      <Menus>
        <Tag
          active={activeMenus.length === 0}
          onClick={() => setActiveMenus([])}
        >
          All
        </Tag>
        {BUMenuBar.map((menu: string) => (
          <Tag
            active={activeMenus.includes(menu)}
            key={menu + '-tag'}
            onClick={() => toggleMenu(menu)}
          >
            {menu}
          </Tag>
        ))}
      </Menus>
      <Border />
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

export default BUMenuFilter
