import { CSSObject } from '@emotion/react'

export type SurfDef = {
  main: CSSObject,
  sub: CSSObject,
  reverse: CSSObject,
  transparent: CSSObject
}
export type SizeDef = {
  x1: CSSObject,
  x2: CSSObject,
  x3: CSSObject,
}
export type DecorateDef = {
  a: CSSObject,
  b: CSSObject,
}
export type Def = {
  surf: SurfDef,
  size: SizeDef,
  decorate: DecorateDef,
}

export const def: Def = {
  surf: {
    main: {
      color: '#111111',
      background: '#fafafa',
    },
    sub: {
      color: '#cccccc',
      background: '#fafafa',
    },
    reverse: {
      color: '#fafafa',
      background: '#111111',
    },
    transparent: {
      color: 'none',
      background: 'transparent',
    }
  },
  size: {
    x1: {
      fontSize: '16px',
      fontWeight: '400',
      padding: '2px 5px',
    },
    x2: {
      fontSize: '20px',
      fontWeight: '600',
      padding: '5px 10px',
    },
    x3: {
      fontSize: '25px',
      fontWeight: '800',
      padding: '10px 15px',
    },
  },
  decorate: {
    a: {
      border: 'none',
      borderRadius: '0',
      boxShadow: 'none',
    },
    b: {
      border: 'none',
      borderRadius: '10px',
      boxShadow: 'none',
    }
  }
}
