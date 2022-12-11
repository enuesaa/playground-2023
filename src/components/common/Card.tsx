import styles from './Card.module.css'

type Props = {
  name: string
}
export function Card({ name }: Props) {
  return (
    <>
      <div className={styles.main}>{name}</div>
    </>
  )
}
