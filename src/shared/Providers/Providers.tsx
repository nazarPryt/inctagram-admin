import { ReactNode } from 'react'

import { GlobalStyles, darkTheme } from '@nazar-pryt/inctagram-ui-kit'
import { ThemeProvider } from 'styled-components'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
