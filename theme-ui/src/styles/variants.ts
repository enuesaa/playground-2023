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
      background: 'rgba(0,0,0,0)',
      cursor: 'pointer',
      '&:hover': {
        color: 'text',
        background: 'background',
      },
    },
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
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
      color: 'background',
      background: 'text',
      borderRadius: 'x1',
      '&:hover': {
        color: 'text',
        background: 'background',
      },
    },
    invert: {
      display: 'block',
      px: 'x2',
      py: 'x1',
      color: 'background',
      '&:hover': {
        color: 'text',
        background: 'background',
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