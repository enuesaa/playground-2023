import { css } from 'theme-ui'
import { Link } from '../base/Link'

export const SideMenu = () => {
  const styles = {
    nav: css({
      width: '300px',
      margin: 'x2',
      background: 'primary',
    }),
  }

  return (
    <nav css={styles.nav}>
      <Link href='/' variant='invert'>a</Link>
      <Link href='/' variant='invert'>a</Link>
      <Link href='/' variant='invert'>a</Link>
      <Link href='/' variant='invert'>a</Link>
      <Link href='/' variant='invert'>a</Link>
      <Link href='/' variant='invert'>a</Link>
      <Link href='/' variant='invert'>a</Link>
    </nav>
  )
}
