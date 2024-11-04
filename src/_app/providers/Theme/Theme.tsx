import { ReactNode } from 'react'

import { GlobalStyles } from '@/shared/styles/GlobalStyles'
import { ToastContainerStyled, darkTheme } from '@nazar-pryt/inctagram-ui-kit'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export const Theme = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <style global jsx>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        {children}
        <ToastContainerStyled
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
    </>
  )
}
