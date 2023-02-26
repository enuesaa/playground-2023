import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'

export default function TopPage() {

  return (
    <>
      <Header />
      <Main>
        <Title name='dots' />
        <svg width='200' height='200'>
          <line x1='0' y1='0' x2='200' y2='200' stroke='#ff6633' />
          <circle cx='100' cy='100' r='1' fill='#ff6633' />
        </svg>
      </Main>
    </>
  )
}