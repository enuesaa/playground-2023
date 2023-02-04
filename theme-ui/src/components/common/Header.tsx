import Link from 'next/link'
import { Heading, css, Flex, Box, Button } from 'theme-ui'

export const Header = () => {
  const styles = {
    header: css({
      width: '100%',
      background: 'primary'
    }),
    flex: css({
      padding: 'x2',
      alignItems: 'center',
    }),
    flexLeft: css({
      flex: '1 1 auto',
    }),
    h1: css({
      fontSize: 3,
      color: 'accent',
    })
  }

  return (
    <header css={styles.header}>
      <Flex css={styles.flex}>
        <Box css={styles.flexLeft}>
          <Link href={{ pathname: `/` }} css={{display: 'block', width: '300px'}}>
            <Heading as='h1' css={styles.h1}>my-nextjs-template</Heading>
          </Link>
        </Box>
        <Box>
          <Button variant='buttons.secondary'>aa</Button>
        </Box>
      </Flex>
    </header>
  )
}