import { useStyles } from '@/styles/use'
import Link from 'next/link'

export const Header = () => {
  const styles = useStyles((theme) => ({
    top: theme({ surf: 'main', decorate: 'shadow' }).css({
      padding: '10px 10px 10px 30px',
    }),
    title: theme({ size: 'x2', around: 'x2tb' }),
  }))

  return (
    <>
      <header css={styles.top}>
        <Link href={'/'} css={styles.title}>
          (code.fn)
        </Link>
      </header>
    </>
  )
}
