import { Link } from '../base/Link'
import { css, Box } from 'theme-ui'
import { H1 } from '../base/H1'

export const Header = () => {
  const styles = {
    header: css({
      width: '100%',
      background: 'primary',
      display: 'flex',
      px: 'x2',
      alignItems: 'center',
    }),
    flexLeft: css({
      flex: '1 1 auto',
      h1: {
        fontSize: 3,
        color: 'background',
      },
    }),
  }

  return (
    <header css={styles.header}>
      <Link href='/' css={styles.flexLeft}>
        <H1>my-nextjs-template</H1>
      </Link>
      <Box>
        <Link href='/about'>about</Link>
      </Box>
    </header>
  )
}