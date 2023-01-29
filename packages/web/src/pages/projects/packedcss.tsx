import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'
import { Card } from '@/components/packedcss/Card'
import { PackedContext } from '@/lib/packedcss/PackedContext'
import { packedbase } from '@/styles/packedbase'

export default function Packedcss() {
  return (
    <>
      <Header />
      <Main>
        <Title name='packedcss' />
        <PackedContext packedbase={packedbase}>
          <Card />
        </PackedContext>
      </Main>
    </>
  )
}
