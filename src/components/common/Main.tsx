import { ReactNode } from 'react'
import styles from './Main.module.scss'

type Props = {
  children: ReactNode
}
export default function Main({ children }: Props) {
  return (
    <>
      <section className={styles.main}>
        {children}
      </section>
    </>
  )
}