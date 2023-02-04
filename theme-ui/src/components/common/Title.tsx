import { Heading } from 'theme-ui'

type Props = {
  name: string
}
export const Title = ({ name }: Props) => {
  return (
    <Heading as='h2'>{name}</Heading>
  )
}