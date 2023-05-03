import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const Main = ({ children }: Props) => {
  const styles = {
    main: css({
      height: '100vh',
    }),
  }

  return <section css={styles.main}>{children}</section>
}
