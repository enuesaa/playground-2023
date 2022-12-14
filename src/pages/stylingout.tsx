import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Card } from '@/components/common/Card'
import { Drop } from '@/components/importer/Drop'

export default function StylingoutPage() {
  return (
    <>
      <Header />
      <Main>
        <Card name='stylingout' />
        <ul>
          <li>stylingout</li>
        </ul>
        <Drop />
      </Main>
    </>
  )
}
