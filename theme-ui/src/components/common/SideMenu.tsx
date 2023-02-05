import { css } from 'theme-ui'
import { LinkNav } from '../base/LinkNav'

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
      <LinkNav href='/'>a</LinkNav>
      <LinkNav href='/'>a</LinkNav>
      <LinkNav href='/'>a</LinkNav>
      <LinkNav href='/'>a</LinkNav>
      <LinkNav href='/'>a</LinkNav>
      <LinkNav href='/'>a</LinkNav>
      <LinkNav href='/'>a</LinkNav>
      <LinkNav href='/'>a</LinkNav>
      <LinkNav href='/'>a</LinkNav>
    </nav>
  )
}
