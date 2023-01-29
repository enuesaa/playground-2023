import { usePacked } from '@/lib/packedcss/usePacked'

export const Card = () => {
  const packed = usePacked()

  /**
   * const customCard = packed.card.with({
   *   borderRadius: '5px',
   * })
   *
   * or
   *
   * const customCard = packed.card * 2 // meaning like width * 2
   */

  // return class id
  const customCard = packed.card()

  return <div className={customCard}>card</div>
}
