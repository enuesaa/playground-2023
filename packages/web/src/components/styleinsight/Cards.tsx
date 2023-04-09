import { useStyles } from '@/styles/use'

export const Cards = () => {
  const styles = useStyles(builder => ({
    main: builder().surf('main').size('x2').decorate('a').css({
      background: '#ff6633',
    }),
    card: builder().surf('reverse').size('x3').decorate('b').css({
      margin: '10px',
    }),
  }))

  return (
    <section css={styles.main}>
      <div css={styles.card}>a</div>
      <div css={styles.card}>b</div>
      <div css={styles.card}>c</div>
    </section>
  )
}
