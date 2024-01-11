import { PropsWithChildren, ReactElement } from 'react'

import { useIsAuth } from '@/shared/hooks/useIsAuth'
import { Aside } from '@/widgets/Aside'
import { Header } from '@/widgets/Header'
import { Container } from '@nazar-pryt/inctagram-ui-kit'
import { NextPage } from 'next'

import { AuthorizedLayoutStyled } from './AuthorizedLayout.styled'

const AuthorizedLayout: NextPage<PropsWithChildren> = ({ children }) => {
  const {} = useIsAuth()

  return (
    <div style={{ marginInline: 'auto', maxWidth: '1160px', padding: '0 20px' }}>
      <AuthorizedLayoutStyled>
        <Header />
        <Aside />
        <section>{children}</section>
      </AuthorizedLayoutStyled>
    </div>
  )
}

export const getAuthorizedLayout = (page: ReactElement) => {
  return <AuthorizedLayout>{page}</AuthorizedLayout>
}
