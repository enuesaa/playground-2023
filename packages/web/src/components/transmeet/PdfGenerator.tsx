import { useAtomValue } from 'jotai'
import { transmeetAtom } from '@/lib/transmeet'
import { css } from '@emotion/react'
import { MouseEventHandler } from 'react'

export const PdfGenerator = () => {
  const transmeet = useAtomValue(transmeetAtom)
  if (transmeet === null) {
    return (<></>)
  }
  const pdfString: string = transmeet.generate_pdf()
  const pdfBlob = new Blob([pdfString])
  const styles = {
    section: css({ color: '#fafafa' })
  }

  return (
    <section css={styles.section}>
      <a href={window.URL.createObjectURL(pdfBlob)} download='aa.pdf'>download</a>
    </section>
  )
}