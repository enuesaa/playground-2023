import { ReactNode } from 'react'
import styles from './Main.module.scss'
import html2canvas from 'html2canvas'
import {useRef} from 'react'

type Props = {
  children: ReactNode
}
export default function Main({ children }: Props) {
  const captureTarget = useRef<HTMLElement>(null)
  const imgPlaceTarget = useRef<HTMLImageElement>(null)

  const capture = async () => {
    if (captureTarget.current === null) {
      return
    }
    const canvas = await html2canvas(captureTarget.current)
    const imgBase64 = canvas.toDataURL('img/png')
    if (imgPlaceTarget.current === null) {
      return
    }
    imgPlaceTarget.current.src = imgBase64
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