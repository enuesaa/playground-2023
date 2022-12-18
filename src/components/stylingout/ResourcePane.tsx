import { MouseEventHandler } from 'react'
import { StructStyle } from '@/components/stylingout/Stylingout'
import { css } from '@emotion/react'

type Props = {
  updateMainStructStyle: (style: Partial<StructStyle>) => void
}
export const ResourcePane = ({ updateMainStructStyle }: Props) => {
  const styles = {
    resourcePane: css({
      flex: '1 0 100px',
      '& button': {
        display: 'block',
        borderRadius: '5px',
        padding: '2px 5px',
        margin: '10px',
      },
    }),
  }

  const handleChangeBorder: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    updateMainStructStyle({ border: 'solid 5px #6633cc' })
  }
  const handleChangeFontSize: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    updateMainStructStyle({ fontSize: '25px' })
  }
  const handleChangeBackground: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    updateMainStructStyle({ background: '#ff9933' })
  }

  return (
    <section css={styles.resourcePane}>
      <button onClick={handleChangeBorder}>border</button>
      <button onClick={handleChangeFontSize}>fontSize</button>
      <button onClick={handleChangeBackground}>background</button>
    </section>
  )
}