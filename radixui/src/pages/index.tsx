import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { PopoverDemo } from '@/components/demo/PopoverDemo'

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        <PopoverDemo />
      </Main>
    </>
  )
}