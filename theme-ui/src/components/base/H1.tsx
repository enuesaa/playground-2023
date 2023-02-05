import { ReactNode } from 'react'
import { Heading, css } from 'theme-ui'

type Props = {
  children: ReactNode,
}
export const H1 = ({ children }: Props) => {
  const style = css({
    px: 'x2', 
    py: 'x1',
    userSelect: 'none',
    display: 'block',
  })

  return (
    <Heading as='h1' css={style}>
      {children}
    </Heading>
  )
}