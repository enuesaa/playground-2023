import { css } from '@emotion/react'

type Props = {
  name: string
}
export function Card({ name }: Props) {
  const styles = {
    main: css({
      width: '100px',
      minHeight: '50px',
      height: 'auto',
      margin: '10px',
      background: 'rgba(255,255,255,0.2)',
      padding: '10px',
      fontWeight: '600',
      fontSize: '30px',
      borderRadius: '10px',
      textAlign: 'center',
    }),
  }
  return (
    <div css={styles.main}>
      {name}
    </div>
  )
}
