import Link from 'next/link'

export function Header() {
  return (
    <>
      <header>
        <Link href={{ pathname: `/` }}>
          <h1>my-nextjs-template</h1>
        </Link>
      </header>
    </>
  )
}