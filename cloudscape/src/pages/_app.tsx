import type { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/global'
import '@cloudscape-design/global-styles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Global styles={globalStyle} />
    </>
  )
}