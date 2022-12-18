import { ReactNode } from 'react'
import { useRef } from 'react'
import { css } from '@emotion/react'
import html2canvas from 'html2canvas'

const captureToBase64 = async (target: HTMLElement): Promise<string> => {
  const canvas = await html2canvas(target)
  return canvas.toDataURL('img/png')
}

type Props = {
  children: ReactNode
}
export const Capture = ({ children }: Props) => {
  const styles = {
    main: css({
      width: '90%',
      margin: '0 auto',
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
