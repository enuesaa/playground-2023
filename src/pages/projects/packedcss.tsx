import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'

export default function TopPage() {
  /**
   * const css = packedcss.card.with({
   *   borderRadius: '5px',
   * })
   */

  return (
    <>
      <Header />
      <Main>
        <Title name='packedcss' />
      </Main>
    </>
  )
}
