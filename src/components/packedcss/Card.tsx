/** @jsxImportSource  @/lib/packedcss */
import { usePacked } from '@/lib/packedcss/usePacked'

export const Card = () => {
  const packed = usePacked()

  // const customCard = packed.card.with({
  //   borderRadius: '5px',
  // })
  const customCard = packed.card
  
  return (
    <div css={customCard}>
      card
    </div>
  )
}