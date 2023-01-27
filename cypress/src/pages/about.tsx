import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { css } from '@emotion/react'

export default function AboutPage() {
  const styles = {
    h2: {
      color: '#fafafa',
    }
  }

  return (
    <>
      <Header />
      <Main>
        <h2 css={styles.h2}>about</h2>
      </Main>
    </>
  )
}