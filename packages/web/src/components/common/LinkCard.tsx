import { css, useTheme } from '@emotion/react'
import Link from 'next/link'

type Props = {
  href: string
  name: string
}
export const LinkCard = ({ href, name }: Props) => {
  const theme = useTheme()
  const styles = {
    link: css(theme.linkCard, {
      padding: '10px 20px',
    }),
  }

  return (
    <Link href={href} css={styles.link}>
      {name}
    </Link>
  )
}
