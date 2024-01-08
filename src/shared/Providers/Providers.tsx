import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

import { client } from '@/shared/lib/ApolloClient/ApolloClient'
import { ApolloProvider } from '@apollo/client'
import { GlobalStyles, darkTheme } from '@nazar-pryt/inctagram-ui-kit'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

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
          <ToastContainer
            autoClose={5000}
            closeOnClick
            draggable
            hideProgressBar={false}
            newestOnTop={false}
            pauseOnFocusLoss
            pauseOnHover
            position={'bottom-left'}
            rtl={false}
          />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}
