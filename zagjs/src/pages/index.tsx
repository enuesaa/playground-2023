import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Toggle } from '@/components/chutorial/Toggle'
import { Toggle2 } from '@/components/chutorial/Toggle2'

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        <Toggle />
        <Toggle2 />
      </Main>
    </>
  )
}
