import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'
import { Canvas } from '@/components/gridcanvas/Canvas'

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        <Title name='glidcanvas' />
        <Canvas />
      </Main>
    </>
  )
}
