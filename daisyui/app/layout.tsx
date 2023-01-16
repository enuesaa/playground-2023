import RootStyleRegistry from './emotion'
import './global.css'

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="ja">
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  )
}
