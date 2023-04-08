export const Space = ({ height, width, inlineBlock }: { height: string; width: string, inlineBlock: boolean }) => {
  return (<div style={{ height, width, display: inlineBlock ? 'inline-block' : 'block' }} />)
}
