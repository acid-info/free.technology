import { Footer } from '@/components/Footer'
import { Main } from '@/components/Main'
import { Navbar } from '@/components/Navbar'
import { SEO } from '@/components/SEO'
import { PropsWithChildren } from 'react'
import { MainProps } from '../../components/Main/Main'

interface Props {
  mainProps?: Partial<MainProps>
}

export default function DefaultLayout(props: PropsWithChildren<Props>) {
  const { mainProps = {} } = props

  return (
    <>
      <SEO />
      <Navbar />
      <Main {...mainProps}>{props.children}</Main>
      <Footer />
    </>
  )
}
