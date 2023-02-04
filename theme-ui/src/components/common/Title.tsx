import { Heading, ThemeUICSSObject } from 'theme-ui'

type Props = {
  name: string
}
export const Title = ({ name }: Props) => {
  const h2Style: ThemeUICSSObject = {
    width: '100%',
    padding: '10px',
    fontWeight: '600',
    color: '#cccccc',
    fontSize: '30px',
  }

  return (
    <Heading as='h2' sx={h2Style}>{name}</Heading>
  )
}