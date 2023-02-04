import { Heading, ThemeUICSSObject, css } from 'theme-ui'

type Props = {
  name: string
}
export const Title = ({ name }: Props) => {
  const styles = {
    h2: css({
      width: '100%',
      padding: '10px',
      fontWeight: '600',
      color: '#cccccc',
      fontSize: '30px',
    })
  }

  return (
    <Heading as='h2' css={styles.h2}>{name}</Heading>
  )
}