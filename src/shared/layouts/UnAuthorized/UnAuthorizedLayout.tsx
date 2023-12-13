import { PropsWithChildren, ReactElement } from 'react'

import { Header } from '@/widgets/Header'
import { Container } from '@nazar-pryt/inctagram-ui-kit'
import { NextPage } from 'next'

import { UnAuthorizedLayoutStyled } from './UnAuthorizedLayout.styled'

export const UnAuthorizedLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <UnAuthorizedLayoutStyled>
      <Container>
        <Header />
        {children}
      </Container>
    </UnAuthorizedLayoutStyled>
  )
}
export const getUnAuthorizedLayout = (page: ReactElement) => {
  return <UnAuthorizedLayout>{page}</UnAuthorizedLayout>
}
