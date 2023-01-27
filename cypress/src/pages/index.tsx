import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import Link from 'next/link'
import { css } from '@emotion/react'

export default function TopPage() {
  const styles = {
    link: {
      color: '#fafafa',
    }
  }

  return (
    <>
      <Header />
      <Main>
        <div>
          <Link href={'/about'} css={styles.link}>correct about page link</Link>
        </div>
        <div>
          <Link href={'/aabout'} css={styles.link}>invalid about page link</Link>
        </div>
      </Main>
    </>
  )
}