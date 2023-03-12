import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Query } from '@/components/transmeet/Query'

export default function TransmeetPage() {
  return (
    <>
      <Header />
      <Main>
        <Query />
      </Main>
    </>
  )
}
