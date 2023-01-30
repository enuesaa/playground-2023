import type { AppProps } from 'next/app'
import 'modern-css-reset/dist/reset.min.css'
import '../styles/global.css'

/** @see https://docs.vivid.lol/ */
if (
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development"
  // && /VIVID_ENABLED=true/.test(document.cookie)
) {
  import("vivid-studio").then((v) => v.run());
  import("vivid-studio/style.css");
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}