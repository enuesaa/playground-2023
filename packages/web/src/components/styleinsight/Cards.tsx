import { useTheme } from '@/styles/packed'
import { Space, InlinedSpace } from '../common/Space'

export const Cards = () => {
  const theme = useTheme()

  const styles = {
    // how to nest ?
    main: theme({surf: 'main', size: 'x2', decorate: 'a'}, {}),
    card: theme({surf: 'reverse', size: 'x3', decorate: 'b'}),
  }

  return (
    <section css={styles.main}>
      <Space height='10px' width='100%' />
      <div css={styles.card}>a</div>
      <InlinedSpace height='0' width='10px' />
      <div css={styles.card}>b</div>
      <InlinedSpace height='0' width='10px' />
      <div css={styles.card}>c</div>
    </section>
  )
}
