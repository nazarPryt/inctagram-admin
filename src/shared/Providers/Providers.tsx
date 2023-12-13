import { ReactNode } from 'react'

import { client } from '@/shared/lib/ApolloClient/ApolloClient'
import { ApolloProvider } from '@apollo/client'
import { GlobalStyles, darkTheme } from '@nazar-pryt/inctagram-ui-kit'
import { ThemeProvider } from 'styled-components'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ApolloProvider>
  )
}
