import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import Link from 'next/link'

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        <ul>
          <li>
            <Link href={'/slideup'}>slideup</Link>
          </li>
          <li>
            <Link href={'/stylingout'}>stylingout</Link>
          </li>
        </ul>
      </Main>
    </>
  )
}
