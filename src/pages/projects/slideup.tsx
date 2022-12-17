import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'
import { Capture } from '@/components/slideup/Capture'
import { Drop } from '@/components/slideup/Drop'

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        <Title name='slideup' />
        <Capture>
          <ul>
            <li>slide生成</li>
          </ul>
        </Capture>
        <Drop />
      </Main>
    </>
  )
}
