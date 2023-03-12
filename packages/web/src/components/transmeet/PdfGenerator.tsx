import { useAtomValue } from 'jotai'
import { transmeetAtom } from '@/lib/transmeet'
import { css } from '@emotion/react'

export const PdfGenerator = () => {
  const transmeet = useAtomValue(transmeetAtom)
  if (transmeet === null) {
    return (<></>)
  }
  const res = transmeet.generate_pdf()
  const styles = {
    section: css({ color: '#fafafa' })
  }

  return (
    <section css={styles.section}>
      {res}
    </section>
  )
}