import { H2 } from '../base/H2'

type Props = {
  name: string
}
export const Title = ({ name }: Props) => {
  return (
    <H2>{name}</H2>
  )
}