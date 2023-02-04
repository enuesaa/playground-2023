import { ReactNode } from 'react'
import { Container } from 'theme-ui'

type Props = {
  children: ReactNode
}
export function Main({ children }: Props) {
  return <Container>{children}</Container>
}