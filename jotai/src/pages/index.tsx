import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Input } from '@/components/example/Input'
import { Display } from '@/components/example/Dispplay'

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        <Input />
        <Display />
      </Main>
    </>
  )
}