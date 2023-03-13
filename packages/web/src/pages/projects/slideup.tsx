import { Title } from '@/components/common/Title'
import { Capture } from '@/components/slideup/Capture'
import { Drop } from '@/components/slideup/Drop'

export default function TopPage() {
  return (
    <>
      <Title name='slideup' />
      <Capture>
        <ul>
          <li>slide生成</li>
        </ul>
      </Capture>
      <Drop />
    </>
  )
}
