import { Header } from '@/components/common/Header'
import { Main } from '@/components/common/Main'
import { LinkCard } from '@/components/common/LinkCard'

import { promises as fs } from 'node:fs'
import path from 'node:path'

type Props = {
  projectNames: string[]
}
export default function TopPage({ projectNames }: Props) {
  return (
    <>
      <Header />
      <Main>
        {projectNames.map((p) => (
          <LinkCard href={`/projects/${p}`} name={p} />
        ))}
      </Main>
    </>
  )
}

export const getStaticProps = async () => {
  const dir = path.join(process.cwd(), 'src/pages/projects')
  const filenames = await fs.readdir(dir)
  const projectNames = filenames.map((n) => n.replace('.tsx', ''))

  return {
    props: {
      projectNames,
    },
  }
}
