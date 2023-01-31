import { css } from '@emotion/react'
import Link from 'next/link'
import { cardStyle } from '@/styles/base'

type Props = {
  href: string
  name: string
}
export const LinkCard = ({ href, name }: Props) => {
  const styles = {
    link: css(cardStyle, {
      padding: '10px 20px',
    }),
  }

  return (
    <Link href={href} css={styles.link}>
      {name}
    </Link>
  )
}
