type Props = {
  height: string;
  width: string;
  inlineBlock: boolean;
}
export const Space = ({ height, width, inlineBlock }: Props) => {
  return (<div style={{ height, width, display: inlineBlock ? 'inline-block' : 'block' }} />)
}
