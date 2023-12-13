import { PropsWithChildren, ReactElement } from 'react'

import { Header } from '@/widgets/Header'
import { Container } from '@nazar-pryt/inctagram-ui-kit'
import { NextPage } from 'next'

import { AuthorizedLayoutStyled } from './AuthorizedLayout.styled'

export const AuthorizedLayout: NextPage<PropsWithChildren> = ({ children }) => {
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
