import { css } from 'theme-ui'
import type { LinkProps } from 'next/link'
import NextLink from 'next/link'
import { ReactNode, forwardRef, ComponentPropsWithRef } from 'react'

/**
 * Propsを全て定義しようとするとキリがない. そのため ComponentPropsWithRef を使うと良いらしい
 * @see https://zenn.dev/takepepe/articles/atoms-type-definitions
 */
type Props = LinkProps & {
  css?: any,
  children: ReactNode,
}
export const Link = forwardRef<any, Props>((props, ref) => {
  const style = [
    css({
      display: 'inline-block',
      background: 'rgba(0,0,0,0)',
    }),
    props.css ?? {},
  ]

  return (
    <NextLink {...props} ref={ref} css={props.css}>
      {props.children}
    </NextLink>
  )
})