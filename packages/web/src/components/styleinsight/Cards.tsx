import { useDesignSystem } from '@/styles/packed'
import { Space, InlinedSpace } from '../common/Space'

export const Cards = () => {
  const styles = useDesignSystem(theme => ({
    main: theme.clone().surf('main').size('x2').decorate('a'),
    card: theme.clone().surf('reverse').size('x3').decorate('b'),
  }))

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
