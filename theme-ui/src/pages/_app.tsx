import type { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'
import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/global'
import { ThemeProvider } from 'theme-ui'
import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ThemeProvider theme={theme}>
        <h1
          sx={{
            color: 'primary',
            fontFamily: 'heading',
          }}>
          Hello
        </h1>
      </ThemeProvider>
      <Global styles={globalStyle} />
    </>
  )
}