import { ReactElement, ReactNode } from 'react'

import { Providers } from '@/shared/Providers/Providers'
import { useLoader } from '@/shared/hooks/useLoader'
import { NextPage } from 'next'
import { AppProps } from 'next/app'

import '@/shared/styles/nprogress.css'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  useLoader()

  const getLayout = Component.getLayout ?? (page => page)

  return <Providers>{getLayout(<Component {...pageProps} />)}</Providers>
}
