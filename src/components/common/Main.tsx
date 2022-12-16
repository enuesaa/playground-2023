import { ReactNode } from 'react'
import { captureToBase64 } from '@/lib/capture/main'
import { useRef } from 'react'
import { css } from '@emotion/react'

type Props = {
  children: ReactNode
}
export function Main({ children }: Props) {
  const styles = {
    main: css({
      width: '90%',
      margin: '0 auto',
      background: '#111111',
      height: '100vh',
      padding: '10px 0',
    }),
  }

  const captureTarget = useRef<HTMLElement>(null)
  const imgPlaceTarget = useRef<HTMLImageElement>(null)

  const capture = async () => {
    if (captureTarget.current === null || imgPlaceTarget.current === null) {
      return
    }
    imgPlaceTarget.current.src = await captureToBase64(captureTarget.current)
  }

  return (
    <>
      <section css={styles.main} ref={captureTarget}>
        {children}
      </section>
      <button onClick={capture}>capture</button>
      <img ref={imgPlaceTarget} />
    </>
  )
}
