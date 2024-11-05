import { PropsWithChildren, ReactElement } from 'react'

import { Container } from '@/shared/components/Container'
import { useIsAuth } from '@/shared/hooks/useIsAuth'
import { Aside } from '@/widgets/Aside'
import { Header } from '@/widgets/Header'
import { NextPage } from 'next'

import { AuthorizedLayoutStyled } from './AuthorizedLayout.styled'

const AuthorizedLayout: NextPage<PropsWithChildren> = ({ children }) => {
  const {} = useIsAuth()

  return (
    <Container>
      <AuthorizedLayoutStyled>
        <Header />
        <main>{children}</main>
        <Aside />
      </AuthorizedLayoutStyled>
    </Container>
  )
}

export const getAuthorizedLayout = (page: ReactElement) => {
  return <AuthorizedLayout>{page}</AuthorizedLayout>
}
