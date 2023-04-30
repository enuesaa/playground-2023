import { Header } from '@/components/common/Header'
import { ReactNode } from 'react'
import { Sidebar } from '@/components/common/Sidebar'
import { useStyles } from '@/styles/use'

type Props = {
  children: ReactNode
}
export const Layout = ({ children }: Props) => {
  const styles = useStyles(theme => ({
    main: theme({ around: 'x2' }).css({ display: 'flex' }),
    leftSide: theme().css({ flex: '0 0 300px' }),
    rightSide: theme().css({ flex: '1 0 auto' }),
  }))

  return (
    <>
      <Header />
      <section css={styles.main}>
        <div css={styles.leftSide}>
          <Sidebar />
        </div>
        <div css={styles.rightSide}>
          {children}
        </div>
      </section>
    </>
  )
}
