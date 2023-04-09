import { css, useTheme as useEmotionTheme, type CSSObject, SerializedStyles, Theme as EmotionTheme } from '@emotion/react'
import { SurfDef, SizeDef, DecorateDef } from './emotion'

class Theme {
  public css: CSSObject = {};

  constructor(
    protected emotionTheme: EmotionTheme
  ) {}

  clone() {
    return new Theme(this.emotionTheme)
  }

  surf(name: keyof SurfDef) {
    this.css = { ...this.css, ...this.emotionTheme.surf[name] }
    return this
  }

  size(name: keyof SizeDef) {
    this.css = { ...this.css, ...this.emotionTheme.size[name] }
    return this
  }

  decorate(name: keyof DecorateDef) {
    this.css = { ...this.css, ...this.emotionTheme.decorate[name] }
    return this
  }

  with(css: CSSObject) {
    this.css = { ...this.css, ...css }
    return this
  }
}

export const useDesignSystem = <A extends string>(
  buildfn: (theme: Theme) => Record<A, Theme>
): Record<A, SerializedStyles> => {
  const emotionTheme = useEmotionTheme()
  const builded = buildfn(new Theme(emotionTheme))
  return Object.keys(builded).reduce((prev, k) => {
    // @ts-ignore
    prev[k] = css(builded[k].css)
    return prev
  }, {}) as Record<A, SerializedStyles>
}
