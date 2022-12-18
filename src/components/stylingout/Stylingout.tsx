import { css } from '@emotion/react'
import { useState } from 'react'
import { ResourcePane } from '@/components/stylingout/ResourcePane'

export type StructStyle = {
  border: string;
  color: string;
  fontSize: string;
  background: string;
  textAlign: string;
  display: string;
  position: string | null;
  left: string | null;
}
export const Stylingout = () => {
  const [mainStructStyle, setMainStructStyle] = useState<StructStyle>({
    border: 'solid 1px #000',
    color: '#111111',
    fontSize: '16px',
    background: '#fafafa',
    textAlign: 'left',
    display: 'block',
    position: null,
    left: null,
  })
  const updateMainStructStyle = (style: Partial<StructStyle>) => {
    setMainStructStyle({ ...mainStructStyle, ...style })
  }

  const styles = {
    canvas: css({
      display: 'flex',
    }),
    structCanvas: css({
      flex: '3 0 auto',
    }),
    // @ts-ignore should subset of emotion type.
    mainStruct: css(mainStructStyle),
    styleMonitor: css({
      width: '100%',
      padding: '10px',
      margin: '10px',
      background: 'rgba(0,0,0,0)',
      color: '#fafafa',
      minHeight: '100px',
      outline: 'none',
      border: 'none',
    }),
  }

  return (
    <section>
      <section css={styles.canvas}>
        <section css={styles.structCanvas}>
          <div css={styles.mainStruct}>main</div>
        </section>
        <ResourcePane mainStructStyle={mainStructStyle} updateMainStructStyle={updateMainStructStyle} />
      </section>
      <textarea css={styles.styleMonitor} value={JSON.stringify(mainStructStyle)} />
    </section>
  )
}