import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Card } from '@/components/common/Card'
import { Drop } from '@/components/slideup/Drop'

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        <Card name='packedcss' />
        <ul>
          <li>packedcss</li>
        </ul>
        <Drop />
      </Main>
    </>
  )
}
