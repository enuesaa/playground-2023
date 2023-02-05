import { css } from 'theme-ui'
import type { LinkProps } from 'next/link'
import NextLink from 'next/link'
import { ReactNode } from 'react'

type Props = LinkProps & {
  css?: Record<string, any>,
  children: ReactNode
}
export const LinkNav = (props: Props) => {
  const styles = {
    link: css({
      display: 'block',
      px: 'x2',
      py: 'x1',
      color: 'background',
      '&:hover': {
        color: 'text',
        background: 'background',
      },
    }),
  }

  return (
    <NextLink href={props.href} css={styles.link}>
      {props.children}
    </NextLink>
  )
}
