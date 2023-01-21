import { useAtom } from 'jotai'
import { phraseUppercaseAtom } from '@/jotai/phraseAtom'
import { css } from '@emotion/react'

export const Display = () => {
  const [uppercase] = useAtom(phraseUppercaseAtom)

  const styles = {
    upper: css({
      color: '#fafafa',
    }),
  }

  return (
    <div css={styles.upper}>
      Uppercase: {uppercase}
    </div>
  )
}