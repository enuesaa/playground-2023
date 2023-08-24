import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import Button from '@cloudscape-design/components/button'
import Link from "@cloudscape-design/components/link";

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        <Button variant='primary'>button</Button>
        <Link href="/cards">Secondary link</Link>;
      </Main>
    </>
  )
}