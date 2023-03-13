import type { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/global'
import { Layout } from '@/components/common/Layout'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode,
}

type Props = AppProps & {
  Component: NextPageWithLayout,
}
export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? (page => <Layout>{page}</Layout>)

  return (
    <>
      <Global styles={globalStyle} />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
