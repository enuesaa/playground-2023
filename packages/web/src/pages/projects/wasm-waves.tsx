import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        <Title name='wasm-waves' />
      </Main>
    </>
  )
}
