import { ReactNode } from 'react'

type Props = {
  c: any
  children: ReactNode
}
export const InlineBlock = ({ c, children }: Props) => {
  return (
    <div css={c} style={{ display: 'inline-block' }}>
      {children}
    </div>
  )
}
