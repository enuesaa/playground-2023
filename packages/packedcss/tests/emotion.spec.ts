import { packed } from '../src/index'

describe('packed', () => {
  it('packed', () => {
    expect(packed().width('100%').darken().radii().style).toStrictEqual({
      width: '100%',
      background: '#1a1a1a',
      color: '#fafafa',
      borderRadius: '10px',
    })
  })
})
