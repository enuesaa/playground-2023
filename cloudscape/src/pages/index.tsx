import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import Button from '@cloudscape-design/components/button'

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        <Button variant='primary'>button</Button>
      </Main>
    </>
  )
}