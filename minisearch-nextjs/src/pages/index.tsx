import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import dynamic from 'next/dynamic'

const Search = dynamic(() => import('../components/common/Search').then(p => p.Search), {ssr: false})

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        a
        <Search />
      </Main>
    </>
  )
}
