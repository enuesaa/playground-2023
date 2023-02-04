import { ThemeUIStyleObject } from 'theme-ui'

export const variants: ThemeUIStyleObject = {
  // grids: {},
  buttons: {
    primary: {
      padding: 'x1',
      color: 'background',
      background: 'primary',
      '&:hover': {
        background: 'text',
      },
    },
    secondary: {
      px: 'x2',
      py: 'x1',
      color: 'background',
      background: 'muted',
    },
  },
  text: {
    heading: {
      userSelect: 'none',
      display: 'block',
    },
  },
  // links: {},
  // images: {},
  // cards: {},
  layout: {
    container: {
      width: '90%',
      margin: '0 auto',
      height: '100vh',
      padding: '20px 0',
    },
  },
  // forms: {},
  // badges: {},
  // alerts: {},
  // messages: {},
}