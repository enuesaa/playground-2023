import Link from 'next/link'
import { Heading, ThemeUICSSObject } from 'theme-ui'
import {  } from '@emotion/react'

export const Header = () => {
  const headerStyle: ThemeUICSSObject = {
    width: '100%',
    height: '1.0',
    minHeight: '100px',
    background: '#ff6633',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const h1Style: ThemeUICSSObject = {
    color: '#ff6633',
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
  }

  return (
    <header sx={headerStyle}>
      <Link href={{ pathname: `/` }}>
        <Heading as='h1' sx={h1Style}>my-nextjs-template</Heading>
      </Link>
    </header>
  )
}