import { ReactElement, ReactNode } from 'react'

import { Providers } from '@/_app/providers'
import { useLoader } from '@/shared/hooks/useLoader'
import { NextPage } from 'next'
import { AppProps } from 'next/app'

import '@/shared/styles/nprogress.css'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
