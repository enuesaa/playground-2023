import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Query } from '@/components/transmeet/Query'
import { PdfGenerator } from '@/components/transmeet/PdfGenerator'

export default function TransmeetPage() {
  return (
    <>
      <Header />
      <Main>
        <Query />
        <PdfGenerator />
      </Main>
    </>
  )
}
