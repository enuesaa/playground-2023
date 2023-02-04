import Link from 'next/link'
import { Heading, css } from 'theme-ui'

export const Header = () => {
  const styles = {
    header: css({
      width: '100%',
      height: '1.0',
      minHeight: '100px',
      background: '#ff6633',
      boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    h1: css({
      color: 'primary',
      textShadow: '2px 2px 2px #000',
      fontSize: 48,
      fontWeight: 'heading',
      height: '100px',
      margin: '0 auto',
      textAlign: 'center',
      userSelect: 'none',
      '&:hover': {
        textShadow: '3px 3px 2px #000',
      },
    })
  }

  return (
    <header css={styles.header}>
      <Link href={{ pathname: `/` }}>
        <Heading as='h1' css={styles.h1}>my-nextjs-template</Heading>
      </Link>
    </header>
  )
}