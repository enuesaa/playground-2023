import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export function Main({ children }: Props) {

  return <section className='bg-slate-800 text-amber-600 min-h-screen'>{children}</section>
}