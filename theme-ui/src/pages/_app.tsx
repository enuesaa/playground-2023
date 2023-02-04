import type { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'
import { ThemeProvider, BaseStyles } from 'theme-ui'
import { theme } from '@/styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BaseStyles>
          <Component {...pageProps} />
        </BaseStyles>
      </ThemeProvider>
    </>
  )
}