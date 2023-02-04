import { Link } from '../base/Link'

type Props = {
  href: string
  name: string
}
export const LinkCard = ({ href, name }: Props) => {
  return (
    <Link href={href} variant='card'>
      {name}
    </Link>
  )
}