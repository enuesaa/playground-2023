import { ReactNode } from 'react'
import styles from './Main.module.scss'
import html2canvas from 'html2canvas'
import {useRef} from 'react'

type Props = {
  children: ReactNode
}
export default function Main({ children }: Props) {
  const captureTarget = useRef<HTMLElement>(null)

  const capture = () => {
    const target = captureTarget.current
    if (target === null) {
      return
    }
    html2canvas(target).then((canvas) => {
      const uri = canvas.toDataURL('img/png')
      const downloadLink = document.createElement('a')

      if (typeof downloadLink.download === 'string') {
        downloadLink.href = uri;
        downloadLink.download = 'sample.png'
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      } else {
        window.open(uri);
      }
    })
  }

  return (
    <>
      <section className={styles.main} ref={captureTarget}>
        {children}
      </section>
      <button onClick={capture}>capture</button>
    </>
  )
}