import type { Theme } from 'theme-ui'
import { global } from './global'

export const theme: Theme = {
  config: {
    initialColorModeName: 'light',
  },

  /** scales */
  colors: {
    primary: '#33e',
    text: '#000',
    background: '#fff',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
  },
  fontSizes: [14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
  },
  // space
  // letterSpacings
  // sizes
  // borders
  // borderStyles
  // borderWidths
  // radii
  // shadows
  // zIndices
  // colorStyles
  // textStyles
  // opacities
  // transitions

  /** variants **/

  /** styles */
  styles: global,
}
