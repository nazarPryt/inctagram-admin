import { PropsWithChildren, ReactElement } from 'react'

import { useIsAuth } from '@/shared/hooks/useIsAuth'
import { Header } from '@/widgets/Header'
import { Container } from '@nazar-pryt/inctagram-ui-kit'
import { NextPage } from 'next'

import { AuthorizedLayoutStyled } from './AuthorizedLayout.styled'

export const AuthorizedLayout: NextPage<PropsWithChildren> = ({ children }) => {
  const {} = useIsAuth()

  return (
    <AuthorizedLayoutStyled>
      <Container>
        <Header />
        authorized
        {children}
      </Container>
    </AuthorizedLayoutStyled>
  )
}

export const getAuthorizedLayout = (page: ReactElement) => {
  return <AuthorizedLayout>{page}</AuthorizedLayout>
}
