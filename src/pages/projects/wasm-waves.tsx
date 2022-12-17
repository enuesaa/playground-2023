import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Card } from '@/components/common/Card'
import { Drop } from '@/components/slideup/Drop'

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        <Card name='wasm-waves' />
        <ul>
          <li>wasm-waves</li>
        </ul>
        <Drop />
      </Main>
    </>
  )
}
