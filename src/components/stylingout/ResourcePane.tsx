import { MouseEventHandler } from 'react'
import { StructStyle } from '@/components/stylingout/Stylingout'
import { css } from '@emotion/react'
import { FaMinus, FaPlus } from 'react-icons/fa'

type Props = {
  mainStructStyle: StructStyle;
  updateMainStructStyle: (style: Partial<StructStyle>) => void
}
export const ResourcePane = ({ mainStructStyle, updateMainStructStyle }: Props) => {
  const styles = {
    resourcePane: css({
      flex: '1 0 100px',
      '& button': {
        display: 'block',
        borderRadius: '5px',
        padding: '2px 5px',
        margin: '10px',
      },
      '& li': {
        color: '#fafafa',
        padding: '2px 0',
        margin: '10px',
      },
    }),
  }

  const handleChangeBorder: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    updateMainStructStyle({ border: 'solid 5px #6633cc' })
  }
  const handlePlusFontSize: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const current = parseInt(mainStructStyle.fontSize.replace('px', ''), 10)
    updateMainStructStyle({ fontSize: `${current + 1}px` })
  }
  const handleMinusFontSize: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const current = parseInt(mainStructStyle.fontSize.replace('px', ''), 10)
    updateMainStructStyle({ fontSize: `${current + 1}px` });
    updateMainStructStyle({ fontSize: `${current - 1}px` })
  }
  const handleChangeBackground: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    updateMainStructStyle({ background: '#ff9933' })
  }

  return (
    <section css={styles.resourcePane}>
      <button onClick={handleChangeBorder}>border</button>
      <ul>
        <li>
          fontSize
          <button onClick={handlePlusFontSize}><FaPlus /></button>
          <button onClick={handleMinusFontSize}><FaMinus /></button>
        </li>
      </ul>
      <button onClick={handleChangeBackground}>background</button>
    </section>
  )
}