import { useStyles } from '@/styles/use'
import Link from 'next/link'

type SidebarItemProps = {
  name: string
  href: string
}
const SidebarItem = ({ name, href }: SidebarItemProps) => {
  const styles = useStyles((theme) => ({
    link: theme({ surf: 'sub', size: 'x2', around: 'x3', decorate: 'rounded', hover: 'shadow' }).css({
      display: 'inline-block',
      width: '70%',
      textAlign: 'center',
    }),
  }))

  return (
    <Link href={href} css={styles.link}>
      {name}
    </Link>
  )
}

export const Sidebar = () => {
  const styles = useStyles((theme) => ({
    main: theme({ around: 'x2tb' }),
  }))

  return (
    <section css={styles.main}>
      <SidebarItem name='replace' href='/fns/replace' />
      <SidebarItem name='count' href='/fns/count' />
      <SidebarItem name='json2yaml' href='/fns/json2yaml' />
      <SidebarItem name='jsonformat' href='/fns/jsonformat' />
      <SidebarItem name='wasm-validator' href='/fns/wasm-validator' />
      <SidebarItem name='base64decode' href='/fns/base64decode' />
    </section>
  )
}
