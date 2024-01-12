import { PropsWithChildren, ReactElement } from 'react'

import { Container } from '@/shared/components/Container'
import { useIsAuth } from '@/shared/hooks/useIsAuth'
import { Header } from '@/widgets/Header'
import { NextPage } from 'next'

const JustHeader: NextPage<PropsWithChildren> = ({ children }) => {
  const {} = useIsAuth()

  return (
    <Container>
      <Header />
      <section>{children}</section>
    </Container>
  )
}

export const getJustHeader = (page: ReactElement) => {
  return <JustHeader>{page}</JustHeader>
}
