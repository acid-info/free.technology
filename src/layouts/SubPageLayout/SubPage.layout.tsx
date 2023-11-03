import { Footer } from '@/components/Footer'
import { Main } from '@/components/Main'
import { Navbar } from '@/components/Navbar'
import { PropsWithChildren } from 'react'
import { MainProps } from '../../components/Main/Main'

interface Props {
  mainProps?: Partial<MainProps>
}

export default function SubPageLayout(props: PropsWithChildren<Props>) {
  const { mainProps = {} } = props

  return (
    <>
      <Navbar />
      <Main {...mainProps}>{props.children}</Main>
      <Footer />
    </>
  )
}
