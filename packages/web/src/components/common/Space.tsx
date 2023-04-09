type Props = {
  height: string;
  width: string;
}
export const Space = ({ height, width }: Props) => {
  return (<div style={{ height, width, display: 'block' }} />)
}

export const InlinedSpace = ({ height, width }: Props) => {
  return (<div style={{ height, width, display: 'inline-block' }} />)
}
