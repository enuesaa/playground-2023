import { def } from './def'

type PackedAttrs = {
  surf: null | string;
  size: null | string;
  decorate: null | string;
}
export const packed = ({ surf, size, decorate }: PackedAttrs) => {
  return {
    margin: '0',
    padding: '0',
    width: 'auto',
    height: 'auto',
    // @ts-ignore
    ...def.surf[surf] ?? {}, ...def.size[size], ...def.decorate[decorate]
  }
}
