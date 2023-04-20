import { useStyles } from '@/styles/use'

export const Cards = () => {
  const styles = useStyles((theme) => ({
    main: theme({ surf: 'main', size: 'x2', decorate: 'a' }),
    card: theme({ surf: 'reverse', size: 'x3', decorate: 'b' }).css({
      display: 'inline-block',
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
