import { ReactNode } from 'react'
import { css, useTheme } from '@emotion/react'

type Props = {
  children: ReactNode
}
export const Main = ({ children }: Props) => {
  const theme = useTheme()

  const styles = {
    main: css(theme.innerbox, {
      height: '100vh',
    }),
  }

  return <section css={styles.main}>{children}</section>
}
