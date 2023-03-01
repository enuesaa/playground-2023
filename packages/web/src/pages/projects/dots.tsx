import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'
import { Canvas } from '@/components/dots/Canvas'
import { AnimatedCanvas } from '@/components/dots/AnimatedCanvas'
import { WaveCanvas } from '@/components/dots/WaveCanvas'

export default function TopPage() {

  return (
    <>
      <Header />
      <Main>
        <Title name='dots' />
        <Canvas />
        <AnimatedCanvas />
        <WaveCanvas />
      </Main>
    </>
  )
}