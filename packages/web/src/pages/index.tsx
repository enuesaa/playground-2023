import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Query } from '@/components/fncore/Query'

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        <Query />
      </Main>
    </>
  )
}
