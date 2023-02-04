import { css } from 'theme-ui'
import Link from 'next/link'

export const SideMenu = () => {
  const styles = {
    nav: css({
      width: '300px',
      margin: 'x2',
      background: 'primary',
      a: {
        px: 'x2',
        py: 'x1',
        color: 'background',
        display: 'block',
        '&:hover': {
          color: 'text',
          background: 'background',
        },
      },
    }),
  }

  return (
    <nav css={styles.nav}>
      <Link href='/'>a</Link>
      <Link href='/'>a</Link>
      <Link href='/'>a</Link>
      <Link href='/'>a</Link>
      <Link href='/'>a</Link>
      <Link href='/'>a</Link>
      <Link href='/'>a</Link>
    </nav>
  )
}
