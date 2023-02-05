import { ThemeUIStyleObject } from 'theme-ui'

export const global: ThemeUIStyleObject = {
  '*': {
    boxSizing: 'border-box',
  },
  'html,body': {
    padding: '0',
    margin: '0',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
}