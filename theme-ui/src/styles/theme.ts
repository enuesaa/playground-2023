import type { Theme } from 'theme-ui'
import { scales } from './scales'
import { global } from './global'
import { variants } from './variants'

export const theme: Theme = {
  config: {
    initialColorModeName: 'light',
  },

  ...scales,
  ...variants,

  styles: {
    root: global,
  },
}
