import { Title } from '@/components/common/Title'
import { Canvas } from '@/components/dots/Canvas'
import { AnimatedCanvas } from '@/components/dots/AnimatedCanvas'
import { WaveCanvas } from '@/components/dots/WaveCanvas'

export default function TopPage() {

  return (
    <>
      <Title name='dots' />
      <Canvas />
      <AnimatedCanvas />
      <WaveCanvas />
    </>
  )
}