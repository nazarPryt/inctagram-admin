import { ReactNode } from 'react'

import { client } from '@/shared/lib/ApolloClient/ApolloClient'
import { ApolloProvider } from '@apollo/client'
import { GlobalStyles, darkTheme } from '@nazar-pryt/inctagram-ui-kit'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <style global jsx>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <ApolloProvider client={client}>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}
