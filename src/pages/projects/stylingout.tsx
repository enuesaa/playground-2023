import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { Title } from '@/components/common/Title'

export default function StylingoutPage() {
  /**
   * main: like canvas... 
   * right sidebar: list of html tags like section, div or h1
   */

  return (
    <>
      <Header />
      <Main>
        <Title name='stylingout' />
      </Main>
    </>
  )
}
