import { def } from './def'

export const packed = (surf: string, size: string, decorate: string) => {
  return {
    margin: '0',
    padding: '0',
    width: 'auto',
    height: 'auto',
    // @ts-ignore
    ...def.surf[surf] ?? {}, ...def.size[size], ...def.decorate[decorate]
  }
}
