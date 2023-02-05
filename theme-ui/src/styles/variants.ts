import { ThemeUIStyleObject } from 'theme-ui'

export const variants: ThemeUIStyleObject = {
  // grids: {},
  buttons: {
    primary: {
      padding: 'x1',
      color: 'base',
      background: 'primary',
      '&:hover': {
        background: 'text',
      },
    },
    secondary: {
      px: 'x2',
      py: 'x1',
      color: 'base',
      background: 'rgba(0,0,0,0)',
      cursor: 'pointer',
      '&:hover': {
        color: 'text',
        background: 'base',
      },
    },
  },
  text: {
    heading: {
      color: 'text',
      px: 'x2', 
      py: 'x1',
      userSelect: 'none',
      display: 'block',
    },
  },
  links: {
    main: {
      display: 'inline-block',
    },
    card: {
      display: 'inline-block',
      px: 'x2',
      py: 'x1',
      color: 'base',
      background: 'text',
      borderRadius: 'x1',
      '&:hover': {
        color: 'text',
        background: 'base',
      },
    },
    invert: {
      display: 'block',
      px: 'x2',
      py: 'x1',
      color: 'base',
      '&:hover': {
        color: 'text',
        background: 'base',
      },
    }
  },
  // images: {},
  // cards: {},
  // layout: {},
  // forms: {},
  // badges: {},
  // alerts: {},
  // messages: {},
}