import { css, useTheme, type CSSObject, SerializedStyles, Theme } from '@emotion/react'
import { SurfDef, SizeDef, DecorateDef } from './emotion'

class Builder {
  protected _css: CSSObject = {};
  protected _surf: keyof SurfDef | null = null;
  protected _size: keyof SizeDef | null = null;
  protected _decorate: keyof DecorateDef | null = null;

  constructor(
    protected theme: Theme
  ) {}

  surf(name: keyof SurfDef) {
    this._surf = name;
    return this
  }

  size(name: keyof SizeDef) {
    this._size = name;
    return this
  }

  decorate(name: keyof DecorateDef) {
    this._decorate = name;
    return this
  }

  css(css: CSSObject) {
    this._css = { ...this._css, ...css }
    return this
  }

  toCssObject(): CSSObject {
    return {
      ...(this._surf === null ? {} : this.theme.surf[this._surf]),
      ...(this._size === null ? {} : this.theme.size[this._size]),
      ...(this._decorate === null ? {} : this.theme.decorate[this._decorate]),
      ...this._css,
    }
  }
}

export const useStyles = <A extends string>(
  createStyles: (builder: () => Builder) => Record<A, Builder>
): Record<A, SerializedStyles> => {
  const theme = useTheme()
  const styles = createStyles(() => new Builder(theme))

  return Object.fromEntries(
    Object.entries<Builder>(styles).map(([k, v]) => [k, css(v.toCssObject())])
  ) as Record<A, SerializedStyles>
}
