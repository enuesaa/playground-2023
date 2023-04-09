import { css, useTheme as emotionUseTheme, type CSSObject, SerializedStyles } from '@emotion/react'
import { SurfDef, SizeDef, DecorateDef } from './emotion'

type Base = {
  surf: keyof SurfDef;
  size: keyof SizeDef;
  decorate: keyof DecorateDef;
}
export const useTheme = () => ({ surf = 'main', size = 'x1', decorate = 'a' }: Partial<Base>, custom: CSSObject = {}): SerializedStyles => {
  const theme = emotionUseTheme()

  return css({
    margin: '0',
    padding: '0',
    width: 'auto',
    height: 'auto',
    ...theme.surf[surf],
    ...theme.size[size],
    ...theme.decorate[decorate],
    ...custom,
  })
}
