import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'

export default function TopPage() {
  /**
   * {
   *   "components": [
   *      { "body": "a", "relation": "neighbor" }
   *   ]
   * }
   */

  return (
    <>
      <Header />
      <Main>
        <Title name='cabinet' />
      </Main>
    </>
  )
}
