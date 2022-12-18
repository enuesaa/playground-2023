import { MouseEventHandler } from 'react'
import { StructStyle } from '@/components/stylingout/StructCanvas'

type Props = {
  updateMainStructStyle: (style: Partial<StructStyle>) => void
}
export const ResourcePane = ({ updateMainStructStyle }: Props) => {
  const handleChangeBorder: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    updateMainStructStyle({ border: 'solid 5px #fafafa' })
  }

  return (
    <section>
      <button onClick={handleChangeBorder}>change</button>
    </section>
  )
}