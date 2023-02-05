import { BoxProps, useThemeUI, css } from 'theme-ui'
import type { LinkProps } from 'next/link'
import NextLink from 'next/link'

export const Link = (props: BoxProps & LinkProps) => {
  const { theme } = useThemeUI()
  const linkStyleSettings = theme.links ?? {}

  const variant = props.variant ?? 'main'
  const baseStyle = linkStyleSettings.hasOwnProperty(variant) ? linkStyleSettings[variant] : {}
  const customStyle = (props.css ?? {}) as Record<string, any>
  const style = css({
    ...baseStyle,
    ...customStyle,
  })
  const children = props.children

  return (
    <NextLink href={props.href} css={style}>
      {children}
    </NextLink>
  )
}
