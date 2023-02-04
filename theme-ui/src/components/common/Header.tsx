import Link from 'next/link'
import { css } from '@emotion/react'

export function Header() {
  const styles = {
    top: css({
      width: '100%',
      height: '1.0',
      minHeight: '100px',
      background: '#ff6633',
      boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
  }

  return (
    <>
      <header css={styles.top}>
        <Link href={{ pathname: `/` }}>
          <h1>my-nextjs-template</h1>
        </Link>
      </header>
    </>
  )
}