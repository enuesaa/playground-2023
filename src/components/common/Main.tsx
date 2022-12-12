import { ReactNode } from 'react'
import styles from './Main.module.css'
import { captureToBase64 } from '@/lib/capture/main'
import { useRef } from 'react'

type Props = {
  children: ReactNode
}
export function Main({ children }: Props) {
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
      <section className={styles.main} ref={captureTarget}>
        {children}
      </section>
      <button onClick={capture}>capture</button>
      <img ref={imgPlaceTarget} />
    </>
  )
}
