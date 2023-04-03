export const InlineBlock = ({ c, children }: { c: any, children: ReactNode }) => {
  return (<div css={c} style={{ display: 'inline-block' }}>{children}</div>)
}