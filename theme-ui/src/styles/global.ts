import { ThemeUIStyleObject } from 'theme-ui'

export const global: ThemeUIStyleObject = {
  'html,body': {
    padding: '0',
    margin: '0',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    background: '#1a1a1a',
  },
  h1: {
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
  },
  h2: {
    width: '100%',
    padding: '10px',
    fontWeight: '600',
    color: '#cccccc',
    fontSize: '30px',
  },
  main: {
    width: '90%',
    margin: '0 auto',
    height: '100vh',
    padding: '20px 0',
  },
  header: {
    width: '100%',
    height: '1.0',
    minHeight: '100px',
    background: '#ff6633',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}