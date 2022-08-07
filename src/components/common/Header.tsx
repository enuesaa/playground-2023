import Link from 'next/link'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <>
      <header className={styles.top}>
        <Link href={{ pathname: `/` }}>
          <a>
            <div className={styles.title}>myslide</div>
          </a>
        </Link>
      </header>
    </>
  )
}