import type { Theme } from 'theme-ui'

export const theme: Theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  styles: {
    root: {
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
      }
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
    }
  }
}
