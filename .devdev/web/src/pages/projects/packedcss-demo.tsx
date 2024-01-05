import { css } from '@emotion/react'
import { packed } from 'packedcss'

export default function PackedcssDemoPage() {
  const styles = {
    section: css(packed().width('100%').darken().radii().style, {}),
  }

  return (
    <>
      <section css={styles.section}>aa</section>
    </>
  )
}
