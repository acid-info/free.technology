import { Main } from '@/components/Main'
import { PropsWithChildren } from 'react'
import { MainProps } from '../../components/Main/Main'

interface Props {
  mainProps?: Partial<MainProps>
}

export default function DefaultLayout(props: PropsWithChildren<Props>) {
  const { mainProps = {} } = props

  return (
    <>
      <Main {...mainProps}>{props.children}</Main>
    </>
  )
}
