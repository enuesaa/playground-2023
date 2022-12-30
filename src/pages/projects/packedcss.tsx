import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'
import { Card } from '@/components/packedcss/Card'

export default function Packedcss() {
  return (
    <>
      <Header />
      <Main>
        <Title name='packedcss' />
        <Card />
      </Main>
    </>
  )
}
