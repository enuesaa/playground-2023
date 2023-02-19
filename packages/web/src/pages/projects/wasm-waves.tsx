import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'

export default function TopPage() {
  /**
   * イメージは rive.
   * cursor の動きに合わせてデザインが変わったり svg のアニメーションが効いたりする
   */
  return (
    <>
      <Header />
      <Main>
        <Title name='wasm-waves' />
      </Main>
    </>
  )
}
