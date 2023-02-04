import { Link } from '../base/Link'
import { Heading, css, Box, Button } from 'theme-ui'

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
      <Box css={styles.flexLeft}>
        <Link href={{ pathname: `/` }}>
          <Heading as='h1'>my-nextjs-template</Heading>
        </Link>
      </Box>
      <Box>
        <Button variant='buttons.secondary'>aa</Button>
      </Box>
    </header>
  )
}