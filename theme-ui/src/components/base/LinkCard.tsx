import { css } from 'theme-ui'
import type { LinkProps } from 'next/link'
import NextLink from 'next/link'
import { ReactNode } from 'react'

type Props = LinkProps & {
  css?: Record<string, any>,
  children: ReactNode
}
export const LinkCard = (props: Props) => {
  const styles = {
    link: css({
      display: 'inline-block',
      px: 'x2',
      py: 'x1',
      color: 'background',
      background: 'text',
      borderRadius: 'x1',
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
