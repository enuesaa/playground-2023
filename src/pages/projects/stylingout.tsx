import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'
import { Stylingout } from '@/components/stylingout/Stylingout'

export default function StylingoutPage() {
  return (
    <>
      <Header />
      <Main>
        <Title name='stylingout' />
        <Stylingout />
      </Main>
    </>
  )
}
