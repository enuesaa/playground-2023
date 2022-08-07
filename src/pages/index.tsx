import Header from '@/components/common/Header'
import Main from '@/components/common/Main'
import Card from '@/components/common/Card'

export default function TopPage() {
  return (
    <>
      <Header />
      <Main>
        <Card name="あ" />
        <ul style={{listStyleType: 'decimal'}}>
          <li>ファイルを開く</li>
          <li>slide生成</li>
          <li>slidecapture</li>
        </ul>
      </Main>
    </>
  )
}
