import { css } from '@emotion/react'
import { useState } from 'react'
import { ResourcePane } from '@/components/stylingout/ResourcePane'

export type StructStyle = {
  border: string;
  color: string;
}
export const StructCanvas = () => {
  const [mainStructStyle, setMainStructStyle] = useState<StructStyle>({
    border: 'solid 1px #000',
    color: '#fafafa',
  })
  const updateMainStructStyle = (style: Partial<StructStyle>) => {
    setMainStructStyle({
      border: 'solid 1px #000',
      color: '#fafafa',
      ...style
    })
  }

  const styles = {
    main: css(mainStructStyle)
  }

  return (
    <section>
      <div css={styles.main}>main</div>
      <ResourcePane updateMainStructStyle={updateMainStructStyle} />
    </section>
  )
}