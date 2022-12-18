import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'
import { StructCanvas } from '@/components/stylingout/StructCanvas'
import { ResourcePane } from '@/components/stylingout/ResourcePane'

export default function StylingoutPage() {
  return (
    <>
      <Header />
      <Main>
        <Title name='stylingout' />
        <StructCanvas />
        <ResourcePane />
      </Main>
    </>
  )
}
