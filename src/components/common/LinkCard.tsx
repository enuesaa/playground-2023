import { css } from '@emotion/react'
import Link from 'next/link'

type Props = {
  href: string
  name: string
}
export const LinkCard = ({ href, name }: Props) => {
  const styles = {
    link: css({
      display: 'block',
      color: '#fafafa',
    }),
  }

  return (
    <Link href={href} css={styles.link}>
      {name}
    </Link>
  )
}
