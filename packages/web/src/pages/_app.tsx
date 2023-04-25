import type { AppProps } from 'next/app'
import { Global, ThemeProvider } from '@emotion/react'
import { globalStyle } from '@/styles/global'
import { Layout } from '@/components/common/Layout'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { baseTheme } from '@/styles/theme'
import { ReactSketchCanvas } from "react-sketch-canvas"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type Props = AppProps & {
  Component: NextPageWithLayout
}
export default function App({ Component, pageProps }: Props) {
  const styles = {
    border: "0.0625rem solid #1a1a1a",
    borderRadius: "0.25rem",
  };
  const getLayout = Component.getLayout ?? ((page) => (
    <Layout>
      {page}
      <ReactSketchCanvas
        style={styles}
        width="600"
        height="400"
        strokeWidth={4}
        strokeColor="red"
      />
    </Layout>)
  )

  return (
    <>
      <Global styles={globalStyle} />
      <ThemeProvider theme={baseTheme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  )
}
