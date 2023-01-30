import Link from 'next/link'

export function Header() {

  return (
    <>
      <header>
        <Link href={{ pathname: `/` }}>
          <div>my-nextjs-template</div>
        </Link>
      </header>
    </>
  )
}