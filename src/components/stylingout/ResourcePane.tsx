import { MouseEventHandler } from 'react'
import { StructStyle } from '@/components/stylingout/StructCanvas'

type Props = {
  updateMainStructStyle: (style: Partial<StructStyle>) => void
}
export const ResourcePane = ({ updateMainStructStyle }: Props) => {
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
    <section>
      <button onClick={handleChangeBorder}>border</button>
      <button onClick={handleChangeFontSize}>fontSize</button>
      <button onClick={handleChangeBackground}>background</button>
    </section>
  )
}