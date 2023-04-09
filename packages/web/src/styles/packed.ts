import { def, type SurfDef, SizeDef, DecorateDef } from '@/styles/def'
import { CSSObject, css, SerializedStyles } from '@emotion/react'

type Base = {
  surf: keyof SurfDef;
  size: keyof SizeDef;
  decorate: keyof DecorateDef;
}
export const usePacked = () => ({ surf = 'main', size = 'x1', decorate = 'a' }: Partial<Base>, custom: CSSObject = {}): SerializedStyles => {
  return css({
    margin: '0',
    padding: '0',
    width: 'auto',
    height: 'auto',
    ...def.surf[surf],
    ...def.size[size],
    ...def.decorate[decorate],
    ...custom,
  })
}
