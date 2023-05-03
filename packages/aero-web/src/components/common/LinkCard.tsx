import Link from 'next/link'

type Props = {
  href: string
  name: string
}
export const LinkCard = ({ href, name }: Props) => {
  return (
    <Link href={href}>
      {name}
    </Link>
  )
}
