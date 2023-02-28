import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'
import { Canvas } from '@/components/dots/Canvas'
import { AnimatedCanvas } from '@/components/dots/AnimatedCanvas'

export default function TopPage() {

  return (
    <>
      <Header />
      <Main>
        <Title name='dots' />
        <Canvas />
        <AnimatedCanvas />
      </Main>
    </>
  )
}