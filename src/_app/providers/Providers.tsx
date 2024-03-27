import { ReactNode } from 'react'

import ErrorBoundary from '@/_app/providers/ErrorBoundary'
import { Theme } from '@/_app/providers/Theme'
import { client } from '@/shared/lib/ApolloClient'
import { ApolloProvider } from '@apollo/client'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <Theme>{children}</Theme>
      </ApolloProvider>
    </ErrorBoundary>
  )
}
