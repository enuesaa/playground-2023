import Header from '@/components/common/Header'
import Main from '@/components/common/Main'
import Card from '@/components/common/Card'
import Drop from '@/components/importer/Drop'

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        <Card name="あ" />
        <ul>
          <li>slide生成</li>
          <li>slidecapture</li>
        </ul>
        <Drop />
      </Main>
    </>
  )
}
